import React from 'react';

type ElementsType = {
    name: string
}
type InitialSideBarStateType = {
    elements: ElementsType[]
}
let initialState: InitialSideBarStateType = {
    elements: [
        {name: 'Sveta'}, {name: 'Victor'}, {name: 'Nikita'}]
};

export const sidebarReducer = (state: InitialSideBarStateType = initialState, action: any): InitialSideBarStateType => {
    return state
};

export default sidebarReducer;