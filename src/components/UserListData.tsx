import {userData} from '../typesInterface/UserInterface'
import {DataParsing} from '../dataParsing/DataParsing'
import { UserItem } from "./UserItem";
import {DataControls} from './DataControls'

interface userListDataInterface {
    userArray: userData[], //т.к. filter/sort работает с масссивами
}  

export function UserListData(){
    //Необходимо будет пользолваться линтерами и prettier - нужно для корректного выраванивания кода.
    const { user, waitingLoad, error } = DataParsing()
    
    if (waitingLoad) {
        return <h1 style = {{ color:'red' }}>ОЖИДАЙТЕ ЗАГРУЗКИ!</h1>
    }
    
    if (error) {
        return <h1 style = {{ color:'red' }}>{error}</h1>
    }
    
    return (
        <div>
            <DataControls userArray = {user} /> 
        </div>
    )
}
