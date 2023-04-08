let height = 0;
let width = 0;
let lifes = 1;
let time = 50;
let createTime = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal'){
    createTime = 1500;
}else if(nivel === 'dificil'){
    createTime = 1000;
}else if(nivel === "chucknorris"){
    createTime = 750;
}else if(nivel === 'isabella'){
    createTime = 2000;
}

function adjustGameStageSize () {
    height = window.innerHeight;
    width = window.innerWidth;
    
    console.log(width, height)
}

adjustGameStageSize()

let stopwatch = setInterval(() => {
    time -= 1;

    if(time < 0){
        clearInterval(stopwatch)
        clearInterval(createElement)
        window.location.href = 'victory.html'
    }else{
        document.getElementById('stopwatch').innerHTML = time;
    }
  
}, 1000);

function positionRandom(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        

        if(lifes > 3){
            window.location.href = 'game_over.html'
        }else{
            document.getElementById('v' + lifes).src = 'imagens/coracao_vazio.png';

            lifes++
        }


    }

    let positionX = Math.floor(Math.random() * width) - 90; 
    let positionY = Math.floor(Math.random() * height) - 90;
    
    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;
    
    console.log(positionX, positionY)
    
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = randomSize() + " " + randomSide();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }
    
    document.body.appendChild(mosquito);
    
    console.log(randomSize())
    
    function randomSize(){
        let classe = Math.floor(Math.random() * 3);
    
        switch(classe){
            case 0: 
            return 'mosquito1'
    
            case 1: 
            return 'mosquito2'
    
            case 2: 
            return 'mosquito3'
        }
    
    }
    
    function randomSide(){
        let classe = Math.floor(Math.random() * 2);
    
        switch(classe){
            case 0: 
            return 'right-side'
    
            case 1: 
            return 'left-side'
    
        }
    
    }

}

