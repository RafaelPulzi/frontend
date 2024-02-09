function Validation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.nome === "") {
        error.nome = "Nome não pode estar vazio"
     }
     else {
        error.nome = ""
     }
 
    if(values.email === "") {
       error.email = "E-mail não pode estar vazio"
    }
    else if(!email_pattern.test(values.email)) {
       error.email = "E-mails invalido"
    }else {
       error.email = ""
    }
 
    if(values.senha === "") {
       error.senha = "Senha não pode estar vazia"
    }
    else if (!senha_pattern.test(values.senha)) {
       error.senha = "Senha invalida"
    } else {
       error.senha = ""
    }
    return error;
 }
 
 export default Validation;