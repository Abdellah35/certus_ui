import React from 'react';
import { Grid, Header, Form } from 'semantic-ui-react'

const EnterPin = () => {
    return (
        <Grid textAlign='center' className="height-100" verticalAlign='middle'>
            <Grid.Column className="width-80">
                <Header as='h2' color='teal' textAlign='center'>Enter 6 Digit Pin</Header>
                <Form size='large'>
                    <Form.Input />
                    <Form.Input />
                    <Form.Input />
                    <Form.Input />
                    <Form.Input />
                    <Form.Input />
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default EnterPin;