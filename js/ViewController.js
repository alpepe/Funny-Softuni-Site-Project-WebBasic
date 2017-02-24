function startApp() {
    "use strict";
    hideMain();


    $("#programmer").click(showMenu);

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
