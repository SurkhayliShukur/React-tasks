import React from 'react'

export const Input = (props) => {

    const { InputText, type, placeholder, onChange, name, value, } = props

    return (
        <>
            <label >
                <span className="text-sm font-medium text-gray-400"> {InputText} </span>
                <input
                    type={type}
                    name={name}
                    value={value}
                    className="mt-0.5 w-full rounded border-gray-300 py-2 px-3 outline-none border-1 focus:border-(--custom-color) shadow-sm sm:text-sm"
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </label>

        </>
    )
}


