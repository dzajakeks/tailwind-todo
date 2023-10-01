import React from 'react';

const TitleCounter = ({ tasks }) => {
  const numOfChecked = tasks.filter((task) => task.checked).length;
  const numOfTotal = tasks.length;
  return (
    <>
      <h1 className='text-4xl'>Tailwind Todo</h1>
      <h2 className='text-2xl my-4'>
        {numOfChecked} / {numOfTotal} Completed
      </h2>
    </>
  );
};

export default TitleCounter;
