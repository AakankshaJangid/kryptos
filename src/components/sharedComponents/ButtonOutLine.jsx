import React from 'react'

const ButtonOutLine = ({ props, symbol }) => {
    return (
        <>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded my-2">{props} <span className='text-xl p-1'>{symbol}</span></button>
        </>
    )
}

export default ButtonOutLine
