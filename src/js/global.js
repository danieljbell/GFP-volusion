// $('.search-bar-container input').focus();

// $.ajax({
//     url: window.location.domain + '/John-Deere-Lawn-Tractor-Parts-s/1.htm?searching=Y&sort=5&cat=1&show=15&page=1',
//     dataType: 'html',
//     success: function(html) {
//         console.log(html);
//         // var div = $('#sourceDiv', $(html)).addClass('done');
//         // $('#targetDiv').html(div);
//     }
// });

var siteHeaderHeight = $('.site-header').height();

if ((typeof $('#content_area').find('.vcb-article')[0] !== 'undefined')) {
    setTimeout(function() {
        if (document.body.classList.contains('vcb-active')) {
            // http://kyrep.fccmz.servertrust.com/admin/AdminDetails_Generic.asp?Table=Articles&ID=110
            var pageID = $('#content_area').find('.vcb-article')[0].id.split('_')[2];
            var adminLinkURL = window.location.origin + '/admin/AdminDetails_Generic.asp?Table=Articles&ID=' + pageID;
            var adminLink = document.createElement('a');
            adminLink.href = adminLinkURL;
            adminLink.innerText = 'Edit Page';
            adminLink.classList.add('editSearchLink','btn-solid--brand-two');
            $('body').prepend(adminLink);
        }
    }, 3000);
}

if (window.innerWidth > 1080) {
    $('.menu-item--top-level .sub-menu--level-one > li:first-child').addClass('active').find('.sub-menu--level-two').addClass('accordian-open');
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
    searchStringTerm = searchStringTerm.split('+').join(' ').split('%20').join(' ');
    heroText = 'Search for: ' + searchStringTerm;

    /* SET UP RESPONSIVE SEARCH RESULTS*/
    var productRows = $('#MainForm .v65-productDisplay .v65-productDisplay tr');
    var productsArray = [];

    for (var i = 0; i < productRows.length; i += 5) {
        if (productRows[i].nextElementSibling.querySelector('div[itemprop="aggregateRating"]')) {
            var productRating = productRows[i].nextElementSibling.querySelector('div[itemprop="aggregateRating"]').outerHTML;
        }
        productsArray.push({
            productLink: productRows[i].querySelector('a').href,
            productImage: productRows[i].querySelector('img').src,
            productName: productRows[i].nextElementSibling.querySelector('a span').innerText,
            productPrice: productRows[i].nextElementSibling.querySelector('.product_productprice').innerText.split(' ')[1],
            productRating: productRating,
            productDescription: productRows[i].nextElementSibling.nextElementSibling.nextElementSibling.innerText
        });
    }

    productRows.remove();
    
    var firstProductRow = $('#MainForm .v65-productDisplay .v65-productDisplay').find('tbody');

    firstProductRow.prepend('<tr><td id="gfp-responsive-listing"></td></tr>');
    var gfpResponsiveListing = $('#gfp-responsive-listing');

    for (var i = 0; i < productsArray.length; i++) {
        var rating = productsArray[i].productRating;
        if (typeof rating === 'undefined') { rating = ''; }
        gfpResponsiveListing.append('<a href="' + productsArray[i].productLink + '" class="card"><img src="' + productsArray[i].productImage + '" alt="' + productsArray[i].productName + '"><h6>' + productsArray[i].productName + '</h6><p>' + productsArray[i].productPrice + '</p>' + rating + '</a>');
    }

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
} else {
    setTimeout(function() {
        if (document.body.classList.contains('vcb-active')) {
            // http://kyrep.fccmz.servertrust.com/admin/AdminDetails_Generic.asp?Table=Articles&ID=
            var adminLinkURL = window.location.origin + '/admin/AdminDetails_Generic.asp?Table=Articles&ID=2';
            var adminLink = document.createElement('a');
            adminLink.href = adminLinkURL;
            adminLink.innerText = 'Edit Page';
            adminLink.classList.add('editSearchLink','btn-solid--brand-two');
            $('body').prepend(adminLink);
        }
    }, 3000);
}


