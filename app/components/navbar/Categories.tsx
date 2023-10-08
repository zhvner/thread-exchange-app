'use client';
import Container from "../Container";
import {TbBeach} from "react-icons/tb"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from 'next/navigation';
import { MdOutlineVilla } from 'react-icons/md';
import {BiLeaf} from 'react-icons/bi';
import {GiSewingString, GiFootprint, GiRecycle} from 'react-icons/gi'
import {SlBadge} from 'react-icons/sl'
 
export const categories = [
    {
        label: 'Labor', 
        icon: GiSewingString,
        description: 'This property will inform you about beaches'
    },
    {
        label: 'Brands', 
        icon: SlBadge,
        description: 'This property will inform you about beaches'
    },
    {
        label: 'Upcycling', 
        icon: GiRecycle,
        description: 'This property will inform you about beaches'
    },
    {
        label: 'Footprint', 
        icon: GiFootprint,
        description: 'This property will inform you about beaches'
    },
   


]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname(); // hide the 
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
      }

    return ( 
    <Container>
            <div className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto

            ">
                {categories.map((item) => (
                <CategoryBox 
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                />
                ))}

            </div> 
     </Container> );
}
 
export default Categories;