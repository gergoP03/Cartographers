//Selecorok
const mainContainer = document.querySelector(".main-container"); 
const endGameDiv = document.querySelector("#endOfGame");
const TABLE = document.querySelector("#table")
const PLACEMENT = document.querySelector("#placement")
const rotateButton = document.querySelector("#rotate")
const mirrorButton = document.querySelector("#mirror")
const timeSpan = document.querySelector("#time")
const timerSpan = document.querySelector("#timer")
const seasonSpan = document.querySelector("#season")
const missionA = document.querySelector("#mission-A");
const missionB = document.querySelector("#mission-B");
const missionC = document.querySelector("#mission-C");
const missionD = document.querySelector("#mission-D");
const pointsSpan = document.querySelector("#sumOfPoints");
const newGameButton = document.querySelector("#new_game");
const endPointsSpan = document.querySelector("#endPoints");
const springPoints = document.querySelector("#spring_point span");
const summerPoints = document.querySelector("#summer_point span");
const autumnPoints = document.querySelector("#autumn_point span");
const winterPoints = document.querySelector("#winter_point span");
const pointA = document.querySelector("#A-point");
const pointB = document.querySelector("#B-point");
const pointC = document.querySelector("#C-point");
const pointD = document.querySelector("#D-point");
const GameOverButton = document.querySelector("#EndButton");
const EndpointA = document.querySelector("#EndPointA");
const EndpointB = document.querySelector("#EndPointB");
const EndpointC = document.querySelector("#EndPointC");
const EndpointD = document.querySelector("#EndPointD");


//Feladat adatai
const missions = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
    }
  ],
  "extra": [
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
    }
  ],
}
const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]

const mountains = [
  [2, 2],
  [4, 9],
  [6, 4],
  [9, 10],
  [10, 6]
];
//globális változók
const ROW = 11;
const COL = 11;
let MAP = [];
let placeMap = [];
let POINTS = 0;
let sumOfSpringPoints = 0;
let sumOfSummerPoints = 0;
let sumOfAutumnPoints = 0;
let sumOfWinterPoints = 0;
let pointsOfA = 0;
let pointsOfB = 0;
let pointsOfC = 0;
let pointsOfD = 0;
const MAXTIME = 28;
const SEASONMAXTIME = 7;
let TIME = 0;
let seasonTime = 0;
const SEASONS = ["Tavasz (AB)", "Nyár (BC)", "Ősz (CD)", "Tél (DA)"];
let MISSION_POINTS = [0, 0, 0, 0];
let seasonIndex = 0;
let elementIndex = 0;
const BASIC_MISSIONS = missions['basic'].slice();
const EXTRA_MISSIONS = missions['extra'].slice();
const ALL_MISSIONS = BASIC_MISSIONS.concat(EXTRA_MISSIONS)
let randomMissions = [];
let shuffledElements = shuffleArray(elements);
let actShape = copyMatrix(getActElement().shape);

//Függvényhívások
initMap();
initPlaceMap();
genTableDivs();
placementGen();
updateTime();
updateTimer();
updateSeason();
generateRandomMissions(ALL_MISSIONS);
showMissions();
updateMissionBorder();
updatePoints();


//Esemény kezelők
rotateButton.addEventListener("click", () => {
  rotate();
  actShape = rotateMatrix(actShape);
  placementGen();
})

mirrorButton.addEventListener("click", () => {
  mirror();
  actShape = mirrorMatrix(actShape);
  placementGen();

})

let mouseEntered = false;

TABLE.addEventListener("mouseover", (e) => {
  const target = e.target;
  if(target.classList.contains("cells")){
    if(!mouseEntered){
      const row = target.dataset.row;
      const col = target.dataset.col;
      showPlaces(row, col);
      genTableDivs();
      mouseEntered = true;

    }
  }
})

TABLE.addEventListener("mouseout", (e) => {
  const target = e.target;
  if(target.classList.contains("cells")){
    if(mouseEntered){
      initPlaceMap();
      genTableDivs();
      mouseEntered = false;;
    }
  }
})

