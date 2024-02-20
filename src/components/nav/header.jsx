import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Brand from "../../assets/brand.png"
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"
function Header() {
  return (
    <React.Fragment>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Brand}alt="not found" style={{width: "55px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link href="/contact">ارتباط با ما</Nav.Link>
            <Nav.Link href="/register">
              <FontAwesomeIcon icon={faUser}/>
            </Nav.Link>
            <NavDropdown title="سایر" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">مقالات</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                پروفایل
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">
                پشتیبانی
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جستجو کنید.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">جستجو</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </React.Fragment>
  );
}

export default Header;