import { db } from '@/lib/db';
import { SignUp, currentUser, redirectToSignIn, redirectToSignUp, useAuth, useUser } from '@clerk/nextjs'
import React from 'react'

export default  function Page() {
  return (
    <SignUp/>
  )
}
