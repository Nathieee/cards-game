let gamePoints = document.getElementById("gamePoints");
let points = 3;
let card = document.querySelectorAll("card");
let word = document.getElementById("word");


let wordArr = ["Dog", "Princess", "Table", "Baby", "Jacket", "Bike", "Laptop", "Fish", "Tree", "Vegetables", "Snickers", "Cake"];

let firstIndex = Math.floor(Math.random()* wordArr.length);
    console.log(firstIndex);
    let displayedWord = wordArr[firstIndex];
    console.log(displayedWord);
    word.innerHTML =displayedWord;



for (let i = 0; i <= wordArr.length; i++){    

    document.querySelectorAll(".cardWord")[i].onclick = () => {
        
        let secondIndex = Math.floor(Math.random() * wordArr.length);                
        let cardWord = document.querySelectorAll(".cardWord")[i];
        let randormWord = wordArr[secondIndex];
        cardWord.innerHTML = randormWord;

        if (displayedWord == randormWord){
            alert("You have Won")
        }
        else if(displayedWord != randormWord){
            points = points - 1;
            gamePoints.innerHTML = (points + " Points");
            if(points == 1){
                gamePoints.innerHTML = (points + " Point");
            }
        }
        else if (points <= 0){
            alert("Sorry, your points are exhusted. Try again");
            return 0;
        }
    }    
}


