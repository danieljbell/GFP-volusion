var pagePath = window.location.pathname;

var heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--generic-' + getRandomInt(1, 5) + '.jpg)';
var heroText = 'Green Farm Parts';

var breadcrumbs = document.querySelector('.matching_results_text');

if (breadcrumbs) {
    var breadcrumbArray = breadcrumbs.previousElementSibling.textContent.split('>');
    heroText = breadcrumbArray[breadcrumbArray.length - 1];    
}


// if (pagePath.match(/Filters/i)) {
//     heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--filters.jpg)';
//     heroText = 'Oil Filters';
// }

// if (pagePath.match(/Maintenance-Kits/i)) {
//     heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--maintenance-kits.jpg)';
//     heroText = 'Maintenance Kits';
// }

// if (pagePath.match(/Toys/i)) {
//     heroImg = 'url(/v/vspfiles/templates/gfp-test/img/hero--toys.jpg)';
//     heroText = 'Toys';
// }

// if (pagePath === '/searchresults.asp') {
//     searchString = window.location.search;
//     searchStringTerm = searchString.substring(8);
//     searchStringArray = searchStringTerm.split('+');
//     searchStringTerm = searchStringArray.join(' ');
//     heroText = 'Search for: ' + searchStringTerm;
// }

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

setTimeout(function() {
    if (document.body.classList.contains('vcb-active')) {
        if (SearchParams) {
            var catID = SearchParams.split('&')[2].split('=')[1];
            var editLink = document.querySelector('.editSearchLink');
            editLink.href = editLink.href + catID;
            editLink.style.display = 'block';
        }
        return;
    }
}, 1000);


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

function fixHeader() {
    if (window.scrollY >= siteHeaderOffset) {
        document.body.style.paddingTop = siteHeader.offsetHeight + 'px';
        document.body.classList.add('site-header-fixed');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('site-header-fixed');
    }
}


/*
=========================
KILLSHEET
=========================
*/
$('img[src="/v/vspfiles/templates/gfp-test/images/clear1x1.gif"]').remove();
$('.colors_pricebox img[src="/v/vspfiles/templates/gfp-test/images/PBox_Border_Left_Top.gif"]').parent('tr').remove();




/*
=========================
BOOST STUFF
=========================
*/
// (function(V, $) {

//     var relatedPrdWrap = document.querySelector(".v65-product-related-details-row .v65-productDisplay");
//     var accessoriesPrds = document.querySelector(".colors_lines_light:not([id='v65-product-related'])");
//     // Create Sub Module
//     V.productdetails.reformatRelatedPrds = {};

//     function reformatRelatedPrds(relatedPrdWrap) {
//         var relatedPrdImg = relatedPrdWrap.querySelectorAll(".v65-productDisplay-cell.v65-productPhoto a");
//         var relatedPrdTitle = relatedPrdWrap.querySelectorAll(".v65-productName a");
//         var relatedPrdprice = relatedPrdWrap.querySelectorAll(".product_productprice");
//         var relatedSaleprice = relatedPrdWrap.querySelectorAll(".product_saleprice");

//         var vProductGrid = V.productdetails.createElement("section","v-product-grid");
//         // Loop through the longest list

//         // Make array to get largest length of nodelist
//         var imgLength = relatedPrdImg.length;
//         var titleLength = relatedPrdTitle.length;
//         var priceLength = relatedPrdprice.length;
//         var saleLength = relatedSaleprice.length;

//         var nodeList = [imgLength, titleLength, priceLength, saleLength];

//         var maxLength = Math.max.apply(Math,nodeList);

//         for (var i = 0, maxLength; i < maxLength; i ++) {
//             var vProduct = V.productdetails.createElement("div","v-product");

//             // Check if elements in array exist
//             if (relatedPrdImg[i]) {
//                 relatedPrdImg[i].classList.add("v-product__img");
//                 var newRelatedPrdImg = chngRelatedSrcAttr(relatedPrdImg[i]);
//                 vProduct.appendChild(newRelatedPrdImg);
//             }
//             if (relatedPrdTitle[i]) {
//                 relatedPrdTitle[i].classList.add("v-product__title");
//                 vProduct.appendChild(relatedPrdTitle[i]);
//             }
//             if (relatedPrdprice[i]) {
//                 vProduct.appendChild(relatedPrdprice[i]);
//             }
//             if (relatedSaleprice[i]) {
//                 vProduct.appendChild(relatedSaleprice[i]);
//             }

//             vProductGrid.appendChild(vProduct);
//         }

//         return vProductGrid;
//     }

//     function chngRelatedSrcAttr (relatedPrdImg) {
//         var oldSrcAttr = relatedPrdImg.querySelector('img').getAttribute("src");
//         var newSrcAttr = oldSrcAttr.replace("-0.jpg","-1.jpg");

//         relatedPrdImg.querySelector("img")
//             .setAttribute("src",newSrcAttr);

//         return relatedPrdImg
//     }


//     V.productdetails.reformatRelatedPrds.init = function() {
//         if ( document.documentElement.classList.contains("productdetails") ) {
//             if (V.productdetails.relatedPrds) {
//                 var vProductGrid = reformatRelatedPrds(relatedPrdWrap);
//                 relatedPrdWrap.insertBefore(vProductGrid, relatedPrdWrap.firstChild);
//             }

//             if (V.productdetails.accessoryPrds) {
//                 var vProductGrid = reformatRelatedPrds(accessoriesPrds);
//                 var accessoriesInsertPoint = accessoriesPrds.querySelector("table[cellpadding='2'] tbody tr:first-child");
//                 accessoriesInsertPoint.parentNode.insertBefore(vProductGrid,accessoriesInsertPoint.nextSibling);
//             }
//         }
//     }
//     return V;

// }(VOLUSION || {}, $jQueryModern));