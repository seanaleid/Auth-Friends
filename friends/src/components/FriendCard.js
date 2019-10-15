import React from "react";

const FriendCard = (props) => {
    

    return (
        <div className="friend-card">
            <h1>{props.friend.name}</h1>
            <h3>{props.friend.age}</h3>
            <h6>{props.friend.email}</h6>
        </div>
    )
}

export default FriendCard;