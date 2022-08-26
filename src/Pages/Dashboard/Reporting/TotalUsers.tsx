import React, { useEffect, useState } from 'react';
import ShowUsers from './ShowUsers';

interface user {
    userName: string,
    email: string,
}
const TotalUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://dry-eyrie-76820.herokuapp.com/getUser")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    console.log(users)
    return (
        <div className='overflow-x-auto'>
            <div className='my-5'>
                <p className='mx-2 font-medium text-2xl'>Total Tasks</p>
            </div>
            <div className='lg:mx-6'>
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th>UserName</th>
                            <th>UserEmail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user: user) => <>
                                <ShowUsers
                                    user={user}
                                />
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalUsers;