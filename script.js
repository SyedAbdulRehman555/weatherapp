var tInput = document.getElementById("text_field");
var sub_btn = document.getElementById("btn_sub");
var main = document.getElementById("main");
console.log(tInput.value);

sub_btn.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log(tInput.value);
  let city = tInput.value;

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1e86d4b67bea25605da949a46a7fa260&units=metric`;

  let getData = await fetch(api)
    .then((response) => {
      return response.json();
    })
    .catch((e) => console.log(e));

  console.log(getData.main);
  console.log("main" + main);

  if (getData.main) {
    main.innerHTML = `  <div class="city">
        <p>${city.toUpperCase()}</p>
        <p>${getData.main.temp} C</p>
      </div>
      <div class="data">
        <p class="h5">Feels Like: <span>${getData.main.feels_like} C</span></p>
        <p class="h5">Minimum Temperature: <span>${
          getData.main.temp_min
        } C</span></p>
        <p class="h5">Maximum Temperature: <span>${
          getData.main.temp_max
        } C</span></p>
        <p class="h5">Humidity: <span>${getData.main.humidity}</span></p>
      </div>`;
  } else {
    alert("Enter valid city name");
  }
});
