//generates starting divs
let container = document.querySelector('#container');
let metaContainer = document.querySelector('#metacontainer');
let color1;
let color2;
let color3;
let shade;
let getId
let isRandom = false;
let isShade = false;
let currentGridSize;
function gridMaker(num) {
    shade = new Array(num * num);
    currentGridSize = num * num;
    originalColor = new Array(num * num);
    for(let i = 0; i < num * num; i++)
    {
        shade[i] = 100;
        let temp = document.createElement('div');
        temp.classList.add('cell');
        temp.setAttribute('id', i.toString());
        temp.addEventListener('mouseover', function(e) {
            getId = e.target.getAttribute('id');
            getId = +getId;
            if(isRandom) {
                color1 = Math.floor(Math.random() * 256);
                color2 = Math.floor(Math.random() * 256);
                color3 = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
            } 
            else if(isShade) {
                e.target.style.backgroundColor = `hsl(0, 0%, ${shade[getId]}%)`;
                shade[getId] -= 10;
            }
            else {
                e.target.style.backgroundColor = "black";
            }
            
        })
        container.appendChild(temp);
    }
}
gridMaker(16);


//clears grid
let gridClear = document.querySelector('#clear-grid');
let body = document.querySelector('body');
let squarepside;

gridClear.addEventListener('click', function() {
    metaContainer.removeChild(container);
    squarepside = prompt("how many squares per side? ");
    if(squarepside == "" || squarepside == null) {
        squarepside = "16";
    }
    container = document.createElement('div');
    container.setAttribute('id', 'newCont');
    container.style.width = "600px";
    container.style.height = "600px";
    container.style.display = "grid";
    container.style.marginTop = "10px";
    container.style.border = "1px solid black";
    metaContainer.appendChild(container);
    gridMaker(+squarepside);
    container.style.gridTemplateColumns = `repeat(${squarepside}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squarepside}, 1fr)`;
});
 
//Erases grid
let erase = document.querySelector('#Erase');
erase.addEventListener("click", function() {
    let activation = document.querySelectorAll('.cell');
    let id2;
    activation.forEach((activated) => {
        activated.style.backgroundColor = "transparent";
    })
    for(let j = 0; j < currentGridSize; j++) {
        shade[j] = 100;
    }

})

//toggles random mode
let randomMode = document.querySelector('#random-mode');
randomMode.addEventListener('click', function(){
    if(isRandom){
        isRandom = false;
        return 0;
    } 
    else if(isShade) {
        isShade = false;
    }

    isRandom = true;
})

//toggles shade mode
let shadeMode = document.querySelector('#shade-mode');
shadeMode.addEventListener('click', function() {
    if(isRandom) {
        isRandom = false;
    }
    else if(isShade) {
        isShade = false;
        return 0;
    }
    isShade = true;
    
})
