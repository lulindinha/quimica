function concentracao_molar(){
	mols_soluto = parseFloat(document.getElementById('mols_soluto').value);
	volume_solucao = parseFloat(document.getElementById('volume_solucao').value);
	// alert(mols_soluto/volume_solucao);
	document.getElementById('result').innerHTML = mols_soluto/volume_solucao;
	document.getElementById("popup").style.visibility = "visible";
}

function concentracao_comum(){
	massa_soluto = parseFloat(document.getElementById('massa_soluto').value);
	volume_solucao_comum = parseFloat(document.getElementById('volume_solucao_comum').value);
	// alert(massa_soluto/volume_solucao_comum);
	document.getElementById('result').innerHTML = massa_soluto/volume_solucao_comum;
	document.getElementById("popup").style.visibility = "visible";
}	


function diluicao(){
	concentracao_inicial = parseFloat(document.getElementById('concentracao_inicial').value);
	concentracao_final = parseFloat(document.getElementById('concentracao_final').value);
	volume_inicial = parseFloat(document.getElementById('volume_inicial').value);
	volume_final = parseFloat(document.getElementById('volume_final').value);

	document.getElementById('result').innerHTML = result;
	document.getElementById("popup").style.visibility = "visible";
}	

function fechar(){
	document.getElementById("popup").style.visibility = "hidden";
}