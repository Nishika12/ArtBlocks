import React from 'react'
import { useState } from 'react';
import { AiFillEye, AiFillHeart } from 'react-icons/ai'

const style = {
  wrapper: `flex space-x-6 py-6`,
  textInfoContainer: `text-lg font-medium text-gray-500 dark:text-gray-400`,
  owner: `text-blue-500`,
  iconTextInfoContainer: `flex items-center space-x-2`,
  icon: `h-7 w-7 text-gray-500 dark:text-gray-400`,
}

const NFTSubInfo = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return(
    <div className={style.wrapper}>
      <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className={style.textInfoContainer}>
        Owned by <span className={style.owner}>{props?.owner?.creatorAddress?.substring(0,15)}...</span>
      </div>
        </div>
        {isHovering && (
      <div className={style.textInfoContainer}><span className={style.owner}>{props?.owner?.creatorAddress}</span></div>
      )}
      {/* <div className={style.iconTextInfoContainer}>
        <AiFillEye className={style.icon}/>
        <div className={style.textInfoContainer}>4.4K view</div>
      </div>
      <div className={style.iconTextInfoContainer}>
        <AiFillHeart className={style.icon}/>
        <div className={style.textInfoContainer}>200 favorites</div>
      </div> */}
    </div>
  )
}

export default NFTSubInfo