$("button").click(function() {
    var newItem = $("input").val()
    $("ul").append("<li><span>" + newItem + "</span><i class='fas fa-trash-alt'></i><i class='far fa-check-circle'></i></li>")
    $("input").val("")
})

$("ul").on("click", "li .fa-check-circle", function( event ) {
    $(this).parent().toggleClass("done")
})

$("ul").on("click", "li .fa-trash-alt", function( event ) {
    $(this).parent().remove()
})