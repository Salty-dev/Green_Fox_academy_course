var i
for (i = 0; i < 10; i++) {
    document.getElementById("numbers1").innerHTML += "A(z) " + (i+1) + ". szám értéke: " + i + "<br>"
}


for (i = 0; i < 10; i++) {
    document.getElementById("numbers2").innerHTML += "A(z) " + (i+1) + ". szám értéke: " + (i+1) + "<br>"
}


var j = 1
for (i = 0; i <= 20; i++) {
    var remainder = i % 2
    if (i != 0 &&  remainder == 0) {
        document.getElementById("numbers3").innerHTML += "A(z) " + j + ". páros szám értéke: " + i + "<br>"
        j++
    }
}


var numberValue
function numberTill() {
    numberValue = document.getElementById("number").value
    for (i = 0; i < numberValue; i++) {
        document.getElementById("funcValue1").innerHTML += "A(z) " + (i+1) + ". szám értéke: " + (i+1) + "<br>"
    }
}


var firstnameValue
function greetingTo() {
    firstnameValue = document.getElementById("firstname").value
    document.getElementById("funcValue2").innerHTML += "Üdvözöllek " + firstnameValue + "! <br>"
}


var numArray = [0, 3, 6, 7, 9]
arrayExample(numArray)
function arrayExample(dataarray) {
    for (i = 0; i < dataarray.length; i++) {
        document.getElementById("arrayValues").innerHTML += dataarray[i] + "<br>"
    }
}


numArray.forEach(arrayExample2)
function arrayExample2(dataarray) {
    document.getElementById("eachLoopValues").innerHTML += dataarray + "<br>"
}