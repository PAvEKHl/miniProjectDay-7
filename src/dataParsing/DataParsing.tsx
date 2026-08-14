import {useState,useEffect} from 'react'
import {UserHooks} from '../hooks/UserHooksForParsing'
// СamelCase, UserData 
import {userData} from '../typesInterface/UserInterface'

//Добавлять use если это хук, useGetUser, return type(посмотри в доке)  
export function DataParsing()  {
    
    const[user, setUser] = useState<userData[]>([]) //массив обьектов
    //isLoading, setIsLoading
    const[waitingLoad, setWaitingLoad] = useState<boolean>(true) //ожидание HTTP ответа
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        //camelCase, parsingData 
        async function ParsingData() {
            try{
                const user = await UserHooks() 
                setUser(user)
                // error throw ->>>> 
                setWaitingLoad(false) // потенциально не доходим до сюда = infinity loading 
            }
            catch(error){
                setError("Ошибка HTTP запроса")
                console.log(`ошибка ${error}`)
                setWaitingLoad(false)
            } finally {
                setWaitingLoad(false)
            } //использовать там где это возможно 
        }
        ParsingData()
    }, [])
    return ({user,waitingLoad,error}) //возврощаем состояния хуков
}
