import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
  FaImage,
} from "react-icons/fa";

import registerImg from "../../assets/register.png";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] =useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    if (!terms) {
      setError("Please accept Terms & Conditions.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    createUser(email, password)
      .then(() => {
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleRegister = () => {
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
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-yellow-400 p-12 text-black">
          <img
            src={registerImg}
            alt="Register"
            className="w-72 mx-auto mb-10"
          />

          <h2 className="text-5xl font-bold mb-6">
            Welcome to
            <br />
            Solve JS
          </h2>

          <p className="text-xl leading-9">
            Learn JavaScript by solving real-world coding problems.
            <br />
            Create your account and unlock all practice topics.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-14">

          <h2 className="text-5xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-500 mt-3 mb-10">
            Start your JavaScript journey today.
          </p>

          <form onSubmit={handleRegister} className="space-y-5">

            {/* Name */}
            <div>
              <label className="font-semibold">Full Name</label>

              <div className="relative mt-2">
                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="input input-bordered w-full pl-12"
                />
              </div>
            </div>

            {/* Photo */}
            <div>
              <label className="font-semibold">Photo URL</label>

              <div className="relative mt-2">
                <FaImage className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="photo"
                  placeholder="Paste photo URL"
                  className="input input-bordered w-full pl-12"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>

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
              <label className="font-semibold">Password</label>

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
                  className="absolute right-4 top-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-warning"
              />
              <span>I agree to the Terms & Conditions</span>
            </label>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-warning w-full"
            >
              Create Account
            </button>
          </form>

          <div className="divider my-8">OR</div>

          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-500 font-bold"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;