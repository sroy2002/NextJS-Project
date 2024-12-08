"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div className='bg-[#f9fafb] flex items-center'>
      <input type="text" className='h-[50px] w-[768px] pl-[15px] bg-[#f9fafb]' placeholder='Rechercher un produit'/>
      <CiSearch size={25} className='text-[#003349] mr-2'/>
    </div>
  )
}

export default Search
