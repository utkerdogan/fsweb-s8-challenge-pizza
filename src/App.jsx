import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from "./components/anasayfa";
import SiparisFormu from './components/siparisFormu';
import SiparisOnayi from './components/siparisOnayi';




const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/siparisFormu" component={SiparisFormu} />
        <Route path="/siparisOnayi" component={SiparisOnayi} />
      </Switch>
    </Router>
  );
};

export default App;
