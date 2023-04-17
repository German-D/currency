const input = document.getElementById("input");
const rub = document.getElementById("rub");
const button = document.getElementById("button");

input.addEventListener("input", (e) => {
  let value = e.target.value;

  if (value.length > 6 || (value[0] !== "-" && value.length > 5)) {
    value = value.slice(0, -1);
    input.value = value;
  }
  rub.innerText = Math.abs(Math.round(Number(value / 100)));
});
