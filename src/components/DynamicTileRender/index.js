import React from 'react'
import DateComponent from "../ReusableComponents/DateComponent";
import TextComponent from "../ReusableComponents/TextComponent";
import DropdownComponent from "../ReusableComponents/DropdownComponent";
import PhoneComponent from "../ReusableComponents/PhoneComponent";

export const DynamicTileRender={
    "date":(item)=><DateComponent item={item}/>,
    "text":(item)=><TextComponent item={item}/>,
    "dropdown":(item)=><DropdownComponent item={item}/>,
    "Phone":(item)=><PhoneComponent item={item}/>
}