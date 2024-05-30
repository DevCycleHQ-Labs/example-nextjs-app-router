import { setupDevCycle } from '@devcycle/nextjs-sdk/server'

const getUserIdentity = async () => {
    // This is where you might make a call to your code to determine the current user
    // You can use Next APIs such as `headers()` and `cookies()` here
    return {
        user_id: 'user123',
        email: 'jane.doe@email.com'
    }
}

const { getVariableValue, getClientContext } = setupDevCycle({
    // Server and Client SDK Key. This will be public and sent to the client, so you MUST use the client SDK key.
    serverSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_SERVER_SDK_KEY ?? '',
    clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
    // pass your method for getting the user identity
    userGetter: getUserIdentity,
    // pass any options you want to use for the DevCycle SDK
    options: {
        enableStreaming: false,
        eventFlushIntervalMS: 1000,
    }
})

export { getVariableValue, getClientContext }