/*
=========================
ACCOUNT LINKS PAGE
=========================
*/
if (pagePath === '/myaccount.asp') { 

    var accountPageContent = $('#content_area td');
    console.log(accountPageContent[0]);
    var accountWelcomeMessage = accountPageContent[0].innerHTML;
    var accountWelcomeMessageOpener = accountPageContent[0].querySelector('b').innerHTML;
    updateHero(heroImg, accountWelcomeMessageOpener);

    $('.hero').next().find('.site-width').prepend('<div id="gfp-account-details"></div>');
    var gfpAccountDetails = $('#gfp-account-details');

    $('#content_area').remove();

    gfpAccountDetails.append('<section class="box--heading-brand"><h2 class="box-headline">My Orders</h2><ul><li><a href="/orders.asp">Review Orders</a></li><li><a href="/orders.asp">Change/Cancel Order</a></li><li><a href="/orders.asp">Change Shipping Address</a></li><li><a href="/orders.asp">Print Invoices</a></li><li><a href="/orders.asp">Change Billing Address</a></li><li><a href="/returns.asp">Return Items</a></li></ul></section>');
    gfpAccountDetails.append('<section class="box--heading-brand"><h2 class="box-headline">Personal Information</h2><ul><li><a href="/AccountSettings.asp?modwhat=change_a">Change e-mail address, or password</a></li><li><a href="/AccountSettings.asp?modwhat=change_b">Manage your billing addresses</a></li><li><a href="/MailingList_unsubscribe.asp">Change my e-mail preferences</a></li><li><a href="/AccountSettings.asp?modwhat=change_s">Manage your shipping addresses</a></li></ul></section>');
    gfpAccountDetails.append('<section class="box--heading-brand"><h2 class="box-headline">Payment Settings</h2><ul><li><a href="/AccountSettings.asp?modwhat=change_c&myaccount=Y">Edit or delete a credit/debit card</a></li><li><a href="/MyAccount_GiftBalance.asp">View gift certificate balance</a></li><li><a href="/MyAccount_ApplyGift.asp">Apply a gift certificate to your account</a></li></ul></section>');
    gfpAccountDetails.append('<section class="box--heading-brand"><h2 class="box-headline">Other Features</h2><ul><li><a href="/myaccount_myreviews.asp">Edit a review that I wrote</a></li><li><a href="/WishList.asp">View my Wish List</a></li><li><a href="/MyRewards.asp">My Rewards</a></li></ul></section>');
    gfpAccountDetails.parent().append('<div class="has-text-center mar-t--more"><a href="/login.asp?logout=yes" class="btn-outline--brand-two">Logout</a></div>');
}



/*
=========================
ORDERS PAGE
=========================
*/
if (pagePath === '/orders.asp') {

    heroText = 'Your Orders'

    updateHero(heroImg, heroText);

    var allOrders = $('#content_area form .colors_lines_light tbody > .colors_backgroundneutral > td:last-child a');

    for (var i = 0; i < allOrders.length; i++) {
        var elem = allOrders[i];
        elem.innerHTML = 'View Order';
        elem.classList.add("btn-solid--brand-two");
    }

    // var cleanAllOrders = [];
    
    // for (var i = 0; i < allOrders.length; i++) {
    //     var allItemsInOrder = allOrders[i].querySelectorAll('td:nth-child(2) tr');
    //     var itemRows = [];

    //     for (var c = 1; c < allItemsInOrder.length; c++) {
    //         console.log(allItemsInOrder[c].querySelector('a'));
    //         // itemRows.push({
    //         //     "itemLink": allItemsInOrder[c].querySelector('a').href
    //         // });
    //     }
    //     // console.log(itemRows[i]);
        
    //     cleanAllOrders.push({
    //         "orderMetaDetails": allOrders[i].querySelector('td').innerHTML,
    //         "orderLink": allOrders[i].querySelector('td:last-child a').href,
    //         "orderItems": itemRows[i]
    //     });
    // }

    // $('#content_area form').append('<div class="gfp-order-list"><ul></ul></div>');
    // var gfpOrderList = $('.gfp-order-list ul');

    // for (var i = 0; i < cleanAllOrders.length; i++) {
    //     gfpOrderList.append('<li class="gfp-order-item"><div class="gfp-order-item--order-meta">' + cleanAllOrders[i].orderMetaDetails + '<br /><a href="' + cleanAllOrders[i].orderLink + '" class="mar-t btn-solid--brand-two">View Details</a></div><div class="gfp-order-item--order-items">' + cleanAllOrders[i].orderItems + '</div></li>');
    // }

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

    if (e.target.classList.contains('show-password')) {
        e.preventDefault();
        var self = e.target;
        var passwordField = self.parentElement.querySelector('input');
        var passwordFieldType = passwordField.type;
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    }

});


