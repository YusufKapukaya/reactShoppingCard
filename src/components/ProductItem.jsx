import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
  };
  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        src={product.image}
        className="w-full h-48 object-cover rounded-t-lg"
        alt="product image"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500 my-2"> {product.price} Fr</p>
      <button
        className={`bg-blue-500 text-white px-4 py-[8px] rounded hover:bg-blue-600 w-full ${
          findProduct && "opacity-50 cursor-no-drop"
        }`}
        onClick={() => addToCart(product)}
        disabled={findProduct}
      >
        in den Korb Hinzufügen
      </button>
    </div>
  );
};

export default ProductItem;
