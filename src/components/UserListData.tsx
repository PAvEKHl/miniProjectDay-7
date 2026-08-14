import {userData} from '../typesInterface/UserInterface'
import {dataParsing} from '../dataParsing/DataParsing'
import { UserItem } from "./UserItem";
import {DataControls} from './DataControls'
interface userListDataInterface {
    userArray: userData[], //т.к. filter/sort работает с масссивами
}  
export function UserListData(){
    const {user,waitingLoad,error} = dataParsing()
    if(waitingLoad){
        return <h1 style = {{ color:'red' }}>ОЖИДАЙТЕ ЗАГРУЗКИ!</h1>
    }
    if(error){
        return <h1 style = {{ color:'red' }}>{error}</h1>
    }
    return (
        <div>
            <DataControls userArray = {user} /> 
            <ul>
                {userArray.map(user => {
                    return <UserItem key = {user.id} user = {user} />
            })}
            </ul>
        </div>

    )
}