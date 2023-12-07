import React from 'react'
import { Menu } from './model/restaurant'
// 똑같은 거 반복하지 말자!!!

interface OwnProps extends Omit<Menu, 'price'> {
  showBestMenuName(name:string):string
}

// type OwnProps = Menu & showBestMenuName(name:string):string {
  
// }

const BestMenu:React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu