import React from "react";
import PropTypes from "prop-types";

export const ForgotPasswordComponent = ({handleOnchange,handleOnSubmit,email,password}) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form className="space-y-6" onSubmit={handleOnSubmit} autoComplete="off">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                required
                onChange={handleOnchange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                required
                onChange={handleOnchange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
            <div className="text-center">
                <a href="https://google.com" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
                </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ForgotPasswordComponent.propTypes={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}