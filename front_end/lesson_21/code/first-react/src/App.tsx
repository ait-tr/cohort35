import { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import FoxCard from './components/foxCard/FoxCard';
import CityToggle from './components/cityToggle/CityToggle';
import Sandwich from './components/sandwich/Sandwich';
import Error from './components/error/Error';

const App: FC = () => {

  return (
    // оборачиваем все в родительский <Routes>
    <Routes>
      {/* во вложенный родительский <Route> мы передаем элемент, в который будет подгружаться вложенные <Route> */}
      <Route path='/' element={<Layout />}>
        {/* index - это route по умолчанию для родителя */}
        <Route index element={<FoxCard />} />
        {/* через значение path передаем путь */}
        <Route path='cityToggle' element={<CityToggle />} />
        <Route path='sandwich' element={<Sandwich />} />
        {/* путь для ошибки вы указываете как '*' */}
        {/* то есть это путь для всех непрописанных рутов */}
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

// последним этапом мы экспортируем компонент
export default App;
