const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please Enter a value");
  } else {
    const data = input.value;
    const del = document.createElement("span");
    del.innerHTML = "X";
    del.className = "Delete";
    const li = document.createElement("li");
    li.className = "list-type";
    li.textContent = data;
    li.appendChild(del);
    list.appendChild(li);
    input.value = "";

    del.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent li click event from triggering
      list.removeChild(li);
    });
    li.addEventListener("click", () => {
      li.classList.toggle("listClick");
    });
  }
});
