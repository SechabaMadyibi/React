import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

class UserForm extends Component {
    title;
    id;

    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.title = 'New User';
        this.state = {
            username: '',
            email: '',
        };
        if (this.id) {
            this.title = 'Edit User';
        }
    }
    //  We retrieve id from props.match.params.id. In componentDidMount, we check if id is null, which means that
    // we arrive at UserForm without a parameter and want to perform adding a new user
    componentDidMount() {
        if (this.id) {
            // We retrieving our user object by providing id as argument to firebase.database().ref('/' + this.id). We subscribe
            // to it and when we retrieve the snapshot, we set component state for username and email to the snapshot values          

            firebase.database().ref('/' + this.id)
                .on('value', snapshot => {
                    this.setState({
                        username: snapshot.val().username,
                        email: snapshot.val().email,
                    });
                });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                {/* We then render our Formik form with initial values of username and email retrieved from the database.
We need to set enableReinitialize={true} so that the form reinitializes when initialValues prop changes                */}
                <Formik
                    enableReinitialize={true}

                    initialValues={{
                        username: this.state.username,
                        email: this.state.email
                    }}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        else if (values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }

                        if (!values.username) {
                            errors.username = 'Required';
                        }
                        else if (values.username.length < 3) {
                            errors.username = 'username too short';
                        }
                        return errors;
                    }}
//  we first check if there is an id, which means the form is in edit mode. If so, 
//  we call the update method of firebase.database().ref to update. Else, which
// means the form is in Add New User mode, we use the existing code which calls push() to add the new
//  user object to firebase

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // actual submit logic...
                            if (this.id) {
                                firebase.database().ref('/' + this.id).update({
                                    username: values.username,
                                    email: values.email
                                }).then(() => this.props.history.push("/"));
                            }
                            else {
                                firebase.database().ref('/').push({
                                    username: values.username,
                                    email: values.email
                                }).then(() => this.props.history.push("/"));
                            }

                            setSubmitting(false);
                        }, 400);
                    }}

                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="email" component="div" />
                            </span>
                            <Field type="text" name="username" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="username" component="div" />
                            </span>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default UserForm;