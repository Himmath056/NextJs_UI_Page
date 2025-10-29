'use client'

import { Meteors } from "@/components/ui/meteors"


function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
        <Meteors  number={20} />
    </div>
  )
}

export default page