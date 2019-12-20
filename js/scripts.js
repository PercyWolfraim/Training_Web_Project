$('#contactBoton').click(function(e){
  e.preventDefault();
  alert("Las redes sociales estan en mantenimiento");
});

var images = $('.G-obra').clone();

$('.G-obra').after(images);

$('#Ejemplo4').remove();

$('#FlechaD').click(function(){
  $('#Ejemplo1').fadeOut('fast',function(){
    $('#Ejemplo2').fadeIn();
  });
});
$('#FlechaI').click(function(){
  $('#Ejemplo2').fadeOut('fast',function(){
    $('#Ejemplo1').fadeIn();
  });
});
