// global variables

let rainbowMode = true;
let blackMode = false;
let whiteMode = false;


// events

window.addEventListener("load", setDefaultGrid);
const gridConteiner = document.querySelector('.gridConteiner');


//buttons which change the behaviour of the grid
const buttonChangesBehaviour = document.querySelectorAll('.changeButton');

buttonChangesBehaviour.forEach(button => {
    button.addEventListener('click', changeColorBehaviour);
  
});


//buttons which change the size of the grid
const buttonChangeSize = document.querySelector('.changeGridButton')

buttonChangeSize.addEventListener('click', ()=>{
    changeSizeGrid(document.querySelector('#valueNewGrid').value);
});


// button which clear the grid 

const buttonClear = document.querySelector('.clearButton')

buttonClear.addEventListener('click',clearGrid);


// functions


function changeSizeGrid(value){
   deleteGrid();
   setGridSize(value);
   createGrid(value);
}

function deleteGrid(){
    const gridArray = Array.from(gridConteiner.childNodes);

    gridArray.forEach(element => {
        gridConteiner.removeChild(element);
    });

}

function clearGrid(){ 
    const gridToClear = document.getElementsByClassName('grid-item');


    for(let i = 0; i< gridToClear.length; i++){
        gridToClear[i].style.backgroundColor = 'rgb(255, 255, 255)'
    }
}

function setDefaultGrid(){
    setGridSize(16);
    createGrid(16);
}

function setGridSize(size){
    gridConteiner.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function createGrid(size){
       
    for(let i= 0; i < (size * size); i++){
        let cell = document.createElement('div');
        cell.classList = 'grid-item';
        cell.addEventListener('mouseover',paintCell);
        gridConteiner.appendChild(cell);
    }
     
}

function changeColorBehaviour(e){
    if(e.target.id === 'rainbowMode'){
        blackMode = false;
        whiteMode = false;
       rainbowMode = true;
    }
    else if(e.target.id === 'blackMode'){
        rainbowMode = false;
        whiteMode = false;
        blackMode = true;
    
    }
    else if(e.target.id === 'whiteMode'){
        rainbowMode = false;
        blackMode = false;
        whiteMode = true;
    }
}


function getColorNumber(){

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random() * 1;
    const color = `background-color: rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
    
}


function getColorBlack(){
    return  `background-color: rgba(0, 0, 0)`;
}


function paintCell(e){

    if(rainbowMode === true){
        e.target.setAttribute('style', getColorNumber());
        console.log( e.target);
    }
    else if(blackMode === true){
        e.target.setAttribute('style', getColorBlack());
    }
    else if(whiteMode === true){
        e.target.setAttribute('style', `background-color: rgba(255, 255, 255)`);
    }
}

function updateTextInput(val) {
    document.getElementById('textInput').textContent = val; 
}



