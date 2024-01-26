const goods = document.getElementById("form");
const goodsInfo = document.getElementById("orderList");
const loader = document.getElementById("loader");
const errorContainer = document.getElementById("errorContainer");

goods.addEventListener("submit", (e) => {
  const error = document.getElementById("error");
  e.preventDefault(); //убираем перезагрузку страницы
  const data = e.target.inputName.value;
  e.target.inputName.value = "";
  while (goodsInfo.firstChild) {
    goodsInfo.removeChild(goodsInfo.firstChild);
  }
  if (error) {
    console.log("error");
    error.remove();
  }
  console.log(data);
  if (data < 0 || data > 20) {
    const p = document.createElement("p");
    loader.style.display = "none";
    p.innerText = "Была допущена ошибка, введите повторно число от 1 до 20.";
    p.style.color = "red";
    p.id = "error";
    errorContainer.append(p);
  } else {
    loader.style.display = "block";
    fetch(`https://fakestoreapi.com/prducts?limit=${data}`)
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          const p = document.createElement("p");
          loader.style.display = "none";
          p.innerText = `Ошибка сервера ${res.status}`;
          p.style.color = "red";
          p.id = "error";
          errorContainer.append(p);
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      }) //1-ое забирание Promise
      .then((res) => {
        loader.style.display = "none";
        res.map((el) => {
          let str = document.createElement("li");
          str.innerText = el.title;
          goodsInfo.append(str);
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
});

//TODO Loader
