import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Login = () => (
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
        <Grid.Column className="width-80">
            <Header as='h2' color='teal' textAlign='center'>Log in to your Account</Header>
            <Form size='medium'>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Email Id' />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />

                <Button className="green-button" fluid size='large'>Continue</Button>
            </Form>
            <Message border='unset'>
                Don’t remember your Password ? <Link to='/welcome/forgotPassword'>Forgot Password</Link>
            </Message>
        </Grid.Column>
    </Grid>
)

export default Login
