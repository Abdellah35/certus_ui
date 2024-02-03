import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import NotFound from "./NotFound";
import WelcomePage from "./Welcome/Welcome";
import { WelcomeIpvPage } from "./Welcome/WelocmeIpv";
import Registration from './Welcome/Registration';
import Login from './Welcome/Login';
import ForgotPassword from './Welcome/ForgotPassword';
import SetPassword from './Welcome/SetPassword';
import RegistorDone from './Welcome/RegistorDone';
import EnterPin from './Welcome/EnterPin';
import CertusPage from "./Certus/CertusPage";
import VerificationPage from "./Certus/VerificationPage";

const Routers = () => {
    return (
        <Switch>
            <Route path={"/certus"} render={({ match: { path } }) => (
                <CertusPage>
                    <Switch>
                        <Route path={`${path}/verfication`} component={VerificationPage} />
                    </Switch>
                </CertusPage>
            )} />
            <Route path={"/welcome"} render={({ match: { path } }) => (
                <WelcomePage>
                    <Switch>
                        <Route path={`${path}/registor`} component={Registration} />
                        <Route path={`${path}/login`} component={Login} />
                        <Route path={`${path}/forgotPassword`} component={ForgotPassword} />
                        <Route path={`${path}/setPassword`} component={SetPassword} />
                        <Route path={`${path}/done`} component={RegistorDone} />
                        <Route path={`${path}/pin`} component={EnterPin} />
                        <Redirect exact from={path + "/*"} to={path} />
                    </Switch>
                </WelcomePage>
            )}
            />
            <Route path="/welcome-ipv" component={WelcomeIpvPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from={"*"} to={"/not-found"} />
        </Switch>
    );
};

export default Routers;
