import { setupDevCycle } from "@devcycle/nextjs-sdk/server"
import { currentUser } from "@clerk/nextjs/server"
import { DevCycleUser } from "@devcycle/nextjs-sdk/pages"
const getUserIdentity = async () => {
  const user = await currentUser()
  if (!user) {
    return {
      user_id: "user123",
      is_Anonymous: true,
      email: "jane.doe@email.com",
    }
  }
  const userData: Omit<DevCycleUser, "user_id"> & { user_id: string } = {
    isAnonymous: false,
    name: user.fullName ?? undefined,
    user_id: user.username ?? user.id,
    email: user.emailAddresses[0].emailAddress,
  }
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
