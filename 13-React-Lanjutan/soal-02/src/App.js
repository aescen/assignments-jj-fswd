import { useEffect, useState } from 'react';
import CardProduct from './components/CardProduct';
import CartListItem from './components/CartListItem';
import Navbar from './components/Navbar';

import menus from './dummy-data';

export default function App() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 1) {
      const newTotal = cart.reduce((sum, item) => {
        if (typeof sum === 'object') {
          return sum.amount * sum.price + item.amount * item.price;
        }
        return sum + item.amount * item.price;
      });
      const newAmount = cart.reduce((sum, item) => {
        if (typeof sum === 'object') {
          return sum.amount + item.amount;
        }
        return sum + item.amount;
      });

      setTotal((t) => newTotal);
      setPurchasedItem((p) => newAmount);
    }
    if (cart.length === 1) {
      setTotal((t) => cart[0].amount * cart[0].price);
      setPurchasedItem((p) => cart[0].amount);
    }
    if (cart.length === 0) {
      setTotal((t) => 0);
      setPurchasedItem((p) => 0);
    }
  }, [cart]);

  const addToCart = (id) => {
    const menu = menus.find((item) => item.id === id);
    const idIndex = cart.findIndex((item) => item.id === id);
    if (idIndex === -1 || cart.length === 0) {
      setCart((c) => [
        ...cart,
        {
          id,
          name: menu.name,
          price: menu.price,
          amount: 1,
        },
      ]);
      return;
    }

    const newCart = [...cart];
    newCart[idIndex].amount += 1;
    setCart((c) => newCart);
  };

  const decreaseCartAmount = (id) => {
    const idIndex = cart.findIndex((item) => item.id === id);
    if (idIndex === -1 || cart.length === 0) {
      return;
    }

    const newCart = [...cart];
    if (newCart[idIndex].amount === 1) {
      return;
    }
    newCart[idIndex].amount -= 1;
    setCart((c) => newCart);
  };

  const increaseCartAmount = (id) => {
    const idIndex = cart.findIndex((item) => item.id === id);
    if (idIndex === -1 || cart.length === 0) {
      return;
    }

    const newCart = [...cart];
    newCart[idIndex].amount += 1;
    setCart((c) => newCart);
  };

  return (
    <div className='bg-secondary'>
      <Navbar purchasedItem={purchasedItem} />
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='card w-100'>
              <div className='card-body'>
                <div className='row'>
                  {menus.map((menu) => (
                    <div key={menu.id} className='col-md-4 col-sm-6 col-12 my-2'>
                      <CardProduct {...menu} addToCart={() => addToCart(menu.id)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <ol className='list-group'>
              {cart.map((c) => (
                <CartListItem
                  key={c.id}
                  {...c}
                  increase={() => increaseCartAmount(c.id)}
                  decrease={() => decreaseCartAmount(c.id)}
                />
              ))}
              <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>Total Harga</div>
                </div>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(total)}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
