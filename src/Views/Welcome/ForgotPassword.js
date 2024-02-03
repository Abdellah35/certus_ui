import React from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react'

const ForgotPassword = () => (
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
        <Grid.Column className="width-80">
            <Header as='h2' color='teal' textAlign='center'>Forgot Password</Header>
            <Form size='large'>
                <Form.Input fluid icon='mail' iconPosition='left' placeholder='Registered Email Id' />

                <Button className="navy-blue-button" fluid size='large'>Continue</Button>
            </Form>
        </Grid.Column>
    </Grid>
)

export default ForgotPassword;