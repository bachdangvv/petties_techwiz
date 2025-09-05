import { useMemo } from "react";
import { useCart } from "../../context/CartContext";
import "./cart.css";

function Cart() {
  const { items, updateQuantity, removeItem, clearCart, totals } = useCart();

  const computed = useMemo(() => {
    const shipping = items.length ? 15000 : 0;
    const total = totals.subtotal + shipping;
    return { shipping, total };
  }, [items.length, totals.subtotal]);

  return (
    <div className="cart-page">
      <div className="header">
        <h2>Your Cart ({totals.count} items)</h2>
        <div className="actions">
          {items.length > 0 && (
            <button className="btn btn-ghost" onClick={clearCart}>Clear</button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty">Your cart is empty.</div>
      ) : (
        <div className="layout">
          <section className="items">
            {items.map((it) => (
              <div key={it.id} className="row">
                <div className="thumb">
                  <img src={it.image} alt={it.name} />
                </div>
                <div className="info">
                  <h4>{it.name}</h4>
                  <div className="muted">{it.price.toLocaleString()} đ</div>
                </div>
                <div className="qty">
                  <button className="pill" onClick={() => updateQuantity(it.id, it.qty - 1)}>-</button>
                  <input
                    className="qty-input"
                    type="number"
                    min={1}
                    value={it.qty}
                    onChange={(e) => updateQuantity(it.id, Number(e.target.value) || 1)}
                  />
                  <button className="pill" onClick={() => updateQuantity(it.id, it.qty + 1)}>+</button>
                </div>
                <div className="line-total">
                  {(it.price * it.qty).toLocaleString()} đ
                </div>
                <button className="remove" onClick={() => removeItem(it.id)}>✕</button>
              </div>
            ))}
          </section>

          <aside className="summary">
            <div className="card">
              <h3>Order Summary</h3>
              <div className="sum-row">
                <span>Subtotal</span>
                <strong>{totals.subtotal.toLocaleString()} đ</strong>
              </div>
              <div className="sum-row">
                <span>Shipping</span>
                <strong>{computed.shipping.toLocaleString()} đ</strong>
              </div>
              <div className="sum-row total">
                <span>Total</span>
                <strong>{computed.total.toLocaleString()} đ</strong>
              </div>
              <button className="btn btn-primary" style={{ width: "100%" }}>Checkout</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Cart;