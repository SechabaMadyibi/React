import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Media, Form, Button } from 'react-bootstrap';

class GitHub extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            isLoading: true
        };
        
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
       this.getGitHubData('greg');
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,
                    //we assign it with data.items as this is the users item array structured in the json response.
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }
    render() {
        //We use map to repeat the media object for each user data we get from GitHub
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange} />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub Users Results</h3>

                {this.state.isLoading &&
                    //We use the <ReactLoading> tag and specify spinningBubbles as the type to render the spinning bubbles
                    //animation. You can try out other kinds of animations as specified in the react-loading documentation.
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });        
    }

}
export default GitHub;