import React from 'react';
import BasicStyleFoodItem from './BasicStyleFoodItem';

const DisplayFoodItems = ({foodList }) => {
   return (
       <div>
           {foodList.map((food, index) => {
               return (
                <BasicStyleFoodItem food={food} key={index} />
               )
           })}

       </div>
   );
};
 
export default DisplayFoodItems;