function validar(){
    let dados_campo_nome = document.getElementById('campo_nome').value;
    let dados_campo_data_nascimento = document.getElementById('campo_data_nascimento').value;
    console.log(dados_campo_nome);
    console.log(dados_campo_data_nascimento);

    let validacao = 0;

    if(dados_campo_nome=='' || dados_campo_nome.lenght >=3 ){
        validacao = validacao+1;
    }
    
    if(dados_campo_data_nascimento=='' || dados_campo_data_nascimento=='dd/mm/yyyy' ){
        validacao = validacao+1;
    }

    console.log(validacao);

    if(validacao > 0 ){
      
    }else{
        
    }

}