TABLE.addEventListener("click", (e) => {
  const target = e.target;
  if(target.classList.contains("cells")){  
    const row = target.dataset.row;
    const col = target.dataset.col;
    place(row, col);
    updateTime();
    updateTimer();
    updateSeason();
  }
})

newGameButton.addEventListener("click", () =>{
  //mainContainer.style.display = "flex";
  endGameDiv.style.display = "none";
  resetGame();
  mainContainer.classList.remove("endedGame");
})

GameOverButton.addEventListener("click", () => {
  endOfGame();
})



//Függvények

function resetGame(){
  shuffleDeck();
  actShape = copyMatrix(getActElement().shape);
  TIME = 0;
  seasonTime = 0;
  seasonIndex = 0;
  elementIndex = 0;
  POINTS = 0;
  sumOfSpringPoints = 0;
  sumOfSummerPoints = 0;
  sumOfAutumnPoints = 0;
  sumOfWinterPoints = 0;
  pointsOfA = 0;
  pointsOfB = 0;
  pointsOfC = 0;
  pointsOfD = 0;

  initMap();
  initPlaceMap();
  genTableDivs();
  placementGen();
  updateTime();
  updateTimer();
  updateSeason();
  generateRandomMissions(ALL_MISSIONS);
  updateMissionBorder()
  showMissions();
  updatePoints();
}

function initMap(){
  MAP = [];
  for(let i = 0; i < 11; i++){
    const row = []
    for(let j = 0; j < 11; j++){
      let b = false;
      for(let m in mountains){
        const mountain = mountains[m];
        if(mountain[0] - 1 === i && mountain[1] - 1 === j){
          b = true;
          break;
        }
      }
      if(b){
        row.push("mountain");
      }
      else{
        row.push("0");
      }
    }
    MAP.push(row);
  }
}

function initPlaceMap(){
  placeMap = []
  for(let i = 0; i < ROW; i++){
    const row = [];
    for(let j = 0; j < COL; j++){
      row.push(0);
    }
    placeMap.push(row);
  }
}

function getActElement(){
  return shuffledElements[elementIndex];
}

function shuffleArray(arr) {
  const shuffledArray = [];

  for(let i = 0; i < arr.length; i++){
    //Deep copy
    shuffledArray.push(Object.assign({}, arr[i]));
  }
  
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  return shuffledArray;
}

function deepCopyMatrix(matrix) {
  return matrix.map(row => row.map(item => (typeof item === 'object' ? deepCopyMatrix(item) : item)));
}

function copyMatrix(matrix){
  let copiedMatrix = []
  for(let i = 0; i < matrix.length; i++){
    const row = [];
    for(let j = 0; j < matrix[i].length; j++){
      row.push(matrix[i][j]);
    }
    copiedMatrix.push(row);
  }
  return copiedMatrix;
}

/*
  Küldetések
*/

function generateRandomMissions(arr){
  randomMissions = shuffleArray(arr).slice();
}

function getActiveMissions(){
  return {
    mission1: randomMissions[seasonIndex % 4],
    mission2: randomMissions[(seasonIndex + 1) % 4]
  }
}

function getPointsOfHatarvidek(){
  let sum = 0;
  //ROW == COL
  for(let i = 0; i < ROW; i++){
    let b = true; //sorhoz
    let d = true; // oszlophoz
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "0"){
        b = false;
      }
      if(MAP[j][i] == "0"){
        d = false;
      }
    }
    if(b){
      sum += 6;
    }
    if(d){
      sum += 6;
    }
  }
  return sum;
}

function getPointsOfErdo_Szele(){
  let sum = 0;
 
  for(let i = 0; i < COL; i++){
    if(MAP[0][i] != "0"){
      sum++;
    }
    if(MAP[ROW-1][i] != "0"){
      sum++;
    }
  }


  for(let i = 1; i < ROW-1; i++){
    if(MAP[i][0] != "0"){
      sum++;
    }
    if(MAP[i][COL-1] != "0"){
      sum++;
    }
  }

  return sum;
}

