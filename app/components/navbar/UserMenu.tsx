'use client';

import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';
import {useCallback, useState} from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useAboutModal from '@/app/hooks/useAboutModal';
import useTeamModal from '@/app/hooks/useTeamModal';
import useSurveyModal from '@/app/hooks/useSurveyModal';

const UserMenu = () => {

    const registerModal = useRegisterModal(); // opens register modal when clicjed in navbar
    const aboutModal = useAboutModal();
    const teamModal = useTeamModal();
    const surveyModal = useSurveyModal();


    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

//     const onSurvey = useCallback(() => {
//         surveyModal.onOpen();
//     }, [surveyModal]
// )


    return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div 
            onClick={surveyModal.onOpen}
            className="
              hidden
              md:block
              text-sm 
              font-semibold 
              py-3 
              px-4 
              rounded-full 
              hover:bg-neutral-100 
              transition 
              cursor-pointer
            "
          >
            Survey
          </div>
          <div 
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
            "
          >
            <AiOutlineMenu />
                <div className="hidden md:block">
                <Avatar />
                </div>
            </div>
        </div>
        {isOpen && (
        <div className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm"
        >
            <div className='flex flex-col cursor-pointer'>
                <>
                    <MenuItem 
                        onClick={registerModal.onOpen}
                        label='Register'
                    />
                    {/* <MenuItem 
                        onClick={() => {}}
                        label='Login'
                    /> */}
                
                    <MenuItem 
                        onClick={aboutModal.onOpen}
                        label='About'
                    />
                    <MenuItem 
                        onClick={teamModal.onOpen}
                        label='Team'
                    />
                    <MenuItem 
                        onClick={surveyModal.onOpen}
                        label='Survey'
                    />
                </>
            </div>
        </div>
            
        )}
        
    </div>
                   
    );
}

export default UserMenu;

