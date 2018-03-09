if (window.innerWidth > 1080) {
    $('.menu-item--top-level .sub-menu--level-one > li:nth-child(2)').addClass('active').find('.sub-menu--level-two').addClass('accordian-open');
}

var pagePath = window.location.pathname;

var heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--generic-' + getRandomInt(1, 5) + '.jpg)';
var heroText = 'Green Farm Parts';

var breadcrumbs = document.querySelector('.matching_results_text');

if (breadcrumbs) {
    var breadcrumbArray = breadcrumbs.previousElementSibling.textContent.split('>');
    heroText = breadcrumbArray[breadcrumbArray.length - 1];    
}


if (pagePath.match(/Filters/i)) {
    heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--filters.jpg)';
    // heroText = 'Oil Filters';
}

if (pagePath.match(/Maintenance-Kits/i)) {
    heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--maintenance-kits.jpg)';
    // heroText = 'Maintenance Kits';
}

if (pagePath.match(/Toys/i)) {
    heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--toys.jpg)';
    // heroText = 'Toys';
}

if (pagePath === '/searchresults.asp') {
    searchString = window.location.search;
    searchStringArray = searchString.split('&');
    
    function filterItems(query) {
      return searchStringArray.filter(function(el) {
          return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
      })
    }

    var searchStringTerm = filterItems('search=').toString().split('=')[1];
    searchStringTerm = searchStringTerm.split('+').join(' ');
    heroText = 'Search for: ' + searchStringTerm;
}

if ((pagePath === '/ShoppingCart.asp') || pagePath === '/shoppingcart.asp') {
    heroText = 'Shopping Cart';
    var itemDescription = document.querySelector('#v65-cart-header-itemdescription font');
    if (itemDescription != null) {
        var itemDescriptionArray = itemDescription.innerHTML.split('&nbsp;');
        itemDescription.innerHTML = itemDescriptionArray[0] + ' ' + itemDescriptionArray[2];
    }
    var emptyCartRow = $('.v65-cart-shipping-details-row').children().first();
    if (emptyCartRow.length < 0) {
        emptyCartRow.siblings().remove();
        emptyCartRow[0].colSpan = 12;    
    }
}

if (pagePath === '/myaccount.asp') {
    heroText = 'My Account Details';
}

if (pagePath === '/login.asp') {
    heroText = 'Login';
}

if (pagePath === '/terms.asp') {
    heroText = 'Terms and Conditions';
}

if (pagePath === '/one-page-checkout.asp') {
    heroText = 'Checkout';

    var billInputs = [
        "v65-onepage-billfirstname",
        "v65-onepage-billlastname",
        "v65-onepage-billcompanyname",
        "v65-onepage-billaddr1",
        "v65-onepage-billaddr2",
        "v65-onepage-billcity",
        "v65-onepage-billpostalcode",
        "v65-onepage-billphone",
        "v65-onepage-billfax",
        "v65-cart-billemail"
    ];

    document.addEventListener('keyup', function(e) {
        if (billInputs.includes(e.target.id)) {
            var self = e.target;
            var val = self.value;
            matchCheckoutInput(self, val);
        } 
    });

}

if (pagePath != '/') {
    updateHero(heroImg, heroText);
}





if (breadcrumbs) {
    breadcrumbs.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('breadcrumbs');
}

var siteHeader = document.querySelector('.site-header');
var siteHeaderOffset = siteHeader.offsetTop;

