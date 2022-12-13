import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { Coffee, shoppingCartReducer } from '../reducers/shoppingCart/reducer';
import {
  addCoffeeShoppingCartAction,
  removeAllCoffeeShoppingCartAction,
  removeCoffeeShoppingCartAction,
} from '../reducers/shoppingCart/actions';

interface ShoppingCartContextTypes {
  shoppingCart: Coffee[];
  isEmptyShoppingCart: boolean;
  dispatch: React.Dispatch<any>;
  numberItemsShoppingCart: number;
  removeCoffeeShoppingCart: (id: string) => void;
  removeAllCoffeeShoppingCart: () => void;
  addCoffeeShoppingCart: (coffee: Coffee) => void;
  totalItems: () => any;
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

  const isEmptyShoppingCart = shoppingCart?.length === 0;
  const numberItemsShoppingCart = shoppingCart?.length;

  const totalItems = () => {
    const count = shoppingCart.reduce((sum, coffee) => {
      return coffee.totalPrice + sum;
    }, 0);

    return count;
  };

  function addCoffeeShoppingCart(coffee: Coffee) {
    dispatch(addCoffeeShoppingCartAction(coffee));
  }

  const removeCoffeeShoppingCart = (id: string) => {
    dispatch(removeCoffeeShoppingCartAction(id));
  };

  const removeAllCoffeeShoppingCart = () => {
    dispatch(removeAllCoffeeShoppingCartAction());
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        dispatch,
        totalItems,
        shoppingCart,
        isEmptyShoppingCart,
        addCoffeeShoppingCart,
        numberItemsShoppingCart,
        removeCoffeeShoppingCart,
        removeAllCoffeeShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
