import { useEffect, useState } from 'react';
import '../css/Friends.css';
import Friend from './Friend';

export default function Friends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => setFriends(data))
    });

    return(
        <div className='box'>
            {/* console.log(friends); */}
            {
                // eslint-disable-next-line react/jsx-key
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
            
        </div>
    );
}

/*
1. state to hold data
2. use effect with dependency array
3. use fetch to load data
4. set loaded data to the state
5. display data on the component
*/