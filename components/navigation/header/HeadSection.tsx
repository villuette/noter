'use client'
import Image from 'next/image'
import React from 'react'

export default function HeadSection({children}:{children: React.ReactNode | null}) {
  return (
    
      <div className="text-white h-[62px]
       w-full flex justify-between bg-[#181A2B]">
        {children}
      </div>
  )
}
