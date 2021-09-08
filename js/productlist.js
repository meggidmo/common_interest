const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("Color");

const url = "https://naturalwinedata-1fc5.restdb.io/rest/naturalwine?";

// const url = "https://naturalwinedata-1fc5.restdb.io/rest/naturalwine?" + Color;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleWinelist(data);
  });

function handleWinelist(data) {
  console.log(data);
  data.forEach(showWines);
}

function showWines(naturalwine) {
  const template = document.querySelector(".wine_template");

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = naturalwine.Title;
  copy.querySelector("img").src = naturalwine.img;
  copy.querySelector(".year").textContent = naturalwine.Year;
  copy.querySelector(".country").textContent = naturalwine.Country;
  copy.querySelector(".grape").textContent = naturalwine.Grape;
  copy.querySelector(".price").textContent = naturalwine.Price;

  const parent = document.querySelector(".wine_container");

  parent.appendChild(copy);
}
