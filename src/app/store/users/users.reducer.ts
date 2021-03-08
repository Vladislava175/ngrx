import {UsersActions, usersActionsType} from './users.actions';

export const usersNode = 'users';

export interface UsersState {
  users: any[]
}

const initialState: UsersState = {
  users: []
};

export const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case usersActionsType.usersSuccess:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
