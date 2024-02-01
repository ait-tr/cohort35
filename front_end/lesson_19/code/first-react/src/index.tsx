import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import CityToggle from './components/cityToggle/CityToggle';
import Sandwich from './components/sandwich/Sandwich';
import Counter from './components/counter/Counter';
// import App from './components/App';
// import CityPage from './components/CityPage/CityPage';
// import Counter from './components/Counter/Counter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <>
    <Sandwich />
    <Counter />
    <CityToggle />
    {/* <App /> */}
    {/* не забывайте закрывать теги компонентов */}
    {/* <CityPage /> */}
    {/* <Counter /> */}
  </>

);