function getPointsOfAlmosVolgy(){
  let sum = 0;
  for(let i = 0; i < ROW; i++){
    let counter = 0;
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "forest"){
        counter++;
      }
    }
    if(counter == 3){
      sum += 4;
    }
  }
  return sum;
}

function getPointsOfFasor(){
  let max = 0;
  for(let i = 0; i < COL; i++){
    let currMax = 0;
    let counter = 0;
    for(let j = 0; j < ROW; j++){
      if(MAP[j][i] == "forest"){
        counter++;
      }  
      else{
        counter = 0;
      }
      if(counter > currMax){
        currMax = counter;
      }
    }
    if(currMax > max){
      max = currMax
    }
  }
  return max * 2;
}

function getPointsOfOntozoCsatorna(){
  let sum = 0;
  for(let i = 0; i < COL; i++){
    let waterCount = 0;
    let farmCount = 0;
    for(let j = 0; j < ROW; j++){
      if(MAP[j][i] == "water"){
        waterCount++;
      }
      if(MAP[j][i] == "farm"){
        farmCount++;
      }
    }
    if(waterCount > 0 && farmCount > 0 && farmCount == waterCount){
      sum++;
    }
  }
  return sum * 4;
}

function getPointsOfSorHaz(){
  let max = 0;
  for(let i = 0; i < ROW; i++){
    let currMax = 0;
    let counter = 0;
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "town"){
        counter++;
      }
      else{
        counter = 0;
      }
      if(counter > currMax){
        currMax = counter;
      }
    }
    if(currMax > max){
      max = currMax
    }
  }
  return max * 2;
}

function getPointsOfParatlanSilok(){
  let sum = 0;
  for(let i = 0; i < COL; i += 2){
    let b = true;
    for(let j = 0; j < ROW; j++){
      if(MAP[j][i] == "0"){
        b = false;
        break;
      }
    }
    if(b){
      sum++;
    }
  }
  return sum * 10;
}

function getPointsOfGazdagVidek(){
  let sum = 0;
  for(let i = 0; i < ROW; i++){
    let fieldTypes = []
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] != "0" && !fieldTypes.includes(MAP[i][j])){
        fieldTypes.push(MAP[i][j]);
      }
    }
    if(fieldTypes.length >= 5){
      sum++;
    }
  }
  return sum * 4;
}

function getPointsOfKrumpliOntozes(){
  let getPointsFor = []
  for(let i = 0; i < ROW; i++){
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "farm"){
        let currNeighbor = getNeighborFields(i, j);
        for(let k = 0; k < currNeighbor.length; k++){
          if(MAP[currNeighbor[k][0]][currNeighbor[k][1]] == "water"){
            let b = true;
            for(let h = 0; h < getPointsFor.length; h++){
              if(getPointsFor[h][0] == currNeighbor[k][0] && getPointsFor[h][1] == currNeighbor[k][1]){
                b = false;
                break;
              }
            }
            if(b){
              getPointsFor.push([currNeighbor[k][0], currNeighbor[k][1]]);

            }
          }
        }
      }
    }
  }
  return getPointsFor.length * 2;
}

function getPointsOfMagusokVolgye(){
  let getPointsFor = []
  for(let i = 0; i < ROW; i++){
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "mountain"){
        let currNeighbor = getNeighborFields(i, j);
        for(let k = 0; k < currNeighbor.length; k++){
          if(MAP[currNeighbor[k][0]][currNeighbor[k][1]] == "water"){
            let b = true;
            for(let h = 0; h < getPointsFor.length; h++){
              if(getPointsFor[h][0] == currNeighbor[k][0] && getPointsFor[h][1] == currNeighbor[k][1]){
                b = false;
                break;
              }
            }
            if(b){
              getPointsFor.push([currNeighbor[k][0], currNeighbor[k][1]]);

            }
          }
        }
      }
    }
  }
  return getPointsFor.length * 3;
}

