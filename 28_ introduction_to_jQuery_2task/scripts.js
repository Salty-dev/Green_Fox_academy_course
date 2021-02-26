var color = "purple"
var number = 10
var word = "cool"

if (color === "purple") {
    $(".north").css("background", color)
}

if (number > 100) {
    $(".east").text("wow, de nagy szám")
} else {
    $(".east").text("ez csak egy közönséges szám")
}

if (word === "cool") {
    $(".south").text("A DOM ereje")
} else {
    $(".west").text("A DOM ereje")
}