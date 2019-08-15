$('.home-testimonials-slider').slick({
  infinite: true,
  slidesToShow: 3,
  prevArrow: $('.home-testimonials-slider-controls-left'),
  nextArrow: $('.home-testimonials-slider-controls-right'),
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

$('.home-partners-slider').slick({
  infinite: false,
  slidesToShow: 6,
  arrows : false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

let itemHeight = $('.sh-partners-list-item').height();
$( ".sh-partners-list-item-extending-btn" ).click(function() {
  let hiddenTextHeight = $(this).closest('.sh-partners-list-item-extending').children('.sh-partners-list-item-extending-hidden-text').height();
  let hiddenTextTop = itemHeight;
  let lineBottom = hiddenTextHeight - itemHeight + 70;

  $(this).closest('.sh-partners-list-item-extending').children('.sh-partners-list-item-extending-hidden-text').css('top', '-' + hiddenTextTop + 'px')
  $( this ).toggleClass( "active" );
  $(this).closest('.sh-partners-list-item-extending').children('.sh-partners-list-item-extending-hidden-text').toggleClass( "active" );
  $(this).closest('.sh-partners-list-item').children('.sh-partners-list-item-short').toggleClass( "active" );
  $(this).closest('.sh-partners-list-item').toggleClass('active');
  $(this).closest('.sh-partners-list-item-extending').children('.sh-partners-list-item-extending-line').toggleClass('active')


  if($(this).closest('.sh-partners-list-item').hasClass('active')) {
    $(this).closest('.sh-partners-list-item-extending').children('.sh-partners-list-item-extending-line').css('bottom', '-' + lineBottom + 'px');
  } else {
    $(this).closest('.sh-partners-list-item-extending').children('.sh-partners-list-item-extending-line').css('bottom', '0' + 'px')
  }


});


$('#header-nav-humburger').click(function() {
  $(this).toggleClass('is-active');
  $(this).closest('.header-nav').toggleClass('active')
});
