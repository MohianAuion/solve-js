import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    signInUser,
    googleLogin,
    resetPassword,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/topics";

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

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
    if (!email) {
      setError("Please enter your email first.");
      return;
    }

    resetPassword(email)
      .then(() => {
        alert("Password reset email sent successfully.");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#FFF9E8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">

        {/* Logo */}
        <div className="text-center mb-8">
       

          <p className="text-gray-500 mt-2">
            Welcome back! Login to continue learning.
          </p>
        </div>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full pl-12 pr-12"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          {/* Forgot Password */}

          <div className="text-right">

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-yellow-500 hover:underline font-medium"
            >
              Forgot Password?
            </button>

          </div>

          {/* Error */}

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          {/* Login Button */}

          <button
            type="submit"
            className="btn btn-warning w-full text-black text-base"
          >
            Login
          </button>

        </form>

        <div className="divider my-7">
          OR
        </div>

        {/* Google Login */}

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full"
        >
          <FcGoogle className="text-xl"/>
          Continue with Google
        </button>

        {/* Register */}

        <p className="text-center mt-7 text-gray-600">

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
  );
};

export default Login;