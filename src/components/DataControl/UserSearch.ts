import {userData} from '../../typesInterface/UserInterface'
interface userSearchInterface {
    userArray: userData[], //т.к. filter/sort работает с масссивами
    searchData : string,
}   
export function userSearch({userArray, searchData} : userSearchInterface ){
    let search = userArray.filter( (users) => users.name.toLowerCase().includes(searchData.toLowerCase()))
    return(search)
}