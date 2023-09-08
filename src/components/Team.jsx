import { useState } from "react";

export default function Team() {
    const [member, setMember] = useState(0);
    const style = {
        border: '2px solid green',
        margin: '10px',
        padding: '20px',
        borderRadius: '10px'
    }

    const addMember = () => {
        setMember(member + 1);
    }

    const reduceMember = () => {
        setMember(member - 1);
    }

    return(
        <div style={style}>
            <h2>Team Member: {member}</h2>
            <button style={{margin: '10px'}} onClick={addMember}>Add</button>
            <button onClick={reduceMember}>Reduce</button>
        </div>
    );
}