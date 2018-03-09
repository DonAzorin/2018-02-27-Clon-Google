function buscar(form) {
  var termino = form.escribe.value;
  var buscando = "https://www.google.com.mx/search?q="+termino
  console.log(buscando);
  location.replace(buscando)
}
