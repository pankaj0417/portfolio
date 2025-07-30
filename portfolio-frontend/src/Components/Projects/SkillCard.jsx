import React from 'react'

const SkillCard = ({skillimg,skillname}) => {
  return (
    <div className='w-20 md:w-40 flex flex-col bg-gray-100 dark:bg-gray-900 dark:duration-500 justify-center items-center shadow-md rounded hover:scale-110 hover:bg-gray-200  dark:hover:bg-gray-950 transition-all duration-300 '>
      <img  className='p-2 md:p-4 w-12 md:w-25' src={skillimg} alt="" />
      <h2 className=' mb-2 text-sm md:mb-4 md:text-lg font-semibold'>{skillname}</h2>
    </div>
  )
}

export default SkillCard