/*
=========================
CATEGORY LISTING
=========================
*/
if ((typeof SearchParams !== 'undefined') && (pagePath != '/searchresults.asp')) {
    var allSubCatLinks = $('.subcategory_link');
    cleanSubCatLinks = [];

    for (var i = 0; i < allSubCatLinks.length; i++) {
        cleanSubCatLinks.push({
            "modelLink": allSubCatLinks[i].href,
            "modelNumber": allSubCatLinks[i].innerText.replace('John Deere', '').split(' ')[1]
        });
    }

    allSubCatLinks.first().closest('.colors_backgroundneutral').parent().prev().html('<td><div class="gfp-clean-subcategories"><h2>Choose your model to see parts that fit your model</h2><select class="gfp-subcategories-select"><option>Choose Your Model</option></select></div></td>');

    if ($('img[src="/v/vspfiles/templates/gfp-test/images/SearchResults_SubCat_Angle.gif"]').length > 0) {

        $('img[src="/v/vspfiles/templates/gfp-test/images/SearchResults_SubCat_Angle.gif"]').parents('.colors_backgroundlight').addClass('remove-featured-cats-table').siblings().addClass('gfp-init-subcategories');

        var subCatLinks = $('.gfp-init-subcategories a');

        var subCatOptions = [];

        for (var i = 0; i < subCatLinks.length; i++) {
            subCatOptions.push({
                subCatID: subCatLinks[i].href.split('/')[4].split('.')[0],
                subCatText: subCatLinks[i].innerText
            });
        }

        for (var i = 0; i < subCatOptions.length; i++) {
            $('.gfp-subcategories-select').append('<option value="' + subCatOptions[i].subCatID + '">' + subCatOptions[i].subCatText + '</option>');
        }

        $('.remove-featured-cats-table').parent().remove();

        var catSelect = document.querySelector('.gfp-subcategories-select');
        catSelect.addEventListener('change', function(e) {
            var selectedCat = e.target.value;
            window.location.href = '/-s/' + selectedCat + '.htm';
        });

    }

    // $('.gfp-clean-subcategories').append(document.querySelector('.breadcrumbs select').outerHTML);
    // console.log();
    // $('.gfp-clean-subcategories').siblings().remove();


    
    /* SET UP RESPONSIVE SEARCH RESULTS*/
    var productRows = $('#MainForm .v65-productDisplay .v65-productDisplay > tbody > tr');
    var productsArray = [];
    for (var i = 0; i < productRows.length; i += 6) {
        if (productRows[i].nextElementSibling.nextElementSibling.querySelector('div[itemprop="aggregateRating"]')) {
            var productRating = productRows[i].nextElementSibling.nextElementSibling.querySelector('div[itemprop="aggregateRating"]').outerHTML;
        }
        productsArray.push({
            productLink: productRows[i].querySelector('a').href,
            productImage: productRows[i].querySelector('img').src,
            productName: productRows[i].nextElementSibling.querySelector('a').innerText,
            productPrice: productRows[i].nextElementSibling.nextElementSibling.querySelector('.product_productprice').innerText.split(' ')[1],
            productRating: productRating
        });
    }

    productRows.remove();
    
    var firstProductRow = $('#MainForm .v65-productDisplay .v65-productDisplay').find('tbody');

    firstProductRow.prepend('<tr><td id="gfp-responsive-listing"></td></tr>');
    var gfpResponsiveListing = $('#gfp-responsive-listing');

    for (var i = 0; i < productsArray.length; i++) {
        var rating = productsArray[i].productRating;
        if (typeof rating === 'undefined') { rating = ''; }
        gfpResponsiveListing.append('<a href="' + productsArray[i].productLink + '" class="card"><img src="' + productsArray[i].productImage + '" alt="' + productsArray[i].productName + '"><h6>' + productsArray[i].productName + '</h6><p>' + productsArray[i].productPrice + '</p>' + rating + '</a>');
    }

    // DYNAMIC ADMIN LINK
    // http://kyrep.fccmz.servertrust.com/admin/AdminDetails_Generic.asp?table=Categories&Page=1&ID=
    var catID = SearchParams.split('&')[2].substring(4);
    setTimeout(function() {
        if (document.body.classList.contains('vcb-active')) {
            var adminLinkURL = window.location.origin + '/admin/AdminDetails_Generic.asp?table=Categories&Page=1&ID=' + catID;
            var adminLink = document.createElement('a');
            adminLink.href = adminLinkURL;
            adminLink.innerText = 'Edit Category';
            adminLink.classList.add('editSearchLink','btn-solid--brand-two');
            $('body').prepend(adminLink);
        }
    }, 3000);
}





