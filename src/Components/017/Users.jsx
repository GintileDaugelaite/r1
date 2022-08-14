import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState(null);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data));


    }, [])

    
    const sort = () => {
        setUsers(u => [...u].sort((a, b) => a.name.localeCompare(b.name)));
    }

    const sortBack = () => {
        setUsers(u => [...u].sort((a, b) => a.id - b.id));
    }

    return (
        <>
            <ul>
                {
                    users ? users.map(u => (<li className="users-list" key={u.id}>
                        <b>{u.name}</b>
                        <i>{u.address.city}</i>
                        <i>{u.company.name}</i></li>))
                     : <li className="loader"></li>
                }
            </ul>
            <button onClick={sort}>Sort by name</button>
            <button onClick={sortBack}>Sort back</button>
        </>
    )


}
export default Users;