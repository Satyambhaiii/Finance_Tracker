import {create} from "zustand"


type NewAccountState={
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// this is for opening and closing of the drawer
export const useNewAccount= create<NewAccountState>((set)=>({
   isOpen:false,
   onOpen : ()=>set(({isOpen:true})),
   onClose : ()=>set(({isOpen:false})),
}))