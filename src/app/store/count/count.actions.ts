import {Action} from '@ngrx/store';

export enum countActionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clean = '[COUNT] clean',
  updatedAt = '[COUNT] updated At'
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease;
}

export class CountCleanAction implements Action {
  readonly type = countActionsType.clean;
}

export class CountUpdatedAtAction implements Action {
  readonly type = countActionsType.updatedAt;

  constructor(public payload: {
    updateAt: number
  }) {
  }
}

export type CountActions = CountIncreaseAction | CountDecreaseAction | CountCleanAction | CountUpdatedAtAction;
