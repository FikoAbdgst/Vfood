import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'animate.css';
import { rupiahFormat } from '../../../components/utils/utils';
import Pagination from './Pagination';
import { addItemToCart, selectCartItems } from '../cartSlice';
import ButtonAdd from './buttonAdd';

const ProductList = ({ selectedJenis, productsData, isJenisChanged, isJenisChanged2 }) => {
    const [isPageChanged, setIsPageChanged] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [productsInCart, setProductsInCart] = useState({});
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItems)

    useEffect(() => {
        const productsInCartMap = {};
        cartItem.forEach(product => {
            productsInCartMap[product.id] = true;
        });
        setProductsInCart(productsInCartMap);
    }, [cartItem]);

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));

        // Tandai produk sebagai telah ditambahkan ke keranjang

        setProductsInCart(prevState => ({
            ...prevState,
            [product.id]: true,
        }));
    };

    const filteredProducts = selectedJenis ? productsData.filter(product => product.jenis === selectedJenis) : productsData;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setIsPageChanged(true)
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsPageChanged(false)
        }, 1000);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedJenis]);



    return (
        <React.Fragment>
            <div>
                <div className="flex justify-start mt-2 ml-5 ">
                    {pageNumbers >= 1 && (
                        <>
                            <Pagination
                                pageNumbers={pageNumbers}
                                currentPage={currentPage}
                                handlePageChange={handlePageChange}
                            />
                        </>

                    )}
                </div>
                <div className={`animate__animated  ${isPageChanged || isJenisChanged2 ? 'animate__fadeOutDown' : 'animate__fadeInUp'} w-full h-full  max-h-90screen flex flex-wrap justify-center items-center gap-3`}>
                    {currentItems.map((product, index) => (
                        <div
                            key={index}
                            className={`animate__animated bg-stone-800 max-md:w-20 max-md:h-28 md:w-28 md:h-36 lg:w-40 lg:h-52 rounded-lg flex flex-col shadow-2xl justify-between `}
                        >
                            {productsData.stock < 1 ? (
                                <>
                                    <div className="relative rounded-lg flex m-auto w-3/4 max-md:h-16 md:h-20 lg:h-32">
                                        <img className='rounded-lg' src={product.img} alt={product.nama} />
                                    </div>
                                    <div className="flex justify-between items-center px-4 pb-3 ">
                                        <div>
                                            <p className="max-w-full text-ellipsis overflow-hidden text-lg font-bold text-red-600">{product.nama}</p>
                                            <p className="max-w-full text-ellipsis overflow-hidden font-semibold text-red-500 ml-5">"Stock Habis"</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative rounded-lg flex m-auto w-3/4 max-md:h-16 md:h-20 lg:h-32">
                                        <img className='rounded-lg' src={product.img} alt={product.nama} />
                                    </div>
                                    <div className="flex justify-between items-center px-4 pb-3 ">
                                        <div>
                                            <p className="max-w-full text-ellipsis overflow-hidden max-md:text-2xs md:text-xxs lg:text-base font-bold text-red-600">{product.nama}</p>
                                            <p className="max-w-full text-ellipsis overflow-hidden max-md:text-2xs md:text-xxs lg:text-base font-semibold text-gray-300">{rupiahFormat(product.price)}</p>
                                        </div>
                                        <ButtonAdd
                                            handleAddToCart={handleAddToCart}
                                            product={product}
                                            disabled={productsInCart[product.id]} // Mengatur tombol menjadi nonaktif jika produk sudah ada di keranjang
                                        />
                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductList