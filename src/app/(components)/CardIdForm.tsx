'use client'
import React from 'react'
import { useActionState } from 'react'
import { handleCardIdAction } from '../(actions)/CardIdAction'
type Props = {}

function CardIdForm({}: Props) {


    const [state,formAction, isPending] = useActionState(handleCardIdAction, null)
    console.log("state", state)
  return (
    <div className="p-6 space-y-4 md:space-y- sm:p-8">
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Get my ID Card
    </h1>
    <form action ={formAction} className="space-y-4 md:space-y-6">
      <div className='grid grid-cols-2 gap-x-5 '>
       <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required={true}
        />
        </div>
        <div>
        <label
          htmlFor="lastname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Lastname
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required={true}
        />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required={true}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {isPending ? 'Loading...' : 'Submit'}
      </button>

    {
      state && <p className={`${state.status ==='OK' ? 'bg-green-600 rounded-md py-2 text-xs text-white text-center':'bg-red-800 rounded-md py-2 text-xs text-white text-center'}`}>{state.message}</p>
      }
    </form>
  </div>
  )
}

export default CardIdForm