import {useState,useEffect} from 'react'
import {userHooks} from '../hooks/UserHooksForParsing'
import {userData} from '../typesInterface/UserInterface'

export function dataParsing(){
    const[user, setUser] = useState<userData[]>([]) //массив обьектов
    const[waitingLoad, setWaitingLoad] = useState<boolean>(true) //ожидание HTTP ответа
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        async function ParsingData() {
            try{
                const user = await userHooks() 
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