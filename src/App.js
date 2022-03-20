import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from './pages/pages';
import { Store } from './store/store';

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
