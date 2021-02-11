import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import { Login } from './components/login/Login';

const App = () => {
  return (
    <div className="App">
      <Login/>
    </div>
  );
};

export default App;
