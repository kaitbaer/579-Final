import Navigation from "./Navigation";
import { Container } from "react-bootstrap";
import GetStartedButton from "./GetStartedButton";

const Home = () => {
    return (
    <>
  <Navigation />
  <div className="main-content">
    <Container>
      <h1>Welcome to BRĒ</h1>
      <GetStartedButton />
    </Container>
  </div>
  </>
  );
}
export default Home;