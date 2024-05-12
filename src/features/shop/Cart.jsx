import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rupiahFormat } from '../../components/utils/utils';
import 'animate.css/animate.min.css';
import { addItemToCart, clearItemsFromCart, clearOneItemFromCart, removeItemFromCart, selectCartItems } from './cartSlice';

const Cart = ({ setShowAlert, setShowAlertDanger, setAlertMessage }) => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [hide, setHide] = useState(true); // set nilai awal hide menjadi true


    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItems)

    useEffect(() => {
        dispatch(clearItemsFromCart());
    }, []);


    // hitung total harga setiap kali carts berubah
    useEffect(() => {
        let total = 0;
        const productsInCart = []; // buat array kosong untuk menampung produk
        cartItem.forEach((cart) => {
            total += cart.price * cart.quantity;
            productsInCart.push(cart); // tambahkan setiap item produk ke array productsInCart
        });
        setTotalPrice(total);
        setProducts(productsInCart); // simpan array produk ke dalam state
        setHide(cartItem.length === 0);
    }, [cartItem]);

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(removeItemFromCart(product));
    };


    const handleClear = () => {
        setProducts((prevProducts) =>
            prevProducts.map((p) => ({ ...p, fadeOut: true }))
        );

        setTimeout(() => {
            dispatch(clearItemsFromCart());
        }, 500);
    };
    const handleClearOne = (product) => {
        setProducts((prevProducts) =>
            prevProducts.map((p) => {
                if (p.id === product.id) {
                    return { ...p, fadeOut: true };
                }
                return p;
            })
        );
        setTimeout(() => {
            dispatch(clearOneItemFromCart(product));
        }, 500);
    };

    const handleCheckOut = async (totalPrice, paidAmount, products) => {
        if (paidAmount < totalPrice) {
            setAlertMessage('Maaf, duit anda tidak cukup');
            setShowAlertDanger(true); // menampilkan alert jika uang yang dibayarkan kurang
        } else {
            setShowAlert(false);
            try {
                setAlertMessage(
                    {
                        total_price: totalPrice,
                        paid_amount: paidAmount,
                        products: products,
                    }
                );
                setShowAlert(true);
            } catch (error) {
                alert('Terjadi kesalahan saat melakukan transaksi.');
                console.error(error);
            }
        }
    };


    return (
        <div className='w-11/12 h-4/5 mt-16  max-h-90screen'>
            <div className="bg-slate-300 animate__animated animate__fadeInRight w-full h-full text-gray-700 font-semibold p-6 rounded-xl z-10 ">
                <h3 className='md:text-sm lg:text-lg'>Cart</h3>

                {products.length === 0 ? (
                    <div className="flex justify-center items-center h-1/2 mt-6 border-y-2 border-gray-400 md:text-sm lg:text-lg">
                        <h1>There are no Product in the Cart</h1>
                    </div>
                ) : (
                    <div className="flex flex-col  h-1/2 overflow-auto overflow-x-hidden mt-6 border-y-2 border-gray-400">
                        {products.map((cart, index) => {
                            return (
                                <div key={index}>
                                    <div className={`flex flex-row p-3  animate__animated ${cart.fadeOut ? 'animate__fadeOutRight' : 'animate__fadeInLeft'}`}>
                                        <div className="flex items-center">
                                            <button
                                                className="md:w-4 md:h-4 lg:w-6 lg:h-6 md:text-xs lg:text-base bg-red-700 text-white relative outline-none font-extrabold rounded cursor-pointer transition-all mr-3 hover:bg-red-500"
                                                onClick={() => handleClearOne(cart)}
                                            >
                                                X
                                            </button>
                                        </div>
                                        <div className=" md:w-8 lg:w-12 relative  mr-2">
                                            <img className="border-2 border-gray-900" src={cart.img} alt={cart.nama} fill />
                                        </div>
                                        <div className="flex flex-col max-w-3/5 gap-1">
                                            <p className="max-w-full max-md:text-xxs md:text-xs lg:text-base text-ellipsis overflow-hidden whitespace-nowrap">{cart.nama}</p>
                                            <p className="max-w-full max-md:text-xxs md:text-xs lg:text-base text-ellipsis overflow-hidden whitespace-nowrap">{rupiahFormat(cart.price)}</p>
                                        </div>
                                        <div className="flex justify-between items-center flex-row w-1/3 ml-auto gap-2">
                                            <button
                                                className={`md:w-4 md:h-4 lg:w-6 lg:h-6 md:text-xs lg:text-base bg-blue-700 text-white outline-none rounded-50% cursor-pointer transition-all hover:bg-blue-500 ${cart.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                onClick={() => handleDecreaseCart(cart)}
                                                disabled={cart.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <p className='md:text-xs lg:text-base'>{cart.quantity}</p>
                                            <button
                                                className="md:w-4 md:h-4 lg:w-6 lg:h-6 md:text-xs lg:text-base  bg-blue-700 text-white outline-none rounded-50% cursor-pointer transition-all hover:bg-blue-500"
                                                onClick={() => handleAddToCart(cart)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div>
                    <div className="flex pt-4 pl-4 md:text-xs lg:text-base">
                        <h3 className="mr-6">Total</h3>
                        <span className="mr-5">:</span> <span> {rupiahFormat(totalPrice)}</span>
                    </div>
                    {!hide && (
                        <div className="flex  items-center ml-4 md:text-xs lg:text-base">
                            <h3 className="mr-4">Bayar</h3>
                            <span className="mr-5">:</span>
                            <span>Rp</span>
                            <div className="form">
                                <input type="number" className="payment md:text-xs lg:text-base" onChange={(event) => setPaidAmount(event.target.value)} />
                            </div>
                        </div>
                    )}
                    {!hide && (
                        <div className='flex gap-2 md:text-xs lg:text-base'>
                            <button
                                className="bg-red-600 text-white w-full flex justify-center items-center rounded-3xl md:mt-1 md:p-1 lg:mt-2 lg:p-2 transition-all hover:bg-red-800 hover:text-gray-400"
                                onClick={() => handleClear(products)}
                            >
                                Clear All
                            </button>
                            <button
                                className="bg-blue-600 text-white w-full flex justify-center items-center rounded-3xl md:mt-1 md:p-1 lg:mt-2 lg:p-2 transition-all hover:bg-blue-800 hover:text-gray-400"
                                onClick={() => handleCheckOut(totalPrice, paidAmount, products)}
                            >
                                Check Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Cart;
