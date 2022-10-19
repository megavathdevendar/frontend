import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7001/employee/allemployee").then((result) => {
      result.json().then((response) => {
        setData(response)
      })
    })
  }, []);

  const renderTable = () => {
    return data.map((employee) => {
      return (
        <tr>
          <td>{employee.employeeId}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
          <td>{employee.password}</td>
          <td><Button variant="danger" onClick={e => deleteemployee(employee.employeeId)}>Delete</Button></td><br /> <br />
        </tr>
      );
    });
    function deleteemployee(id) {
      console.log(id);
      const url = 'http://localhost:7001/employee/' + id;
      console.log(url);
      fetch(url, {
        method: 'DELETE'
      }).then(() => {
        alert('record removed successfully!');
      }).catch(err => {
        console.error(err)
      });
    }
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CHAMPIONS AT WORKS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/addemployee"}>ADDEMPLOYEE</Nav.Link>
            </Nav>
            <Form className="d-flex"></Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> <br></br>

            <Nav.Link as={Link} to={"/lodingpage"}>Logout</Nav.Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <div className="Container">
        <h2 className="text-center">List Of Employees</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>employeeId</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>Password</th>
              <th>   Action</th>
            </tr>
          </thead>

          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );

}
export default Home;