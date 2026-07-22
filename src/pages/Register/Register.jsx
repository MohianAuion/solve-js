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
} from "react-icons/fa";

const Register = () => {
  const { createUser, googleLogin, updateUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const terms = form.terms.checked;

    // Validation
    if (!name) {
      setError("Username is required.");
      return;
    }

    if (!terms) {
      setError("Please accept Terms & Conditions.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUser(email, password)
      .then(() => {
        return updateUser(name);
      })
      .then(() => {
        form.reset();
        navigate("/topics");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then(() => {
        navigate("/topics");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#FFF9E8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-yellow-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-yellow-100 flex items-center justify-center text-4xl mb-5">
            🟨
          </div>

          <h1 className="text-4xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-3">
            Start your JavaScript journey with Solve JS.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Username */}
          <div>
            <label className="font-semibold text-gray-700">
              Username
            </label>

            <div className="relative mt-2">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Enter your username"
                required
                className="input input-bordered w-full h-12 pl-12 rounded-xl"
              />
            </div>
          </div>

         
{/* Email */}
          <div>
            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input input-bordered w-full h-12 pl-12 rounded-xl"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold text-gray-700">
              Create Password
            </label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                required
                className="input input-bordered w-full h-12 pl-12 pr-12 rounded-xl"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="font-semibold text-gray-700">
              Confirm Password
            </label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                required
                className="input input-bordered w-full h-12 pl-12 pr-12 rounded-xl"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-warning mt-1"
            />

            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="font-semibold text-yellow-600">
                Terms & Conditions
              </span>
            </span>
          </label>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Register */}
          <button
            type="submit"
            className="btn btn-warning w-full h-12 rounded-xl"
          >
            Create Account
          </button>
        </form>

        <div className="divider my-6">OR</div>

        {/* Google */}
        <button
          onClick={handleGoogleRegister}
          className="btn btn-outline w-full h-12 rounded-xl"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;