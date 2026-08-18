import {userItemProps} from '../typesInterface/UserInterface'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export function UserItem({user} : userItemProps){
    const [clickBtn, setClickBtn] = useState<boolean>(false)
    const navigate = useNavigate()
    function funcSumbit(e: React.FormEvent){
        e.preventDefault() //отмена перезагрузки страницы
        if (clickBtn){
            navigate(`/user/${user.id}`)
        }
    }
    return(
                <li>
                    <span>Id:{user.id} </span>
                    <span>-- Name:{user.name} </span>
                    <span>-- Username:{user.username} </span>
                    <span>-- Email:{user.email} </span>
                    <span>-- Phone:{user.phone} </span>
                    <span>-- City:{user.address.city} </span>
                    <span>-- City:{user.address.geo.lat} </span>
                    <span>-- Zipcode:{user.address.zipcode}</span>
                    <form onSubmit={funcSumbit}>
                        <button type='submit' onClick={() => setClickBtn(true)}>Подробнее</button>
                    </form>
                    {/*<Link to = {`/user/${user.id}`}>Подробнее</Link> */}
                </li>
    )
}