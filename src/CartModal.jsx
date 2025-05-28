

let CartModal = ({ cartItems, onClose, removeFromCart }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg z-50 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 font-bold"
          >
            X
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center mb-4 border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain mr-4"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="font-bold">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
