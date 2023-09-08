import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    // console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data => setUsers(data))
    }, [])

    const style = {
        backgrounColor: 'aqua',
        padding: '20px',
        margin: '10px',
        border: '2px solid green',
        borderRadius: '10px'
    }
    return(
        <div style={style}>
            <h2>Users: {users.length}</h2>
        </div>
    );
}


/*
1. declare a state to hold the data
2. useEffect with call back and dependencies array
3. use fetch to load data
*/





