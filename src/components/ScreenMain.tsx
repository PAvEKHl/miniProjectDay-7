import {UsersParsing} from '../dataParsing/UsersParsing'
import {UsersDataControls} from './UsersDataControls' 
export function UsersListData(){
    const {user,waitingLoad,error} = UsersParsing()
    if(waitingLoad){
        return <h1 style = {{ color:'red' }}>ОЖИДАЙТЕ ЗАГРУЗКИ!</h1>
    }
    if(error){
        return <h1 style = {{ color:'red' }}>{error}</h1>
    }
    return (
        <div>
            <UsersDataControls usersArray = {user} /> 
        </div>

    )
}