'use client';

import { IconType } from "react-icons"; //IconType is a type representing a React icon component.

interface CategoryBoxProps {
    icon: IconType,
    label: string;
    selected?: boolean;
  }

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {

    return (
        <div
        //onClick={handleClick}
            className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'} // if selected
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}
        >  
        <Icon size={26} />
        <div className="font-medium text-sm">
            {label}
        </div>

        </div>
     );
}
 
export default CategoryBox;