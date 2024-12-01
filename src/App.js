import './App.css';
import Router from './Router';
import { LoadingProvider } from './application/Services/loadingService';

function App() {
  return (
    <div className="App">
       <LoadingProvider>
          <Router />
       </LoadingProvider>
    </div>
  );
}

export default App;
