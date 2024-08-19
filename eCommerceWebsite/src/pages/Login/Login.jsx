import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggingIn, setLoggingIn] = useState(false)

  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setLoggingIn(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    } finally {
      setLoggingIn(false);
    }
  };
  return (
    <>

      <Toaster position="top-center" reverseOrder={false} />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-6 gap-5">
          <div className="w-full lg:order-none order-2">
            <img src="images/signupimg.png" alt="" className="lg:w-5/6 sm:w-full" />
          </div>
          <form className="flex flex-col gap-6 w-80 justify-center mx-auto px-3">
            <h2 className="text-black text-3xl font-semibold">
              Log in to Exclusive
            </h2>
            <h2 className="lg:text-lg sm:text-sm">Enter your details below</h2>
            <div className="flex flex-col gap-8">
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
            <div className="flex justify-between items-center">
              <button className={`btn_red shrink-0 w-1/3 ${loggingIn ? "opacity-70" : ""}`} onClick={handleLogIn}>{loggingIn ? "Loading" : "Login"}</button>
              <span className="text-sm font-semibold text-red-500">
                <Link to="/forgot">Forgot Password ?</Link>
              </span>
            </div>
            <div className="text-center text-gray-700 flex items-center justify-center gap-3">
              <h2 className=" text-sm">Don't have an account ?</h2>
              <span className="text-sm font-semibold underline underline-offset-8"><Link to="/signup" >Signup</Link></span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
