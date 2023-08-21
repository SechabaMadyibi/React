import React, { Component } from 'react';
//We import firebase and use it to access our database node in componentDidMount
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            //showDeleteDialog is used to decide when to show a delete dialog
            showDeleteDialog: false,
            selectedUser: {}

        };

        this.add = this.add.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.delete = this.delete.bind(this);

    }
    // In componentDidMount, we specify the location of a node in firebase as an argument to the
    // firebase.database().ref method to retrieve our list of users firebase.database() provides us with a Firebase
    // Database service interface and its ref method returns the location in the Database corresponding to the
    // provided path.

    //   We then listen for data changes at our specified location by providing a callback function to the on
    // method
    componentDidMount() {
        firebase.database().ref('/')
            .on('value', snapshot => {

                let returnArr = [];
                snapshot.forEach(data => {
                    var user = data.val();
                    user['key'] = data.key;
                    returnArr.push(user);
                });
                this.setState({
                    users: returnArr
                })
                console.log(snapshot.val())

            });
    }
    render() {
        const listUsers = this.state.users.map((user) =>
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.key}`}>
                        Edit
                    </Link>
                </td>

                <td>
                    <Button
                        onClick={this.openDeleteDialog.bind(this, user)}>Remove</Button>
                </td>
            </tr>
        );
        return (
            <div>
                {/* When we click this button, we route to a new page with a form to add a new user.  */}
                <Button variant="primary" onClick={this.add}>Add</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>
                {/* First, we set the show attribute of Modal to this.state.showDeleteDialog. The Modal will only show when
this.state.showDeleteDialog is true. */}
                <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* We customize the prompt message with {this.state.selectedUser.username} to show
the user name that we are about to delete.  */}
                        <p>Are you sure you want to delete 
                            {this.state.selectedUser.username}?</p>
                        <hr />
                    </Modal.Body>
                    <Modal.Footer>
                        {/* In Modal Footer, we bind delete() to the Delete button and closeDeleteDialog to the Close button. */}
                        <Button onClick={this.delete}>Delete</Button>

                        {/* closeDeleteDialog sets the state’s showDeleteDialog to false to hide the delete Modal and 
  also sets selectedUser to null.                       */}
                        <Button onClick={this.closeDeleteDialog}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    add(e) {
        this.props.history.push("/add");
    }

    openDeleteDialog(user) {
        this.setState({
            showDeleteDialog: true,
            selectedUser: user
        });
    }

    closeDeleteDialog() {
        this.setState({
            showDeleteDialog: false,
            selectedUser: {}
        });
    }

    // In the delete() method, we reference the specific user node location to delete in firebase database with
    // firebase.database().ref('/'+this.state.selectedUser.key). The location of the user node is contained in the key
    // property of the user we have clicked to delete

    delete(e) {
        // After getting the user object, we then call its remove() method which returns a promise. We provide a
        // callback which calls closeDeleteDialog() upon successful deletion.        

        firebase.database().ref('/' + this.state.selectedUser.key).remove()
            .then(x => {
                console.log("SUCCESS");
                this.closeDeleteDialog();
            })
            .catch(error => {
                alert("Could not delete the user.");
                console.log("ERROR", error)
            });
    }

}
export default User;