// load images based on search keyword
// ex: apple returns image url for picture of an apple
// sets the url to a image tag's source
console.log("Loading Images")
$(document).ready(function() {
    let searchbox = $("#searchfield")
    let image = $("#image")
    $("#search").on("click",(e)=>{
        console.log("Pressed")
        var term = searchbox.val()
        console.log(term)

        image.attr("src",`https://source.unsplash.com/160x90/?${term}`)

    })
    // $("#image").attr("src","https://source.unsplash.com/160x90/?apple");
})