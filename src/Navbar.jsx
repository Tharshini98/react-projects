import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

let Navbar = ({ cartCount, onCartClick, searchTerm, onSearchChange }) => {

    let username = "Guest";
    let country = "India 🇮🇳";
    return (
        <nav className="bg-black text-white shadow-md p-4 flex flex-col sm:flex-row  items-center justify-between">
            <h1 className="text-xl font-bold mb-3">Shopify.in</h1>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <input type="text" value={searchTerm} onChange={onSearchChange} placeholder="Search Products"
                    className="w-full max-w-md border border-gray-300 rounded px-3 py-1" />
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 text-sm cursor-pointer hover:underline">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>{country}</span>
                </div>

                <div className="text-sm cursor-pointer hover:underline text-right leading-tight">
                    <div>Hello, {username}</div>
                    <div className="font-bold">Sign In</div>
                </div>
                <div className="flex-shrink-0 relative">
                    <button
                        onClick={onCartClick}
                        className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center"
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                        Cart
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
