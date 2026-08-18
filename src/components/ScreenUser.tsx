import {UserParsing} from '../dataParsing/UserParsing'
import {UserDataControls} from './UserDataControls' 

export function UserListData(){
    const {user,waitingLoad,error} = UserParsing()
    if(waitingLoad){
        return <h1 style = {{ color:'red' }}>ОЖИДАЙТЕ ЗАГРУЗКИ!</h1>
    }
    if(error){
        return <h1 style = {{ color:'red' }}>{error}</h1>
    }
    if(!user){
        return <h1 style = {{ color:'red' }}>Пользователь не найден </h1>
    }
    return (
        <div>
            <UserDataControls user = {user} />
        </div>

    )
}