var height = 6;
var width = 5;

var row = 0;
var col = 0;
myWordList = [
"ABOUT", "ABOVE", "ACUTE", "ADORE", "AFTER", "AGILE", "ALERT", "ALIEN", "ALIVE", "ALONG",
"ANGEL", "APPLE", "APPLY", "ARENA", "ARISE", "ARROW", "AUDIO", "AVOID", "AWARD", "BASIC",
"BEACH", "BEGAN", "BEGIN", "BEING", "BELOW", "BENCH", "BIRTH", "BLACK", "BLADE", "BLAME",
"BLEND", "BLOCK", "BLOOM", "BOOST", "BOUND", "BRAIN", "BRAVE", "BRING", "BROAD", "BROKE",
"BROWN", "BUILD", "BUILT", "CABLE", "CARRY", "CATCH", "CAUSE", "CHAIN", "CHAIR", "CHART",
"CHECK", "CHEST", "CHIEF", "CHILD", "CHOIR", "CIVIC", "CLEAN", "CLEAR", "CLICK", "CLOSE",
"COAST", "COLOR", "COMFY", "COUNT", "COURT", "CRAFT", "CRASH", "CRISP", "CROSS", "CROWD",
"CROWN", "DAILY", "DANCE", "DEALT", "DELAY", "DEPTH", "DOING", "DOUBT", "DRAFT", "DRAMA",
"DRAWN", "DREAM", "DRIFT", "DRINK", "DRIVE", "EARLY", "EARTH", "EAGER", "EAGLE", "ELBOW",
"ELITE", "EMPTY", "ENJOY", "ENTER", "EQUAL", "EQUIP", "ERROR", "EVENT", "EVERY", "EXACT",
"EXIST", "EXTRA", "FAITH", "FALSE", "FANCY", "FAVOR", "FEAST", "FELLO", "FIELD", "FIGHT",
"FINAL", "FIRST", "FIXED", "FLASH", "FLICK", "FLOOD", "FLOOR", "FOCUS", "FORCE", "FRAME",
"FRESH", "FRONT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GRACE", "GRADE",
"GRAND", "GRANT", "GRASS", "GREEN", "GROUP", "GUARD", "GUEST", "GUIDE", "HAPPY", "HEART",
"HEAVY", "HONEY", "HONOR", "HORSE", "HOTEL", "HOUSE", "HUMAN", "HUMOR", "HURRY", "IDEAL",
"IMAGE", "IMPLY", "INDEX", "INNER", "INPUT", "ISSUE", "JELLY", "JEWEL", "JOLLY", "JUDGE",
"JUICE", "KNOCK", "KNOWN", "LABEL", "LARGE", "LASER", "LEARN", "LEAST", "LEAVE", "LEVEL",
"LIGHT", "LIMIT", "LIVER", "LOCAL", "LOGIC", "LOYAL", "LUCKY", "LUNCH", "MAGIC", "MAJOR",
"MAKER", "MAPLE", "MARCH", "MATCH", "METAL", "MIGHT", "MINOR", "MIXED", "MODEL", "MONEY",
"MORAL", "MOTOR", "MOUNT", "MOUSE", "MOVIE", "MUSIC", "NEEDS", "NEVER", "NIGHT", "NOBLE",
"NOISE", "NORTH", "OCEAN", "OFFER", "OFTEN", "ONION", "ORDER", "OTHER", "OUTER", "OVERT",
"PAINT", "PANEL", "PARTY", "PEACE", "PHASE", "PHONE", "PHOTO", "PIANO", "PIECE", "PILOT",
"PLANE", "PLANT", "PLATE", "POINT", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT",
"PRIZE", "PROOF", "PROUD", "PROVE", "PUBLIC", "PULSE", "QUICK", "QUIET", "QUITE", "RADIO",
"RAISE", "RANGE", "RAPID", "RATIO", "REACH", "READY", "REACT", "REALM", "REBEL", "REFER",
"RELAX", "REPLY", "RIGHT", "RIVER", "ROBOT", "ROCKY", "ROUND", "ROUTE", "ROYAL", "RURAL",
"SAFER", "SAINT", "SCALE", "SCENE", "SCOPE", "SCORE", "SHARE", "SHARP", "SHEET", "SHIFT",
"SHINE", "SHOCK", "SHORT", "SHOWN", "SHYLY", "SIGHT", "SIGMA", "SIMPLE", "SINCE", "SKILL",
"SLICE", "SMALL", "SMART", "SMILE", "SMOKE", "SOLID", "SORRY", "SOUND", "SPACE", "SPARE",
"SPEAK", "SPEED", "SPEND", "SPICE", "SPINE", "SPLIT", "SPORT", "SPREAD", "SQUARE", "STAGE",
"STAIR", "STAND", "START", "STATE", "STEEL", "STICK", "STILL", "STONE", "STORE", "STORM",
"STORY", "STRAP", "STRAW", "STUDY", "STUFF", "STYLE", "SUGAR", "SUPER", "SURELY", "SWEET",
"TABLE", "TASTE", "TEACH", "THERE", "THICK", "THING", "THINK", "THIRD", "THOSE", "TIGHT",
"TITLE", "TODAY", "TOPIC", "TOTAL", "TOUCH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT",
"TREND", "TRIAL", "TRICK", "TRIED", "TROOP", "TRUST", "TRUTH", "TWICE", "UNDER", "UNION",
"UNITY", "UPPER", "URBAN", "USUAL", "VAGUE", "VALID", "VALUE", "VASTS", "VIDEO", "VIRUS",
"VISIT", "VITAL", "VOICE", "WASTE", "WATCH", "WATER", "WHEEL", "WHERE", "WHILE", "WHITE",
"WHOLE", "WOMAN", "WORRY", "WORTH", "WOULD", "WRITE", "WRONG", "YOUTH"
];




