javascript:(function(){
  var currentURL = window.location.href;
  var apiURL = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(currentURL) + '&size=150x150';
  window.open(apiURL, '_blank');
})();
