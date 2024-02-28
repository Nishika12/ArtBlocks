import React from 'react'
import {GrTextAlignLeft} from 'react-icons/gr'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
  wrapper: `flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black`,
  icon: `h-5 w-5 text-gray-600`,
}

function NewlineText(props) {
  const text = props.text;
  return <div className='whitespace-pre-wrap'>{text}</div>;
}

const NFTDetails = (props) => {
  
  const dropdownData = [
    {
      title: 'Description',
      icon: <GrTextAlignLeft className ={style.icon} />,
      description: <NewlineText text={props.description?.substring(0,51) +'\n'+ props.description?.substring(51)}/>
    },
    {
      title: 'Properties',
      icon: <BsFillBookmarkFill  className={style.icon}/>,
      description: "TockenId: "+ props.tokenId +" | Chain: Etherium | Type: NFT " 
    },
  ]

  return (
    <div className={style.wrapper}>
      {dropdownData.map((item, index)=> (
        <Dropdown key={index} title={item.title} icon={item.icon} description={item.description}/>
      ))}
    </div>
  )
}

export default NFTDetails