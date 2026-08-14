import {userData} from '../typesInterface/UserInterface'

//Naming, getUser. 
export async function UserHooks(): Promise<userData[] | null > {
    // try catch - потенциально может стрельбнукт 
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users') 

        if (!response.ok) {
            throw new Error(`ошибка загрузки`)
        }

        //лишний await, проверить 
        return(await response.json())   
    } catch(e) {
        logger(e, 'Cant fetch user')
        return null;
    }

}

