"use client"

import { useUser } from "@clerk/nextjs"
import { useVariableValue } from "@devcycle/nextjs-sdk"

const UserDetails = () => {
  const user = useUser()
  const userDetails = {
    email: user?.user?.emailAddresses[0].emailAddress,
    id: user?.user?.username ?? user?.user?.id,
    role: useVariableValue("user-roles", "user"),
  }
  return (
    <div>
      <p>User Details</p>
      <p> ID: {userDetails.id}</p>
      <p>Email: {userDetails.email}</p>
      <p>Role: {userDetails.role}</p>
    </div>
  )
}

export default UserDetails