/*
=========================
RESPONSIVE SHOPPING CART
=========================
*/
if ((pagePath === '/ShoppingCart.asp') || pagePath === '/shoppingcart.asp') {
    // var reCalcButton = $('#btnRecalculate');
    // var couponInput = $('#v65-cart-coupon-entry-details-input');
    // var couponButton = $('#v65-cart-coupon-entry-details-button');
    // var cartTotalContainer = $('#v65-cart-total-estimate td:first-child');
    // var cartTotalValue = cartTotalContainer.text().trim();

    // $('#v65-cart-shipping-details-wrapper').remove();
    // var shoppingCartForm = $('#v65-cart-table').parent('form');
    // var cartRows = document.querySelectorAll('#v65-cart-table .v65-cart-details-row');
    // if (document.querySelectorAll('#v65-cart-table .v65-cart-giftcert-details-row')) {
    //     console.log(document.querySelectorAll('#v65-cart-table .v65-cart-giftcert-details-row'));
    // }
    // var cleanCartRows = [];

    // console.log();
    // console.log();

    // for (var i = 0; i < cartRows.length; i++) {
    //     var removeLink = cartRows[i].querySelector('.v65-cart-item-remove-link');
    //     var productImage = cartRows[i].querySelector('.v65-cart-detail-productimage').innerHTML;
    //     var productName = cartRows[i].querySelector('.v65-cart-details-text .cart-item-name');
    //     var quantityInput = cartRows[i].querySelector('input[name*="Quantity"]');
    //     var productPrice = cartRows[i].querySelector('td:nth-child(9) .carttext').innerText;
    //     var sumPrice = cartRows[i].querySelector('td:nth-child(11) .carttext').innerText;
    //     cleanCartRows.push({
    //         removeLink: removeLink,
    //         productImage: productImage,
    //         productName: productName,
    //         quantityInput: quantityInput,
    //         productPrice: productPrice,
    //         sumPrice: sumPrice
    //     });
    // }

    // shoppingCartForm.prepend('<div id="gfp-responsive-cart"><table><thead><tr><th class="gfp-responsive-cart--product-image"></th><th class="gfp-responsive-cart--product-description">Item</th><th class="gfp-responsive-cart--unit-price">Unit Price</th><th class="gfp-responsive-cart--quantity">Quantity</th><th class="gfp-responsive-cart--unit-total">Total</th><th class="gfp-responsive-cart--remove-item"></th></tr></thead><tbody></tbody></table>' + '<p class="cart-subtotal"><strong>Order Subtotal: ' + cartTotalValue + '</strong></p>' + couponInput[0].outerHTML + couponButton[0].outerHTML + reCalcButton[0].outerHTML + '</div>');

    // $('#v65-cart-table').remove();

    // for (var i = 0; i < cleanCartRows.length; i++) {
    //     var cartTable = $('#gfp-responsive-cart tbody');
    //     cartTable.append('<tr><td class="gfp-responsive-cart--product-image">' + cleanCartRows[i].productImage + '</td><td class="gfp-responsive-cart--product-description">' + cleanCartRows[i].productName.innerText + '</td><td class="gfp-responsive-cart--unit-price">' + cleanCartRows[i].productPrice + '</td><td class="gfp-responsive-cart--quantity">' + cleanCartRows[i].quantityInput.outerHTML + '</td><td class="gfp-responsive-cart--unit-total">' + cleanCartRows[i].sumPrice + '</td><td class="gfp-responsive-cart--remove-item">' + cleanCartRows[i].removeLink.outerHTML + '</td></tr>');
    // }
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
    var paymentContent = $('#v65-onepage-payment-details-parent-table')[0].outerHTML;
    var paymentOptions = $('#PaymentDIV');
    var noPaymentOptions = $('#NoPaymentDIV');
    var showPaymentFields = noPaymentOptions.next();
    var paymentMethodType = showPaymentFields.next();
    var savedPaymentsBlock = paymentMethodType.next();
    console.log(paymentOptions);
    console.log(noPaymentOptions);
    console.log(showPaymentFields);
    console.log(paymentMethodType);
    console.log(savedPaymentsBlock);
    if ($('#v65-onepage-RegistrationFormFields').length > 0) {
        var registrationPassword = $('#v65-onepage-RegistrationFormFields input[name="password"]').first().attr('id', 'password');
        registrationPassword = $('#v65-onepage-RegistrationFormFields input[name="password"]')[0].outerHTML;
        var registrationPasswordConfirm = $('#v65-onepage-RegistrationFormFields input[name="passwordagain"]').first().attr('id', 'password-confirm');
        registrationPasswordConfirm = $('#v65-onepage-RegistrationFormFields input[name="passwordagain"]')[0].outerHTML;
    }
    $('#span_paymentfields_credit_card > table > tbody > tr:nth-child(6) td:first-child').remove();
    $('#span_paymentfields_credit_card > table > tbody > tr:nth-child(6) td:last-child').attr('colspan', '1');
    
    // $('#v65-checkout-payment-header').parent().remove();
    var submitOrder = $('#divbtnSubmitOrder');
    // submitOrder.find('img').remove();
    submitOrder.find('button').text('Place Order').addClass('btn-solid--brand-two');
    var placeOrder = submitOrder.html();
    // submitOrder.remove();

    $('#v65-onepage-payment-details-parent-row #span_paymentfields_purchase_order_number .v65-payment-details-label-cell').html('John Deere Financial/<br />John Deere CC Number');
    



    var orderCommentsElem = $('#v65-onepage-ordercomments-input');
    // orderCommentsElem.remove();
    // $('#v65-onepage-ordercomments-row').parent().parent().remove();


    

    // checkoutContainer.remove();
    // $('#table_checkout_cart0').remove();

    $('#FormatListofErrorsDiv').after('<div id="gfp-responsive-checkout"></div>');


    
    var respCheckout = $('#gfp-responsive-checkout');
    var checkoutWrap = document.querySelector('#gfp-responsive-checkout');


    
    // setUpResponsiveCheckout();

    var termsLink = $('#articleBody_112').siblings('table').find('tr:first-child td:last-child a');
    var termsInput = $('input[name="Orders.Custom_Field_TermsofUse"]');
    // termsInput.parent().remove();
    
    var termsStatement = $('#articleBody_112').siblings('table').find('tr:first-child td:first-child').html(termsInput[0].outerHTML + 'I agree to the <a href="' + termsLink.attr('href') + '" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>');

    // termsLink.remove();

    var returnsLink = $('#articleBody_112').siblings('table').find('tr:last-child td:last-child a');
    var returnsInput = $('input[name="Orders.Custom_Field_AgreeReturns"]');
    // returnsInput.parent().remove();

    var returnsStatement = $('#articleBody_112').siblings('table').find('tr:last-child td:first-child').html(returnsInput[0].outerHTML + 'I accept the <a href="' + returnsLink.attr('href') + '" target="_blank" rel="noopener noreferrer">Returns and Shipping Policies</a>');
    
    // var orderTotalsContainer = document.querySelector('.order-totals-container');
    // var orderOffsetTop = orderTotalsContainer.offsetTop;
    // var checkoutWrapTop = $('#v65-onepage-ContentTable').offset().top + checkoutWrap.offsetTop;
    // var checkoutContainerWidth = checkoutWrap.querySelector('.order-totals-container').offsetWidth;

    // window.addEventListener('resize', function() {
    //     checkoutContainerWidth = checkoutWrap.querySelector('.order-totals-container').offsetWidth;
    //     checkoutWrapTop = $('#v65-onepage-ContentTable').offset().top + checkoutWrap.offsetTop;
    // });
    
    // document.addEventListener('scroll', stickyCheckout);
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
    // SETUP ADMIN LINK
    // http://kyrep.fccmz.servertrust.com/admin/AdminDetails_Generic.asp?table=Categories&Page=1&ID=
    setTimeout(function() {
        if (document.body.classList.contains('vcb-active')) {
            var adminLinkURL = window.location.origin + '/admin/AdminDetails_Generic.asp?table=Products_Joined&Page=1&ID=' + global_Current_ProductCode.toLowerCase();
            var adminLink = document.createElement('a');
            adminLink.href = adminLinkURL;
            adminLink.innerText = 'Edit Product';
            adminLink.classList.add('editProductLink','btn-solid--brand-two');
            $('body').prepend(adminLink);
        }
    }, 3000);

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

    var productDescription = $('#product_description');
    if (productDescription.length > 0) {
        $('.featured-content-container').append('<div class="gfp-product-description">' + productDescription.html() + '</div>');
    }

    var productTechSpecs = $('#ProductDetail_TechSpecs_div');
    if (productTechSpecs.length > 0) {
        $('.featured-content-container').append('<div class="gfp-product-tech-specs">' + productTechSpecs.html() + '</div>');
    }

    var productExtInfo = $('#ProductDetail_ExtInfo_div');
    if (productExtInfo.length > 0) {
        $('.featured-content-container').append('<div class="gfp-product-extinfo">' + productExtInfo.html() + '</div>');
    }

    var volustionTab = $('#ProductDetail_ProductDetails_div').parents('.colors_descriptionbox');
    volustionTab.prev().remove()
    volustionTab.remove();

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
            productPrice: relatedProductPrice[i].innerText.trim()
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
        var imgPath = productImg[i].querySelector('img').src;
        imgPath = imgPath.substring(0, imgPath.length - 6) + '-2T' + imgPath.substring(imgPath.length - 4);
        // console.log(imgPath);
        cleanRelatedProducts.push({
            relatedProductTitle: productTitles[i].innerText,
            relatedProductPrice: productPrice[i].innerText,
            relatedProductImg: imgPath,
            relatedProductLink: productImg[i].querySelector('a').href
        });
    }

    $('#v65-product-related').before('<div class="slider--related-products"><h3 class="has-text-center mar-b">Products related to ' + pageTitle + '</h3><div class="slider"></div></div>');
    $('#v65-product-related').remove();

    var sliderRelatedProducts = $('.slider--related-products > div');

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
        featuredImageParent.style.transform = 'translateY(calc(-' + negScroll + 'px + ' + siteHeaderHeight + 'px))';
    }
}

