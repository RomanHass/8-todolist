import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export type RemoveTodoListActionType = {
  type: 'REMOVE-TODOLIST',
  id: string
}
export type AddTotodlistActionType = {
  type: 'ADD-TODOLIST',
  title: string
}
export type ChangeTotodlistTitleActionType = {
  type: 'CHANGE-TODOLIST-TITLE',
  title: string
  id: string
}
export type ChangeTotodlistFilterActionType = {
  type: 'CHANGE-TODOLIST-FILTER',
  id: string
  filter: FilterValuesType
}
type ActionTypes =
    RemoveTodoListActionType
    | AddTotodlistActionType
    | ChangeTotodlistTitleActionType
    | ChangeTotodlistFilterActionType

export const todolistsReducer = (
  state: TodolistType[],
  action: ActionTypes
): TodolistType[] => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return state.filter(s => s.id !== action.id)
    case 'ADD-TODOLIST':
      return [
              ...state, 
              {id: v1(), title: action.title, filter: 'all'}
      ]
      case 'CHANGE-TODOLIST-TITLE':
        return state.map(s => s.id === action.id ? {...s, title: action.title} : s)
      case 'CHANGE-TODOLIST-FILTER':
        return state.map(s => s.id === action.id ? {...s, filter: action.filter} : s)
    default:
      throw new Error("I don't understand this action type");
  }
};

export const RemoveTodoListAC = (todolistId: string): RemoveTodoListActionType => {
  return { type: 'REMOVE-TODOLIST', id: todolistId }
}

export const AddTodoListAC = (title: string): AddTotodlistActionType => {
  return { type: 'ADD-TODOLIST', title: title }
}

export const ChangeTodoListTitleAC = (id: string, title: string): ChangeTotodlistTitleActionType => {
  return { type: 'CHANGE-TODOLIST-TITLE', id: id, title: title }
}

export const ChangeTodoFilterAC = (id: string, filter: FilterValuesType): ChangeTotodlistFilterActionType => {
  return { type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter }
}