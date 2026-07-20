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
    <div className="min-h-screen bg-[#FFF9E8] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 flex flex-col justify-center items-center text-black p-10">

          <img
            src={loginImg}
            alt="Login"
            className="w-72 mb-10"
          />

          <h2 className="text-5xl font-bold mb-6">
            Welcome Back
          </h2>

          <p className="text-xl text-center leading-9">
            Continue your JavaScript journey.
            <br />
            Solve coding challenges and improve your skills.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-14">

          <h2 className="text-5xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-3 mb-10">
            Welcome back to Solve JS.
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
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
                  placeholder="Enter password"
                  className="input input-bordered w-full pl-12 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
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
                className="text-yellow-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {error && (
              <p className="text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-warning w-full"
            >
              Login
            </button>

          </form>

          <div className="divider my-8">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-yellow-500 font-bold"
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