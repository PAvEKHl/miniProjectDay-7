import {useState,useEffect} from 'react'
import {userData} from '../typesInterface/UserInterface'
export function UsersParsing(){
    const[user, setUser] = useState<userData[]>([]) //массив обьектов
    const[waitingLoad, setWaitingLoad] = useState<boolean>(true) //ожидание HTTP ответа
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        async function ParsingData() {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error(`ошибка загрузки`)
                }
                const users = await response.json()
                setUser(users)
                setWaitingLoad(false)
            }
            catch(error){
                setError("Ошибка HTTP запроса")
                console.log(`ошибка ${error}`)
                setWaitingLoad(false)
                return []
            }
        }
    ParsingData()
    }, [])
    return ({user,waitingLoad,error}) //возврощаем состояния хуков
}