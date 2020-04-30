import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
      <>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Moods</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Friends</Nav.Link>
              <Nav.Link href="#features">Profile</Nav.Link>
            </Nav>
            <Form inline className={"nav-form"}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>

          <div className={"title"}>
            <h1>Moods</h1>
              <p>Hello Mood-World!</p>
          </div>

          <div className={"post"}>
              <form>
                  <input/>
                  <button>Post</button>
              </form>
          </div>

          <div className={"timeline"}>
              <div className={"timeline-text"}>
                  <p>@Andi</p>
                  <p>Mood description </p>
              </div>
          </div>
      </>

  );
}

export default App;
