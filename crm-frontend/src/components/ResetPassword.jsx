import React from "react";
import PropTypes from "prop-types";

export const ResetPassword = ({handleOnchange,handleOnResetSubmit,formSwitcher,email}) => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen">
        <div className="w-screen max-w-md p-8 space-y-6 bg-slate-800 rounded shadow-md border-2">
          <h2 className="text-2xl font-bold text-center text-white">Reset Password</h2>
          <form className="space-y-6" onSubmit={handleOnResetSubmit} autoComplete="off">
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
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
            <div className="">
                  <a href="#" onClick={() => formSwitcher('login')} className="text-sm text-indigo-600 hover:text-indigo-500">
                  Login Now
                  </a>
              </div>
          </form>
        </div>
      </section>
    </>
  );
};

ResetPassword.propTypes={
    handleOnResetSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}