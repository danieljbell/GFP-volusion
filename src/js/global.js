$('.search-bar-container input').focus();

var siteHeaderHeight = $('.site-header').height();

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




/*
=========================
RESPONSIVE SHOPPING CART
=========================
*/
if ((pagePath === '/ShoppingCart.asp') || pagePath === '/shoppingcart.asp') {
    var reCalcButton = $('#btnRecalculate');
    var cartTotalContainer = $('#v65-cart-total-estimate td:first-child');
    var cartTotalValue = cartTotalContainer.text().trim();

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

    shoppingCartForm.prepend('<div id="gfp-responsive-cart"><table><thead><tr><th class="gfp-responsive-cart--product-image"></th><th class="gfp-responsive-cart--product-description">Item</th><th class="gfp-responsive-cart--unit-price">Unit Price</th><th class="gfp-responsive-cart--quantity">Quantity</th><th class="gfp-responsive-cart--unit-total">Total</th><th class="gfp-responsive-cart--remove-item"></th></tr></thead><tbody></tbody></table>' + '<p class="cart-subtotal"><strong>Order Subtotal: ' + cartTotalValue + '</strong></p>' + reCalcButton[0].outerHTML + '</div>');

    $('#v65-cart-table').remove();

    for (var i = 0; i < cleanCartRows.length; i++) {
        var cartTable = $('#gfp-responsive-cart tbody');
        cartTable.append('<tr><td class="gfp-responsive-cart--product-image">' + cleanCartRows[i].productImage + '</td><td class="gfp-responsive-cart--product-description">' + cleanCartRows[i].productName.innerText + '</td><td class="gfp-responsive-cart--unit-price">' + cleanCartRows[i].productPrice + '</td><td class="gfp-responsive-cart--quantity">' + cleanCartRows[i].quantityInput.outerHTML + '</td><td class="gfp-responsive-cart--unit-total">' + cleanCartRows[i].sumPrice + '</td><td class="gfp-responsive-cart--remove-item">' + cleanCartRows[i].removeLink.outerHTML + '</td></tr>');
    }
}






/*
=========================
RESPONSIVE CHECKOUT
=========================
*/
var checkoutContainer = $('#v65-onepage-Detail');
if (checkoutContainer.length > 0) {
    var billingHeader = $('#billing-header').html();
    var billingContent = $('#v65-onepage-BillingParent').html();
    var shippingHeader = $('#shipping-header').html();
    var shippingContent = $('#v65-onepage-ShippingParent').html();
    var additionalInfoHeader = $('.v65-onepage-custom-header-row').html();
    var additionalInfoContent = $('.v65-onepage-custom-details-row').html();
    var shippingCostHeader = $('#v65-onepage-ShippingCostHeader').html();
    var shippingCostContent = $('#v65-onepage-ShippingCost')[0].outerHTML;
    var shippingTotals = $('#v65-onepage-ShippingCostParent').parent().html();
    var orderSummaryItems = $('#v65-onepage-ordersummary-items').parent().html();
    var registrationPassword = $('#v65-onepage-RegistrationFormFields input[name="password"]')[0].outerHTML;
    var registrationPasswordConfirm = $('#v65-onepage-RegistrationFormFields input[name="passwordagain"]')[0].outerHTML;

    checkoutContainer.remove();
    $('#table_checkout_cart0').remove();

    $('#FormatListofErrorsDiv').after('<div id="gfp-responsive-checkout"></div>');
    
    var respCheckout = $('#gfp-responsive-checkout');
    var checkoutWrap = document.querySelector('#gfp-responsive-checkout');
    
    setUpResponsiveCheckout();

    var termsLink = $('#articleBody_112').siblings('table').find('tr:first-child td:last-child a');

    var termsStatement = $('#articleBody_112').siblings('table').find('tr:first-child td:first-child').html('I agree to the <a href="' + termsLink.attr('href') + '">Terms and Conditions</a>');

    termsLink.remove();
    
    var orderTotalsContainer = document.querySelector('.order-totals-container');
    var checkoutWrapTop = $('#v65-onepage-ContentTable').offset().top + checkoutWrap.offsetTop;
    var checkoutContainerWidth = checkoutWrap.querySelector('.order-totals-container').offsetWidth;

    window.addEventListener('resize', function() {
        checkoutContainerWidth = checkoutWrap.querySelector('.order-totals-container').offsetWidth;
    });
    
    document.addEventListener('scroll', stickyCheckout);
}







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
if (document.body.classList.contains('single-product')) {
    var pageTitle = $('.vp-product-title')[0].innerText;

    var productDescriptionWrap = $('#v65-productdetail-action-wrapper');
    productDescriptionWrap.css("display", "block").attr('align', 'left');
    productDescriptionWrap.siblings().css("display", "block");

    updateHero(heroImg, pageTitle);

    // GET THE CONTAINER AND DROP IN NEW CONTAINER BEFORE THE ELEMENT TO BE DELETED
    var relatedProductsContainer = $('#v65-product-parent').next().find('.colors_lines_light').first();
    if (relatedProductsContainer[0].id !== 'v65-product-related') {
        getRelatedProducts();
    }
    

    $('span[itemprop="description"]').prepend('<p class="h1">' + pageTitle + '</p>');


    var fitmentString = $('#ProductDetail_ProductDetails_div2 li');
    if (fitmentString.length > 0) {
        var fitmentArray = fitmentString[0].innerText.split('|').sort();
        $('#ProductDetail_ProductDetails_div2').remove();
        $('#v65-product-parent > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td > table > tbody').append('<tr><td colspan="2"><h3 class="mar-t--more">' + pageTitle + ' fits the following models:</h3><hr><ul id="gfp-fitment"></ul></tr></td>');
        var fitmentList = $('#gfp-fitment');
        for (var i = 0; i < fitmentArray.length; i++) {
            fitmentList.append('<li>' + fitmentArray[i] + '</li>');
        }
    }

    if ($('#related_products_content').length > 0) {
        formatRelatedProducts();
        var productFeatureImage = $('#product_photo_zoom_url').parent('td');
        productFeatureImage.addClass('featured-image-container');
        $('#v65-product-parent > tbody > tr:nth-child(2) > td:first-child').addClass('featured-image-parent').siblings().addClass('featured-content-container');
        if (productFeatureImage.length > 0) {
            window.addEventListener('scroll', fixProductFeatureImage);
        }
    }



}




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

