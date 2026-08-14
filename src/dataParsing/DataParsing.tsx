import {useState,useEffect} from 'react'
import {UserHooks} from '../hooks/UserHooksForParsing'
// СamelCase, UserData 
import {userData} from '../typesInterface/UserInterface'

//Добавлять use если это хук 
export function DataParsing(){
    
    const[user, setUser] = useState<userData[]>([]) //массив обьектов
    const[waitingLoad, setWaitingLoad] = useState<boolean>(true) //ожидание HTTP ответа
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        //camelCase, parsingData 
        async function ParsingData() {
            try{
                const user = await UserHooks() 
                setUser(user)
                setWaitingLoad(false)
            }
            catch(error){
                setError("Ошибка HTTP запроса")
                console.log(`ошибка ${error}`)
                setWaitingLoad(false)
            }
        }
    ParsingData()
    }, [])
    return ({user,waitingLoad,error}) //возврощаем состояния хуков
}
