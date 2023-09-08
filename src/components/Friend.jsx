// eslint-disable-next-line react/prop-types
export default function Friend({friend}) {
    // console.log(friend);
    // eslint-disable-next-line react/prop-types
    const {name, email} = friend;

    return(
        <div>
            <h2>Friend name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
}