import React from 'react';
import {SideBarType} from "../../App";
import {ActionsType} from "../Store";
let initialState = {
    elements: [
        {name: 'Sveta'}, {name: 'Victor'}, {name: 'Nikita'}]
};

export const sidebarReducer = (state: SideBarType = initialState, action:ActionsType) => {
    return state
};

export default sidebarReducer;