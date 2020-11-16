function rollDice(sides) {
    document.getElementById("multidice").innerHTML = "";
    var moreDice = Number(document.getElementById("dicemultiply").value);
    var rolled = document.getElementById("results");
    var multiDice = document.getElementById("multidice");
    var rolledNumber = Math.floor(Math.random() * sides) + 1;
    var modifier = Number(document.getElementById("modify").value);
    var arr = []; 
    var critical = Number.Number;


function getSum(total,num) {
    return total + num;
}

    //randomiser for single or multiple throws
for (var i=0; i<moreDice; i++) {
 if (moreDice>1) {
     var rolledNumberMulti = Math.floor(Math.random()*sides) +1 + modifier;
     arr.push(rolledNumberMulti);
     var reducedArr = arr.reduce(getSum);
     multiDice.innerHTML += "<p>" + rolledNumberMulti + "</p>";
     rolled.innerHTML = "<p>" + reducedArr + "</p>";
 } else {
     multiDice.innerHTML = "";
     var rolledNumberFinal = rolledNumber + modifier;
     rolled.innerHTML = "<p>" + rolledNumberFinal + "</p>";
 }
}

    //alers for critical and failed throws (in addition to other dices, but critical only for d20)
    if (rolledNumber==1) alert ("Ooops, i did it again");
    else if (rolledNumber==20) alert ("Well done!");
    else if ((rolledNumberMulti-modifier)==20) alert ("Well done!");
    else if ((rolledNumberMulti-modifier)==1) alert ("Ooops, i did it again");


document.getElementById("selected-die").innerHTML = ""
document.getElementById("selected-die").innerHTML = "<p> d" + sides + "</p>"
}