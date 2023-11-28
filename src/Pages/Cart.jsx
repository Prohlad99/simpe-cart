import React from 'react'
import Cartitems from '../components/Cartitems'
import { useContext } from 'react'

export  function Cart() {
  return (
    <div className='ml-[80px]'>
      <Cartitems/>
    </div>
  )
}
