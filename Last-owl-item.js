findLastActiveItem();
$(".owl-carousel").on('translated.owl.carousel', function (event) {
    findLastActiveItem();
});

function findLastActiveItem() {
    var total = $('.owl-carousel.owl-stage .owl-item.active').length;

    $('.owl-carousel .owl-stage .owl-item').removeClass('last-active-item');

    $('.owl-carousel .owl-stage .owl-item.active').each(function (index) {
        if (index === total - 1 && total > 1) {
            // Last active item from the carousel
            $(this).addClass('last-active-item');
        }
    });
} 
 
