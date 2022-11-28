import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { Coffee, shoppingCartReducer } from '../reducers/shoppingCart/reducer';
import {
  addCoffeeShoppingCartAction,
  removeCoffeeShoppingCartAction,
} from '../reducers/shoppingCart/actions';

interface ShoppingCartContextTypes {
  shoppingCart: Coffee[];
  isEmptyShoppingCart: boolean;
  dispatch: React.Dispatch<any>;
  numberItemsShoppingCart: number;
  removeCoffeeShoppingCart: (id: string) => void;
  addCoffeeShoppingCart: (coffee: Coffee) => void;
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

  return (
    <ShoppingCartContext.Provider
      value={{
        addCoffeeShoppingCart,
        shoppingCart,
        removeCoffeeShoppingCart,
        isEmptyShoppingCart,
        numberItemsShoppingCart,
        dispatch,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
