;(function()
{

	$(".step:nth-child(1)").addClass("active")

	const selector = "#contacto"

	$(".path-step").on("click", (e)=>
	{
		const $current_circle = $(e.target)

		focusCircle($current_circle)

		const posicion = $current_circle.index(".path-step") + 1

		let $test = $(".step:nth-child("+posicion+")")

		siguiente($test)
	})

	$(selector).find(".input").on("change", (e)=>
	{
		const $input = $(e.target)
		const $nextStep = $input.parent().next(".step")

		if($nextStep.length > 0)
		{
			siguiente($nextStep)
		}
		else
		{
			validarFormulario()
		}
	})

	//Helpers
	function validarFormulario()
	{
		if(formularioValido())
		{

		}
		else
		{
			let $stepInvalido = $(selector).find(".input:invalid").first().parent()
			siguiente($stepInvalido);
		}
	}

	function formularioValido()
	{
		//return document.querySelector(selector).checkValidity()
		return false
	}

	function siguiente($nextStep)
	{
		$(".step.active").removeClass("active")
		$nextStep.addClass("active")
		$nextStep.find(".input").focus()

		//Coordinar loc círculos
		const position = ($nextStep.index(".step")) + 1

		const $circulo = $(".path-step:nth-child("+position+")")

		focusCircle($circulo)
		
		//$nextStep.focus()
	}

	function focusCircle($circulo)
	{
		$(".path-step.active").removeClass("active")
		$circulo.addClass("active")
	}
})()