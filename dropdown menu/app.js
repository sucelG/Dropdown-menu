const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  list.classList.toggle("active");
  if (list.classList.contains("active")) {
    btn.innerHTML = "&UpArrow;";
  } else {
    btn.innerHTML = "&DownArrow;";
  }
});
