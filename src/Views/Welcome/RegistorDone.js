import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react'

const RegistorDone = () => (
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
        <Grid.Column className="width-80">
            <Header as='h2' color='teal' textAlign='center'>Thanks for Registration.</Header>
            <Header as='h3' color='gray' textAlign='center'>A 6 digit pin is sent to your registered Email.</Header>
            <Button className="green-button" fluid size='large'> Enter Pin </Button>
        </Grid.Column>
    </Grid>
)

export default RegistorDone;