let sft = document.querySelector("span");
let anime = setInterval(() => {
  setTimeout(() => {
    sft.classList.toggle("span");
  }, 1500);
}, 1500);

let textanime = setInterval(() => {
  if (sft.innerText == "Software Engineer") {
    sft.innerText = "Front-End Developer";
  } else {
    sft.innerText = "Software Engineer";
  }
}, 3000);
