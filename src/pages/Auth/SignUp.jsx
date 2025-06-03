import React, {useContext, useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input'
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import uploadImage from '../../utils/uploadImage';

const SignUp = () => {
  // State for profile picture, form fields, and error message
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null);

  // Get updateUser function from UserContext
  const {updateUser} = useContext(UserContext);
  const navigate = useNavigate();

  // Handle form submission for sign up
  const handleSignUp =  async (e) => {
      e.preventDefault();
      let profileImageUrl=""

      // Validate full name
      if(!fullName){
        setError("Please enter your name");
        return;
      }
      // Validate email
      if(!validateEmail(email)){
        setError("Please enter a valid email address.");
        return;
      }
      // Validate password
      if(!password){
        setError("Please enter the password.");
        return;
      }

      setError("");

      try{
        // Upload profile image if selected
        if(profilePic){
          const imageUploadRes = await uploadImage(profilePic);
          profileImageUrl = imageUploadRes.imageUrl || "";
        }

        // Send registration request to backend
        const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER,{
          fullName,
          email,
          password,
          profileImageUrl,
        });

        const {token,user} = response.data;

        // If registration successful, store token and update user context
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
    <AuthLayout>
      <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-8 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black text-center">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-2 mb-6 text-center">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Profile photo selector */}
          <div className="flex justify-center">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
          </div>
          {/* Input fields for name, email, and password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({target}) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
              className="w-full"
            />
            <Input
              value={email}
              onChange={({target}) => setEmail(target.value)}
              label="Email Address"
              placeholder="johndoe@example.com"
              type="text"
              className="w-full"
            />
            <div className="col-span-1 md:col-span-2">
              <Input
                value={password}
                onChange={({target}) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 characters"
                type="password"
                className="w-full"
              />
            </div>
          </div>

          {/* Display error message if any */}
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          {/* Sign up button */}
          <button type="submit" className="btn-primary w-full">
            SIGN UP
          </button>

          {/* Link to login page */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp