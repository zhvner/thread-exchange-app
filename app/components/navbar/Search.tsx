'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { FcSurvey } from 'react-icons/fc';
import { differenceInDays } from 'date-fns';

// import useSearchModal from '@/app/hooks/useSearchModal';
// import useCountries from '@/app/hooks/useCountries';

const Search = () => {

  return ( 
    <div
      //onClick={searchModal.onOpen}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div 
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div 
          className="
            text-sm 
            font-semibold 
            px-6
          "
        >
          See your impact
          
        </div>
        <div 
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          Take the survey
        </div>
        <div 
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">
            Visualize
          </div>
          <div 
            className="
              p-2 
              bg-green-700 
              rounded-full 
              text-white
            "
          >
            <FcSurvey size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Search;