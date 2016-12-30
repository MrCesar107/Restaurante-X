"use strict";$.fn.formObject=function(){var i={};return $.each($(this).serializeArray(),function(t,n){i[n.name]=n.value||""}),i};
