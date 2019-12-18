$('#contactBoton').click(function(e){
  e.preventDefault();
  alert("Las redes sociales estan en mantenimiento");
});

var images = $('.G-obra').clone();

$('.G-obra').after(images);

$('#Ejemplo3').remove();
$('#Ejemplo4').remove();

$('#FlechaD').click(function(){
  $('#Ejemplo1').fadeOut('fast',function(){
    $('#Ejemplo2').fadeIn();
  });

});
