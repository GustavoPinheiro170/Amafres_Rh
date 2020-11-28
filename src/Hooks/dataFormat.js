export function formatNascimento (dados) {
    if(dados){
        const regex = /-/g;
        const nascimento = dados.dtNascimento;
        const replaceData = String(nascimento.replace(regex, '/'))
        const newData = replaceData.replace('T00:00:00', '');
        return newData.split('/').reverse().join('/');
        }
}

export function formatAdesao (dados) {
    if(dados){
        const regex = /-/g;
        const nascimento = dados.dtInicio;
        const replaceData = String(nascimento.replace(regex, '/'))
        const newData = replaceData.replace('T00:00:00', '');
        return newData.split('/').reverse().join('/');
        }
}

export function formatCPF(dados) {
    if(dados){
        const cpf = dados.CPF;
        return   cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
}

export function formatCPFCard(dados) {
    if(dados){
        const cpf = dados.cpf;
        return   cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
}
