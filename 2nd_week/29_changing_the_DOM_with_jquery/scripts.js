var namesArray = ["Zoltán", "István", "Wanda", "Zoé"]
namesArray.forEach(namesLoop)
function namesLoop(dataarray) {
    if (dataarray === "Zoltán") {
        $("ul").append("<li class='ownname'>" + dataarray + "</li>")
        $(".ownname").css("font-weight", "bold")
    } else {
        $("ul").append("<li>" + dataarray + "</li>")
    }
}

var additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
}

$("body").append("<h1>" + additionalBlock.title + "</h1>")
$("body").append("<p>" + additionalBlock.text + "</p>")