
const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let cardShapes = ['spades', 'diamonds', 'hearts', 'clubs'];
let sumOfCards = {dealer : 0, player : 0};


function randomNumber(length){
    return Math.floor (Math.random() * length);
}

function getpoints(randomIndexValues){
    if([ "jack", "queen", "king"].includes(cardValues[randomIndexValues])){
         return 10;
    }
    else{
        return cardValues[randomIndexValues];
    }
}

//Adding frontSide of the ClosedCards
const frontCard = document.createElement("img");
let randomIndexValues = randomNumber(cardValues.length);
frontCard.setAttribute('src',`54DeckOfCards/${cardValues[randomIndexValues]}_of_${cardShapes[randomNumber(cardShapes.length)]}.png`);
sumOfCards.dealer += getpoints(randomIndexValues);
const frontCardDiv = document.querySelector(".frontOfCard");
frontCardDiv.append(frontCard);


const dealerImageDiv = document.querySelector('.dealerImgDiv');
for(let i = 0; i < (Math.floor (Math.random() * 3)) + 1 ; i++){
    let randomIndexValues = randomNumber(cardValues.length);
    let randomIndexShapes = randomNumber(cardShapes.length);
    let image = document.createElement('img');
    image.setAttribute('src',`54DeckOfCards/${cardValues[randomIndexValues]}_of_${cardShapes[randomIndexShapes]}.png`);
    sumOfCards.dealer += getpoints(randomIndexValues);
    dealerImageDiv.append(image);
}
console.log(sumOfCards.dealer);

//Adding inital two cards for player
for(i = 1; i <=2; i++){
    const randomIndexValues = randomNumber(cardValues.length);
    const randomIndexShapes = randomNumber(cardShapes.length);
    const playerNewImage = document.createElement('img');
    playerNewImage.setAttribute('src',`54DeckOfCards/${cardValues[randomIndexValues]}_of_${cardShapes[randomIndexShapes]}.png`);
    document.querySelector('#playerImgDiv').append(playerNewImage);
    sumOfCards.player += getpoints(randomIndexValues);
}


const playerChoice = document.querySelector("#controlSection");
playerChoice.addEventListener('click', (eventDetails) => {
   if ((eventDetails.target.value == 'hit') && (sumOfCards.player < 21)){
    const randomIndexValues = randomNumber(cardValues.length);
    const randomIndexShapes = randomNumber(cardShapes.length);
    const playerNewImage = document.createElement('img');
    playerNewImage.setAttribute('src',`54DeckOfCards/${cardValues[randomIndexValues]}_of_${cardShapes[randomIndexShapes]}.png`);
    document.querySelector('#playerImgDiv').append(playerNewImage);
    sumOfCards.player += getpoints(randomIndexValues);
   }

   else if(eventDetails.target.value == 'stay'){
    const card = document.querySelector(".flipBothCards");
    card.classList.toggle("flip");
    setTimeout(()=>{
        const blurDiv = document.querySelector(".blurDiv");
        blurDiv.classList.toggle("blur");
        const resultDiv = document.querySelector(".resultBoxDiv");
        resultDiv.classList.toggle("resultBox");
    },3000)
    
    document.querySelector(".textInsideResult").innerHTML = `Your Points : ${sumOfCards.player} <br> Dealer Points : ${sumOfCards.dealer}`;
    const resultDiv = document.querySelector('.resultSpan')

    if((sumOfCards.player == 21) && (sumOfCards.dealer == 21) || (sumOfCards.player == sumOfCards.dealer)){
        resultDiv.innerText = "That's an TIE!";
    }
    else if(sumOfCards.player == 21){
        resultDiv.innerText = "You WIN.";
    }
    else if(sumOfCards.dealer == 21){
        resultDiv.innerText = "You LOST.";
    }
    else if((sumOfCards.player > sumOfCards.dealer) && (sumOfCards.player <= 21)){
       resultDiv.innerText = "You WIN.";
    }
    else if((sumOfCards.dealer > sumOfCards.player) && (sumOfCards.dealer <= 21)){
        resultDiv.innerText = "You LOST.";
    }
    else if(sumOfCards.player > 21){
        resultDiv.innerText = "You LOST.";
    }
    else if(sumOfCards.player < 21){
        resultDiv.innerText = "You WON.";
    }
    else{
        console.log("UnImaginedElseCondition")
    }
   }

});

