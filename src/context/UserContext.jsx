import {useState, createContext} from 'react';


export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState({
        isLogIn: false,
        name: '',
        currency: 'CZK',
    });


    const logIn = () => {
        setUser({
            isLogIn: true,
            name: 'John Doe',
            currency: 'EUR',
        })
    }

    const logOut = () => {
        if (user.isLogIn) {
        setUser({
            isLogIn: false,
            name: '',
            currency: 'CZK',
        })
            }else{
            console.log('User is not logged in');
        }
    }
    const changeCurrency = (currency) => {
        setUser({...user, currency})
    }

    return(
        <UserContext.Provider value={{
          user,
            logIn,
            logOut,
            changeCurrency,
        }}>
            {children}
        </UserContext.Provider>
    )
}