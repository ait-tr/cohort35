// компонент может быть любой функцией
// компоненты могут быть переиспользованы в других компонентах


function CityPage(): JSX.Element {
  // возвращает верстку
  return (
    // вместо class пишем className
    <div>
      <h1>Страница города Берлин</h1>
      <img
        width={500}
        src="https://www.tip-berlin.de/wp-content/uploads/2021/08/imago0103706141h-scaled.jpg"
        alt=""
      />
    </div>
  )
}

export default CityPage
