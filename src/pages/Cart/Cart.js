import { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./cart.module.css";

function Cart() {
  const { items, updateQuantity, removeItem, clearCart, totals } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", country: "", zip: "" });
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);

  const computed = useMemo(() => {
    const shipping = items.length ? 1.99 : 0;
    const total = totals.subtotal + shipping;
    return { shipping, total };
  }, [items.length, totals.subtotal]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleCheckout = (e) => {
    e.preventDefault();
    if (!items.length) return;
    setSuccess("Order placed successfully! Thank you.");
    clearCart();
    setShowForm(false);
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.header}>
        <h2>Your Cart ({totals.count} items)</h2>
        <div className={styles.actions}>
          {items.length > 0 && (
            <button className="btn btn-ghost" onClick={clearCart}>Clear</button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className={styles.empty}>{success || "Your cart is empty."}</div>
      ) : (
        <div className={styles.layout}>
          <section className={styles.items}>
            {items.map((it) => (
              <div key={it.id} className={styles.row}>
                <div className={styles.thumb}>
                  <img src={it.image} alt={it.name} />
                </div>
                <div className={styles.info}>
                  <h4>{it.name}</h4>
                  <div className={styles.muted}>${it.price.toFixed(2)}</div>
                </div>
                <div className={styles.qty}>
                  <button className={styles.pill} onClick={() => updateQuantity(it.id, it.qty - 1)}>-</button>
                  <input
                    className={styles.qtyInput}
                    type="number"
                    min={1}
                    value={it.qty}
                    onChange={(e) => updateQuantity(it.id, Number(e.target.value) || 1)}
                  />
                  <button className={styles.pill} onClick={() => updateQuantity(it.id, it.qty + 1)}>+</button>
                </div>
                <div className={styles.lineTotal}>
                  ${(it.price * it.qty).toFixed(2)}
                </div>
                <button className={styles.remove} onClick={() => removeItem(it.id)}>✕</button>
              </div>
            ))}
          </section>

          <aside className={styles.summary}>
            <div className={styles.card}>
              <h3>Order Summary</h3>
              <div className={styles.sumRow}>
                <span>Subtotal</span>
                <strong>${totals.subtotal.toFixed(2)}</strong>
              </div>
              <div className={styles.sumRow}>
                <span>Shipping</span>
                <strong>${computed.shipping.toFixed(2)}</strong>
              </div>
              <div className={`${styles.sumRow} ${styles.total}`}>
                <span>Total</span>
                <strong>${computed.total.toFixed(2)}</strong>
              </div>
              <button className={styles.buttonPri} style={{ width: "100%" }} onClick={() => setShowForm(true)}><span>Checkout</span></button>
            </div>
          </aside>
        </div>
      )}

      {showForm && (
        <div className={styles.modalOverlay} onClick={() => setShowForm(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Checkout</h3>
              <button className={styles.modalClose} onClick={() => setShowForm(false)}>✕</button>
            </div>
            <form className={styles.checkoutForm} onSubmit={handleCheckout}>
              <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
              <div className={styles.grid2}>
                <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
                <input name="zip" placeholder="ZIP" value={form.zip} onChange={handleChange} required />
              </div>
              <input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
              <button className={styles.buttonPri} style={{ width: "100%" }}><span>Place Order</span></button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;