var gameOver = false;
var word = random();
var acc = true 
var userguess = ""

window.onload = function(){
    initialize()
    document.getElementById("playAgain").addEventListener("click", () => {
        reset();
    });
}

function initialize(){
    gameOver = false;
    //Create the game board
    for (let r = 0; r< height; r++){
        for(let c = 0; c< width; c++){
            let title = document.createElement('span')
            title.id = r.toString() + "-" + c.toString()
            title.classList.add ("tile");
            title.innerText = "";
            document.getElementById("board").appendChild(title);

        }
    }  
    //Listen to key press
    document.addEventListener('keyup', (e) =>{
     if (gameOver) return;

       // alert(e.code);//tells u what key was pressed

       if ('KeyA'<= e.code && e.code <='KeyZ'){
        if (col< width){
            let currTile = document.getElementById(row.toString() + '-'+ col.toString())
            if(currTile.innerText == ""){
                currTile.innerText = e.code[3]
                col+=1
                userguess +=e.code[3]
            }
        }
       }

    
    else if(e.code == "Backspace"){
        if(0<col && col<= width){
            col-=1;
        }
        let currTile = document.getElementById(row.toString() + '-'+ col.toString())
        currTile.innerText = "";
        }
        else if(e.code == "Enter"){
            if(col< width){
                showMessage("Not enough letters!")
                return
            }

            let guess = ""
            for (let c = 0; c < width; c++){
                const tile = document.getElementById(row.toString() + "-"+ c.toString())
                guess+= tile.innerText;
            }
            guess = guess.toLowerCase();
          
            validateWord(guess).then(isValid => {
                if (!isValid) {
                    showMessage("Not a valid word!");
                    return;
                }
        


            update();
            row +=1; //start new row
            col = 0; // start at 0 for new row
            userguess ="";
            if (row == height){
                gameOver = true;
                showMessage("The word was "+ word)
                document.getElementById("playAgain").style.display = "inline-block";
            }
           
            });
        }
        if (!gameOver && row == height ){
            gameOver = true;
            document.getElementById("answer").innerText = 'Game Over  The word was:' +userguess;
        



        }

    })
    
}
function update(){

    let correct = 0;
    const freq = {}
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        freq[letter] = (freq[letter] || 0) + 1;
    }
    
    for(let c = 0; c< width; c++){
        let currTile = document.getElementById(row.toString() + "-"+ c.toString())
        let letter = currTile.innerText;
       
        // if the letter is correct 
        if(word[c] == letter){
            currTile.classList.add("correct");
            correct +=1
            freq[letter]-=1
        }else if(word.includes(letter)){
            
            if (freq[letter] > 0){
            currTile.classList.add("present");
            freq[letter]-=1
            }else{
                currTile.classList.add("absent");`                 `
            }
            
            

        }else{
            currTile.classList.add("absent");
        }

        
    }
    
    if(correct == width){
        gameOver = true;
        showMessage("🎉 You guessed it!");
        document.getElementById("playAgain").style.display = "inline-block";
    
    }
   
   
}
function validateWord(word){

    link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ word.toLowerCase();
    return fetch(link)
        .then(response =>{
            if(!response.ok){
               return false
            }return response.json()
        })
        .then(data=>{
            if(!data || (data.title && data.title ==="No Definitions Found")){
                return false;
            }
            return true;
        })
        .catch(err => false);
}


function showMessage(msg) {
    const messageEl = document.getElementById("message");
    messageEl.innerText = msg;
    messageEl.style.opacity = 1;

    // auto clear message after 2.5 seconds
    setTimeout(() => {
        messageEl.style.opacity = 0;
        messageEl.innerText = "";
    }, 2500);
}


function reset(){
    row = 0;
    col = 0;
    gameOver = false;

    document.getElementById("answer").innerText = "";
    document.getElementById("playAgain").style.display = "none";
    for(let r = 0; r < height; r++){
        for(let c = 0; c< width; c++){
            const currTile = document.getElementById(r.toString() + "-"+ c.toString())
            currTile.innerText = "";
            currTile.className = "tile";
        }
    }

}

function random(){

   return myWordList[Math.floor(Math.random()*myWordList.length)];
}