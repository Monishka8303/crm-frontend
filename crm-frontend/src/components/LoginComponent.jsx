import React from "react";
import PropTypes from "prop-types";

export const LoginComponent = ({handleOnchange,handleOnSubmit,formSwitcher,email,password}) => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen">
        <div className="w-screen max-w-md p-8 space-y-6 bg-slate-800 rounded shadow-md border-2">
          <h2 className="text-2xl font-bold text-center text-white">Sign in to your account</h2>
          <form className="space-y-6" onSubmit={handleOnSubmit} autoComplete="off">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded shadow-sm focus:ring-indigo-500 sm:text-sm"
                value={email}
                required
                onChange={handleOnchange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded shadow-sm focus:ring-indigo-500 sm:text-sm"
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
            <div className="flex items-center justify-between">
              <div className="flex item-start">
                <div className="flex item-center mt-1">
                  <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-700" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-white">Remember me</label>
                </div>
              </div>
              <div className="">
                  <a href="#" onClick={() => formSwitcher('reset')} className="text-sm text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                  </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

LoginComponent.propTypes={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}