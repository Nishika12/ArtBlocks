import React from 'react'
import { BiRefresh, BiLinkExternal } from 'react-icons/bi'
import { MdShare, MdMoreVert } from 'react-icons/md'
import NFTSubInfo from './NFTSubInfo'

const style = {
  topContainer: `flex items-center justify-between`,
  collectionTitle: `text-lg font-semibold text-blue-500`,
  actionItems: `flex divide-x divide-black-300 rounded-lg border border-black-300`,
  actionItemContainer: `flex cursor-pointer items-center justify-center p-3`,
  icon: `h-6 w-6 text-black-500 dark:text-black-400`,
  assetTitle: `pt-6 text-4xl font-bold text-black-700 dark:text-black-100`,
  subInfoContainer: `hidden lg:block`,
}

const NFTBasicInfo = (props) => {
  const actionItems = [
    {
      icon: <BiRefresh className={style.icon}/>
    },
    {
      icon: <BiLinkExternal className={style.icon}/>
      
    },
    {
      icon: <MdShare className={style.icon}/> 
    },
    {
      icon: <MdMoreVert className={style.icon}/>
    },
  ]
  return (
    <div>
      <div className={style.topContainer}>
        <div className={style.collectionTitle}>
        Cryptopunks
        </div>

        <div className={style.actionItems}>
          {actionItems.map((item, index) => (
            <div key={index} className={style.actionItemContainer}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div className={style.assetTitle}>{props?.name?.asset?.name}</div>

      <div className={style.subInfoContainer}>
      <NFTSubInfo owner={props?.name}/>
      </div>
      
    </div>
  )
}

export default NFTBasicInfo