$('#contactBoton').click(function(e){
  e.preventDefault();
  alert("Las redes sociales estan en mantenimiento");
})

var images = $('.G-obra').clone();

$('.G-obra').after(images);
