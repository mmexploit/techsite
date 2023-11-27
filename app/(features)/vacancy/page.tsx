import construct from "../../../public/construct.svg"
import Image from "next/image"

export default function Vacanacy() {
  return (
    <div className="min-h-[90dvh] flex items-center justify-center flex-col">
      <p className="text-5xl mx-auto">Vacancy</p>
      <Image src={construct.src} alt="construct" width={400} height={400}/>
    </div>
  )
}
