import React from "react";



const FriendCard = (props) => {
    
    return (
        <div className="friend-card">
            <div className="box">
                <h1>{props.friend.name}</h1>
                <h3>{props.friend.age}</h3>
                <h6>{props.friend.email}</h6>
            </div>
        </div>
    )
}

export default FriendCard;