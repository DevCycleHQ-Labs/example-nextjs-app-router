import { setupDevCycle } from "@devcycle/nextjs-sdk/server"
import { getSession } from "@auth0/nextjs-auth0"
import { DevCycleUser } from "@devcycle/nextjs-sdk/pages"
import { v4 as uuidv4 } from "uuid"

const getUserIdentity = async () => {
  console.log("getUserIdentity in server", uuidv4())
  const session = await getSession()
  if (!session) {
    return {
      user_id: uuidv4(),
      is_Anonymous: true,
    }
  }
  const userData: Omit<DevCycleUser, "user_id"> & { user_id: string } = {
    isAnonymous: false,
    name: session.user.name ?? undefined,
    user_id: session.user.sub,
    email: session.user.email,
  }
  console.log("userData in server", userData)
  return userData
}

const { getVariableValue, getClientContext } = setupDevCycle({
  // Server and Client SDK Key. This will be public and sent to the client, so you MUST use the client SDK key.
  serverSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_SERVER_SDK_KEY ?? "",
  clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? "",
  // pass your method for getting the user identity
  userGetter: async () => getUserIdentity(),
  // pass any options you want to use for the DevCycle SDK
  options: {
    enableStreaming: false,
    eventFlushIntervalMS: 1000,
  },
})

export { getVariableValue, getClientContext }