function getPointsOfUresTelek(){
  let getPointsFor = []
  for(let i = 0; i < ROW; i++){
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "town"){
        let currNeighbor = getNeighborFields(i, j);
        for(let k = 0; k < currNeighbor.length; k++){
          if(MAP[currNeighbor[k][0]][currNeighbor[k][1]] == "0"){
            let b = true;
            for(let h = 0; h < getPointsFor.length; h++){
              if(getPointsFor[h][0] == currNeighbor[k][0] && getPointsFor[h][1] == currNeighbor[k][1]){
                b = false;
                break;
              }
            }
            if(b){
              getPointsFor.push([currNeighbor[k][0], currNeighbor[k][1]]);

            }
          }
        }
      }
    }
  }
  return getPointsFor.length * 2;
}

function getPointsOfGazdagVaros(){
  let sum = 0;
  for(let i = 0; i < ROW; i++){
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "town"){
        let fieldtypes = [];
        let currNeighbor = getNeighborFields(i, j);
        for(let k = 0; k < currNeighbor.length; k++){
          if(!fieldtypes.includes(MAP[currNeighbor[k][0]][currNeighbor[k][1]]) && MAP[currNeighbor[k][0]][currNeighbor[k][1]] != "0"){
            fieldtypes.push(MAP[currNeighbor[k][0]][currNeighbor[k][1]]);
          }
        }
        if(fieldtypes.length == 3){
          sum++;
        }
      }
    }
  }
  return sum * 3;
}

function getPointsOfFullMountains(){
  let count = 0; 
  for(let i = 0; i < ROW; i++){
    for(let j = 0; j < COL; j++){
      if(MAP[i][j] == "mountain"){
        let currNeighbor = getNeighborFields(i, j);
        let b = true;
        for(let k = 0; k < currNeighbor.length; k++){
          if(MAP[currNeighbor[k][0]][currNeighbor[k][1]] == "0"){
            b = false;
          }
        }
        if(b){
          count++;
        }
      }
    }
  }
  return count;
}


function getNeighborFields(row, col){
  let neighbors = []
  for(let i = row-1; i <= row+1; i++){
    for(let j = col-1; j <= col+1; j++){
      if((row == i && col != j) || (row != i && col == j)){
        if(i >= 0 && i <= 10 && j >= 0 && j <= 10){
          neighbors.push([i, j]);
        }
      }
    }
  }
  return neighbors;
}

/*
Idő
*/

function getRemainingTime(){
  return MAXTIME - TIME;
}

function getRemainingSeasonTime(){
  return SEASONMAXTIME - seasonTime;
}


function addTime(){
  TIME += getActElement().time;
  seasonTime += getActElement().time;
}

/*
  Pontok
*/

function getMissionPoints(title){
  switch (title) {
    case "Az erdő széle":
      return getPointsOfErdo_Szele();
      break;
    case "Álmos-völgy":
      return getPointsOfAlmosVolgy();
      break;
    case "Krumpliöntözés":
      return getPointsOfKrumpliOntozes();
      break;
    case "Határvidék":
      return getPointsOfHatarvidek();
      break;
    case "Fasor":
      return getPointsOfFasor();
      break;
    case "Gazdag város":
      return getPointsOfGazdagVaros();
      break;
    case "Öntözőcsatorna":
      return getPointsOfOntozoCsatorna();
      break;
    case "Mágusok völgye":
      return getPointsOfMagusokVolgye();
      break;
    case "Üres telek":
      return getPointsOfUresTelek();
      break;
    case "Sorház":
      return getPointsOfSorHaz();
      break;
    case "Páratlan silók":
      return getPointsOfParatlanSilok();
      break;
    case "Gazdag vidék":
      return getPointsOfGazdagVidek();
      break;
    default:
      return 0;
  }
}
function getPoints(){
  return {point1: getMissionPoints(getActiveMissions().mission1["title"]),
          point2: getMissionPoints(getActiveMissions().mission2["title"])};
}
function getSeasonPoints(){
  let point1 = getPoints().point1;
  let point2 = getPoints().point2;
  let sum = (point1 + point2 + getPointsOfFullMountains());
  POINTS += sum;

  switch(seasonIndex){
    case 0:
      sumOfSpringPoints += sum;
      pointsOfA += point1;
      pointsOfB += point2;
      break;
    case 1:
      sumOfSummerPoints += sum;
      pointsOfB += point1;
      pointsOfC += point2;
      break;
    case 2: 
      sumOfAutumnPoints += sum;
      pointsOfC += point1;
      pointsOfD += point2;
      break;
    case 3:
      sumOfWinterPoints += sum;
      pointsOfD += point1;
      pointsOfA += point2;
      break;
    default:
      break;
  }
  
}

