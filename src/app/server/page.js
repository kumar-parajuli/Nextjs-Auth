import React from 'react'

import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default  async function ServerPage  ()  {
 
const session = await getServerSession(authOptions)
 
  return (
    <div>
      Wel come !ServerPage
      {JSON.stringify(session)}
      
      </div>
  )
}

