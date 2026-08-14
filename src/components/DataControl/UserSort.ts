import {userData} from '../../typesInterface/UserInterface'
interface userItemProps {
    userArray: userData[],
    typeSort: string
}
export function userSort({userArray, typeSort} : userItemProps){
    let sortRequest = typeSort //значения хука
     let sortArray = [...userArray]
    if(sortRequest == "byUserName"){
        return sortArray.sort((a,b) =>
            a.username.localeCompare(b.username, 'en')
        )
    }
    if (sortRequest == "byEmail"){ //Email в алфовитном порядке
        return sortArray.sort((a,b) => 
            a.email.localeCompare(b.email, 'en')
        )
    }
    if(sortRequest== 'byZipcodeAscending'){ //Убывание по zipcode
        return sortArray.sort((a,b) => 
            b.address.zipcode.localeCompare(a.address.zipcode,undefined , {numeric:  true})
        )
    } 
    return sortArray
}