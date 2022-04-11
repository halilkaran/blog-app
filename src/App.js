 import AppRouter from "./router/Router";
import './App.css';
 
import { Provider } from "react-redux";
import store from './redux/store/store';

     
function App() {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
