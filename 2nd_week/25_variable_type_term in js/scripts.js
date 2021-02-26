let age = 2021 - 1970
let ww2 = 1945 - 1939
let tesla = 76 * 710.9
let secondOfDay = 60 * 60 * 24
let hungarians = 9660351 / 7847784750
let bigger = 9640821 / 78866
let participants = 654 % 7

document.getElementById("age").innerHTML = age + " éves vagyok."
document.getElementById("ww2").innerHTML = ww2 + " évig tartott a 2. világháború."
document.getElementById("tesla").innerHTML = tesla + "$-ba kerül 76 TESLA részvény 2021. 02. 23.-án."
document.getElementById("secondOfDay").innerHTML = secondOfDay + " másodperc van egy nap."
document.getElementById("hungarians").innerHTML = hungarians + "% a magyar lakosság aránya a Föld népességéhez képest 2021. 02. 23.-án."
document.getElementById("bigger").innerHTML = bigger + "-szer nagyobb Kína területe Csehország területéhez képest."
document.getElementById("participants").innerHTML = participants + " fős lesz a legkisebb létszámú Discord csatorna."

let names = ['István', 'László', 'Katalin']
let names3Hossz = names[2].length
/* Az alábbi két sor kommentjeit egyesével szüntesd meg és frissítsd a böngészőlapot, ha szükséges!
   Nézd meg az eredmények változását a parancsok hatására! */

//names.push('Erzsébet')
//names[0] = 'Zoltán'
let namesDB = names.length

document.getElementById("names").innerHTML = "A names tömb elemei: " + names
document.getElementById("names3hossz").innerHTML = "A tömb 3. eleme: " + names[2] + ", amely " + names3Hossz + " karakter hosszú."
document.getElementById("namesElemSzam").innerHTML = "A names tömbben " + namesDB + " elem van."

let firstObject = {
    colors: ["red", "green", "blue"]
}

if (firstObject.colors.length > 3) {
    firstObject.hasManyColors = true
} else {
    firstObject.hasManyColors = false
}


document.getElementById("objectFirst").innerHTML = "A firstObject objektum első adatmezője: " + firstObject.colors
document.getElementById("boolValue").innerHTML = "A hasManyColors mező értéke: " + firstObject.hasManyColors