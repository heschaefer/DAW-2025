//function sem return
function inicio(){
    const mensagem = "Estou iniciando...";
    console.log(mensagem);
}

//function com return
function processa(){
    const mensagem = "Estou processando...";
    return(mensagem);
}

inicio();
const msgProcessa = processa();
console.log(msgProcessa);
