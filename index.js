let links = document.querySelectorAll(".links");

let nav = document.querySelector("nav");
let list = document.querySelector(".list");
let menu = document.querySelector(".menu");


nav.addEventListener("click", onClicklist);
list.addEventListener("click", onClicklist);


list.addEventListener("click", (event) => {
  if (event.target.nodeName === "A") {
    list.style.display = "none";
  }
});


function onClicklist(event) {
  if (event.target.nodeName === "A") {
    let locat = event.target.href;

    document.querySelector("iframe").src = locat;
    links.forEach((link) => {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  }
}


menu.addEventListener("click", () => {
  list.style.display = "flex";
});
