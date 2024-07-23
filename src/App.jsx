// khai báo thư viện tư react

import './App.css';

import { Home } from './components/Home';
import { Provider } from 'react-redux';
import store from './store.js';

// state === trang thai
function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
