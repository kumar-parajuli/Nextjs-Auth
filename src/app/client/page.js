'use client'
import React from 'react'
import { useSession  } from "next-auth/react"

const ClientPage = () => {
  const { data: session } = useSession()

  return (
    <div>
      ClientPage
      {JSON.stringify(session)}
      
      </div>
  )
}

export default ClientPage