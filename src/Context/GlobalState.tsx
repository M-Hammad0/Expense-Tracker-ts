import React, {createContext, useReducer} from 'react'
import AppReducer from "./AppReducer";

export interface contextProps {
      transactions: Array<any>,
      deleteTransaction: (a: number) => void,
      addTransaction: (b: object) => void,
}


const initialState = {
       transactions: [],
       deleteTransaction: () => undefined ,
       addTransaction: () => undefined,
}

export const GlobalContext = createContext<contextProps>(initialState);



export const GlobalProvider = (props: any): JSX.Element => {
      const [state, dispatch] = useReducer(AppReducer, initialState);

      function deleteTransaction(id: number){
            dispatch({
                  type: 'DELETE_TRANSACTION',
                  payload: id
            });
      }

      function addTransaction(transaction: object){
            dispatch({
                  type: 'ADD_TRANSACTION',
                  payload: transaction
            });
      }

      return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
      }}>
            {props.children}
      </GlobalContext.Provider>)
}

