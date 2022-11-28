import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { Coffee, shoppingCartReducer } from '../reducers/shoppingCart/reducer';
import {
  addCoffeeShoppingCartAction,
  removeCoffeeShoppingCartAction,
} from '../reducers/shoppingCart/actions';

interface ShoppingCartContextTypes {
  shoppingCart: Coffee[];
  isEmptyShoppingCart: boolean;
  numberItemsShoppingCart: number;
  removeCoffeeShoppingCart: (id: string) => void;
  addCoffeeShoppingCart: (coffee: Coffee) => void;
  //addAmount: (id: string, amount: number) => any;
}

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextTypes
);

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

export const ShoppingCartContextProvider: React.FC<
  ShoppingCartContextProviderProps
> = ({ children }) => {
  const [shoppingCartState, dispatch] = useReducer(
    shoppingCartReducer,
    {
      shoppingCart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-shoppingCart:1.0.0'
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        shoppingCart: [],
      };
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCartState);

    localStorage.setItem('@ignite-shoppingCart:1.0.0', stateJSON);
  }, [shoppingCartState]);

  const { shoppingCart } = shoppingCartState;

  function addCoffeeShoppingCart(coffee: Coffee) {
    dispatch(addCoffeeShoppingCartAction(coffee));
  }

  const isEmptyShoppingCart = shoppingCart?.length === 0;
  const numberItemsShoppingCart = shoppingCart?.length;

  const removeCoffeeShoppingCart = (id: string) => {
    dispatch(removeCoffeeShoppingCartAction(id));
  };

  // const addAmount = (id: string, amount: number) => {
  //   const newShoppingCart = shoppingCart.filter((coffee) => {
  //     if (coffee.id === id) {
  //       coffee.amount = amount;
  //     }
  //   });

  //   // setShoppingCart(newShoppingCart);
  // };

  // const decreaseAmount = () => {};

  return (
    <ShoppingCartContext.Provider
      value={{
        //addAmount,
        addCoffeeShoppingCart,
        shoppingCart,
        removeCoffeeShoppingCart,
        isEmptyShoppingCart,
        numberItemsShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
