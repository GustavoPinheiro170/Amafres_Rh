import React from 'react';
import {
    CARD_GET,
    CARTEIRINHA,
    FINISH_REGISTER,
    FIRST_ACESS,
    RESET_PASS,
    TOKEN_POST,
    GET_TOKEN,
    GET_COMBOUF,
    UF_POST,
    GET_REDECREDENCIADA,
    GET_ESPECIALIDADES,
    GET_FILTERSCREDENTIAL,
    GET_UNIQUEFILTER
} from './api';
import {
    useNavigate
} from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({
    children
}) => {
    // Estados de captura de dados
    const [data, setData] = React.useState(null);
    const [dados, setDados] = React.useState(null);
    const [dadosDependente, setDadosDependente] = React.useState(null);
    const [carteira, setCarteira] = React.useState(null);

    // Estados de login 
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [codigo, setCodigo] = React.useState(false);
    const [tokenRes, setToken] = React.useState(false);
    
    // Estados da Rede Credenciada
    const [uf, setUF] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [tipoRede, setTipoRede] = React.useState(null);
    const [especialidade, setEspecialidade] = React.useState(null);
    const [resultados, setResultados] = React.useState(null);
    const [info, setInfo ] = React.useState(false)
    const [uniqueFilter, setUniqueFilter ] = React.useState(false)
    const [comboload, setComboload ] = React.useState(false)


    // Estados paginação
    const [total, setTotal] = React.useState([]);


    // Estados confirmação de usuario
    const [finished, setFinished] = React.useState(false);

    // Estados do Navbar 
    const [toggled, setToggled] = React.useState(false);
    const [hamburg, setHamburg] = React.useState(false);

    // Estado de finalização do registro
    const [registerFinisher, setRegisterFinisher] = React.useState(false);

    // Estado de erro e sucesso
    const [error, setError] = React.useState(null);
    const [success , setSuccess] = React.useState(null);




    const navigate = useNavigate();


    
   // Carregando em uma array o total de paginas da busca realizada
    const totalPages = []
    for(let i = 1; i < total - 1 ; i++ ){
        totalPages.push(i)
    }


    // toggledSidebar
    function handleToggleSidebar(value) {
        window.scrollTo(0, 0);
        setToggled(value);
    }


    // Função para retornar a área de login
    function returnLogin() { navigate('/') }

    // Após clicar em Logout os estados são limpos
    const userLogout = React.useCallback(async function () {
        setDados(null);
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        localStorage.removeItem('token');
        navigate('/');

    }, [navigate])



    // Onchange padrão para parametrizar React
    const  HandleChange = ({target}) =>  { return  target.innerText  }

    // Realiza o fetch inicial da aplicação passando usuario e senha como parametro,
    // Distribui no localstorage o Token
    // Insere nos dados o código do usuario
    // Insere em data todo o JSON
    const userLogin = React.useCallback(async function (username, password) {
        try {
            setError(null);
            setLoading(true);
            // setPassword(password);
            const {
                url,
                options
            } = TOKEN_POST(username, password);
            const response = await fetch(url, options);
            const json = await response.json();
            
            if (json.StatusCode !== 200 ) throw new Error(json.Message); 
                        
            else {
                const tokenNumber = json.Content.Token
                const codigoUser = json.Content.Codigo;

                localStorage.setItem('token', tokenNumber);
                localStorage.setItem('id', codigoUser);

                setData(json.Content);
                setToken(tokenNumber);
                setCodigo(codigoUser);
                getDados(codigoUser);
                getCarteirinha(codigoUser);
                navigate('/Conta');
              
            }
        } catch (err) {
            setError(err.message);
            setLogin(false);

        } finally {
            setLoading(false);
        }
    }, [navigate])


    //Após o fetch inicial, insere os dados no estado da aplicação buscando o código do usuario 
    async function getDados(token) {
        const {
            url,
            options
        } = CARD_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setDados(json.Content[0]);
        setDadosDependente(json.Content);
    }


    // Busca todos os dados da carteirinha virtual do usuario utilizando o código como parametro
    async function getCarteirinha(token) {

        try {   
            setLoading(true);
        const {
            url,
            options
        } = CARTEIRINHA(token);
        const response = await fetch(url, options);
        const json = await response.json();
     
        setCarteira(json.Content);
   
        }catch(err) {
            setError(err.message)
        }finally{
            setTimeout(() => {
            setLoading(false);
         }, 1000)
        }
    }



    // Realiza o envio de email e cadastro do usuario pelo primeiro acesso
    async function firtAcess(cpf, senha, email) {
        try {
            setLoading(true);
            const {
                url,
                options
            } = FIRST_ACESS(cpf, senha, email);
            const response = await fetch(url, options);
            const json = await response.json();
            if(json.StatusCode === 200 ) setSuccess(json.Message);
            else setError(json.Message);
            
            navigate('/ConfirmacaoEmail')
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // Finaliza registro  
    async function finisherRegister(value) {
        try {
            setLoading(true);
            const {
                url,
                options
            } = FINISH_REGISTER(value);
            const response = await fetch(url, options);
            const json = response.json();

            if (json.StatusCode !== 200 ) throw new Error(json.Message);
            setRegisterFinisher(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // Envia reset de password
    async function resetPassword(value) {
        try {
            setLoading(true);
            const {
                url,
                options
            } = RESET_PASS(value);
            await fetch(url, options);
            navigate('/finisherReset');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // Rede credenciada

    // Busca as cidades credenciadas
    async function GetUF(){
        try {
            setComboload(true)
            const {url} = GET_COMBOUF();
            const response = await fetch(url);
            const json = await response.json();
            setUF(json.Content)    
            GetRedeCredenciada();
            GetEspecialidades();

        }catch(err){
            setError(err.message)
        }finally{
            setComboload(false)
        }
    }

// Busca o municipio pela cidade
    async function setCityUF(uf){
        try {
        setComboload(true)
        const {url, options} = UF_POST(uf);
        const response = await fetch(url, options);
        const json = await response.json();
        setCity(json.Content)
        }catch(err){
            setError(err.message)
        }finally{
            setComboload(false)
        }
    }

    async function GetRedeCredenciada(){
        try {
        setComboload(true)
        const {url} = GET_REDECREDENCIADA();
        const response = await fetch(url);
        const json = await response.json();
        setTipoRede(json.Content)
    }catch(err) {
        setError(err.message)
    }finally{
        setComboload(false)
    }
}

async function GetEspecialidades(){
    try {          
      
        const {url} = GET_ESPECIALIDADES();
        const response = await fetch(url);
        const json = await response.json();
        setEspecialidade(json.Content)
        }catch(err) {
            setError(err.message)
        }

    }

       async function GetFiltersCredentials(
        uf, 
        cidade, 
        bairro, 
        prestador, 
        especialidade, 
        nome){
        try {          
            setLoading(true)
            const {url, options} = GET_FILTERSCREDENTIAL(
                uf, 
                cidade, 
                bairro, 
                prestador, 
                especialidade, 
                nome
                 );

                 const response = await fetch(url, options);
                 const json = await response.json();
                 setResultados(json.Content)
                 console.log(json);
                 if(json.StatusCode !== 200) throw new Error(json.Message);
                 else setError(null)
                 setTotal(parseInt(json.Content.length / 10))
            
        }catch(err) {
            setError(err.message)
        }
        finally {
            setLoading(false);
        }

    }

    async function getUniqueFilter(nome, cidade){

        try{
            setLoading(true)
            const { url , options} = GET_UNIQUEFILTER( nome, cidade );
            const response = await fetch(url, options);
            const json = await response.json();
            setUniqueFilter(json.Content);
            ChangeInfo();

        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)  
        }


    }

    function ChangeInfo() {

        try { 
          setLoading(true)
          if(info === false)
          setInfo(true)
  
          else {
            setInfo(false)
          }
        }catch(err){
            alert(err.message)
        }finally{
          setTimeout(() => {
          setLoading(false)
        },1000 )
        }
    }







 

    // Realiza o login caso o token seja valido. (necessário um endPoint de verificação)
    React.useEffect(() => {


        async function autoLogin() {
            const token = localStorage.getItem('token');
            const codigo = localStorage.getItem('id');

            if (token) {
                try {
                    setLoading(true);
                    const { url, options} = GET_TOKEN(token)
                    const response = await fetch(url, options);
                    const jsonToken = await response.json();
                    if (jsonToken === true) {
                        getDados(codigo);
                        return setLogin(true);
                    } else {
                        setLogin(false);
                        navigate('/');
                    }
                } catch (err) {
                    setLoading(false);
                    setError(null);

                } finally {
                    setLoading(false);
                }
            } else return null;
        }
        autoLogin();


    }, [navigate, tokenRes, userLogin])

    // Disponibiliza todos os dados na aplicação
    return ( 
    <UserContext.Provider value = {
            {
                data,
                carteira,
                error,
                loading,
                login,
                dados,
                codigo,
                finished,
                toggled,
                registerFinisher,
                hamburg,
                dadosDependente,
                success,
                uf,
                city,
                tipoRede,
                especialidade,
                resultados,
                info, 
                uniqueFilter,
                comboload,
                totalPages,
                
                setComboload,
                getUniqueFilter,
                setInfo,
                ChangeInfo,
                GetFiltersCredentials,
                setLoading,
                GetRedeCredenciada,
                GetEspecialidades,
                setCarteira,
                GetUF,
                setUF,
                setCityUF,
                getCarteirinha,
                setHamburg,
                setRegisterFinisher,
                setToggled,
                setFinished,
                userLogin,
                returnLogin,
                firtAcess,
                userLogout,
                setError,
                getDados,
                HandleChange,
                finisherRegister,
                resetPassword,
                navigate,
                handleToggleSidebar,


            }
        } > {children} </UserContext.Provider>
    );
}