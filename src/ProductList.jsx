let ProductList = ({products, addToCart}) => {
    return(
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-gray-100 w-80 rounded shadow p-4 flex flex-col">
                    <img src={product.image} alt={product.title} className="h-40 object-contain mb-4 mx-auto"/>
                    <h2 className="text-md font-semibold mb-2 text-center">{product.title}</h2>
                    <p className="font-bold text-center mb-4">${product.price.toFixed(2)}</p>
                    <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition" onClick = {() => addToCart(product)}>
                        Add to Cart
                    </button>
                    </div>
            ))}
        </div>
    );
};

export default ProductList;