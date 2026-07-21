import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import loginImg from "../../assets/login.png";

const Login = () => {
  const {
  signInUser,
  googleLogin,
  resetPassword,
} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect user to the page they wanted before login
  const from = location.state?.from?.pathname || "/topics";

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleForgotPassword = () => {
  const email = document.querySelector(
    'input[name="email"]'
  ).value;

  if (!email) {
    setError("Please enter your email first.");
    return;
  }

  resetPassword(email)
    .then(() => {
      alert("Password reset email sent successfully.");
    })
    .catch((error) => {
      setError(error.message);
    });
};

  return (
    <div className="min-h-screen bg-[#FFF9E8] flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side (Hidden on Mobile) */}
        <div className="hidden lg:flex bg-gradient-to-br from-yellow-400 to-yellow-500 flex-col justify-center items-center text-black p-12">

          <img
            src={loginImg}
            alt="Login"
            className="w-80 mb-10"
          />

          <h2 className="text-5xl font-bold mb-6 text-center">
            Welcome Back
          </h2>

          <p className="text-xl text-center leading-9 max-w-md">
            Continue your JavaScript journey by solving coding challenges
            and improving your problem-solving skills.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 lg:p-14">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-3 mb-8 lg:mb-10 text-sm sm:text-base">
            Welcome back to Solve JS.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Email */}
            <div>

              <label className="font-semibold">
                Email
              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-12"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="font-semibold">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-12 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>
            </div>
                        {/* Forgot Password */}
            <div className="text-right">
              <button
  type="button"
  onClick={handleForgotPassword}
  className="text-yellow-500 hover:underline"
>
  Forgot Password?
</button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-warning w-full text-black text-sm sm:text-base"
            >
              Login
            </button>

          </form>

          <div className="divider my-6 sm:my-8">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full text-sm sm:text-base"
          >
            <FaGoogle />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-6 sm:mt-8 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-yellow-500 font-bold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;