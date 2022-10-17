import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Header() {

    return (
        <>

            <Navbar bg="transperent" expand="lg">
                <Container fluid >
                    <Navbar.Brand href="/">
                        <img src="/assets/images/logo.png" className='ms-lg-2 mx-0 ' draggable={false} alt="" />
                    </Navbar.Brand>
                    <div className='d-lg-none align-items-center gap-2 d-flex'>
                        <span>
                            <img src="/assets/images/fb.svg" alt="" />
                        </span>
                        <span>
                            <img src="/assets/images/dis.svg" alt="" />
                        </span>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-lg-flex d-none">
                            <Nav.Link className='fw-500 text-light mx-lg-2 mx-auto' >Select Games</Nav.Link>
                            <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto bottom-line' >All</Nav.Link>
                            <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >NFL</Nav.Link>
                            <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >MMA</Nav.Link>
                            <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >MLB</Nav.Link>
                            <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >CFB</Nav.Link>
                        </Nav>
                        <Nav className="me-auto d-lg-flex d-none">
                            <NavDropdown className='mx-auto text-warning' title="Percentage" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-auto">
                            <div className="container text-lg-start text-center">
                                <button className='btn-global'>Connect Wallet</button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='px-3  my-4 container-fluid d-lg-none d-flex justify-content-between align-items-center'>
                <Nav.Link className='fw-500 text-light ' >Select Games</Nav.Link>
                <Nav.Link className='fw-500 text-light ' >Percentage <img src="/assets/images/down-arrow.svg" alt="" /> </Nav.Link>
                {/* <NavDropdown className=' text-warning' title="Percentage" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown> */}
            </div>
            <div className='container-fluid  d-lg-none d-flex justify-content-between mb-3 '>
                <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto bottom-line' >All</Nav.Link>
                <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >NFL</Nav.Link>
                <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >MMA</Nav.Link>
                <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >MLB</Nav.Link>
                <Nav.Link className='fw-400 text-light mx-lg-2 mx-auto' >CFB</Nav.Link>
            </div>
        </>
    )
}