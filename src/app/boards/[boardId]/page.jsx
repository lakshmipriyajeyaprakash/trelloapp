'use client'
import React from 'react'
import { useAppSelector } from '@/app/lib/hooks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PageBoard from '../_components/PageBoard'
const page = () => {
  const path = usePathname();
  const pathId = path.split('/')[2];
  console.log(pathId);
  const boardDetail = useAppSelector((state) => state.boards);
  console.log(boardDetail);
  const filtered = boardDetail.filter((board)=>board.boardId===pathId)
  return (
    <div>
      <PageBoard filtered={filtered}></PageBoard>
    </div>
  )
}

export default page