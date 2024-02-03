import './Welcome.scss';
import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Topbar from './../Topbar/Topbar';

const WelcomePage = ({ children }) => {
    return (
        <>
            <Topbar></Topbar>
            <Grid stackable columns={2}>
                <Grid.Column>
                    <Segment className="welcome-card">
                        <h1>Welcome to Certüs</h1>
                        <p>
                            Certus is safe and secure one stop identity verification
                            system that eases the process of doing business and has
                            been designed for companies obligated by Law to carry out
                            customer due diligence in accordance with the financial
                            Intelligence (Amendment) Act of 2018, protecting
                            companies and customers against fraud and combating
                                money laundering activities.</p>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    {children}
                </Grid.Column>
            </Grid>
        </>
    )
}

export default WelcomePage;
