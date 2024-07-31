$('#mentorCarousal').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})



$('#toppersCarousal').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items:6
        }
    }
})


gsap.from("body"), {
    x: 100,
    duration: 2,
    ease: "bounce",
}