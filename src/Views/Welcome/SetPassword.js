import React from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react'

const SetPassword = () => (
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
        <Grid.Column className="width-80">
            <Header as='h2' color='teal' textAlign='center'>Set Password</Header>
            <Form size='large'>
                <Form.Input
                    fluid
                    placeholder='Create Password'
                    type='password'
                />
                <Form.Input
                    fluid
                    placeholder='Repeat Password'
                    type='password'
                />

                <Button className="green-button" floated='right'>Next</Button>
            </Form>
        </Grid.Column>
    </Grid>
)

export default SetPassword;