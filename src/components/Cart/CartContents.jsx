import { MdDelete } from "react-icons/md";

const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 150000,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "T-Shirt",
            size: "S",
            color: "Green",
            quantity: 3,
            price: 113000,
            image: "https://picsum.photos/200?random=2",
        }
    ];

    return (
        <div className="space-y-4">
            {cartProducts.map((product, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 p-4 rounded-xl shadow-md bg-white transition hover:shadow-lg">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <img src={product.image} alt={product.name} className="w-24 h-28 object-cover rounded-lg border" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-500">Size: {product.size} | Color: {product.color}</p>

                            <div className="flex items-center mt-3 space-x-3">
                                <button className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 text-lg font-bold transition">
                                    -
                                </button>
                                <span className="text-md font-medium">{product.quantity}</span>
                                <button className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 text-lg font-bold transition">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <p className="text-md font-semibold text-gray-800">
                            Rp {product.price.toLocaleString()}
                        </p>
                        <button className="text-gray-400 hover:text-black transition">
                            <MdDelete className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContent;
