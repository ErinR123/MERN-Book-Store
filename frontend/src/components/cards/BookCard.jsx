import * as ordersAPI from "../../utilities/orders-api";

export default function BookCard({ book }) {
  function handleAddToOrder() {
    console.log("Add book to order");
    ordersAPI.addBookToCart(book.volumeInfo);
  }
  const listPrice = book.saleInfo?.listPrice?.amount;
  const retailPrice = book.saleInfo?.retailPrice?.amount;
  const currency = book.saleInfo?.listPrice?.currencyCode || book.saleInfo?.retailPrice?.currencyCode || "USD";
  
  // Determine the price to display
  const price = listPrice || retailPrice || 10.99;
  return (
    <form>

    <div className="max-w-xs mb-4 transition duration-300 transform hover:scale-105">
      <div className="w-full h-32 flex justify-center items-center">
        {book.volumeInfo.imageLinks && (
          <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="max-w-full max-h-full object-cover rounded-t"
          />
          )}
      </div>
      <div className="px-4 py-2 bg-gray-100 rounded-b">
        <div className="font-bold text-xs">{book.volumeInfo.title}</div>
        {book.volumeInfo.authors && (
          <p className="text-gray-700 text-xs mb-1">
            Author(s): {book.volumeInfo.authors.join(", ")}
          </p>
        )}
        <p className="text-green-700 text-xs mb-1">
          Price: {currency} {price.toFixed(2)}
        </p>
        <p className="text-red-500 text-xs mb-1">
          50%
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
          onClick={handleAddToOrder}
          >
          Buy
        </button>
      </div>
    </div>
          </form>
  );
}
