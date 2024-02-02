// импорты внутри компонента
// import './App.css';

// объявление функции
function App(): JSX.Element {
  // в теле функции мы пишем логику
  console.log('hello!');
  return (
    //и возвращаем верстку
    <div className="App">
      <h1 className="redHeading">Hello, React!</h1>

    </div>
  );
}

// последним этапом мы экспортируем компонент
export default App;
