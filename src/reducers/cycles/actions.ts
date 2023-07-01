import { Cycle } from './reducer'

type ActionTypes = 'ADD_NEW_CYCLE' | 'INTERRUPT_CYCLE' | 'FINISH_CYCLE'

export type Action = {
  type: ActionTypes
  payload?: any
}

export function addNewCycleAction(newCycle: Cycle): Action {
  return {
    type: 'ADD_NEW_CYCLE',
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction(): Action {
  return {
    type: 'INTERRUPT_CYCLE',
  }
}

export function markCurrentCycleAsFinishedAction(): Action {
  return {
    type: 'FINISH_CYCLE',
  }
}
