var pagePath=window.location.pathname,heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--generic-"+getRandomInt(1,5)+".jpg)",heroText="Green Farm Parts",breadcrumbs=document.querySelector(".matching_results_text");if(breadcrumbs){var breadcrumbArray=breadcrumbs.previousElementSibling.textContent.split(">");heroText=breadcrumbArray[breadcrumbArray.length-1]}if(pagePath.match(/Filters/i)&&(heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--filters.jpg)"),pagePath.match(/Maintenance-Kits/i)&&(heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--maintenance-kits.jpg)"),pagePath.match(/Toys/i)&&(heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--toys.jpg)"),"/searchresults.asp"===pagePath&&(searchString=window.location.search,searchStringTerm=searchString.substring(8),searchStringArray=searchStringTerm.split("+"),searchStringTerm=searchStringArray.join(" "),heroText="Search for: "+searchStringTerm),"/ShoppingCart.asp"===pagePath||"/shoppingcart.asp"===pagePath){heroText="Shopping Cart";var itemDescription=document.querySelector("#v65-cart-header-itemdescription font");if(null!=itemDescription){var itemDescriptionArray=itemDescription.innerHTML.split("&nbsp;");itemDescription.innerHTML=itemDescriptionArray[0]+" "+itemDescriptionArray[2]}var emptyCartRow=$(".v65-cart-shipping-details-row").children().first();emptyCartRow&&(emptyCartRow.siblings().remove(),emptyCartRow[0].colSpan=12)}if("/myaccount.asp"===pagePath&&(heroText="My Account Details"),"/login.asp"===pagePath&&(heroText="Login"),"/terms.asp"===pagePath&&(heroText="Terms and Conditions"),"/one-page-checkout.asp"===pagePath){heroText="Checkout";var billInputs=["v65-onepage-billfirstname","v65-onepage-billlastname","v65-onepage-billcompanyname","v65-onepage-billaddr1","v65-onepage-billaddr2","v65-onepage-billcity","v65-onepage-billpostalcode","v65-onepage-billphone","v65-onepage-billfax","v65-cart-billemail"];document.addEventListener("keyup",function(e){if(billInputs.includes(e.target.id)){var t=e.target;matchCheckoutInput(t,t.value)}})}"/"!=pagePath&&updateHero(heroImg,heroText),breadcrumbs&&breadcrumbs.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("breadcrumbs");var siteHeader=document.querySelector(".site-header"),siteHeaderOffset=siteHeader.offsetTop;function getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function toggleMenu(){document.body.classList.toggle("menu-open"),document.querySelector("#hamburger").classList.toggle("is-active")}function toggleMenuAccordian(e){var t=e.target;console.log(t),t.nextElementSibling&&(t.classList.toggle("active"),t.nextElementSibling.classList.toggle("accordian-open"))}function toggleChatWindow(e){e.preventDefault(),1!=window.fcWidget.isOpen()?window.fcWidget.open():window.fcWidget.close()}function updateHero(e,t){var a=document.querySelector(".hero--not-home");a.style.backgroundImage=e;var r=a.querySelector("h1");r.innerHTML=t,r.style.opacity=1}function fixHeader(){window.scrollY>=siteHeaderOffset?(document.body.style.paddingTop=siteHeader.offsetHeight+"px",document.body.classList.add("site-header-fixed")):(document.body.style.paddingTop=0,document.body.classList.remove("site-header-fixed"))}function matchCheckoutInput(e,t){var a=e.id.split("-")[2].substring(4),r=document.querySelector("#v65-onepage-ship"+a);r&&(r.value=t)}siteHeader&&window.addEventListener("scroll",fixHeader),document.addEventListener("click",function(e){("hamburger"===e.target.id||e.target.classList.contains("hamburger-box")||e.target.classList.contains("hamburger-inner"))&&toggleMenu(),e.target.classList.contains("accordian-toggle--site-header")&&toggleMenuAccordian(e),"#chat"===e.target.hash&&toggleChatWindow(e)}),$("#v65-cart-shipping-details-wrapper").remove();var checkoutContainer=$("#v65-onepage-Detail"),billingHeader=$("#billing-header").html(),billingContent=$("#v65-onepage-BillingParent").html(),shippingHeader=$("#shipping-header").html(),shippingContent=$("#v65-onepage-ShippingParent").html(),additionalInfoHeader=$(".v65-onepage-custom-header-row").html(),additionalInfoContent=$(".v65-onepage-custom-details-row").html(),shippingCostHeader=$("#v65-onepage-ShippingCostHeader").html(),shippingCostContent=$("#v65-onepage-ShippingCostTotals").html(),shippingTotals=$("#v65-onepage-ShippingCostParent").parent().html();checkoutContainer.remove(),$("#FormatListofErrorsDiv").after('<div id="gfp-responsive-checkout"></div>');var respCheckout=$("#gfp-responsive-checkout");if(respCheckout.html('<div class="gfp-half"><div>'+billingHeader+billingContent+"</div><div>"+shippingHeader+shippingContent+"</div></div>"),respCheckout.append('<table id="v65-onepage-additional-info"><tbody><tr>'+additionalInfoHeader+"</tr><tr>"+additionalInfoContent+"</tr></tbody></table>"),respCheckout.append(shippingTotals),$('img[src="/v/vspfiles/templates/gfp-test/images/clear1x1.gif"]').remove(),$('.colors_pricebox img[src="/v/vspfiles/templates/gfp-test/images/PBox_Border_Left_Top.gif"]').parent("tr").remove(),$("#v65-onepage-breadcrumb")&&$("#v65-onepage-breadcrumb").remove(),$("#v65-onepage-CopyBillingToShippingLink").remove(),window.global_Current_ProductCode){document.body.classList.add("single-product");var productDescriptionWrap=$("#v65-productdetail-action-wrapper");productDescriptionWrap.css("display","block").attr("align","left"),productDescriptionWrap.siblings().css("display","block")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJwYWdlUGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoZXJvSW1nIiwiZ2V0UmFuZG9tSW50IiwiaGVyb1RleHQiLCJicmVhZGNydW1icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJyZWFkY3J1bWJBcnJheSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0ZXh0Q29udGVudCIsInNwbGl0IiwibGVuZ3RoIiwibWF0Y2giLCJzZWFyY2hTdHJpbmciLCJzZWFyY2giLCJzZWFyY2hTdHJpbmdUZXJtIiwic3Vic3RyaW5nIiwic2VhcmNoU3RyaW5nQXJyYXkiLCJqb2luIiwiaXRlbURlc2NyaXB0aW9uIiwiaXRlbURlc2NyaXB0aW9uQXJyYXkiLCJpbm5lckhUTUwiLCJlbXB0eUNhcnRSb3ciLCIkIiwiY2hpbGRyZW4iLCJmaXJzdCIsInNpYmxpbmdzIiwicmVtb3ZlIiwiY29sU3BhbiIsImJpbGxJbnB1dHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwiaWQiLCJzZWxmIiwibWF0Y2hDaGVja291dElucHV0IiwidmFsdWUiLCJ1cGRhdGVIZXJvIiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNpdGVIZWFkZXIiLCJzaXRlSGVhZGVyT2Zmc2V0Iiwib2Zmc2V0VG9wIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsInRvZ2dsZU1lbnUiLCJib2R5IiwidG9nZ2xlIiwidG9nZ2xlTWVudUFjY29yZGlhbiIsImNvbnNvbGUiLCJsb2ciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGVDaGF0V2luZG93IiwicHJldmVudERlZmF1bHQiLCJmY1dpZGdldCIsImlzT3BlbiIsIm9wZW4iLCJjbG9zZSIsImhlcm9Db250YWluZXIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImhlcm9IZWFkaW5nIiwib3BhY2l0eSIsImZpeEhlYWRlciIsInNjcm9sbFkiLCJwYWRkaW5nVG9wIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbSIsInZhbCIsImlucHV0Iiwic2hpcEVsZW0iLCJjb250YWlucyIsImhhc2giLCJjaGVja291dENvbnRhaW5lciIsImJpbGxpbmdIZWFkZXIiLCJodG1sIiwiYmlsbGluZ0NvbnRlbnQiLCJzaGlwcGluZ0hlYWRlciIsInNoaXBwaW5nQ29udGVudCIsImFkZGl0aW9uYWxJbmZvSGVhZGVyIiwiYWRkaXRpb25hbEluZm9Db250ZW50Iiwic2hpcHBpbmdDb3N0SGVhZGVyIiwic2hpcHBpbmdDb3N0Q29udGVudCIsInNoaXBwaW5nVG90YWxzIiwicGFyZW50IiwiYWZ0ZXIiLCJyZXNwQ2hlY2tvdXQiLCJhcHBlbmQiLCJnbG9iYWxfQ3VycmVudF9Qcm9kdWN0Q29kZSIsInByb2R1Y3REZXNjcmlwdGlvbldyYXAiLCJjc3MiLCJhdHRyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFXQyxPQUFPQyxTQUFTQyxTQUUzQkMsUUFBVSx3REFBMERDLGFBQWEsRUFBRyxHQUFLLFFBQ3pGQyxTQUFXLG1CQUVYQyxZQUFjQyxTQUFTQyxjQUFjLDBCQUV6QyxHQUFJRixZQUFhLENBQ2IsSUFBSUcsZ0JBQWtCSCxZQUFZSSx1QkFBdUJDLFlBQVlDLE1BQU0sS0FDM0VQLFNBQVdJLGdCQUFnQkEsZ0JBQWdCSSxPQUFTLEdBMkJ4RCxHQXZCSWQsU0FBU2UsTUFBTSxjQUNmWCxRQUFVLDZEQUlWSixTQUFTZSxNQUFNLHVCQUNmWCxRQUFVLHNFQUlWSixTQUFTZSxNQUFNLFdBQ2ZYLFFBQVUsMERBSUcsdUJBQWJKLFdBQ0FnQixhQUFlZixPQUFPQyxTQUFTZSxPQUMvQkMsaUJBQW1CRixhQUFhRyxVQUFVLEdBQzFDQyxrQkFBb0JGLGlCQUFpQkwsTUFBTSxLQUMzQ0ssaUJBQW1CRSxrQkFBa0JDLEtBQUssS0FDMUNmLFNBQVcsZUFBaUJZLGtCQUdkLHNCQUFibEIsVUFBa0Qsc0JBQWJBLFNBQWtDLENBQ3hFTSxT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YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZVBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbnZhciBoZXJvSW1nID0gJ3VybCgvdi92c3BmaWxlcy90ZW1wbGF0ZXMvZ2ZwLXRlc3QvaW1nL2hlcm8tLWdlbmVyaWMtJyArIGdldFJhbmRvbUludCgxLCA1KSArICcuanBnKSc7XG52YXIgaGVyb1RleHQgPSAnR3JlZW4gRmFybSBQYXJ0cyc7XG5cbnZhciBicmVhZGNydW1icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRjaGluZ19yZXN1bHRzX3RleHQnKTtcblxuaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgdmFyIGJyZWFkY3J1bWJBcnJheSA9IGJyZWFkY3J1bWJzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQuc3BsaXQoJz4nKTtcbiAgICBoZXJvVGV4dCA9IGJyZWFkY3J1bWJBcnJheVticmVhZGNydW1iQXJyYXkubGVuZ3RoIC0gMV07ICAgIFxufVxuXG5cbmlmIChwYWdlUGF0aC5tYXRjaCgvRmlsdGVycy9pKSkge1xuICAgIGhlcm9JbWcgPSAndXJsKC92L3ZzcGZpbGVzL3RlbXBsYXRlcy9nZnAtdGVzdC9pbWcvaGVyby0tZmlsdGVycy5qcGcpJztcbiAgICAvLyBoZXJvVGV4dCA9ICdPaWwgRmlsdGVycyc7XG59XG5cbmlmIChwYWdlUGF0aC5tYXRjaCgvTWFpbnRlbmFuY2UtS2l0cy9pKSkge1xuICAgIGhlcm9JbWcgPSAndXJsKC92L3ZzcGZpbGVzL3RlbXBsYXRlcy9nZnAtdGVzdC9pbWcvaGVyby0tbWFpbnRlbmFuY2Uta2l0cy5qcGcpJztcbiAgICAvLyBoZXJvVGV4dCA9ICdNYWludGVuYW5jZSBLaXRzJztcbn1cblxuaWYgKHBhZ2VQYXRoLm1hdGNoKC9Ub3lzL2kpKSB7XG4gICAgaGVyb0ltZyA9ICd1cmwoL3YvdnNwZmlsZXMvdGVtcGxhdGVzL2dmcC10ZXN0L2ltZy9oZXJvLS10b3lzLmpwZyknO1xuICAgIC8vIGhlcm9UZXh0ID0gJ1RveXMnO1xufVxuXG5pZiAocGFnZVBhdGggPT09ICcvc2VhcmNocmVzdWx0cy5hc3AnKSB7XG4gICAgc2VhcmNoU3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBzZWFyY2hTdHJpbmdUZXJtID0gc2VhcmNoU3RyaW5nLnN1YnN0cmluZyg4KTtcbiAgICBzZWFyY2hTdHJpbmdBcnJheSA9IHNlYXJjaFN0cmluZ1Rlcm0uc3BsaXQoJysnKTtcbiAgICBzZWFyY2hTdHJpbmdUZXJtID0gc2VhcmNoU3RyaW5nQXJyYXkuam9pbignICcpO1xuICAgIGhlcm9UZXh0ID0gJ1NlYXJjaCBmb3I6ICcgKyBzZWFyY2hTdHJpbmdUZXJtO1xufVxuXG5pZiAoKHBhZ2VQYXRoID09PSAnL1Nob3BwaW5nQ2FydC5hc3AnKSB8fCBwYWdlUGF0aCA9PT0gJy9zaG9wcGluZ2NhcnQuYXNwJykge1xuICAgIGhlcm9UZXh0ID0gJ1Nob3BwaW5nIENhcnQnO1xuICAgIHZhciBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdjY1LWNhcnQtaGVhZGVyLWl0ZW1kZXNjcmlwdGlvbiBmb250Jyk7XG4gICAgaWYgKGl0ZW1EZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBpdGVtRGVzY3JpcHRpb25BcnJheSA9IGl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwuc3BsaXQoJyZuYnNwOycpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gaXRlbURlc2NyaXB0aW9uQXJyYXlbMF0gKyAnICcgKyBpdGVtRGVzY3JpcHRpb25BcnJheVsyXTtcbiAgICB9XG4gICAgdmFyIGVtcHR5Q2FydFJvdyA9ICQoJy52NjUtY2FydC1zaGlwcGluZy1kZXRhaWxzLXJvdycpLmNoaWxkcmVuKCkuZmlyc3QoKTtcbiAgICBpZiAoZW1wdHlDYXJ0Um93KSB7XG4gICAgICAgIGVtcHR5Q2FydFJvdy5zaWJsaW5ncygpLnJlbW92ZSgpO1xuICAgICAgICBlbXB0eUNhcnRSb3dbMF0uY29sU3BhbiA9IDEyOyAgICBcbiAgICB9XG59XG5cbmlmIChwYWdlUGF0aCA9PT0gJy9teWFjY291bnQuYXNwJykge1xuICAgIGhlcm9UZXh0ID0gJ015IEFjY291bnQgRGV0YWlscyc7XG59XG5cbmlmIChwYWdlUGF0aCA9PT0gJy9sb2dpbi5hc3AnKSB7XG4gICAgaGVyb1RleHQgPSAnTG9naW4nO1xufVxuXG5pZiAocGFnZVBhdGggPT09ICcvdGVybXMuYXNwJykge1xuICAgIGhlcm9UZXh0ID0gJ1Rlcm1zIGFuZCBDb25kaXRpb25zJztcbn1cblxuaWYgKHBhZ2VQYXRoID09PSAnL29uZS1wYWdlLWNoZWNrb3V0LmFzcCcpIHtcbiAgICBoZXJvVGV4dCA9ICdDaGVja291dCc7XG5cbiAgICB2YXIgYmlsbElucHV0cyA9IFtcbiAgICAgICAgXCJ2NjUtb25lcGFnZS1iaWxsZmlyc3RuYW1lXCIsXG4gICAgICAgIFwidjY1LW9uZXBhZ2UtYmlsbGxhc3RuYW1lXCIsXG4gICAgICAgIFwidjY1LW9uZXBhZ2UtYmlsbGNvbXBhbnluYW1lXCIsXG4gICAgICAgIFwidjY1LW9uZXBhZ2UtYmlsbGFkZHIxXCIsXG4gICAgICAgIFwidjY1LW9uZXBhZ2UtYmlsbGFkZHIyXCIsXG4gICAgICAgIFwidjY1LW9uZXBhZ2UtYmlsbGNpdHlcIixcbiAgICAgICAgXCJ2NjUtb25lcGFnZS1iaWxscG9zdGFsY29kZVwiLFxuICAgICAgICBcInY2NS1vbmVwYWdlLWJpbGxwaG9uZVwiLFxuICAgICAgICBcInY2NS1vbmVwYWdlLWJpbGxmYXhcIixcbiAgICAgICAgXCJ2NjUtY2FydC1iaWxsZW1haWxcIlxuICAgIF07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGJpbGxJbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQuaWQpKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHZhbCA9IHNlbGYudmFsdWU7XG4gICAgICAgICAgICBtYXRjaENoZWNrb3V0SW5wdXQoc2VsZiwgdmFsKTtcbiAgICAgICAgfSBcbiAgICB9KTtcblxufVxuXG5pZiAocGFnZVBhdGggIT0gJy8nKSB7XG4gICAgdXBkYXRlSGVybyhoZXJvSW1nLCBoZXJvVGV4dCk7XG59XG5cblxuXG5cblxuaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgYnJlYWRjcnVtYnMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JyZWFkY3J1bWJzJyk7XG59XG5cbnZhciBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG52YXIgc2l0ZUhlYWRlck9mZnNldCA9IHNpdGVIZWFkZXIub2Zmc2V0VG9wO1xuXG5pZiAoc2l0ZUhlYWRlcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaXhIZWFkZXIpO1xufVxuXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygndmNiLWFjdGl2ZScpKSB7XG4vLyAgICAgICAgICAgICB2YXIgY2F0SUQgPSBTZWFyY2hQYXJhbXMuc3BsaXQoJyYnKVsyXS5zcGxpdCgnPScpWzFdO1xuLy8gICAgICAgICAgICAgdmFyIGVkaXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRTZWFyY2hMaW5rJyk7XG4vLyAgICAgICAgICAgICBlZGl0TGluay5ocmVmID0gZWRpdExpbmsuaHJlZiArIGNhdElEO1xuLy8gICAgICAgICAgICAgZWRpdExpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICB9XG4vLyB9LCAxMDAwKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgIGlmICgoZS50YXJnZXQuaWQgPT09ICdoYW1idXJnZXInKSB8fCAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYW1idXJnZXItYm94JykpIHx8IChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhbWJ1cmdlci1pbm5lcicpKSkge1xuICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkaWFuLXRvZ2dsZS0tc2l0ZS1oZWFkZXInKSkge1xuICAgICAgICB0b2dnbGVNZW51QWNjb3JkaWFuKGUpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5oYXNoID09PSAnI2NoYXQnKSB7XG4gICAgICAgIHRvZ2dsZUNoYXRXaW5kb3coZSk7XG4gICAgfVxuXG59KTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvL1RoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlIFxufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG4gICAgdmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudUFjY29yZGlhbihlKSB7XG4gICAgdmFyIHNlbGYgPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhzZWxmKTtcbiAgICBpZiAoIXNlbGYubmV4dEVsZW1lbnRTaWJsaW5nKSB7IHJldHVybiB9XG4gICAgc2VsZi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBzZWxmLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdhY2NvcmRpYW4tb3BlbicpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDaGF0V2luZG93KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHdpbmRvdy5mY1dpZGdldC5pc09wZW4oKSAhPSB0cnVlKSB7XG4gICAgICAgIHdpbmRvdy5mY1dpZGdldC5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmZjV2lkZ2V0LmNsb3NlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIZXJvKGhlcm9JbWcsIGhlcm9UZXh0KSB7XG4gICAgdmFyIGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby0tbm90LWhvbWUnKTtcbiAgICBoZXJvQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGhlcm9JbWc7XG4gICAgdmFyIGhlcm9IZWFkaW5nID0gaGVyb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgIGhlcm9IZWFkaW5nLmlubmVySFRNTCA9IGhlcm9UZXh0O1xuICAgIGhlcm9IZWFkaW5nLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG5mdW5jdGlvbiBmaXhIZWFkZXIoKSB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IHNpdGVIZWFkZXJPZmZzZXQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gc2l0ZUhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NpdGUtaGVhZGVyLWZpeGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLWhlYWRlci1maXhlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hDaGVja291dElucHV0KGVsZW0sIHZhbCkge1xuICAgIHZhciBpbnB1dCA9IGVsZW0uaWQuc3BsaXQoJy0nKVsyXS5zdWJzdHJpbmcoNCk7XG4gICAgdmFyIHNoaXBFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Y2NS1vbmVwYWdlLXNoaXAnICsgaW5wdXQpO1xuICAgIGlmICghc2hpcEVsZW0pIHsgcmV0dXJuOyB9XG4gICAgc2hpcEVsZW0udmFsdWUgPSB2YWw7XG59XG5cblxuLypcbj09PT09PT09PT09PT09PT09PT09PT09PT1cblJFU1BPTlNJVkUgU0hPUFBJTkcgQ0FSVFxuPT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cbiQoJyN2NjUtY2FydC1zaGlwcGluZy1kZXRhaWxzLXdyYXBwZXInKS5yZW1vdmUoKTtcblxuXG5cblxuXG5cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09XG5SRVNQT05TSVZFIENIRUNLT1VUXG49PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xudmFyIGNoZWNrb3V0Q29udGFpbmVyID0gJCgnI3Y2NS1vbmVwYWdlLURldGFpbCcpO1xudmFyIGJpbGxpbmdIZWFkZXIgPSAkKCcjYmlsbGluZy1oZWFkZXInKS5odG1sKCk7XG52YXIgYmlsbGluZ0NvbnRlbnQgPSAkKCcjdjY1LW9uZXBhZ2UtQmlsbGluZ1BhcmVudCcpLmh0bWwoKTtcbnZhciBzaGlwcGluZ0hlYWRlciA9ICQoJyNzaGlwcGluZy1oZWFkZXInKS5odG1sKCk7XG52YXIgc2hpcHBpbmdDb250ZW50ID0gJCgnI3Y2NS1vbmVwYWdlLVNoaXBwaW5nUGFyZW50JykuaHRtbCgpO1xudmFyIGFkZGl0aW9uYWxJbmZvSGVhZGVyID0gJCgnLnY2NS1vbmVwYWdlLWN1c3RvbS1oZWFkZXItcm93JykuaHRtbCgpO1xudmFyIGFkZGl0aW9uYWxJbmZvQ29udGVudCA9ICQoJy52NjUtb25lcGFnZS1jdXN0b20tZGV0YWlscy1yb3cnKS5odG1sKCk7XG52YXIgc2hpcHBpbmdDb3N0SGVhZGVyID0gJCgnI3Y2NS1vbmVwYWdlLVNoaXBwaW5nQ29zdEhlYWRlcicpLmh0bWwoKTtcbnZhciBzaGlwcGluZ0Nvc3RDb250ZW50ID0gJCgnI3Y2NS1vbmVwYWdlLVNoaXBwaW5nQ29zdFRvdGFscycpLmh0bWwoKTtcbnZhciBzaGlwcGluZ1RvdGFscyA9ICQoJyN2NjUtb25lcGFnZS1TaGlwcGluZ0Nvc3RQYXJlbnQnKS5wYXJlbnQoKS5odG1sKCk7XG5cblxuY2hlY2tvdXRDb250YWluZXIucmVtb3ZlKCk7XG5cblxuXG4kKCcjRm9ybWF0TGlzdG9mRXJyb3JzRGl2JykuYWZ0ZXIoJzxkaXYgaWQ9XCJnZnAtcmVzcG9uc2l2ZS1jaGVja291dFwiPjwvZGl2PicpO1xudmFyIHJlc3BDaGVja291dCA9ICQoJyNnZnAtcmVzcG9uc2l2ZS1jaGVja291dCcpO1xuXG5yZXNwQ2hlY2tvdXQuaHRtbCgnPGRpdiBjbGFzcz1cImdmcC1oYWxmXCI+PGRpdj4nICsgYmlsbGluZ0hlYWRlciArIGJpbGxpbmdDb250ZW50ICsgJzwvZGl2PicgKyAnPGRpdj4nICsgc2hpcHBpbmdIZWFkZXIgKyBzaGlwcGluZ0NvbnRlbnQgKyAnPC9kaXY+PC9kaXY+Jyk7XG5yZXNwQ2hlY2tvdXQuYXBwZW5kKCc8dGFibGUgaWQ9XCJ2NjUtb25lcGFnZS1hZGRpdGlvbmFsLWluZm9cIj48dGJvZHk+PHRyPicgKyBhZGRpdGlvbmFsSW5mb0hlYWRlciArICc8L3RyPjx0cj4nICsgYWRkaXRpb25hbEluZm9Db250ZW50ICsgJzwvdHI+PC90Ym9keT48L3RhYmxlPicpO1xucmVzcENoZWNrb3V0LmFwcGVuZChzaGlwcGluZ1RvdGFscyk7XG5cblxuXG4vKlxuPT09PT09PT09PT09PT09PT09PT09PT09PVxuS0lMTFNIRUVUXG49PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuJCgnaW1nW3NyYz1cIi92L3ZzcGZpbGVzL3RlbXBsYXRlcy9nZnAtdGVzdC9pbWFnZXMvY2xlYXIxeDEuZ2lmXCJdJykucmVtb3ZlKCk7XG4kKCcuY29sb3JzX3ByaWNlYm94IGltZ1tzcmM9XCIvdi92c3BmaWxlcy90ZW1wbGF0ZXMvZ2ZwLXRlc3QvaW1hZ2VzL1BCb3hfQm9yZGVyX0xlZnRfVG9wLmdpZlwiXScpLnBhcmVudCgndHInKS5yZW1vdmUoKTtcbmlmICgkKCcjdjY1LW9uZXBhZ2UtYnJlYWRjcnVtYicpKSB7XG4gICAgJCgnI3Y2NS1vbmVwYWdlLWJyZWFkY3J1bWInKS5yZW1vdmUoKTtcbn1cbiQoJyN2NjUtb25lcGFnZS1Db3B5QmlsbGluZ1RvU2hpcHBpbmdMaW5rJykucmVtb3ZlKCk7XG5cbmlmICh3aW5kb3cuZ2xvYmFsX0N1cnJlbnRfUHJvZHVjdENvZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1wcm9kdWN0Jyk7XG5cbiAgICB2YXIgcHJvZHVjdERlc2NyaXB0aW9uV3JhcCA9ICQoJyN2NjUtcHJvZHVjdGRldGFpbC1hY3Rpb24td3JhcHBlcicpO1xuICAgIHByb2R1Y3REZXNjcmlwdGlvbldyYXAuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpLmF0dHIoJ2FsaWduJywgJ2xlZnQnKTtcbiAgICBwcm9kdWN0RGVzY3JpcHRpb25XcmFwLnNpYmxpbmdzKCkuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xufSJdfQ==
