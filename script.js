function changeText() {
  let heading = document.getElementById("heading");
  heading.innerHTML = "Hello JavaScript InnerHTML Onclick";
}

document.querySelector("#lisBtn").addEventListener("click", function () {
  let heading = document.getElementById("heading");
  heading.innerHTML = "Hello JavaScript InnerHTML EventListener";
});
