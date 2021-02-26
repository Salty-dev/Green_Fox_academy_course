$("#button1").click(function() {
    alert("Igen, most rákattintottál.")
})


$("#button22").click(function() {
    $("#button21").text("Gombóc")
})


$("#button33").click(function() {
    $("#buttons3 button").css("background-color", "yellow")
})


$("#button43").click(function() {
    var selectedColor = $("#colors option:selected").html()
    $("#button43").css("background-color", selectedColor)
})


$("#button53").click(function() {
    var selectedColor2 = $("#colors2 option:selected").html()
    $("#button53").css("background-color", selectedColor2)
    $("#button53").attr("disabled", true)
})