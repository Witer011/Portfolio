const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 5,
});

$('.slider_btn_next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider_btn_prew').click(function() {
    owl.trigger('prev.owl.carousel', );
})
