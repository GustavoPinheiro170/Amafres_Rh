
const baseUrl= 'https://app.afresp.org.br/AFRApi/Portal';

// Fetch para logar usuario
export function TOKEN_POST(user, pass) {
    const dados = { cpf:user, senha:pass }
    return {
        url: baseUrl +`/Login/`,
        options: {
                method: "POST",
                body: JSON.stringify(dados)       
        },
        
    }
}


// Fetch para buscar os dados do usuario pelo código
export function CARD_GET(body) {
    return {
        url: baseUrl +`/BuscarPin?codigo=${body}&token=dddd`,
        options: {
            method: 'GET',
            cache: 'default'           
        },
    }
}
// Fetch para recuperação de senha
export function RESET_PASS(token) {
    return {
        url: baseUrl + '/',
        options: {
            method: 'POST',
            body: {
                password: token
            }   
        }
    }
}
// Busca o usuario atual
export function USER_GET(token){
    return {
        url: baseUrl +`/usuario?nome=${token}`,
        options: {method: 'GET' },
    }
}


// Fetch para validação da API
export function FIRST_ACESS(user, pass, email) {
    const dados = {cpf:user, senha:pass, email:email};
    return {
        url:baseUrl + `/PrimeiroAcesso` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}

export function FINISH_REGISTER(user) {
    const dados = { cpf:user }
    return {
        url:`https://app.afresp.org.br/confirmasenha/senha/confirmasenha/` ,
        options: {
            method: 'POST',
            body: JSON.stringify(dados) 
    },
  }
}


