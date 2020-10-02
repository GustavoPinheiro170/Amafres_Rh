import React from 'react';
import { TOKEN_POST, USER_GET } from './api';
import {useNavigate} from 'react-router-dom';




export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] =React.useState(null);
    const navigate = useNavigate();


    const userLogout = React.useCallback( async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        localStorage.removeItem('Username');
        navigate('/');
    },[navigate])


    async function getUser(token){
        const {url} = USER_GET({token});
        const response = await fetch(url); 
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password){
        try {
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_POST({username, password});
            const tokenRes = await fetch(url, options);
            // if(tokenRes.ok) throw new Error(`${tokenRes.statusText}`);
            const {nome} = await tokenRes.json();
            localStorage.setItem('Username', nome);
            getUser(nome);
            navigate('/Conta');
           
            
    } catch (err){
        setError(err.message);
        setLogin(false);
        

    } finally {
        setLoading(false);
    }
    }


    React.useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem('Username');
            if(token) {
                try {
                setError(null);
                setLoading(true);
                // const {url, options} = TOKEN_VALIDATE_POST(token);
                // const response = await fetch(url, options);
                // if(!response.ok) throw new Error('Token inválido');
                // await response.json();
                await getUser(token);
                } catch(err){
                        userLogout();
                }  finally{
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout])

    return (
        <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}}>{children}</UserContext.Provider>
    );
}

