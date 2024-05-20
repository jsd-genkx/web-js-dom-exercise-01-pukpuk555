function changeText() {
  let heading = document.getElementById("heading");
  heading.textContent = "Hello JavaScript InnerHTML Onclick";
}

document.querySelector("#lisBtn").addEventListener("click", function () {
  let heading = document.getElementById("heading");
  heading.textContent = "Hello JavaScript InnerHTML EventListener";
});
