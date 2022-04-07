 
import './App.css';
import Main from './pages/Main';
import { Provider, useDispatch } from "react-redux";
import store from './redux/store/store';
function App() {
  return (
    <Provider store={store}>
       
        <Main />
     
    </Provider>
  );
}

export default App;
