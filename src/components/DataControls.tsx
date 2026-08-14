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
export function  DataControls({userArray}: userSearchInterface){

    const [searchQuery, setSearchQuery] = useState<string>("")
    const [filterType, setFilterType] = useState<string>("default")
    const [sortType, setSortType] = useState<string>("default")
    let resultData = [...userArray]
    resultData = userSearch({userArray: resultData, searchData: searchQuery})
    resultData = userFilter({userArray: resultData, typeFilter: filterType})
    resultData = userSort({userArray: resultData, typeSort: sortType})

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
                <button onClick = {() => setFilterType("FirstId")}> Данные 1-го Id</button>
                <button onClick = {() => setFilterType("geoLat40-60")}> Ширина 40-60</button>
            </div>
            {/*Блок Сортировки*/}
            <div>
                <button onClick = {() => setSortType("byUserName")}> Сортировка по Имени (алфовитный)</button>
                <button onClick = {() => setSortType("byEmail")}> Сортировка по Email(алфовитный)</button>
                <button onClick = {() => setSortType("byZipcodeAscending")}> Сортировка по zipcode(обратный)</button>
            </div>
           <ul>
                {resultData.map(user => {
                    return <UserItem key = {user.id} user = {user} />
            })}
            </ ul>
        </div>

    )
}
