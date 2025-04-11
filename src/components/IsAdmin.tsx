"use client"

import { useVariableValue } from "@devcycle/nextjs-sdk"

const IsAdmin = () => {
  const isAdmin = useVariableValue("is-admin", false)

  return <div>IsAdmin: {isAdmin ? "true" : "false"}</div>
}

export default IsAdmin
