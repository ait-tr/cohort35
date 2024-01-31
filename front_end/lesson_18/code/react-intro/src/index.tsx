import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './components/App';
import CityPage from './components/CityPage/CityPage';
import Counter from './components/Counter/Counter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <>
    <App />
    {/* не забывайте закрывать теги компонентов */}
    <CityPage />
    <Counter />
  </>

);



