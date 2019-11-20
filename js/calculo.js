// Essa função recebe os valores do primeiro formulário e realiza o cálculo de concentração molar
function concentracao_molar(){
	mols_soluto = parseFloat(document.getElementById('mols_soluto').value);
	volume_solucao = parseFloat(document.getElementById('volume_solucao').value);
	// alert(mols_soluto/volume_solucao);
	document.getElementById('result').innerHTML = mols_soluto/volume_solucao;
	document.getElementById("popup").style.visibility = "visible";
}

// Essa função recebe os valores do terceiro formulário e realiza o cálculo de concentração comum
function concentracao_comum(){
	massa_soluto = parseFloat(document.getElementById('massa_soluto').value);
	volume_solucao_comum = parseFloat(document.getElementById('volume_solucao_comum').value);
	// alert(massa_soluto/volume_solucao_comum);
	document.getElementById('result').innerHTML = massa_soluto/volume_solucao_comum;
	document.getElementById("popup").style.visibility = "visible";
}	


// Essa função recebe os valores do segundo formulário e realiza o cálculo de diluição
function diluicao(){
	concentracao_inicial = parseFloat(document.getElementById('concentracao_inicial').value);
	concentracao_final = parseFloat(document.getElementById('concentracao_final').value);
	volume_inicial = parseFloat(document.getElementById('volume_inicial').value);
	volume_final = parseFloat(document.getElementById('volume_final').value);

	if (isNaN(concentracao_inicial) == true){
		document.getElementById('result').innerHTML = (volume_final*concentracao_final)/volume_inicial;
	}

	else if (isNaN(concentracao_final) == true){
		document.getElementById('result').innerHTML = (concentracao_inicial*volume_inicial)/volume_final;
	}

	else if (isNaN(volume_inicial) == true){
		document.getElementById('result').innerHTML = (concentracao_final*volume_final)/concentracao_inicial;
	}

	else if (isNaN(volume_final) == true){
		document.getElementById('result').innerHTML = (concentracao_inicial*volume_inicial)/concentracao_final;
	}

	document.getElementById("popup").style.visibility = "visible";
}	

function fechar(){
	document.getElementById("popup").style.visibility = "hidden";
}

