import React, { Component } from 'react';
import GitHub from './GitHub';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHubUser from './GitHubUser';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
export default App;

// Our header component contains BrowserRouter, Switch and Route imported from the ‘react-router-dom’
// library which provide the essential routing functionalities.


class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/github">GitHub</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* The Switch component only displays the first route that matches */}
                    <Switch>
                    {/* /:login/:id represents the login route parameter and the id route parameter */}
                        <Route path="/github/user/:login/:id" component={GitHubUser} />
                        <Route path="/github" component={GitHub} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route path="/*" component={NotFound} />

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
class NotFound extends Component {
    render() {
        return <div>Not Found</div>
    }
}

class About extends Component {
    render() {
        return (
            <div>
                About
            </div>
        )
    }
}