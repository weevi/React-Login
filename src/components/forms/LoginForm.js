import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends React.Component {
state = {
    data: {},
    loading: false,
    error: {}
};
    render(){
        return (
            <Form><Button primary>Login</Button></Form>
        )
    }
}

export default LoginForm