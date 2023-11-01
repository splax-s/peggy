import useCart from "@/hooks/use-cart";

export default function CheckoutTable() {
    const cart = useCart();

    return (
        <>
            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
            {cart.items &&

                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.items.map((item) => (

                                <div key={item.id}>
                                <tr>
                                    <td className="product__cart__item">
                                        <div className="product__cart__item__pic">
                                            <img src="img/shopping-cart/cart-1.jpg" alt="" />
                                        </div>
                                        <div className="product__cart__item__text">
                                            <h6>{item.name}</h6>
                                            <h5>₦{item.price}</h5>
                                        </div>
                                    </td>
                                    <td className="quantity__item">
                                        <div className="quantity">
                                            <div className="pro-qty-2">
                                                <input title="amount" type="text" defaultValue={1} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="cart__price">{item.price}</td>
                                    <td className="cart__close" onClick={() => { cart.removeItem(item.id) }}>
                                        <i className="fa fa-close" />
                                    </td>
                                </tr>
                                </div>
                            ))}
                    </tbody>
                </table>
            }
        </>
    )
}
