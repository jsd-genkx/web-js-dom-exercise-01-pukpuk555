function changeText() {
  let heading = document.getElementById("heading");
  let button = document.querySelector(".onButton");
  let button2 = document.querySelector("#lisBtn");
  //text
  heading.textContent = "Hello JavaScript InnerHTML Onclick";
  heading.style.color = "pink";
  heading.style.backgroundColor = "black";
  heading.style.fontWeight = "bold";
  heading.style.fontSize = "3rem";
  //button
  button.style.fontSize = "1rem";
  button.style.paddingLeft = "2rem";
  button.style.paddingRight = "2rem";
  button.style.backgroundColor = "grey";
  //button2
  button2.style = "none";
}

document.querySelector("#lisBtn").addEventListener("click", function () {
  let heading = document.getElementById("heading");
  let button = document.querySelector(".onButton");
  let button2 = document.querySelector("#lisBtn");
  //text
  heading.textContent = "Hello JavaScript InnerHTML EventListener";
  heading.style.color = "pink";
  heading.style.backgroundColor = "black";
  heading.style.fontWeight = "bold";
  heading.style.fontSize = "3rem";
  //button
  button.style = "none";
  //button2
  button2.style.fontSize = "1rem";
  button2.style.paddingLeft = "2rem";
  button2.style.paddingRight = "2rem";
  button2.style.backgroundColor = "grey";
});