/*
  Évszakok
*/
function checkSeason(){
  
  if(seasonTime >= 7){
    newSeason();
    seasonTime = seasonTime % 7;
    return true;
  }
}
function newSeason(){
  getSeasonPoints();
  updatePoints();
  removeMissionBorders();
  if(seasonIndex < 3){
    seasonIndex++;
  }
  updateMissionBorder();
  shuffleDeck();
  
}

function shuffleDeck(){
  shuffledElements = shuffleArray(elements);
}

/*
  Játék vége
*/

function checkEndOfGame(){
  if(TIME >= MAXTIME){
    endOfGame();
  }
}

function endOfGame(){ 
  endGameDiv.style.display = "block";
  mainContainer.classList.add("endedGame");
  endPointsSpan.innerHTML = POINTS;
  EndpointA.innerHTML = pointsOfA;
  EndpointB.innerHTML = pointsOfB;
  EndpointC.innerHTML = pointsOfC;
  EndpointD.innerHTML = pointsOfD;
  removeMissionBorders();
}

//Forgatás és tükrözés
function mirror(){
  const actElement = getActElement();
  if(actElement.mirrored){
    actElement.mirrored = false;
  }
  else{
    actElement.mirrored = true;
  }
}

function rotate(){
  const actElement = getActElement();
  if(++actElement.rotation == 4){
    actElement.rotation = 0;
  }
}

function rotateMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const rotatedMatrix = new Array(numCols);
  for (let i = 0; i < numCols; i++) {
    rotatedMatrix[i] = new Array(numRows);
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      rotatedMatrix[j][numRows - 1 - i] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}


function mirrorMatrix(matrix) {
  let mirroredMatrix = copyMatrix(matrix);
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      mirroredMatrix[i][j] = matrix[i][matrix[i].length - 1 - j];
    }
  }
  return mirroredMatrix;
}


//Lerakáshoz

function place(row, col){
  if(placeable(row,col)){
    for(let i = 0; i < actShape.length; i++){
      for(let j = 0; j < actShape[i].length; j++){
        const actRow = row - 1 + i;
        const actCol = col - 1 + j;
        if(actShape[i][j] == 1){
          MAP[actRow][actCol] = getActElement().type;
        }
      }
    }
    addTime();

    let changedSeason = checkSeason();
    checkEndOfGame();
    initPlaceMap();
    newElement(changedSeason);
    genTableDivs();
    placementGen();
  }
}

function showPlaces(row, col){
  for(let i = 0; i < actShape.length; i++){
    for(let j = 0; j < actShape[i].length; j++){
      const actRow = row - 1 + i;
      const actCol = col - 1 + j;
      if(actShape[i][j] == 1){
        if(placeable(row, col)){
          placeMap[actRow][actCol] = 1;
        }
        else{
          if(actRow >= 0 && actRow <= 10 && actCol >= 0 && actCol <= 10){
            placeMap[actRow][actCol] = 2;
          }
          
        }
      }
    }
  }
}

function placeable(row, col){
  if(!outOfTheMap(row, col) && !collide(row, col)){
    return true;
  }
  else{
    return false;
  }
}

