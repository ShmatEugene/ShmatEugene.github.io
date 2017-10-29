document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 700);
}

document.getElementById('pageClick').onclick = function() {
    url=this.href;
    setTimeout('location.href=url',500);
    this.href='javascript:void(0)';
    
    
    $('.img-box').addClass('done');
    $('canvas').addClass('done');
    $('#logo-main').addClass('done');
    $('.left-content').addClass('done');
    $('.plastic-bg').addClass('plactic');
    $('.plastic-right-bg').addClass('plactic');
}

document.getElementById('pageClick2').onclick = function() {
    url=this.href;
    setTimeout('location.href=url',500);
    this.href='javascript:void(0)';
    
    
    $('.img-box').addClass('done');
    $('canvas').addClass('done');
    $('.left-content').addClass('done');
    $('.glass-bg').addClass('glassbgtrans');
    $('.right-bg').addClass('full-opacity');
    $('.glass-right-bg').addClass('glassbgtrans');
}

document.getElementById('pageClick3').onclick = function() {
    url=this.href;
    setTimeout('location.href=url',500);
    this.href='javascript:void(0)';
    
    
    $('.img-box').addClass('done');
    $('canvas').addClass('done');
    $('.left-content').addClass('done');
    $('.paper-bg').addClass('paperbgtrans');
    $('.right-bg').addClass('full-opacity');
    $('.paper-right-bg').addClass('paperbgtrans');
}





$(document).ready(function(){
  $("#owl-1").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      animateOut: 'slideOutDown',
      animateIn: 'slideInDown',
      mouseDrag: false,
      touchDrag: false,
  });
});


$(document).ready(function(){
  $("#owl-2").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      mouseDrag: false,
      touchDrag: false,
  });
});

$(document).ready(function(){
  $("#owl-3").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      mouseDrag: false,
      touchDrag: false,
  });
});





var owl = $('.owl-carousel');

    owl.on('mousewheel', '.owl-stage',  function(e) {
       if (e.deltaY > 0) {
           
            owl.trigger('next.owl');
            
       } else {
            owl.trigger('prev.owl');
       }
       e.preventDefault();
    });




