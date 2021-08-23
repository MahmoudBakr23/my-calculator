import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import Header from './Components/Header';

const App = () => (
  <BrowserRouter>
    <Switch>
      <main className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/Quote" component={Quote} />
      </main>
    </Switch>
  </BrowserRouter>
);

export default App;
