var pagePath=window.location.pathname,heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--generic-"+getRandomInt(1,5)+".jpg)",heroText="Green Farm Parts";pagePath.match(/Filters/i)&&(heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--filters.jpg)",heroText="Oil Filters"),pagePath.match(/Maintenance-Kits/i)&&(heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--maintenance-kits.jpg)",heroText="Maintenance Kits"),pagePath.match(/Toys/i)&&(heroImg="url(/v/vspfiles/templates/gfp-test/img/hero--toys.jpg)",heroText="Toys"),updateHero(heroImg,heroText);var breadcrumbs=document.querySelector(".matching_results_text");breadcrumbs&&breadcrumbs.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("breadcrumbs");var searchBarContainer=document.querySelector(".search-bar-container"),searchBarContainerOffset=searchBarContainer.offsetTop;function getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function toggleMenu(){document.body.classList.toggle("menu-open"),document.querySelector("#hamburger").classList.toggle("is-active")}function toggleMenuAccordian(e){var t=e.target;console.log(t),t.nextElementSibling&&(t.classList.toggle("active"),t.nextElementSibling.classList.toggle("accordian-open"))}function toggleChatWindow(e){e.preventDefault(),1!=window.fcWidget.isOpen()?window.fcWidget.open():window.fcWidget.close()}function updateHero(e,t){var a=document.querySelector(".hero--not-home");a.style.backgroundImage=e;var n=a.querySelector("h1");n.innerHTML=t,n.style.opacity=1}function fixSearch(){window.scrollY>=searchBarContainerOffset?(document.body.style.paddingTop=searchBarContainer.offsetHeight+"px",document.body.classList.add("search-bar-fixed")):(document.body.style.paddingTop=0,document.body.classList.remove("search-bar-fixed"))}searchBarContainer&&window.addEventListener("scroll",fixSearch),document.addEventListener("click",function(e){("hamburger"===e.target.id||e.target.classList.contains("hamburger-box")||e.target.classList.contains("hamburger-inner"))&&toggleMenu(),e.target.classList.contains("accordian-toggle--site-header")&&toggleMenuAccordian(e),"#chat"===e.target.hash&&toggleChatWindow(e)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJwYWdlUGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoZXJvSW1nIiwiZ2V0UmFuZG9tSW50IiwiaGVyb1RleHQiLCJtYXRjaCIsInVwZGF0ZUhlcm8iLCJicmVhZGNydW1icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWFyY2hCYXJDb250YWluZXIiLCJzZWFyY2hCYXJDb250YWluZXJPZmZzZXQiLCJvZmZzZXRUb3AiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwidG9nZ2xlTWVudSIsImJvZHkiLCJ0b2dnbGUiLCJ0b2dnbGVNZW51QWNjb3JkaWFuIiwiZSIsInNlbGYiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9nZ2xlQ2hhdFdpbmRvdyIsInByZXZlbnREZWZhdWx0IiwiZmNXaWRnZXQiLCJpc09wZW4iLCJvcGVuIiwiY2xvc2UiLCJoZXJvQ29udGFpbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZXJvSGVhZGluZyIsImlubmVySFRNTCIsIm9wYWNpdHkiLCJmaXhTZWFyY2giLCJzY3JvbGxZIiwicGFkZGluZ1RvcCIsIm9mZnNldEhlaWdodCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImNvbnRhaW5zIiwiaGFzaCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBV0MsT0FBT0MsU0FBU0MsU0FFM0JDLFFBQVUsd0RBQTBEQyxhQUFhLEVBQUcsR0FBSyxRQUN6RkMsU0FBVyxtQkFFWE4sU0FBU08sTUFBTSxjQUNmSCxRQUFVLDREQUNWRSxTQUFXLGVBR1hOLFNBQVNPLE1BQU0sdUJBQ2ZILFFBQVUscUVBQ1ZFLFNBQVcsb0JBR1hOLFNBQVNPLE1BQU0sV0FDZkgsUUFBVSx5REFDVkUsU0FBVyxRQUdmRSxXQUFXSixRQUFTRSxVQUVwQixJQUFJRyxZQUFjQyxTQUFTQyxjQUFjLDBCQUVyQ0YsYUFDQUEsWUFBWUcsY0FBY0EsY0FBY0EsY0FBY0EsY0FBY0EsY0FBY0EsY0FBY0EsY0FBY0EsY0FBY0MsVUFBVUMsSUFBSSxlQUc5SSxJQUFJQyxtQkFBcUJMLFNBQVNDLGNBQWMseUJBQzVDSyx5QkFBMkJELG1CQUFtQkUsVUFzQmxELFNBQVNaLGFBQWFhLEVBQUtDLEdBR3pCLE9BRkFELEVBQU1FLEtBQUtDLEtBQUtILEdBQ2hCQyxFQUFNQyxLQUFLRSxNQUFNSCxHQUNWQyxLQUFLRSxNQUFNRixLQUFLRyxVQUFZSixFQUFNRCxFQUFNLElBQU1BLEVBR3ZELFNBQVNNLGFBQ0xkLFNBQVNlLEtBQUtaLFVBQVVhLE9BQU8sYUFDZGhCLFNBQVNDLGNBQWMsY0FDN0JFLFVBQVVhLE9BQU8sYUFHaEMsU0FBU0Msb0JBQW9CQyxHQUN6QixJQUFJQyxFQUFPRCxFQUFFRSxPQUNiQyxRQUFRQyxJQUFJSCxHQUNQQSxFQUFLSSxxQkFDVkosRUFBS2hCLFVBQVVhLE9BQU8sVUFDdEJHLEVBQUtJLG1CQUFtQnBCLFVBQVVhLE9BQU8sbUJBRzdDLFNBQVNRLGlCQUFpQk4sR0FDdEJBLEVBQUVPLGlCQUM4QixHQUE1QmxDLE9BQU9tQyxTQUFTQyxTQUNoQnBDLE9BQU9tQyxTQUFTRSxPQUVoQnJDLE9BQU9tQyxTQUFTRyxRQUl4QixTQUFTL0IsV0FBV0osRUFBU0UsR0FDekIsSUFBSWtDLEVBQWdCOUIsU0FBU0MsY0FBYyxtQkFDM0M2QixFQUFjQyxNQUFNQyxnQkFBa0J0QyxFQUN0QyxJQUFJdUMsRUFBY0gsRUFBYzdCLGNBQWMsTUFDOUNnQyxFQUFZQyxVQUFZdEMsRUFDeEJxQyxFQUFZRixNQUFNSSxRQUFVLEVBR2hDLFNBQVNDLFlBQ0Q3QyxPQUFPOEMsU0FBVy9CLDBCQUNsQk4sU0FBU2UsS0FBS2dCLE1BQU1PLFdBQWFqQyxtQkFBbUJrQyxhQUFlLEtBQ25FdkMsU0FBU2UsS0FBS1osVUFBVUMsSUFBSSxzQkFFNUJKLFNBQVNlLEtBQUtnQixNQUFNTyxXQUFhLEVBQ2pDdEMsU0FBU2UsS0FBS1osVUFBVXFDLE9BQU8scUJBL0RuQ25DLG9CQUNBZCxPQUFPa0QsaUJBQWlCLFNBQVVMLFdBR3RDcEMsU0FBU3lDLGlCQUFpQixRQUFTLFNBQVN2QixJQUVuQixjQUFoQkEsRUFBRUUsT0FBT3NCLElBQXdCeEIsRUFBRUUsT0FBT2pCLFVBQVV3QyxTQUFTLGtCQUFzQnpCLEVBQUVFLE9BQU9qQixVQUFVd0MsU0FBUyxxQkFDaEg3QixhQUdBSSxFQUFFRSxPQUFPakIsVUFBVXdDLFNBQVMsa0NBQzVCMUIsb0JBQW9CQyxHQUdGLFVBQWxCQSxFQUFFRSxPQUFPd0IsTUFDVHBCLGlCQUFpQk4iLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG52YXIgaGVyb0ltZyA9ICd1cmwoL3YvdnNwZmlsZXMvdGVtcGxhdGVzL2dmcC10ZXN0L2ltZy9oZXJvLS1nZW5lcmljLScgKyBnZXRSYW5kb21JbnQoMSwgNSkgKyAnLmpwZyknO1xudmFyIGhlcm9UZXh0ID0gJ0dyZWVuIEZhcm0gUGFydHMnO1xuXG5pZiAocGFnZVBhdGgubWF0Y2goL0ZpbHRlcnMvaSkpIHtcbiAgICBoZXJvSW1nID0gJ3VybCgvdi92c3BmaWxlcy90ZW1wbGF0ZXMvZ2ZwLXRlc3QvaW1nL2hlcm8tLWZpbHRlcnMuanBnKSc7XG4gICAgaGVyb1RleHQgPSAnT2lsIEZpbHRlcnMnO1xufVxuXG5pZiAocGFnZVBhdGgubWF0Y2goL01haW50ZW5hbmNlLUtpdHMvaSkpIHtcbiAgICBoZXJvSW1nID0gJ3VybCgvdi92c3BmaWxlcy90ZW1wbGF0ZXMvZ2ZwLXRlc3QvaW1nL2hlcm8tLW1haW50ZW5hbmNlLWtpdHMuanBnKSc7XG4gICAgaGVyb1RleHQgPSAnTWFpbnRlbmFuY2UgS2l0cyc7XG59XG5cbmlmIChwYWdlUGF0aC5tYXRjaCgvVG95cy9pKSkge1xuICAgIGhlcm9JbWcgPSAndXJsKC92L3ZzcGZpbGVzL3RlbXBsYXRlcy9nZnAtdGVzdC9pbWcvaGVyby0tdG95cy5qcGcpJztcbiAgICBoZXJvVGV4dCA9ICdUb3lzJztcbn1cblxudXBkYXRlSGVybyhoZXJvSW1nLCBoZXJvVGV4dCk7XG5cbnZhciBicmVhZGNydW1icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXRjaGluZ19yZXN1bHRzX3RleHQnKTtcblxuaWYgKGJyZWFkY3J1bWJzKSB7XG4gICAgYnJlYWRjcnVtYnMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JyZWFkY3J1bWJzJyk7XG59XG5cbnZhciBzZWFyY2hCYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhci1jb250YWluZXInKTtcbnZhciBzZWFyY2hCYXJDb250YWluZXJPZmZzZXQgPSBzZWFyY2hCYXJDb250YWluZXIub2Zmc2V0VG9wO1xuXG5pZiAoc2VhcmNoQmFyQ29udGFpbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZpeFNlYXJjaCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gICAgaWYgKChlLnRhcmdldC5pZCA9PT0gJ2hhbWJ1cmdlcicpIHx8IChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhbWJ1cmdlci1ib3gnKSkgfHwgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGFtYnVyZ2VyLWlubmVyJykpKSB7XG4gICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpYW4tdG9nZ2xlLS1zaXRlLWhlYWRlcicpKSB7XG4gICAgICAgIHRvZ2dsZU1lbnVBY2NvcmRpYW4oZSk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0Lmhhc2ggPT09ICcjY2hhdCcpIHtcbiAgICAgICAgdG9nZ2xlQ2hhdFdpbmRvdyhlKTtcbiAgICB9XG5cbn0pO1xuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IC8vVGhlIG1heGltdW0gaXMgaW5jbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmUgXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKTtcbiAgICB2YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXInKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51QWNjb3JkaWFuKGUpIHtcbiAgICB2YXIgc2VsZiA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKHNlbGYpO1xuICAgIGlmICghc2VsZi5uZXh0RWxlbWVudFNpYmxpbmcpIHsgcmV0dXJuIH1cbiAgICBzZWxmLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIHNlbGYubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2FjY29yZGlhbi1vcGVuJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNoYXRXaW5kb3coZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAod2luZG93LmZjV2lkZ2V0LmlzT3BlbigpICE9IHRydWUpIHtcbiAgICAgICAgd2luZG93LmZjV2lkZ2V0Lm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZmNXaWRnZXQuY2xvc2UoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlcm8oaGVyb0ltZywgaGVyb1RleHQpIHtcbiAgICB2YXIgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLS1ub3QtaG9tZScpO1xuICAgIGhlcm9Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaGVyb0ltZztcbiAgICB2YXIgaGVyb0hlYWRpbmcgPSBoZXJvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgaGVyb0hlYWRpbmcuaW5uZXJIVE1MID0gaGVyb1RleHQ7XG4gICAgaGVyb0hlYWRpbmcuc3R5bGUub3BhY2l0eSA9IDE7XG59XG5cbmZ1bmN0aW9uIGZpeFNlYXJjaCgpIHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gc2VhcmNoQmFyQ29udGFpbmVyT2Zmc2V0KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IHNlYXJjaEJhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXItZml4ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1iYXItZml4ZWQnKTtcbiAgICB9XG59Il19