function getRelatedProducts() {
    $('#v65-product-parent > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td > table > tbody').append('<tr><td colspan="2"><div id="gfp-related-products"></div></tr></td>');

    // GET ALL THE DATA
    var relatedProducts = relatedProductsContainer.find('.v65-productDisplay');
    var relatedProductTitle = relatedProducts.find('tr:first-child .v65-productName');

    var relatedProductPrice = relatedProducts.find('tr:nth-child(2) .product_productprice');

    // CLEAN THE IMAGE PATH TO GET BETTER RES
    var relatedProductImg = relatedProducts.find('tr:last-child .v65-productPhoto');
    for (var i = 0; i < relatedProductImg.length; i++) {
        var imagePath = relatedProductImg[i].querySelector('img').src;
        if (!imagePath.match(/nophoto/)) {
            relatedProductImg[i].querySelector('img').src = imagePath.substring(0, imagePath.length - 6) + '-2T' + imagePath.substring(imagePath.length - 4);
        }
    }

    // WIPE THE OLD LIST
    relatedProductsContainer.remove();
    
    // CREATE RELATED PRODUCT ARRAY
    var cleanAlternativeProducts = [];
    for (var i = 0; i < relatedProductTitle.length; i++) {
        cleanAlternativeProducts.push({
            productTitle: relatedProductTitle[i].querySelector('a').innerHTML.trim(),
            productLink: relatedProductTitle[i].querySelector('a').href,
            productImg: relatedProductImg[i].querySelector('img').outerHTML,
            productPrice: relatedProductPrice[i].textContent.trim()
        });
    }

    $('#gfp-related-products').html('<h3>Alternatives to ' + pageTitle + '</h3><ul class="cost-alternatives-list"></ul>');


    var cleanAlternativeProductsTable = $('#gfp-related-products .cost-alternatives-list');

    for (var i = 0; i < cleanAlternativeProducts.length; i++) {
        var html = '<li><a href="' + cleanAlternativeProducts[i].productLink + '"><div class="cost-alternatives-list--image">' + cleanAlternativeProducts[i].productImg + '</div><div class="cost-alternatives-list--content"><p><strong>' + cleanAlternativeProducts[i].productTitle + '</strong></p><p>' + cleanAlternativeProducts[i].productPrice + '</p></div></a></li>';
        cleanAlternativeProductsTable.append(html);
    }
}

