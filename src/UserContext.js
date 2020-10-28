import React from 'react';
import { CARD_GET, FINISH_REGISTER, FIRST_ACESS, TOKEN_POST } from './api';
import {useNavigate} from 'react-router-dom';


export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    // Estados de captura de dados
    const [data, setData] = React.useState(null);
    const [dados, setDados] = React.useState(null);

    // Estados de login 
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [codigo, setCodigo] = React.useState(false);
    const [tokenRes, setToken] = React.useState(false);

    // Estados confirmação de usuario
    const [ finished , setFinished] = React.useState(false);

    // Estado de erro
    const [error, setError] =React.useState(null);
    const navigate = useNavigate();



    // Função para retornar a área de login
    function returnLogin () { navigate('/')}

            // Após clicar em Logout os estados são limpos
                const userLogout = React.useCallback( async function () {
                    setDados(null);
                    setData(null);
                    setError(null);
                    setLoading(false);
                    setLogin(false);
                    localStorage.removeItem('token');
                    navigate('/');
            
                },[navigate])



        // Realiza o fetch inicial da aplicação passando usuario e senha como parametro,
        // Distribui no localstorage o Token
        // Insere nos dados o código do usuario
        // Insere em data todo o JSON
        const userLogin = React.useCallback( async function (username, password){
                try {
                    setError(null);
                    setLoading(true);
                    
                    const {url, options} = TOKEN_POST(username, password);
                    const tokenRes = await fetch(url, options);
                    const returnFetch = await  tokenRes.json();
                    const tokenNumber = returnFetch.Token; 
                    const codigoUser = returnFetch.Codigo;
                   
                    
                    console.log(returnFetch);
                    if(!tokenRes.ok)  throw new Error(tokenRes.statusText) ;
                    
                    else {
                    localStorage.setItem('token', tokenNumber);
                    setData(returnFetch);

             
                    setToken(tokenNumber);
                    setCodigo(codigoUser);
                    getDados(codigoUser);
                 
                    navigate('/Conta');
                        }
                    } catch (err){
                 
                        setError(err.message);
                        setLogin(false);
                        
                    } finally {
                        setLoading(false);
                    }
                },[navigate])
    

            
    //Após o fetch inicial, insere os dados no estado da aplicação buscando o código do usuario 
        async function getDados(token) {
            const { url } = CARD_GET(token);
            const response = await fetch(url);
            const json = await response.json();
            setDados(json);
        }
        
    // Realiza o envio de email e cadastro do usuario pelo primeiro acesso
        async function firtAcess(cpf, senha, email) {
            try{
            setLoading(true);
            const { url } = FIRST_ACESS(cpf, senha, email);
            await fetch(url);
            navigate('/ConfirmacaoEmail')
            }
            catch( err ) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
            

        }

        async function finisherRegister(value){
            try {
                setLoading(true);
                const { url} = FINISH_REGISTER(value);
                const response = await fetch(url);
                 console.log(response);
            }
            catch(err) {
                setError(err.message);

            }
            finally {
                setLoading(false);
            }
        }




            // Realiza o login caso o token seja valido. (necessário um endPoint de verificação)
            React.useEffect(() => {

                async function autoLogin() {
                    const token = localStorage.getItem('token');
                    if(token) {
                        try {

                        setLoading(true);   
                        if(token === tokenRes) return setLogin(true);
                        else return userLogin();      
                    }
                    catch(err){
                                setLoading(false);
                                setError(null);
                        }  finally{
                                setLoading(false);
                        }
                    } else {
                        return null
                    }
                }

                autoLogin();

                // if(tokenRes === false) return navigate('/');

                
            }, [ navigate , tokenRes, userLogin])


    // Disponibiliza todos os dados na aplicação
    return (
        <UserContext.Provider value={{
            data, 
            error, 
            loading, 
            login,
            dados,
            codigo,
            finished,
            setFinished,
            userLogin,
            returnLogin,
            firtAcess, 
            userLogout, 
            setError, 
            getDados, 
            finisherRegister,


        }}>{children}</UserContext.Provider>
    );
    }


