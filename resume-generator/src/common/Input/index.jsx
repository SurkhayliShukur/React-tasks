import React from 'react'

export const Input = (props) => {

    const { text, type, placeholder, classNames } = props

    return (
        <>
            <label htmlFor="Email" className="relative">
                <input
                    type="email"
                    id="Email"
                    placeholder=""
                    className="peer mt-5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />

                <span
                    className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
                >
                    Email
                </span>
            </label>

        </>
    )
}


