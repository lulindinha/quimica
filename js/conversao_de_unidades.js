// função para converter unidades de massa

function conversao_unidade_massa(){
	valor_massa = parseFloat(document.getElementById('valor_massa').value);
	var massa_unidade = document.getElementById("massa_unidade");
	
	console.log(valor_massar);

	if (massa_unidade.options[massa_unidade.selectedIndex].value == 'kg') {
		calculo = (valor_massa * 1000);
		document.getElementById('result').innerHTML = calculo;
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'hg'){
		calculo = (valor_massa * 100);
		document.getElementById('result').innerHTML = calculo;
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'dag'){
		calculo = (valor_massa * 10);
		document.getElementById('result').innerHTML = calculo;
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'cg'){
		calculo = (valor_massa / 100);
		document.getElementById('result').innerHTML = calculo;
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'mg'){
		calculo = (valor_massa / 1000);
		document.getElementById('result').innerHTML = calculo;
	}

	document.getElementById("popup").style.visibility = "visible";
}

// função para converter unidade de volume 

function conversao_unidade_volume(){
	valor_volume = parseFloat(document.getElementById('valor_volume').value);
	var volume_unidade = document.getElementById("volume_unidade");
	if (volume_unidade.options[volume_unidade.selectedIndex].value == 'hl') {
		calculo = (valor_volume * 1000);
		document.getElementById('result').innerHTML = calculo;
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'dl'){
		calculo = (valor_volume * 100);
		document.getElementById('result').innerHTML = calculo;
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'dal'){
		calculo = (valor_volume * 10);
		document.getElementById('result').innerHTML = calculo;
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'cl'){
		calculo = (valor_volume / 100);
		document.getElementById('result').innerHTML = calculo;
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'ml'){
		calculo = (valor_volume / 1000);
		document.getElementById('result').innerHTML = calculo;
	}
 	
	document.getElementById("popup").style.visibility = "visible";
}

// função que mostra o pop up
function fechar(){
	document.getElementById("popup").style.visibility = "hidden";
}

