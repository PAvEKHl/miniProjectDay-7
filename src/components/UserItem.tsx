import {userItemProps} from '../typesInterface/UserInterface'

export function UserItem({user} : userItemProps){
    return(
                <li>
                    <span>Id: {user.id}</span>
                    <span>Name: {user.name}</span>
                    <span>Username: {user.username}</span>
                    <span>Email: {user.email}</span>
                    <span>Phone: {user.phone}</span>
                    <span>City: {user.address.city}</span>
                    <span>City: {user.address.geo.lat}</span>
                </li>
    )
}