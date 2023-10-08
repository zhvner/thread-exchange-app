import {create} from 'zustand';

interface SurveyModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

// using create function to 
const useSurveyModal = create<SurveyModalStore> ((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false }),

}))

export default useSurveyModal; 