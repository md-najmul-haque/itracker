import React from 'react';
type ShowUserProps = {
    user: {
        userName: string,
        email: string,
    }
}
const ShowUsers = ({ user }: ShowUserProps) => {
    const{userName,email}=user
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>    
        </tr>
    );
};

export default ShowUsers;