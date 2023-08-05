import React from "react";
import PropTypes from "prop-types";
import {ListItem, Avatar, FriendName} from './FrendListItem.styled'

export default function FriendsListItem({avatar, name, isOnline}){
    return(
        <ListItem>
        <span className={isOnline ? 'status online' : 'status offline'}></span>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </ListItem>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}