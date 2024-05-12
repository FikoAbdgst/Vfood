import React from 'react'

const Pagination = ({ pageNumbers, currentPage, handlePageChange }) => {
    return (
        <div className="mt-1 flex justify-between w-full">
            <div>
                <ul className="flex gap-3">
                    {Array.from({ length: pageNumbers }, (_, i) => i + 1).map((number) => (
                        <li key={number} className="page-item">
                            <button
                                onClick={() => handlePageChange(number)}
                                className={`page-link bg-blue-600 max-md:w-6 max-md:h-2 md:w-6 h-2 lg:w-10 lg:h-3 text-center rounded-lg hover:bg-blue-400`}
                                style={number === currentPage ? { backgroundColor: '#585757' } : {}}
                            ></button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="font-bold mr-14 text-gray-300 max-md:text-xs md:text-sm lg:text-base">Page {currentPage} of {pageNumbers} </h1>
            </div>
        </div>
    )
}

export default Pagination