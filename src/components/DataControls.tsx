import {useState} from 'react'
import {userData} from '../typesInterface/UserInterface'

import {userFilter} from './DataControl/UserFilter'
import {userSearch} from './DataControl/UserSearch'
import {userSort} from './DataControl/UserSort'
import { UserItem } from "./UserItem";
// import {userListData} from './UserListData'
interface userSearchInterface {
    userArray: userData[], //т.к. filter/sort работает с масссивами
    
    // убирать комменты, оставлять только там где нужны 
    
    /* на случай если в  UseState неполучиться
    requestFilterData : string,
    requestSearchData : string,
    requestSortData : string, */
}
// посмотреть что это и стараться использватьс такую запись FC<userSearchInterface>
// переделать лоигку фильтрации и сортировкеи
export function  DataControls({userArray}: userSearchInterface){

    const [searchQuery, setSearchQuery] = useState<string>("")
    const [filterType, setFilterType] = useState<string>("default")
    const [sortType, setSortType] = useState<string>("default")
    const [filteredUsersData, setFilteredUsersData] = useState(userArray);


    const handleFilter = useCallback((filter: string) => {
        
        switch(filter) {
    
            case 'FirstId': {
                setFilteredUsersData((prev) => prev.filter((user) user.id === 1)
            }
            case 'geoLat40-60': {
                setFilteredUsersData((prev) => ...)
            }

            default: {
                setFilteredUsersData(userArray);
            }
        }
                
    }, [userArray]);
        


    
    
// сделать по аналогии 
    const handleSort = (sort: string) => {
        switch(filter) {
    
            case 'FirstId': {
                setFilteredUsersData((prev) => prev.filter((user) user.id === 1)
            }
            case 'geoLat40-60': {
                setFilteredUsersData((prev) => ...)
            }
    
        }
    }

}

    return ( 
        <div> 
            {/*Блок поиска*/}
            <div> 
                <button onClick = {() => {
                    setSearchQuery("");
                    setFilterType("default");
                    setSortType("default");
                }}> По умолчанию</button>
            </div>
            {/*Блок Фильтрации*/}
            <div>
                <button onClick = {() => handleFilter("FirstId")}> Данные 1-го Id</button>
                <button onClick = {() => handleFilter("geoLat40-60")}> Ширина 40-60</button>
            </div>
            {/*Блок Сортировки*/}
            <div>
                <button onClick = {() => handleSort("byUserName")}> Сортировка по Имени (алфовитный)</button>
                <button onClick = {() => handleSort("byEmail")}> Сортировка по Email(алфовитный)</button>
                <button onClick = {() => handleSort("byZipcodeAscending")}> Сортировка по zipcode(обратный)</button>
            </div>
           <ul>
                {resultData.map(user => {
                    return <UserItem key = {user.id} user = {user} />
            })}
            </ ul>
        </div>

    )
}
