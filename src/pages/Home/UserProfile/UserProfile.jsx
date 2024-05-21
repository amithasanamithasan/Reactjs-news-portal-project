import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";


const UserProfile = () => {
    const{user}=useContext(AuthContext);
    console.log(user)
    return (
        <div>
             <h1 className="text-3xl text-amber-600 font-bold">
                This is my User-Profile Email:
                {user?.email ? user.email : "User email not available"}
            </h1>
        </div>
    );
};

export default UserProfile;