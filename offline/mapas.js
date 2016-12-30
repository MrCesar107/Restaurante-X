;(function()
{

	class localizacionUsuario
	{
		static get(callback)
		{
			if(navigator.geolocation)
			{
				navigator.geolocation.getCurrentPosition((location)=>
				{
					callback(
					{
						lat: location.coords.latitude,
						lng: location.coords.longitude
					})
				})
			}
			else
			{
				alert("Tu navegador no soporta geolocalización")
			}
		}
	}

	const my_place = 
	{
		lat: 19.4248097,
		lng: -99.19492559999998
	}

	google.maps.event.addDomListener(window, "load", ()=>
	{
		const mapa = new google.maps.Map(
			document.getElementById("map"),
			{
				center: my_place,
				zoom: 15
			})

		const marcador = new google.maps.Marker(
		{
			map: mapa,
			position: my_place,
			title: "Restaurante X",
			visible: true
		})
	})



	localizacionUsuario.get((coords)=>
	{
		//Calcular distancia del restaurante al usuario
		let origen = new google.maps.LatLng(coords.lat, coords.lng) //LatLng
		let destino = new google.maps.LatLng(my_place.lat, my_place.lng)

		let service = new google.maps.DistanceMatrixService()

		service.getDistanceMatrix(
		{
			origins: [origen],
			destinations: [destino],
			travelMode: google.maps.TravelMode.DRIVING
		}, (response, status)=>
		{
			if(status == google.maps.DistanceMatrixStatus.OK)
			{
				const duration_element = response.rows[0].elements[0]
				const duracion_viaje = duration_element.duration.text
				document.querySelector("#mensaje")
						.innerHTML = `
							Estás a ${duracion_viaje} de una noche 
							inolvidable en
							<span class="dancing-script medium">
								Restaurante X
							</span>
						`

			}
		})

	})

})()