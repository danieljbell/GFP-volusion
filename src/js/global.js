(function() {

    document.addEventListener('click', function(e) {

        if ((e.target.id === 'hamburger') || (e.target.classList.contains('hamburger-box')) || (e.target.classList.contains('hamburger-inner'))) {
            toggleMenu();
        }

        if (e.target.classList.contains('accordian-toggle--site-header')) {
            toggleMenuAccordian(e);
        }

        if (e.target.hash === '#chat') {
            toggleChatWindow(e);
        }

    });

    // document.addEventListener('mouseover', function(e) {

    //     if (e.target.classList.contains('accordian-toggle--site-header')) {
    //         if (window.innerWidth > 1080) {
    //             toggleMenuAccordian(e);
    //         }
    //     }
    // });

    function toggleMenu() {
        document.body.classList.toggle('menu-open');
        var menuButton = document.querySelector('#hamburger');
        menuButton.classList.toggle('is-active');
    }

    function toggleMenuAccordian(e) {
        var self = e.target;
        console.log(self);
        if (!self.nextElementSibling) { return }
        self.classList.toggle('active');
        self.nextElementSibling.classList.toggle('accordian-open');
    }

    function toggleChatWindow(e) {
        e.preventDefault();
        if (window.fcWidget.isOpen() != true) {
            window.fcWidget.open();
        } else {
            window.fcWidget.close();
        }
    }

})();