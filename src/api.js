const baseURL = 'https://app.afresp.org.br/AFRApi/Portal';

// Fetch para logar usuario
export function TOKEN_POST(user, pass) {
    const dados = { cpf:user, senha:pass }
    return {
        url: baseURL + '/Login/',
        options: {
            method: 'POST',
            body: JSON.stringify(dados)      
        },
        
    }
}
// Fetch para buscar os dados do usuario pelo código
export function CARD_GET(body) {
    const dados = {codigo:body}
    return {
        url: baseURL + `/BuscarPin/`,
        options: {
            method: 'POST',
            body: JSON.stringify(dados)         
        },
    }
}
// Fetch para recuperação de senha
export function RESET_PASS(token) {
    const dados = { cpf:token }
    return {
        url: baseURL + '/ConfirmaAlterarSenha',
        options: {
            method: 'POST',
            body: JSON.stringify(dados)   
            }   
        }
    }


// Altera a senha pelo Painel
export function ALTER_PASS(cpf, pass, afterpass) {
    const dados = {cpf:cpf, senha:pass, senhaAntiga:afterpass}
    return {
        url: baseURL + '/AlterarSenhaLogado',
        options: {
            method: 'POST',
            body: JSON.stringify(dados)   
            }   
        }
    }

        
// Busca o usuario atual
export function USER_GET(token){
    return {
        url: baseURL + `/usuario?nome=${token}`,
        options: {method: 'GET' },
    }
}
// Fetch para validação da API
export function FIRST_ACESS(user, pass, email) {
    const dados = {cpf:user, senha:pass, email:email};
    return {
        url: baseURL + `/PrimeiroAcesso/` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}
// Finalização do registro via email
export function FINISH_REGISTER(user) {
    const dados = { cpf:user }
    return {
        url: baseURL + `/ConfirmaAlterarSenha` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}

// Busca os dados da carteirinha selecionada
export function CARTEIRINHA(cod) {
    const dados = { codigo:cod }
    return {
        url: baseURL + `/CarteirinhaVirtual` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}

//  Busca o Token válido
export function GET_TOKEN(token) {
    const dados = { token:token }
    return {
        url: baseURL + `/VerificarToken` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}


// Busca UF rede credenciada
export function GET_COMBOUF() {
    return {
        url: baseURL + `/ComboUF` ,
        options: {
            method: 'GET',
    },
  }
}

// Busca o tipo de prestador
export function GET_REDECREDENCIADA() {
    return {
        url: baseURL + `/TipoRedeCredenciada` ,
        options: {
            method: 'GET',
    },
  }
}

// Busca as especialidades 

export function GET_ESPECIALIDADES() {
    return {
        url: baseURL + `/EspecialidadeRedeCredenciada` ,
        options: {
            method: 'GET',
    },
  }
}

// Faz o post para buscar os municipios da cidade
export function UF_POST(token) {
    const dados = { UF:token }
    return {
        url: baseURL + `/ComboCidade` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}

export function GET_FILTERSCREDENTIAL(uf, cidade, bairro, prestador, especialidade, nome) {
    const dados = { 
        idUF:uf, 
        idCidade:cidade, 
        bairro:bairro, 
        idTipoPrestador:prestador, 
        IdEspecialidade:especialidade, 
        nome:nome
     }
    return {
        url: baseURL + `/RedeCredenciada` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}

export function GET_UNIQUEFILTER(nome , cidade) {
    const dados = { 
        nome:nome,
        idCidade:cidade
     }
    return {
        url: baseURL + `/RedeCredenciada` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}