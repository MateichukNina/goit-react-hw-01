import React from "react";
import FriendsListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import {List} from './Friendlist.styled';

export default function FriendList({friends}){
    return (
    <List>
        
    {friends.map((friend) => (<FriendsListItem
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
    key={friend.id}/>
    ))}
           

   </List>)

}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };