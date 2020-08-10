import { contextProps } from './GlobalState';


interface IAction {
  type: string,
  payload: any
}

export default (state: contextProps, action: IAction) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
