import React,{ useState} from 'react';
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input'
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Login = () => {
  // State for email, password, and error message
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError]= useState(null);

  // Get updateUser function from UserContext
  const {updateUser} = useContext(UserContext);

  const navigate = useNavigate();

  // Handle form submission for login
  const handleLogin = async(e) => {
    e.preventDefault();

    // Validate email format
    if(!validateEmail(email)){
      setError("Please enter a valid email address.")
      return;
    }

    // Check if password is entered
    if(!password){
      setError("Please enter the password.")
      return;
    }

    setError("");

    try{
      // Send login request to backend
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password,
      });
      
      const {token, user} = response.data;

      // If login successful, store token and update user context
      if(token){
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    }catch(error){
      // Handle and display error messages
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout >
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in.
        </p>
        <form onSubmit={handleLogin}>
          {/* Email input */}
          <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="johndoe@example.com"
            type="text"
          />
          {/* Password input */}
          <Input
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {/* Display error message if any */}
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          {/* Login button */}
          <button type='submit' className='btn-primary'>
            Login
          </button>

          {/* Link to signup page */}
          <p>
            Don't have an account?{" "}
            <Link className='font-medium text-primary underline' to="/signup">
              SignUp
            </Link>
          </p>

        </form>
      </div>
    </AuthLayout>
  )
}

export default Login