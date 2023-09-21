import {create} from 'zustand';

interface AboutModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

// using create function to 
const useAboutModal = create<AboutModalStore> ((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false }),

}))

export default useAboutModal; 