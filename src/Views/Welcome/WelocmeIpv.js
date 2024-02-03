import './Welcome.scss';
// import config from 'config';
import React, { Component } from 'react';
import { Divider, Grid, Header, Message, Button, Image, Container } from 'semantic-ui-react';
// import { handleResponse } from '@./../helpers';
import Topbar from './../Topbar/Topbar';

class WelcomeIpvPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    fileInputRef = React.createRef();

    fileChange = e => {
        this.setState({ file: e.target.files[0] }, () => {
            console.log("File chosen --->", this.state.file);
        });
        // const file = e.target.files[0];
        // const formData = new FormData();
        // formData.append("file", file);
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'multipart/form-data' },
        //     body: formData
        // };

        // fetch(`${config.apiUrl}/ipv/uploadImage`, requestOptions)
        //     .then(handleResponse)
        //     .then(response => {

        //         console.log(response);
        //     });
    };

    render() {
        return (
            <>
                <Topbar></Topbar>
                <Container textAlign='center' className="height-100" verticalalign='middle'>
                    <br></br>
                    <Header as='h2'> Welcome to Digital IPV ( In Person verification ) </Header>
                    <br></br>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                            <Header as='h2'> Your OTP is <span>1234</span></Header>
                            <br></br>
                            <Divider></Divider>
                            <br></br>
                            <Grid stackable columns={2}>
                                <Grid.Column>
                                    <Header as='h2'> Step 1 </Header>
                                    <p> Please write down OTP in piece of paper </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header as='h2'> Step 2 </Header>
                                    <p> Hold the piece of paper and take a photo such that the OTP and your face is clearly seen. (shown in right side Image) </p>
                                </Grid.Column>
                            </Grid>
                            <br></br>
                            <Button
                                content="Upload Image"
                                onClick={() => this.fileInputRef.current.click()}
                                fluid size='large' className="navy-blue-button"
                            />
                            <input
                                ref={this.fileInputRef}
                                type="file"
                                hidden
                                onChange={this.fileChange}
                            />
                            <br></br>
                            <Button fluid size='large' className="empty-button navy-blue-border">Skip this step for now</Button>
                            <Message><strong>Note:</strong> Accounts without verification can not upload and share documents. </Message>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Image className="sampleIpvImage"></Image>
                        </Grid.Column>
                    </Grid>
                </Container>
            </>
        )
    }
}

export { WelcomeIpvPage };