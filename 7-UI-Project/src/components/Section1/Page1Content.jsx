import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props)
  return (
    <div className='pb-16 pt-6 px-18 h-[87vh] gap-10 flex items-center justify-between '>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content