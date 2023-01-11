import React from 'react'

const Button = ({ props ,symbol }) => {
    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center gap-2 my-2 hover:animate-bounce" >{props} <span className='text-xl'>{symbol}</span></button>
        </>
    )
}




export default Button