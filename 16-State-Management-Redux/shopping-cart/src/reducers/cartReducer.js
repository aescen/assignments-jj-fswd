import Item1 from '../images/avocado.jpg';
import Item2 from '../images/carrot.jpg';
import Item3 from '../images/corn.jpg';
import Item4 from '../images/garlic.jpg';
import Item5 from '../images/red-chili.jpg';
import Item6 from '../images/tomato.jpg';
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
} from '../actions/action-types/cartActions';

const initialState = {
  items: [
    {
      id: 1,
      title: 'Avocado',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: 'Carrot',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: 'Corn',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: 'Garlic',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: 'Red Chili',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: 'Tomato',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  shipping: false,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    const { id } = action.payload;
    const newItem = state.items.find((item) => item.id === parseInt(id));
    const itemExist = state.addedItems.find((item) => item.id === parseInt(id));

    if (newItem) {
      if (!itemExist) {
        const newAddedItems = [
          ...state.addedItems,
          {
            ...newItem,
            quantity: 1,
          },
        ];
        let newTotal = 0;

        for (let i = 0; i < newAddedItems.length; i += 1) {
          newTotal += newAddedItems[i].price * newAddedItems[i].quantity;
        }

        return {
          ...state,
          addedItems: newAddedItems,
          total: newTotal,
        };
      }
    }

    return state;
  }

  if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    const filteredAddedItems = state.addedItems.filter(
      (item) => item.id !== parseInt(id),
    );

    let newShipping = state.shipping;
    if (filteredAddedItems.length === 0) {
      newShipping = false;
    }

    let newTotal = 0;
    if (filteredAddedItems.length > 0) {
      for (let i = 0; i < filteredAddedItems.length; i += 1) {
        newTotal += filteredAddedItems[i].price * filteredAddedItems[i].quantity;
      }
    }

    return {
      ...state,
      addedItems: filteredAddedItems,
      shipping: newShipping,
      total: newTotal,
    };
  }

  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    const { id } = action.payload;
    const newAddedItems = state.addedItems.map((item) => {
      if (item.id === parseInt(id)) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }

      return item;
    });

    let newTotal = 0;
    for (let i = 0; i < newAddedItems.length; i += 1) {
      newTotal += newAddedItems[i].price * newAddedItems[i].quantity;
    }

    return {
      ...state,
      addedItems: newAddedItems,
      total: newTotal,
    };
  }

  if (action.type === SUB_QUANTITY) {
    const { id } = action.payload;
    const newAddedItems = state.addedItems.map((item) => {
      if (item.id === parseInt(id) && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }

      return item;
    });
    let newTotal = 0;

    for (let i = 0; i < newAddedItems.length; i += 1) {
      newTotal += newAddedItems[i].price * newAddedItems[i].quantity;
    }

    return {
      ...state,
      addedItems: newAddedItems,
      total: newTotal,
    };
  }

  if (action.type === ADD_SHIPPING) {
    if (state.addedItems.length > 0 && !state.shipping) {
      return {
        ...state,
        shipping: true,
        total: state.total + 6,
      };
    }

    return {
      ...state,
      shipping: false,
    };
  }

  if (action.type === SUB_SHIPPING) {
    if (state.addedItems.length > 0 && state.shipping) {
      return {
        ...state,
        shipping: false,
        total: state.total - 6,
      };
    }

    return {
      ...state,
      shipping: false,
    };
  }

  return state;
};

export default cartReducer;
