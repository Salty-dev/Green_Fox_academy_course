let counter = 0

$("#increment").click(function() {
    counter += 1
    $("#number").text(counter)
})

$("#decrement").click(function() {
    counter -= 1
    $("#number").text(counter)
})