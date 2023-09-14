let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const $ = (container, selector) => container.querySelector(selector);
const $all = (container, selector) => container.querySelectorAll(selector);
//console.log($all(document, "button"));

const slider_1_slide = $(document, "#slider_1 .slide"),
  slider_2_slide = $(document, "#slider_2 .slide"),
  slider_3_slide = $(document, "#slider_3 .slide"),
  slider_4_slide = $(document, "#slider_4 .slide");

const appendImages = (container) => {
  for (let i in images) {
    let img = document.createElement("img");
    img.src = "img/" + images[i];
    container.appendChild(img);
  }
};

appendImages(slider_1_slide);
appendImages(slider_2_slide);
appendImages(slider_3_slide);
appendImages(slider_4_slide);

const slider_1_controls = $(document, "#slider_1 .controls"),
  slider_2_controls = $(document, "#slider_2 .controls"),
  slider_3_controls = $(document, "#slider_3 .controls"),
  slider_4_controls = $(document, "#slider_4 .controls");

const slider = (container, controls) => {
  const images_array = $all(container, "img");
  const prev = $(controls, ".prev");
  const next = $(controls, ".next");

  let j = 0;
  prev.disabled = true;

  next.addEventListener("click", function () {
    j++;
    prev.disabled = false;
    if (j === images.length - 1) {
      images_array[j].classList.add("active");
      next.disabled = true;
    } else images_array[j].classList.add("active");
  });

  prev.addEventListener("click", function () {
    next.disabled = false;
    images_array[j].classList.remove("active");
    j--;
    if (j === 0) {
      images_array[j].classList.add("active");
      prev.disabled = true;
    } else {
      images_array[j].classList.add("active");
    }
  });
};

slider(slider_1_slide, slider_1_controls);
slider(slider_2_slide, slider_2_controls);
slider(slider_3_slide, slider_3_controls);
slider(slider_4_slide, slider_4_controls);
