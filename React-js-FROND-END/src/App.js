import './App.css';
import NavigationBar from './components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import AddUsers from './components/AddUsers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListUsers from './components/ListUsers';

function App() {
  const marginTop = {
    marginTop: "20px"
  };
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/add" exact component={AddUsers} />
              <Route path="/edit/:id" exact component={AddUsers} />
              <Route path="/list" exact component={ListUsers} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
