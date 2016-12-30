if(navigator.serviceWorker)
{
	navigator.serviceWorker.register("sw.js")
}

;(function()
{
	let sticky = false
	let currentPosition = 0

	const contadorImagenes = parseInt($("[data-name='image-counter']").attr("content"))
	const email = "cesar.rodriguez.lara54@gmail.com"

	$("#stickyNavigation").removeClass("hidden")
	$("#stickyNavigation").slideUp(0)

	isOpen();

	$("#menu-opener").on("click", toggleNav)

	$("#contact").on("submit", function(e)
	{
		e.preventDefault()

		sendForm($(this))

		return false
	})

	$(".menu-link").on("click", toggleNav)

	setInterval(()=>
		{
			if(currentPosition < contadorImagenes)
			{
				currentPosition++
			}
			else
			{
				currentPosition = 0
			}

			$("#galeria .inner").css(
			{
				left:"-"+currentPosition*100+"%"
			})

		}, 4000)


	$(window).scroll(checkScroll)

	function checkScroll()
	{
		const inBottom = isInBottom()

		if(inBottom && !sticky)
		{
			//Mostrar la navegación sticky
			sticky = true;
			stickNavigation()
		}

		if(!inBottom && sticky)
		{
			//Ocultar la navegación sticky
			sticky = false;
			unstickNavigation()
		}
	}

	function toggleNav()
	{
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-opener").toggleClass("glyphicon-menu-hamburger")
	}

	function stickNavigation()
	{
		$("#description").addClass("fixed").removeClass("absolute")

		$("#navigation").slideUp("fast")
		$("#stickyNavigation").slideDown("fast")
	}

	function unstickNavigation()
	{
		$("#description").removeClass("fixed").addClass("absolute")

		$("#navigation").slideDown("fast")
		$("#stickyNavigation").slideUp("fast")
	}

	function isInBottom()
	{
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

	function isOpen()
	{
		//Reloj 24

		let date = new Date()
		const current_hour = date.getHours()

		if(current_hour < 17 || current_hour > 23)
		{
			$("#is_open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm ")
		}

	}

	function sendForm($form)
	{
		
		$.ajax(
		{
			url: $form.attr("action"),
			method: "POST",
			data: $form.formObject(),
			dataType: "json",
			success: function()
			{
				$form.slideUp()
				$("#info-texto").html("Enviamos tu mensaje, muy pronto nos conctactaremos contigo.")
			}
		})
	}

})()