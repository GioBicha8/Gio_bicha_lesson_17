// დავალება #1

const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", (e) => {
  deleteBtn.remove();
});

// დავალება #2
const myImg = document.createElement("img");
myImg.setAttribute("src", "https://picsum.photos/200/300");
myImg.alt = "image";
const body = document.querySelector("body");
body.append(myImg);
