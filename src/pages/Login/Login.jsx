import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
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
  const { signInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#FFF9E8] flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-6 sm:p-8 lg:p-12">

          <img
            src={loginImg}
            alt="Login"
            className="w-48 sm:w-64 lg:w-72 mb-6 lg:mb-10"
          />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-4 lg:mb-6">
            Welcome Back
          </h2>

          <p className="text-base sm:text-lg lg:text-xl leading-7 lg:leading-9 text-center lg:text-left">
            Continue your JavaScript journey.
            <br />
            Solve coding challenges and improve your skills.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-8 lg:p-14">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-3 mb-8 text-sm sm:text-base">
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

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full h-12 sm:h-14 pl-12"
                />

              </div>
            </div>

            {/* Password */}
            <div>

              <label className="font-semibold">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter password"
                  className="input input-bordered w-full h-12 sm:h-14 pl-12 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-yellow-500 hover:underline text-sm sm:text-base"
              >
                Forgot Password?
              </button>
            </div>

                        {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-warning w-full h-12 sm:h-14 text-base"
            >
              Login
            </button>

          </form>

          <div className="divider my-6 sm:my-8">
            OR
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full h-12 sm:h-14 text-base"
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