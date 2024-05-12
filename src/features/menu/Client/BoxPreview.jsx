import React from 'react'
import { rupiahFormat } from '../../../components/utils/utils';

const BoxPreview = ({ preview, isPreviewChanged, }) => {
    return (
        preview.map((product, index) => (
            <div
                className={` animate__animated ${isPreviewChanged ? "animate__fadeOutRight" : "animate__fadeInRight"} w-4/5 h-4/5 flex max-md:rounded-md md:rounded-xl lg:rounded-3xl bg-stone-800 bg-opacity-75 pr-5`}
                key={index}
            >
                <div className="relative max-md:w-1/4 md:w-1/4 lg:w-1/3 h-full flex justify-center items-center">
                    <img
                        className=" max-sm:w-14 max-sm:h-14 sm:w-20 md:w-24 md:h-24 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-lg"
                        src={product.img}
                        alt={product.nama}
                    />
                </div>
                <div className=" max-md:w-3/4 md:w-3/4 lg:w-3/5 md:pl-3 lg:pl-5 pr-2 md:py-3 lg:py-5 relative flex justify-center flex-col ">
                    <div>
                        <p className="max-w-full text-ellipsis overflow-hidden max-md:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold text-red-600">
                            {product.nama}
                        </p>
                    </div>
                    <div className="flex">
                        {product.stock < 1 ? (
                            <div className="bg-red-600 text-white flex justify-center items-center px-2 max-md:py-0 lg:py-1 mt-2 ">
                                <p className='max-sm:text-2xs sm:text-xxs md:text-xs lg:text-sm xl:text-base'>Habis</p>
                            </div>
                        ) : (
                            <div className="bg-green-600 text-white flex justify-center items-center px-2 max-md:py-0 lg:py-1 mt-2 ">
                                <p className='max-sm:text-2xs sm:text-xxs md:text-xs lg:text-sm xl:text-base'>Tersedia</p>
                            </div>
                        )}
                        <p className="max-w-full text-ellipsis overflow-hidden max-sm:text-2xs sm:text-xxs md:text-xs lg:text-sm xl:text-base font-semibold text-gray-300 px-3 mt-2 mx-3  border-l-2 border-l-gray-300">
                            {rupiahFormat(product.price)}
                        </p>
                    </div>
                    <div className="max-md:mt-1 lg:mt-3 ">
                        <p className="text-white max-sm:text-2xs sm:text-xxs md:text-xs lg:text-sm xl:text-base md:line-clamp-3 lg:line-clamp-none">{product.desc}</p>
                    </div>
                </div>
            </div>
        ))
    )
}

export default BoxPreview