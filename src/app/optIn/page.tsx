"use client"

import { useUser } from "@auth0/nextjs-auth0/client"
import { useEffect } from "react"

export default function OptInPage() {
  const { user, error, isLoading } = useUser()
  useEffect(() => {
    const iframe = document.querySelector(
      "iframe[data-dvc-widget='dvc-iframe']"
    ) as HTMLIFrameElement

    const handleMessage = (e: MessageEvent) => {
      const data = e.data
      if (data.type === "DVC.optIn.updateHeight" && iframe) {
        iframe.style.height = data.height
      }
    }

    window.addEventListener("message", handleMessage, false)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  return (
    <div className="flex justify-center items-center min-h-screen">
      <iframe
        data-dvc-widget="dvc-iframe"
        src={`https://opt-in.devcycle.com/?userId=${user?.sub}&sdkKey=${process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY}`}
        title="Feature Opt-In"
        width="800"
        style={{ border: "red" }}
      />
    </div>
  )
}
