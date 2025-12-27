import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import { useState } from 'react';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { datates } from "../../../../mock"
import { useData } from "../../../../actions/dataProvider"; 
export default function graphCombined() {
   const { userData, userActivity } = useData();

    return (
        <>
            
         
        </>
    )
}