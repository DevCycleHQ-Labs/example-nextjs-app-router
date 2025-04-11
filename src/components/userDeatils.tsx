"use client"

import { useUser } from "@auth0/nextjs-auth0/client"
import { useVariableValue } from "@devcycle/nextjs-sdk"

const UserDetails = () => {
  const { user, error, isLoading } = useUser()
  console.log("user", user)
  const userDetails = {
    email: user?.email,
    id: user?.sub,
    role: useVariableValue("user-roles", "user"),
    number: useVariableValue("testing-exp", 0),
  }
  console.log("userDetails", userDetails)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  return (
    <div>
      <p>User Details</p>
      <p> ID: {userDetails.id}</p>
      <p>Email: {userDetails.email}</p>
      <p>Role: {userDetails.role}</p>
      <p>Number: {userDetails.number}</p>
    </div>
  )
}

export default UserDetails
