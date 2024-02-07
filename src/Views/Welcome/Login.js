import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { authenticationService } from '../../_services/authentication.service';


const Login = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        authenticationService.login(username, password)
            .then(
                user => {
                    console.log("success full");
                    // handle successful login here
                },
                error => {
                    // handle error here
                }
            );
    };
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
        <Grid.Column className="width-80">
            <Header as='h2' color='teal' textAlign='center'>Log in to your Account</Header>
            <Form size='medium' onSubmit={handleSubmit}>
    <Form.Input 
        fluid icon='user' 
        iconPosition='left' 
        placeholder='Email Id' 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
    />
    <Form.Input
        fluid
        icon='lock'
        iconPosition='left'
        placeholder='Password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
    />

    <Button className="green-button" fluid size='large' type='submit'>Continue</Button>
</Form>

            <Message border='unset'>
                Don’t remember your Password ? <Link to='/welcome/forgotPassword'>Forgot Password</Link>
            </Message>
        </Grid.Column>
    </Grid>
}

export default Login
