import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const buttonAdd = ({ handleAddToCart, product, disabled }) => {
    const addToCart = () => {
        if (!disabled) {
            handleAddToCart(product);
        }
    };
    return (
        <button
            className={`${disabled ? 'bg-transparent' : 'bg-blue-600 hover:bg-blue-500'} text-white rounded outline-none border-none max-md:w-3 max-md:h-3 md:w-4 md:h-4 lg:w-8 lg:h-8 p-0 max-md:text-xxs md:text-xs lg:text-lg font-bold cursor-pointer transition-all `}
            onClick={() => handleAddToCart(product)}
            disabled={disabled}
        >
            {disabled ? <FontAwesomeIcon icon={faCheck} className='text-green-700 md:w-4 md:h-4 lg:w-6 lg:h-6' /> : '+'}
        </button>

    )
}

export default buttonAdd


