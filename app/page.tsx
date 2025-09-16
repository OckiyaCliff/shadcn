import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/landing/faq";


export default function Home() {
  return (
    <div className="flex flex-col gap-4 text-balance bg-background text-foreground" >
      <div className="bg-primary text-primary-foreground" >Hi Ockiya</div>
      <Image src="/profile.jpg" alt="Profile"  width={100} height={100} priority /> 
      <Button >Click Me !</Button>
      <div className="bg-warning text-warning-foreground p-4 rounded-md mt-4">
        This is a warning message!
      </div>
      <Faq /> 
    </div>
  );
}
