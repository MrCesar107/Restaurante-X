"use strict";navigator.serviceWorker&&navigator.serviceWorker.register("sw.js"),function(){function t(){var t=o();t&&!r&&(r=!0,e()),!t&&r&&(r=!1,i())}function n(){$("#responsive-nav ul").toggleClass("active"),$("#menu-opener").toggleClass("glyphicon-menu-hamburger")}function e(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#stickyNavigation").slideDown("fast")}function i(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#stickyNavigation").slideUp("fast")}function o(){var t=$("#description"),n=t.height();return $(window).scrollTop()>$(window).height()-2*n}function a(){var t=new Date,n=t.getHours();(17>n||n>23)&&$("#is_open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm ")}function s(t){$.ajax({url:t.attr("action"),method:"POST",data:t.formObject(),dataType:"json",success:function(){t.slideUp(),$("#info-texto").html("Enviamos tu mensaje, muy pronto nos conctactaremos contigo.")}})}var r=!1,c=0,l=parseInt($("[data-name='image-counter']").attr("content"));$("#stickyNavigation").removeClass("hidden"),$("#stickyNavigation").slideUp(0),a(),$("#menu-opener").on("click",n),$("#contact").on("submit",function(t){return t.preventDefault(),s($(this)),!1}),$(".menu-link").on("click",n),setInterval(function(){l>c?c++:c=0,$("#galeria .inner").css({left:"-"+100*c+"%"})},4e3),$(window).scroll(t)}();
