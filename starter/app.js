$(function(){
   var pokemonSearch;

$(".btn").on("click", function(){
  pokemonSearch=$('.pokedex input[type="text"]').val()
  var request = $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" +pokemonSearch,
    method: "GET",
    // data: { id : menuId },
    // dataType: "html"
  });

  request.done(function( data) {
    $(".pokedex h3").text(data.name.toUpperCase());
    $(".poke-img img").attr("src" , data.sprites.front_default)
   console.log(data)
  });

  request.fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
  });
})

})