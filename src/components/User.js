import React from 'react';
import { useUser } from '../Context/UserContext'; // Adjust path as necessary

function Profile() {
    const { user, logout } = useUser();
    
    if (!user) {
        return <p>Please log in</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Profile;