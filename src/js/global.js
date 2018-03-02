var pagePath = window.location.pathname;

var heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--generic-' + getRandomInt(1, 5) + '.jpg)';
var heroText = 'Green Farm Parts';

if (pagePath.match(/Filters/i)) {
    heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--filters.jpg)';
    heroText = 'Oil Filters';
}

if (pagePath.match(/Maintenance-Kits/i)) {
    heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--maintenance-kits.jpg)';
    heroText = 'Maintenance Kits';
}

if (pagePath.match(/Toys/i)) {
    heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--toys.jpg)';
    heroText = 'Toys';
}

updateHero(heroImg, heroText);

var breadcrumbs = document.querySelector('.matching_results_text');

if (breadcrumbs) {
    breadcrumbs.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('breadcrumbs');
}

var searchBarContainer = document.querySelector('.search-bar-container');
var searchBarContainerOffset = searchBarContainer.offsetTop;

if (searchBarContainer) {
    window.addEventListener('scroll', fixSearch);
}

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

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

function updateHero(heroImg, heroText) {
    var heroContainer = document.querySelector('.hero--not-home');
    heroContainer.style.backgroundImage = heroImg;
    var heroHeading = heroContainer.querySelector('h1');
    heroHeading.innerHTML = heroText;
    heroHeading.style.opacity = 1;
}

function fixSearch() {
    if (window.scrollY >= searchBarContainerOffset) {
        document.body.style.paddingTop = searchBarContainer.offsetHeight + 'px';
        document.body.classList.add('search-bar-fixed');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('search-bar-fixed');
    }
}