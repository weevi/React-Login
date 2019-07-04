import React from 'react'
import { Form, Button, FormField } from 'semantic-ui-react'

class LoginForm extends React.Component {
state = {
    data: {},
    loading: false,
    error: {}
};
onChange = e => {
    this.setState({
        data: { ...this.state.data, [e.target.name]: [e.target.value]}
    })
}

    render(){
        return (
            <Form>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    value={this.onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Make it secure"
                    value={this.onChange}
                    />
                </Form.Field>
                <button class="ui button">Login</button>
                </Form>
        )
    }
}

export default LoginForm