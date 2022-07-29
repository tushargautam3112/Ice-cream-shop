import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/favicon.ico"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold ">Create a new to your account</h2>
            <p className="mt-2 text-center text-sm text-white-300">
              Or{' '}
              <Link href={'/login'}>
                <a href="#" className="font-medium text-yellow-600 hover:text-yellow-700">
                  Login with you existing account...
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-gray-400  rounded-t-md focus:outline-none focus:ring-yellow-700 focus:border-yellow-700 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-gray-400  rounded-t-md focus:outline-none focus:ring-yellow-700 focus:border-yellow-700 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-gray-400  rounded-b-md focus:outline-none focus:ring-yellow-700 focus:border-yellow-700 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <div className="h-5 w-5 text-yellow-700 group-hover:text-yellow-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup