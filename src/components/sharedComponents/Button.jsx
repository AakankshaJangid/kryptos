import React from 'react'

const Button = ({ props ,symbol }) => {
    return (
        <>
            <button className='bg-blue-600  text-white
            hover:text-gray-200
            hover:bg-blue-500  border-none rounded text-lg
            font-medium	font-mono	
            p-2 flex
            hover:animate-bounce mb-2
      '>{props} <span className='text-xl p-1'>{symbol}</span></button>
        </>
    )
}

export default Button