function outOfTheMap(row, col){
  for(let i = 0; i < actShape.length; i++){
    for(let j = 0; j < actShape[i].length; j++){
      const actRow = row - 1 + i;
      const actCol = col - 1 + j;
      if(actShape[i][j] == 1 && ((actRow < 0 || actRow > 10) || (actCol < 0 || actCol > 10))){
        return true;
      } 
    }
  }
  return false;
}

function collide(row, col){
  for(let i = 0; i < actShape.length; i++){
    for(let j = 0; j < actShape[i].length; j++){
      const actRow = row - 1 + i;
      const actCol = col - 1 + j;
      if(actShape[i][j] == 1 && MAP[actRow][actCol] != "0"){
        return true;
      }
    }
  }
  return false;
}

/*
  Új Element
*/
function newElement(changedSeason){
  if(changedSeason){
    elementIndex = 0;
  }
  else{
    elementIndex++;
  }
  if(elementIndex == shuffledElements.length){
    shuffledElements = shuffleArray(elements);
    elementIndex = 0;
  }
  actShape = copyMatrix(getActElement().shape);
}


//Generáló függvények
function genTableDivs(){
    TABLE.innerHTML = "";
    for(let i = 0; i < ROW; i++){
        for(let j = 0; j < COL; j++){
            const cell = document.createElement("div");
            cell.classList.add("cells");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.style.backgroundImage = field(MAP[i][j]);
            if(placeMap[i][j] == 1){
              cell.classList.add("green");
            }
            else if(placeMap[i][j] == 2){
              cell.classList.add("red");
            }
            else{
              removeBorderClassLists(cell);
            }
            TABLE.append(cell)
        }
    }
}

function removeBorderClassLists(e){
  if(e.classList.contains("green")){
    e.classList.remove("green");
  }
  if(e.classList.contains("red")){
    e.classList.remove("red");
  }
}

function placementGen(){
    PLACEMENT.innerHTML = "";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            const ge = document.createElement("div");
            ge.classList.add("gridElement");
            if(actShape[i][j] == 1){
              ge.style.backgroundImage = field(getActElement().type);
            }
            else{
              ge.style.backgroundImage = field("0");
            }
            
            PLACEMENT.append(ge);
        }
    }
}

function updateTime(){
  timeSpan.innerHTML = getActElement().time;
}

function updateTimer(){
  timerSpan.innerHTML = `${getRemainingSeasonTime()}/${SEASONMAXTIME}`;
}

function updateSeason(){
  seasonSpan.innerHTML = `${SEASONS[seasonIndex]}`;
}

function updatePoints(){
  pointsSpan.innerHTML = POINTS;
  springPoints.innerHTML = sumOfSpringPoints;
  summerPoints.innerHTML = sumOfSummerPoints;
  autumnPoints.innerHTML = sumOfAutumnPoints;
  winterPoints.innerHTML = sumOfWinterPoints;
  pointA.innerHTML = `(${pointsOfA} pont)`;
  pointB.innerHTML = `(${pointsOfB} pont)`;
  pointC.innerHTML = `(${pointsOfC} pont)`;
  pointD.innerHTML = `(${pointsOfD} pont)`;
}

function field(f){
    switch (f) {
      case "mountain":
        return "url('img/tiles/mountain_tile.png')";
        break;
      case "forest":
        return "url('img/tiles/forest_tile.png')";
        break;
      case "water":
        return "url('img/tiles/water_tile.png')";
        break;
      case "farm":
        return "url('img/tiles/plains_tile.png')";
        break;
      case "town":
        return "url('img/tiles/village_tile.png')";
        break;
      default:
        return "url('img/tiles/base_tile.png')";
    }
}

function showMissions(){
  if(randomMissions.length >= 4){
    missionA.style.backgroundImage = mission_Eng(randomMissions[0]["title"]);
    missionB.style.backgroundImage = mission_Eng(randomMissions[1]["title"]);
    missionC.style.backgroundImage = mission_Eng(randomMissions[2]["title"]);
    missionD.style.backgroundImage = mission_Eng(randomMissions[3]["title"]);
  }
}

