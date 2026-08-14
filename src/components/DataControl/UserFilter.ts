import {userData} from '../../typesInterface/UserInterface'
interface userSearchInterface {
    userArray: userData[], //т.к. filter/sort работает с масссивами
    typeFilter : string,
}
export function userFilter({userArray, typeFilter} : userSearchInterface){
    let filterRequest = typeFilter //значения хука
    let filteredArray = [...userArray]
    if(filterRequest == "FirstId"){
        return filteredArray = filteredArray.filter((user) => user.id == 1)
    }
    if (filterRequest == "geoLat40-60"){
        return (filteredArray = filteredArray.filter((e) => e.address.geo.lat > 40 && e.address.geo.lat < 60)
        )
    }
    return filteredArray
}