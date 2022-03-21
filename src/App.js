import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from './pages/pages';
import { Store } from './store/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
    <Pages/>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
