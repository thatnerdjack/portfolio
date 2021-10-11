import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