function formatRelatedProducts() {
    var cleanRelatedProducts = [];;
    var productTitles = $('#related_products_content .v65-productName');
    var productPrice = $('#related_products_content .v65-productAvailability .product_productprice');
    var productImg = $('#related_products_content .v65-productPhoto');

    for (var i = 0; i < productTitles.length; i++) {
        cleanRelatedProducts.push({
            relatedProductTitle: productTitles[i].innerText,
            relatedProductPrice: productPrice[i].innerText,
            relatedProductImg: productImg[i].querySelector('img').src,
            relatedProductLink: productImg[i].querySelector('a').href
        });
    }

    $('#v65-product-related').before('<div class="slider--related-products"><h3 class="has-text-center mar-b">Products related to ' + pageTitle + '</h3><div class="site-width"><div class="slider"></div></div></div>');
    $('#v65-product-related').remove();

    var sliderRelatedProducts = $('.slider--related-products .site-width > div');

    for (var i = 0; i < cleanRelatedProducts.length; i++) {
        sliderRelatedProducts.append('<div><a href="' + cleanRelatedProducts[i].relatedProductLink + '"><img src="' + cleanRelatedProducts[i].relatedProductImg + '" />' + cleanRelatedProducts[i].relatedProductTitle + '</a></div>');
    }   

}

function fixProductFeatureImage() {
    // IF SMALLER SCREENS GET OUTTA HERE
    if (window.innerWidth < 1080) { return; }
    
    // GRABBING ELEMENTS AND DIMENSIONS
    var featuredImageParent = document.querySelector('.featured-image-parent');
    var featuredContentContainer = document.querySelector('.featured-content-container');
    var elemWidth = featuredImageParent.offsetWidth;
    var productOffset = productFeatureImage.offset().top;
    var featuredContentHeight = featuredContentContainer.offsetHeight;
    var featuredImageHeight = document.querySelector('.featured-image-container').offsetHeight;


    // LET'S SCROOL
    if ((window.scrollY > (productOffset - siteHeaderHeight)) && (window.scrollY < (siteHeaderHeight + (featuredContentHeight - featuredImageHeight)))) {
        document.body.classList.add('featured-image-fixed');
        featuredImageParent.style.transform = 'translateY(calc(' + siteHeaderHeight + 'px' + ' - 1rem)';
        featuredImageParent.style.maxWidth = elemWidth + 'px';
        featuredContentContainer.style.paddingLeft = elemWidth + 'px';
    } else if (window.scrollY < siteHeaderHeight) {
        document.body.classList.remove('featured-image-fixed');
        featuredImageParent.style.transform = '';
        featuredImageParent.style.maxWidth = 'auto';
        featuredContentContainer.style.paddingLeft = 0;
    } else if (window.scrollY > (siteHeaderHeight + (featuredContentHeight - featuredImageHeight))) {
        var negScroll = (window.scrollY - (featuredContentHeight - featuredImageHeight) - siteHeaderHeight);
        featuredImageParent.style.transform = 'translateY(calc(-' + negScroll + 'px + 121px))';
    }
}

function stickyCheckout() {
    // IF SMALLER SCREENS GET OUTTA HERE
    if (window.innerWidth < 600) { return; }

    if (window.scrollY > (checkoutWrapTop - (siteHeaderHeight + (18 * 3)))) {
        document.body.classList.add('cart-totals-fixed');
        orderTotalsContainer.style.maxWidth = checkoutContainerWidth + 'px';
        orderTotalsContainer.style.transform = 'translateY(' + (siteHeaderHeight + (18 + 11)) + 'px)';
    } else {
       document.body.classList.remove('cart-totals-fixed'); 
       orderTotalsContainer.style.maxWidth = 'auto';
       orderTotalsContainer.style.transform = '';
    }
}

function setUpResponsiveCheckout() {
    respCheckout.html('<div class="order-details"><section><h2>Billing Information</h2>' + billingContent + '</section></div>');

    var respCheckoutDetails = $('.order-details');
    respCheckoutDetails.append('<section><h2>Shipping Information</h2>' + shippingContent + '</section>');
    respCheckoutDetails.append('<section><h2>Create A Green Farm Parts Account</h2>' + registrationPassword + registrationPasswordConfirm + '</section>');

    respCheckout.append('<div class="order-totals"><section class="order-totals-container"><h2>Your Order</h2></section></div>');

    var respOrderTotalsContainer = $('.order-totals-container');

    respOrderTotalsContainer.append(orderSummaryItems, shippingCostContent, additionalInfoContent);
}