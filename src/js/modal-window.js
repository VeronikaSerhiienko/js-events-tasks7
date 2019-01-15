;(function() {
  document.querySelector('.js-modal-window-button-open').addEventListener('click', function(event){    
    setTimeout(function(){
      document.querySelector('.js-modal-window').classList.add('visible');
      document.querySelector('.js-modal-window-wrapper').classList.add('visible');
    },500);
  });

  document.querySelector('.js-button-close').addEventListener('click', function(event) {
    document.querySelector('.js-modal-window').classList.remove('visible');
    document.querySelector('.js-modal-window-wrapper').classList.remove('visible');
});

  document.querySelector('.js-modal-window-wrapper').addEventListener('click', function(event) {
    document.querySelector('.js-modal-window').classList.remove('visible');
    document.querySelector('.js-modal-window-wrapper').classList.remove('visible');
    
});

  document.querySelector('.js-modal-window').addEventListener('click', function(event) {
    event.stopPropagation();    
});


})();
