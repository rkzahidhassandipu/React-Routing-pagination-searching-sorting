import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    const navigate = useNavigate();


    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(email != "rkrazzkhan@gmail.com" ||  password != "123456"){
            setError(true)
        }
        else if(email === "rkrazzkhan@gmail.com" && password === "123456"){
            const user = {
                name: "RK Zahid Hassan Dipu",
                email: "rkzahid@gmail.com",
                city: "Jessor",
                country: "Bangladesh",
                admin: false
            };
            localStorage.setItem("userData", JSON.stringify({user, isSignedIn: true}));
            const path = user.admin ? "/dashboard/admin/profile" : "/dashboard/user/profile";
            navigate(path,{ state: user });
        }
        else{
            toast.error("Email and password do not match");
            // navigate("/singin");
        }
    }


  return (
    <div className='singin-container'>
        <h2>User Sing In</h2>
        <form onSubmit={handleSubmit} className='singinForm'>
            <input type="email" id='email' name='email' placeholder='Email' onChange={handleEmailChange} />

            <input type="password" id='password' name='password' placeholder='Password' onChange={handlePasswordChange} />
            {error? <p className='wrongInfo'>Your info is wrong please try agein</p>: ""}
            <button>Sing In</button>
        </form>
    </div>
  )
}

export default SingIn