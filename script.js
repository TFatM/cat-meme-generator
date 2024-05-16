let memes = [
  {
    img: "./images/Cute-Cat.jpg"
  },
  {
    img: "./images/black-cat-zoning-out.png"
  },
  {
    img: "./images/crying-cat.jpg"
  },
  {
    img: "./images/loading-cat.jpg"
  },
  {
    img: "./images/sad-cat.jpg"
  },
  {
    img: "./images/Take-A-Seat-Cat.jpg"
  },
  {
    img: "./images/worshipping-a-cat.png"
  }
];
let memeIndex = 0;
let image = document.querySelector(".image");
let container = document.querySelector(".container");
let topText = document.querySelector(".top-text");
let bottomText = document.querySelector(".bottom-text");
let topInput = document.querySelector(".top-input");
let bottomInput = document.querySelector(".bottom-input");
let changeBtn = document.querySelector(".change-btn");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let downloadBtn = document.querySelector(".download-btn");

function changeText() {
  topText.textContent = topInput.value;
  bottomText.textContent = bottomInput.value;
};

function nextImage() {
  if (memeIndex === memes.length - 1) {
    memeIndex = 0;
  } else {
    memeIndex += 1;
  }

  image.src = memes[memeIndex].img;
};

function previousImage() {
    if (memeIndex === memes.length - 1) {
    memeIndex = 0;
  } else {
      memeIndex -= 1;
  }

  image.src = memes[memeIndex].img;
}

function downloadMeme() {
  const screenshotTarget = document.querySelector(".container");
  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    var anchor = document.createElement('a');
    anchor.setAttribute("href", base64image);
    anchor.setAttribute("download", "my-cat-meme.png");
    anchor.click();
    anchor.remove();
  });
};