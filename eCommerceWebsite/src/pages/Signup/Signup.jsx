import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "@/config/firebase";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserProvider";
const Signup = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggingIn, setLoggingIn] = useState(false)
  const { setProfilePic } = useUser();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoggingIn(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const user = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup Successful");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed");
    } finally {
      setLoggingIn(false);
    }
  }

  const handleSingUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setProfilePic(result.user.photoURL);
      navigate("/");
      toast.success("Signup Successful");
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed" + error.message);
    }
  }
  const handleSingUpWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      navigate("/");
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      fetch(`https://graph.facebook.com/v9.0/me?fields=picture.type(large)&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
          setProfilePic(data.picture.data.url);
          navigate("/");
          toast.success("Signup Successful");
        });
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed" + error.message);
    }
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-6 gap-5">
          <div className="w-full lg:order-none order-2">
            <img src="images/signupimg.png" alt="" className="lg:w-5/6 sm:w-full" />
          </div>
          <form className="flex flex-col gap-6 w-80 justify-center mx-auto px-3">
            <h2 className="text-black text-3xl font-semibold">Create an Account</h2>
            <h2>Enter your details below</h2>
            <div className="flex flex-col gap-8">
              <input
                className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
              />
              <input
                className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
                type="email"
                placeholder="Email or Phone Number"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={`btn_red shrink-0 ${loggingIn ? "opacity-70" : ""}`} onClick={handleSignup}>{loggingIn ? "Loading" : "Create an Account"}</button>
            <button type="button" className="btn_white flex gap-4 items-center justify-center" onClick={handleSingUpWithGoogle}>
              <img src="icons/googleicon.png" alt="" className="w-7" />
              Signup with Google
            </button>
            <button type="button" className="btn_white flex gap-4 items-center justify-center" onClick={handleSingUpWithFacebook}>
              <img src="icons/fbicon.png" alt="" className="w-7" />
              Signup with Facebook
            </button>
            <div className="text-center text-gray-700 flex items-center justify-center gap-3">
              <h2 className=" text-sm">Already have an account ?</h2>
              <span className="text-sm font-semibold underline underline-offset-8"><Link to="/login" >Login</Link></span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
