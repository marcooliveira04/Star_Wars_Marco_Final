$('#pessoas').on('change', function() {
	var person = document.querySelector("#pessoas");
		$.ajax({
			type: 'GET', 
			url: 'http://swapi.co/api/people/' + person.value,
			dataType:'json',
			data: { get_param: 'value' },
			
			error: function(erro) {
				alert(erro.responseText);
			},
			
			success: function(data) {
				var divPerson = document.querySelector("#divPessoas");
				divPerson.innerHTML = "";
				divPerson.innerHTML += "<p>Nome: " + data.name + "</p><p>Altura: " + data.height + "</p><p>Ano Nasc.: " + data.birth_year + "</p><p>Genero: " + data.gender + "</p>";
	}});
});

$('#planetas').on('change', function() {
	var planets = document.querySelector("#planetas");
		$.ajax({
			type: 'GET', 
			url: 'http://swapi.co/api/planets/' + planets.value,
			dataType:'json',
			data: { get_param: 'value' },
			
			error: function(erro) {
				alert(erro.responseText);
			},
			
			success: function(data) {
				var divPlanetas = document.querySelector("#divPlanetas");
				divPlanetas.innerHTML = "";
				divPlanetas.innerHTML += "<p>Nome: " + data.name + "</p><p>Rotação: " + data.rotation_period + "</p><p>Órbita: " + data.orbital_period + "</p><p>População: " + data.population + "</p>";
	}});
});

$('#naves').on('change', function() {
	var ships = document.querySelector("#naves");
		$.ajax({
			type: 'GET', 
			url: 'http://swapi.co/api/starships/' + ships.value,
			dataType:'json',
			data: { get_param: 'value' },
			
			error: function(erro) {
				alert(erro.responseText);
			},
			
			success: function(data) {
				var divPlanetas = document.querySelector("#divNaves");
				divPlanetas.innerHTML = "";
				divPlanetas.innerHTML += "<p>Nome: " + data.name + "</p><p>Modelo: " + data.model + "</p><p>Fabricante: " + data.manufacturer + "</p><p>Comprimento: " + data.length + "</p><p>Passageiros: " + data.passengers + "</p>";
	}});
});