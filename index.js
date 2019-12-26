$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


function sendMail() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    if (name != "" && phone != "" && message != "")
        window.open('mailto:jawher_hamza@yahoo.fr?subject=Hi I\'m ' + name + '&body=' + message + ' My Phone Number :' + phone + '');
}

function openLink(search) {
    window.open("http://www.google.com/search?q=" + search, '_blank')
}

document.querySelectorAll('.progress-title').forEach(item => {
    item.addEventListener('click', event => {
        window.open("http://www.google.com/search?q=" + event.srcElement.innerHTML, '_blank')
    })
})


// document.getElementById("year").innerHTML = new Date().getFullYear();