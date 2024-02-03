import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Registration = () => (
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
        <Grid.Column className="width-80">
            <Header as='h2' color='teal' textAlign='center'>Registration</Header>
            <span>Let’s get started with a few simple steps</span>
            <Form size='large'>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
                <Form.Input fluid icon='mail' iconPosition='left' placeholder='Enter Email' />

                <Button fluid size='large' className="green-button"><Link to='/welcome/setPassword'>Continue</Link></Button>
            </Form>
            <Message>
                Already have an account? <Link to='/welcome/login'>Log in</Link>
            </Message>
        </Grid.Column>
    </Grid>
)

export default Registration;
