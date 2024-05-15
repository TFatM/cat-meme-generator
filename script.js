let image = document.querySelector(".image");
let topText = document.querySelector(".top-text");
let bottomText = document.querySelector(".bottom-text");
let topInput = document.querySelector(".top-input");
let bottomInput = document.querySelector(".bottom-input");
let generateBtn = document.querySelector(".generate-btn");
let downloadBtn = document.querySelector(".download-btn");

function generateMeme() {
  topText.textContent = topInput.value;
  bottomText.textContent = bottomInput.value;
}

function downloadMeme() {
        html2canvas(document.querySelector(".container")).then(canvas => {
          document.body.appendChild(canvas);
          downloadBtn.href = canvas.toDataURL("image/png");
          // downloadBtn.style.display = 'inline';
        });
      }