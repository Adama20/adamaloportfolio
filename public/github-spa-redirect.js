
// Script pour gérer la redirection SPA sur GitHub Pages
(function() {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
  
  // Gestion des URLs avec paramètres p et q (provenant de 404.html)
  var l = window.location;
  var params = {};
  l.search.slice(1).split('&').forEach(function(param) {
    var pair = param.split('=');
    params[pair[0]] = pair[1];
  });
  
  if (params.p) {
    var route = params.p.replace(/~and~/g, '&');
    history.replaceState(null, null, route);
  }
})();
