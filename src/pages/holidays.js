import React from 'react';


export default function Holidays({pageContext}){
  const { holiday } = pageContext 
  return(
    <>
      {/* {JSON.stringify(holiday)} */}
      <p>
        {holiday.name}
      </p>
    </>
  )
}