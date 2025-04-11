import Description from "@/components/Description"
import IsAdmin from "@/components/IsAdmin"
import ToggleBot from "@/components/ToggleBot"
import Image from "next/image"
import UserDetails from "@/components/userDeatils"
export default function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <p>Demo Application</p>
        <Image
          height="46"
          width="207"
          src="/devcycle-togglebot-full-colour.svg"
          alt="DevCycle"
        />
      </div>
      <div className="App-wrapper">
        <IsAdmin />
        <UserDetails />
        <ToggleBot />
        <Description />
      </div>
    </div>
  )
}
