import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import background from 'C:/Users/devya/OneDrive/Documents/trainnig/ui/react-ui/employee-frontend/src/image1.jpg'

function Lodingpage() {
  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate("/register");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
    }}>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CHAMPIONS AT WORKS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <button class="btn btn-outline-danger me-2" onClick={navigateSignup}>Sign up</button>
                <button class="btn btn-outline-warning me-2" onClick={navigateLogin}>Login</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <centre>
            <h1> CHAMPIONS AT WORKS</h1>
          </centre>
        </div>

      </div>

    </div>

  );
}

export default Lodingpage