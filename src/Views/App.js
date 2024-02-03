import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
        <Container fluid>
        <Routers />
      </Container>
    </BrowserRouter>
  );
}

export default App;