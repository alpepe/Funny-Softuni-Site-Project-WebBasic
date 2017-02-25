function startApp() {
    "use strict";
    hideMain();

    $("#programmer").click(showMenu);
    $('#programmer').hover(showFirstScreenImageProgrammer, hideFirstScreenImageProgrammer)
    $('#male').hover(showFirstScreenImageMale, hideFirstScreenImageMale)
    $('#female').hover(showFirstScreenImageFemale, hideFirstScreenImageFemale)


    
    function showFirstScreenImageProgrammer() {
        $('#firstScreenImage').css({'background': ' url("images/FB76BAD4-B93F-11E5-8654-CE024887B159.jpg" ) center no-repeat'});
        $('#firstScreenImage').css({'background-size': 'contain'});
    }

    function hideFirstScreenImageProgrammer() {
        $('#firstScreenImage').css({'background': 'none'});
        $('#firstScreenImage').css({'background-size': 'contain'});
    }

    function showFirstScreenImageMale() {
        $('#firstScreenImage').css({'background': ' url("images/men.png" ) center no-repeat'});
        $('#firstScreenImage').css({'background-size': 'contain'});
    }

    function hideFirstScreenImageMale() {
        $('#firstScreenImage').css({'background': 'none'});
        $('#firstScreenImage').css({'background-size': 'contain'});
    }

    function showFirstScreenImageFemale() {
        $('#firstScreenImage').css({'background': ' url("images/woman.png" ) center no-repeat'});
        $('#firstScreenImage').css({'background-size': 'contain'});
    }

    function hideFirstScreenImageFemale() {
        $('#firstScreenImage').css({'background': 'none'});
        $('#firstScreenImage').css({'background-size': 'contain'});
    }

    function aaa() {
        alert("safasfas")
    }

    function showMenu() {
        $('#home').show()
        $('#middle').show()
        $('#end').show()
        $('#contact').show()
        $('#navbar').show()
        $('#firstScreen').hide()
    }

    function hideMain() {
        $('#home').hide()
        $('#middle').hide()
        $('#end').hide()
        $('#contact').hide()
        $('#navbar').hide()
    }


}
