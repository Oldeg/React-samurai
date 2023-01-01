import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";
import {UserType} from "./usersReducer";

 const getUsersSelector = (state:AppStateType) => {return state.usersPage.items}
 export const getUsers = createSelector(getUsersSelector,(users:UserType[]) => {return users})

export const getPageSize = (state:AppStateType) => {return state.usersPage.pageSize}
export const getTotalCount = (state:AppStateType) => {return state.usersPage.totalCount}
export const getCurrentPage = (state:AppStateType) => {return state.usersPage.currentPage}
export const getIsFetchingValue = (state:AppStateType) => {return state.usersPage.isFetchingValue}
export const getFollowingInProgress = (state:AppStateType) => {return state.usersPage.followingInProgress}






