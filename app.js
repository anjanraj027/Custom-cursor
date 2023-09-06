let wind = document.querySelector("#main");
let crsr = document.querySelector(".cursor");

wind.addEventListener("mousemove", (dets) => {
  //   console.log("mouse moving");
  //   console.log(dets.x);
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});
