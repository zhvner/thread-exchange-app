import {create} from 'zustand';

interface TeamModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

// using create function to 
const useTeamModal = create<TeamModalStore> ((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false }),

}))

export default useTeamModal; 