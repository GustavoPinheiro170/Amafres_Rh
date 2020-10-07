
const baseUrl= 'http://localhost:3010';

export function TOKEN_POST(body) {
    return {
        url: baseUrl +`/usuario?inscricao=${body}`,
        options: {
            method: 'GET',           
        },
    }
}

export function USER_GET(token){
    return {
        url: baseUrl +`/usuario?nome=${token}`,
        options: {method: 'GET' },
    }
}


export function TOKEN_VALIDATE_POST(token) {
    return {
        url: '/jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers: {
            Authorization: 'Bearer ' + token,
            }
    },
  }
}



