const containerEl = document.querySelector(".container");

for(let index=0;index<30;index++){

  const colorContainerEl  = document.createElement("div");
  colorContainerEl.classList.add("color-container");

  const colorCodeEl = document.createElement("span");
  colorCodeEl.classList.add("color-code");
  colorContainerEl.appendChild(colorCodeEl);
  
  const copyButtonEl = document.createElement("button");
  copyButtonEl.innerHTML = "Copy";
  colorContainerEl.appendChild(copyButtonEl);

  containerEl.appendChild(colorContainerEl);

}


function randomColor(){
  const chars = "0123456789ABCDEF";
  const colorCodeLength=6;
  let colorCode = "";

  for(let index=0;index < colorCodeLength;index++){

    const randomNum = Math.floor(Math.random() * chars.length); 
    colorCode += chars[randomNum];

  }
  return colorCode;
}

const mainColorContainerEls = document.querySelectorAll(".color-container");

generateColor();

function generateColor(){

for(let i=0; i< mainColorContainerEls.length;i++){

  const colorContainerEl = mainColorContainerEls[i];
const newColorCode = randomColor();
const colorCodeEl = colorContainerEl.querySelector(".color-code");

colorContainerEl.style.backgroundColor = "#" + newColorCode;

colorCodeEl.innerHTML = "#" + newColorCode;

}



}

mainColorContainerEls.forEach((colorContainerEl)=>{

  const copyButtonEl = colorContainerEl.querySelector("button");
  const colorCodeEl = colorContainerEl.querySelector(".color-code");


  copyButtonEl.addEventListener("click",()=>{

    const colorCode = colorCodeEl.innerText;
    copyClipBoard(colorCode);


  });

});

function copyClipBoard(text){

  navigator.clipboard.writeText(text)
  .then(()=>{
    alert("Copied to Clipboard : "+text);
  })
  .catch((error)=>{
    console.log("Failed to Copy to Clipboard",error);
  })
}