import React, { useState } from "react";
import BitwiseLogo from "../assets/bitwise.svg";
import { Link } from "react-router-dom";
import SelectMenu from "../components/SelectMenu";

const roles = [
  { id: 1, name: "Project Manager" },
  { id: 2, name: "Student" },
  { id: 3, name: "Developer" },
  { id: 4, name: "Designer" },
  { id: 5, name: "Hobbyist" },
  { id: 6, name: "Other" },
];

const avatars = [
  { id: 1, name: "indigo" },
  { id: 2, name: "blue" },
  { id: 3, name: "cyan" },
  { id: 4, name: "violet" },
  { id: 5, name: "orange" },
  { id: 6, name: "yellow" },
  { id: 7, name: "green" },
];
export default function SignUpPage() {
  const [selected, setSelected] = useState(roles[0]);
  const [avatar, setAvatar] = useState(avatars[0]);
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
        <div className=''>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Create your Bitwise account
          </h2>
        </div>
        <form>
          <div>
            <div className='border-b border-gray-900/10 pb-12'>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-6'>
                  <label
                    htmlFor='company-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Workspace name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='e.g. School workspace'
                      className='px-3 outline-none font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-6'>
                  <SelectMenu
                    label='Your current role'
                    data={roles}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
                <div className='sm:col-span-12'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      placeholder='e.g. jondoe@example.com'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='font-semibold px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-12'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Set a Password
                  </label>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='email'
                      className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-12'>
                  <span className='block text-sm font-medium leading-6 text-gray-900'>
                    Select avatar type
                  </span>
                </div>
                <div className='sm:col-span-12'>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className='mt-10 text-center text-sm text-gray-500'>
          Already have an account?{" "}
          <Link
            to='/login'
            className='font-semibold leading-6 text-secondary hover:text-neutral-800'
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
