'use client';

import { IconType } from "react-icons"; //IconType is a type representing a React icon component.
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
import { get } from "http";

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

    const router = useRouter(); 
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if(params) {
            //define empty query
            currentQuery = qs.parse(params.toString())
        }

        //look throuh empty params, so that they are object not a string
        // bc by default parents to string is string
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        } 


        //spread the current query and add the new category in there
        // check if the new category is already selected and we remove it from our updated query
        // bc we want to deselect on and off    
        if(params?.get('category') === label){
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
          }, { skipNull: true });

          router.push(url);

    }, [label, router, params]);


    return (
        <div
        onClick={handleClick}
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
        <Icon size={30} />
        <div className="font-medium text-sm">
            {label}
        </div>

        </div>
     );
}
 
export default CategoryBox;