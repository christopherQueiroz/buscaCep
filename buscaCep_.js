
window.onload = function(){

    var frmBuscaCep = document.getElementById("frmBuscaCep");
    var inputCep = document.getElementById("cCep");
    var logd = document.getElementById("cLog");
    var numLog = document.getElementById("cNum");
    var uf = document.getElementById("cUF");
    var cid = document.getElementById("cCid");
    var bairro = document.getElementById("cBairro");

    var ajax = new XMLHttpRequest(); 

    ajax.onreadystatechange = function(){ 
        

     	if (ajax.readyState === 4 && ajax.status === 200) {
        
    
        var data = JSON.parse(ajax.responseText);

        logd.value = data.logradouro; 
        uf.value = data.estado;
        cid.value = data.cidade;
        bairro.value = data.bairro;
        console.log(ajax.responseText);
     	}
     }



frmBuscaCep.onsubmit = function(){
     
     if(inputCep.value === "" || inputCep.value.length !== 8 || isNaN(inputCep.value)){
     	alert("Informe um CEP correto");
     	return false;
         }

    //conteudo.innerHTML = "Processando...";
    ajax.open("GET", "http://api.postmon.com.br/v1/cep/"+inputCep.value, true); //Esse comando cria o responseText do Ajax.	
    ajax.send();

	return false;

   }


		
	
}




