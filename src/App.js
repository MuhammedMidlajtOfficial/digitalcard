import './App.css';
import Router from './Router';
import { LoadingProvider } from './application/Services/loadingService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <LoadingProvider>
          <Router />
          <ToastContainer />
       </LoadingProvider>
    </div>
  );
}

export default App;