function removeMissionBorders(){
  switch (seasonIndex){
    case 0:
      missionA.classList.remove("activeMission");
      missionB.classList.remove("activeMission");
      
      break;
    case 1:
      missionB.classList.remove("activeMission");
      missionC.classList.remove("activeMission");
      break;
    case 2:
      missionC.classList.remove("activeMission");
      missionD.classList.remove("activeMission");
      break;
    case 3:
      missionD.classList.remove("activeMission");
      missionA.classList.remove("activeMission");
      break;
    default:
      break;
  }
}

function updateMissionBorder(){
  switch (seasonIndex){
    case 0:
      console.log("itt van")
      missionA.classList.add("activeMission");
      missionB.classList.add("activeMission");
      break;
    case 1:
      missionB.classList.add("activeMission");
      missionC.classList.add("activeMission");
      break;
    case 2:
      missionC.classList.add("activeMission");
      missionD.classList.add("activeMission");
      break;
    case 3:
      missionD.classList.add("activeMission");
      missionA.classList.add("activeMission");
      break;
    default:
      break;
  }
}

function mission(m){
  switch (m) {
    case "Az erdő széle":
      return "url('img/missions_hun/Erdo_Szele.png')";
      break;
    case "Álmos-völgy":
      return "url('img/missions_hun/Almos-Volgy.png')";
      break;
    case "Krumpliöntözés":
      return "url('img/missions_hun/Krumpli_Ontozes.png')";
      break;
    case "Határvidék":
      return "url('img/missions_hun/Hatarvidek.png')";
      break;
    case "Fasor":
      return "url('img/missions_hun/Fasor.png')";
      break;
    case "Gazdag város":
      return "url('img/missions_hun/Gazdag_Varos.png')";
      break;
    case "Öntözőcsatorna":
      return "url('img/missions_hun/Ontozocsatorna.png')";
      break;
    case "Mágusok völgye":
      return "url('img/missions_hun/Magusok_Volgye.png')";
      break;
    case "Üres telek":
      return "url('img/missions_hun/Ures_Telek.png')";
      break;
    case "Sorház":
      return "url('img/missions_hun/Sorhaz.png')";
      break;
    case "Páratlan silók":
      return "url('img/missions_hun/Paratlan_Sillok.png')";
      break;
    case "Gazdag vidék":
      return "url('img/missions_hun/Gazdag_Videk.png')";
      break;
    default:
      return "url('img/missions_hun/Gazdag_Videk.png')";
  }
}

//The names are in hungarian, because they were given in this language
function mission_Eng(m){
  switch (m) {
    case "Az erdő széle":
      return "url('img/missions_eng/Edge_forest.png')";
      break;
    case "Álmos-völgy":
      return "url('img/missions_eng/Sleepy_valley.png')";
      break;
    case "Krumpliöntözés":
      return "url('img/missions_eng/Watering_potatoes.png')";
      break;
    case "Határvidék":
      return "url('img/missions_eng/Borderlands.png')";
      break;
    case "Fasor":
      return "url('img/missions_eng/Tree_line.png')";
      break;
    case "Gazdag város":
      return "url('img/missions_eng/Wealthy_town.png')";
      break;
    case "Öntözőcsatorna":
      return "url('img/missions_eng/Watering_canal.png')";
      break;
    case "Mágusok völgye":
      return "url('img/missions_eng/Magicians_valley.png')";
      break;
    case "Üres telek":
      return "url('img/missions_eng/Empty_site.png')";
      break;
    case "Sorház":
      return "url('img/missions_eng/Row_of_houses.png')";
      break;
    case "Páratlan silók":
      return "url('img/missions_eng/Odd_numbered_silos.png')";
      break;
    case "Gazdag vidék":
      return "url('img/missions_eng/Rich_countryside.png')";
      break;
    default:
      return "url('img/missions_eng/Rich_countryside.png')";
  }
}


