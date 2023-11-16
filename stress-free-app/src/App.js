import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './Components/Navigation'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
  <Navigation />
  <div className="main-content">
    <Container>
      <h1>Welcome to bri</h1>
      <Button variant='dark'>
        Get Started
      </Button>
    </Container>
  </div>
  </>
  );
}

export default App;