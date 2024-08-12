
import { Container, Navbar } from "react-bootstrap"

import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import "./Header.css"
const Header =  () =>{
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
<Navbar.Brand to="/"><strong>EMPLOYEE MANAGEMENT SYSTEM</strong></Navbar.Brand>
<Nav className="ml-auto"></Nav>
<Nav.Link as={Link} to="/" className="New-Link">Employees</Nav.Link>
<Nav.Link as={Link} to="/employee" className="New-Link">Post Employees</Nav.Link>
            </Container>
        </Navbar>
        

    )

}
export default Header;