if (siteHeader) {
    window.addEventListener('scroll', fixHeader);
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
    if ($(self).parent().hasClass('active')) {
        $(self).parent().removeClass('active');
        $(self).siblings().removeClass('accordian-open');
        return;
    }
    $(self).parent('.menu-item-has-children').addClass('active').siblings().removeClass('active').find('.sub-menu--level-two').removeClass('accordian-open');
    $(self).siblings().addClass('accordian-open');
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

function fixHeader() {
    if (window.scrollY > siteHeaderOffset) {
        document.body.style.paddingTop = siteHeader.offsetHeight + 'px';
        document.body.classList.add('site-header-fixed');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('site-header-fixed');
    }
}

function matchCheckoutInput(elem, val) {
    var input = elem.id.split('-')[2].substring(4);
    var shipElem = document.querySelector('#v65-onepage-ship' + input);
    if (!shipElem) { return; }
    shipElem.value = val;
}


/*
=========================
RESPONSIVE SHOPPING CART
=========================
*/
if ((pagePath === '/ShoppingCart.asp') || pagePath === '/shoppingcart.asp') {
    var reCalcButton = $('#btnRecalculate');
    // console.log(reCalcButton);
    $('#v65-cart-shipping-details-wrapper').remove();
    var shoppingCartForm = $('#v65-cart-table').parent('form');
    var cartRows = document.querySelectorAll('#v65-cart-table .v65-cart-details-row');
    var cleanCartRows = [];

    for (var i = 0; i < cartRows.length; i++) {
        var removeLink = cartRows[i].querySelector('.v65-cart-item-remove-link');
        var productImage = cartRows[i].querySelector('.v65-cart-detail-productimage').innerHTML;
        var productName = cartRows[i].querySelector('.v65-cart-details-text .cart-item-name');
        var quantityInput = cartRows[i].querySelector('input[name*="Quantity"]');
        var productPrice = cartRows[i].querySelector('td:nth-child(9) .carttext').innerText;
        var sumPrice = cartRows[i].querySelector('td:nth-child(11) .carttext').innerText;
        cleanCartRows.push({
            removeLink: removeLink,
            productImage: productImage,
            productName: productName,
            quantityInput: quantityInput,
            productPrice: productPrice,
            sumPrice: sumPrice
        });
    }

    shoppingCartForm.prepend('<div id="gfp-responsive-cart"><table><thead><tr><th class="gfp-responsive-cart--product-image"></th><th class="gfp-responsive-cart--product-description">Item</th><th class="gfp-responsive-cart--unit-price">Unit Price</th><th class="gfp-responsive-cart--quantity">Quantity</th><th class="gfp-responsive-cart--unit-total">Total</th><th class="gfp-responsive-cart--remove-item"></th></tr></thead><tbody></tbody></table>' + reCalcButton[0].outerHTML + '</div>');

    $('#v65-cart-table').remove();

    for (var i = 0; i < cleanCartRows.length; i++) {
        var cartTable = $('#gfp-responsive-cart tbody');
        cartTable.append('<tr><td class="gfp-responsive-cart--product-image">' + cleanCartRows[i].productImage + '</td><td class="gfp-responsive-cart--product-description">' + cleanCartRows[i].productName.innerText + '</td><td class="gfp-responsive-cart--unit-price">' + cleanCartRows[i].productPrice + '</td><td class="gfp-responsive-cart--quantity">' + cleanCartRows[i].quantityInput.outerHTML + '</td><td class="gfp-responsive-cart--unit-total">' + cleanCartRows[i].sumPrice + '</td><td class="gfp-responsive-cart--remove-item">' + cleanCartRows[i].removeLink.outerHTML + '</td></tr>');
        // console.log(cleanCartRows[i].removeLink);
    }
}






/*
=========================
RESPONSIVE CHECKOUT
=========================
*/
var checkoutContainer = $('#v65-onepage-Detail');
var billingHeader = $('#billing-header').html();
var billingContent = $('#v65-onepage-BillingParent').html();
var shippingHeader = $('#shipping-header').html();
var shippingContent = $('#v65-onepage-ShippingParent').html();
var additionalInfoHeader = $('.v65-onepage-custom-header-row').html();
var additionalInfoContent = $('.v65-onepage-custom-details-row').html();
var shippingCostHeader = $('#v65-onepage-ShippingCostHeader').html();
var shippingCostContent = $('#v65-onepage-ShippingCostTotals').html();
var shippingTotals = $('#v65-onepage-ShippingCostParent').parent().html();


checkoutContainer.remove();



$('#FormatListofErrorsDiv').after('<div id="gfp-responsive-checkout"></div>');
var respCheckout = $('#gfp-responsive-checkout');

respCheckout.html('<div class="gfp-half"><div>' + billingHeader + billingContent + '</div>' + '<div>' + shippingHeader + shippingContent + '</div></div>');
respCheckout.append('<table id="v65-onepage-additional-info"><tbody><tr>' + additionalInfoHeader + '</tr><tr>' + additionalInfoContent + '</tr></tbody></table>');
respCheckout.append(shippingTotals);



/*
=========================
KILLSHEET
=========================
*/
$('img[src="/v/vspfiles/templates/gfp-test/images/clear1x1.gif"]').remove();
$('.colors_pricebox img[src="/v/vspfiles/templates/gfp-test/images/PBox_Border_Left_Top.gif"]').parent('tr').remove();
if ($('#v65-onepage-breadcrumb')) {
    $('#v65-onepage-breadcrumb').remove();
}
$('#v65-onepage-CopyBillingToShippingLink').remove();



/*
=========================
SINGLE PRODUCT
=========================
*/
if (window.global_Current_ProductCode) {
    document.body.classList.add('single-product');
    var pageTitle = document.title;

    var productDescriptionWrap = $('#v65-productdetail-action-wrapper');
    productDescriptionWrap.css("display", "block").attr('align', 'left');
    productDescriptionWrap.siblings().css("display", "block");

    updateHero(heroImg, pageTitle);

    // SELECTING PAGE CONTENTS
    


}