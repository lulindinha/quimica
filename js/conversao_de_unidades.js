// função para converter unidades de massa

function conversao_unidade_massa(){
	valor_massa = parseFloat(document.getElementById('valor_massa').value);
	var massa_unidade = document.getElementById("massa_unidade");
	
	console.log(valor_massa);

	if (massa_unidade.options[massa_unidade.selectedIndex].value == 'kg') {
		calculo = (valor_massa * 1000);
		document.getElementById('result').innerHTML = calculo;
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'mg'){
		calculo = (valor_massa / 1000);
		document.getElementById('result').innerHTML = calculo;
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'g'){
		calculo = (valor_massa * 1);
		document.getElementById('result').innerHTML = calculo;
	}

	document.getElementById("popup").style.visibility = "visible";
}

// função para converter unidade de volume 

function conversao_unidade_volume(){
	valor_volume = parseFloat(document.getElementById('valor_volume').value);
	var volume_unidade = document.getElementById("volume_unidade");
	if (volume_unidade.options[volume_unidade.selectedIndex].value == 'l') {
		calculo = (valor_volume * 1);
		document.getElementById('result2').innerHTML = calculo;
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'ml'){
		calculo = (valor_volume / 1000);
		document.getElementById('result2').innerHTML = calculo;
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'dm3'){
		calculo = (valor_volume * 1);
		document.getElementById('result2').innerHTML = calculo;
	}
	document.getElementById("popup2").style.visibility = "visible";
}

// função que mostra o pop up
function fechar(){
	document.getElementById("popup").style.visibility = "hidden";
}


// função que mostra o pop up
function fechar2(){
	document.getElementById("popup2").style.visibility = "hidden";
}
