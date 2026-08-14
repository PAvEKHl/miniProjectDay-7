import {userData} from '../typesInterface/UserInterface'
export async function userHooks(): Promise<userData[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error(`ошибка загрузки`)
    }
    return(await response.json())
}