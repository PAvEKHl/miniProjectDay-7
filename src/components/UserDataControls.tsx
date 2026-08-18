import {userItemProps} from '../typesInterface/UserInterface'
import { Link } from 'react-router-dom'

import '../CSS/UserCard.css'
export function  UserDataControls({user}: userItemProps){
    return ( 
        <div  className='profile-card'> 
            <Link to = '/'>Вернуться на гравную страницу</Link>
            <h1>Full information about user #{user.id}</h1>
            <ul>
                <li> Name: {user.name} </li>
                <li> Email: {user.email} </li>
                <li> Username: {user.username} </li>
                <li> Username: {user.username}  </li>
                <li> City: {user.address.city}  </li>

                <li> Street: {user.address.street} </li>
                <li> Suite: {user.address.suite} </li>
                <li> Zipcode: {user.address.zipcode}  </li>
                <li>Lat: {user.address.geo.lat} </li>
                <li> Lng: {user.address.geo.lng} </li>

                <li>Phone: {user.phone} </li>
                <li>Website: {user.website} </li>
                <li>Name: {user.company.name} </li>
                <li>Bs: {user.company.bs} </li>
                <li>CatchPhrase: {user.company.catchPhrase} </li>
            </ul>
        </div>
    )
}