function stickyCheckout() {
    // IF SMALLER SCREENS GET OUTTA HERE
    if (window.innerWidth < 600) { return; }

    var orderDetails = $('.order-details');
    var orderDetailsHeight = orderDetails[0].offsetHeight;
    
    var orderTotals =  $('.order-totals-container');
    var orderTotalsHeight =  orderTotals[0].offsetHeight;

    if ((window.scrollY > (checkoutWrapTop - (siteHeaderHeight + (18 * 3)))) && (window.scrollY < (orderDetailsHeight + orderOffsetTop - orderTotalsHeight - siteHeaderHeight - (18 * 3)))) {
        document.body.classList.add('cart-totals-fixed');
        orderTotalsContainer.style.maxWidth = checkoutContainerWidth + 'px';
        orderTotalsContainer.style.transform = 'translateY(' + (siteHeaderHeight + (18 + 11)) + 'px)';
    } else if (window.scrollY > ((orderDetailsHeight + orderOffsetTop) - orderTotalsHeight - siteHeaderHeight - (18 * 3))) {
        var negScroll = (window.scrollY - orderTotalsHeight - orderTotalsHeight - siteHeaderHeight - (18 * 3));
        orderTotals[0].style.transform = 'translateY(calc(-' + negScroll + 'px + ' + orderOffsetTop + 'px))';
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
    if (registrationPassword) {
        respCheckoutDetails.append('<section><h2>Create A Green Farm Parts Account</h2><p class="has-text-center mar-b font-shrink">Create an account today for quicker checkout on future orders, checking order status & tracking, and special offers sent via email</p><div class="form-group"><label for="password">Password</label>' + registrationPassword + '<button class="show-password">Show</button></div><div class="form-group"><label for="password-confirm">Confirm Password</label>' + registrationPasswordConfirm + '<button class="show-password">Show</button></div></section>');
    }

    respCheckoutDetails.append('<section><h2>Payment Information</h2>' + paymentOptions.html() + '</section>');

    respCheckout.append('<div class="order-totals"><section class="order-totals-container"><h2>Your Order</h2></section></div>');

    var respOrderTotalsContainer = $('.order-totals-container');

    respOrderTotalsContainer.append(orderSummaryItems, shippingCostContent);
    respOrderTotalsContainer.append('<p style="font-size: 0.85rem;">Order Comments: <em>(optional)</em></p>', orderCommentsElem);
    respOrderTotalsContainer.append('<table width="100%" class="agreements"><tbody><tr>' + additionalInfoContent + '</tr></tbody></table>', placeOrder);
}