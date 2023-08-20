import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class GitHubUser extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
// In the handleClick method, we call the push method of this.props.history which takes in the name of the target
// route. When the user clicks on the button, the new route is pushed onto the history object. Pushing the
// route into history will cause the navigation to occur.
    handleClick(e) {
        this.props.history.push("/github");
    }
    render() {
        return (
            <div>
                <h1>User Login: {this.props.match.params.login}</h1>
                <h2>User Id: {this.props.match.params.id}</h2>`
  {/* In render, we have a Go to GitHub Users button and we do event binding to bind it to the handleClick()
method. */}
                <Button variant="primary" onClick={this.handleClick}>
                    Go to GitHub Users
                </Button>
            </div>
        );
    }
}
export default GitHubUser;