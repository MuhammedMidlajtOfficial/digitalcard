import { Provider } from 'react-redux';
import './App.css';
import Router from './Router';
import { LoadingProvider } from './application/Services/loadingService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './application/Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LoadingProvider>
            <Router />
            <ToastContainer />
        </LoadingProvider>
      </Provider>
    </div>
  );
}

export default App;
