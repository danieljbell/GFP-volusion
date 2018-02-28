(function() {

    document.addEventListener('click', function(e) {
        
        if (e.target.classList.contains('menu-toggle')) {
            toggleMenu();
        }

        if (e.target.classList.contains('accordian-toggle--site-header')) {
            toggleMenuAccordian(e);
        }

        if (e.target.hash === '#chat') {
            toggleChatWindow(e);
        }

    });

    function toggleMenu() {
        document.body.classList.toggle('menu-open');
    }

    function toggleMenuAccordian(e) {
        var self = e.target;
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