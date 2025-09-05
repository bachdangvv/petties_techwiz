import { useState } from "react";

const products = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  name: `Coffee ${i + 1}`,
  price: 30000 + (i % 10) * 5000,
  image: `/images/coffee${i + 1}.jpg`,
}));

export default function CartForm() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase())
        );

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(start, end);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex p-6 gap-6">
      {/* Bộ lọc + Giỏ hàng */}
      <aside className="w-1/4 bg-gray-100 p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Bộ lọc</h2>
        <input
          type="text"
          placeholder="Tìm coffee..."
          className="w-full border rounded-lg p-2"
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
        />

        {/* Giỏ hàng */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Giỏ hàng</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Chưa có sản phẩm</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-white p-2 rounded-lg shadow"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.qty} × {item.price.toLocaleString()}đ
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 border-t pt-2 font-bold">
            Tổng: {total.toLocaleString()} đ
          </div>
        </div>
      </aside>

      {/* Danh sách sản phẩm */}
      <main className="w-3/4">
        <h2 className="text-xl font-bold mb-4">Danh sách Coffee</h2>
        <div className="grid grid-cols-4 gap-6">
          {paginatedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="text-base font-medium">{item.name}</h3>
              <p className="text-gray-500">
                {item.price.toLocaleString()} đ
              </p>
              <button
                onClick={() => addToCart(item)}
                className="mt-2 w-full bg-amber-500 text-white py-1 rounded-lg hover:bg-amber-600"
              >
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>

        {/* Phân trang */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
            disabled={page === 1}
          >
            ⬅
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded-lg ${
                page === i + 1
                  ? "bg-amber-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
            disabled={page === totalPages}
          >
            ➡
          </button>
        </div>
      </main>
    </div>
  );
}
