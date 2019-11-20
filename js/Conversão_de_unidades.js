function conversão_unidade_massa(){
	valor_massa = parseFloat(document.getElementById('valor_massa').value);
	var unidade = document.getElementById("massa_unidade");
	if (massa_unidade.options[massa_unidade.selectedIndex].value == 'kg') {
		calculo = (valor_massa * 1000);
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'hg'){
		calculo = (valor_massa * 100);
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'dag'){
		calculo = (valor_massa * 10);
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'cg'){
		calculo = (valor_massa / 100);
	} if (massa_unidade.options[massa_unidade.selectedIndex].value == 'mg'){
		calculo = (valor_massa / 1000);
	}
	document.getElementById('result').innerHTML = calculo;
	document.getElementById("popup").style.visibility = "visible";
}

function conversão_unidade_volume(){
	valor_volume = parseFloat(document.getElementById('valor_volume').value);
	var unidade = document.getElementById("volume_unidade");
	if (volume_unidade.options[volume_unidade.selectedIndex].value == 'hl') {
		calculo = (valor_massa * 1000);
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'dl'){
		calculo = (valor_massa * 100);
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'dal'){
		calculo = (valor_massa * 10);
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'cl'){
		calculo = (valor_massa / 100);
	} if (volume_unidade.options[volume_unidade.selectedIndex].value == 'ml'){
		calculo = (valor_massa / 1000);
	}
	document.getElementById('result').innerHTML = calculo;
	document.getElementById("popup").style.visibility = "visible";
}

function fechar(){
	document.getElementById("popup").style.visibility = "hidden";
}