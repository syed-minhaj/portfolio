import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-row w/full  ">
            <span className="flex flex-col md:w-6/10  text-[1.125rem]  ">
                <span className="text-wrap">
                    Writing full-stack code with a backend-first mindset — aiming to understand what makes systems reliable, scalable, and fast.<br/>
                    What I Actually Do <br/> 
                </span>
                <span className="ml-[1.125rem] text-wrap ">
                    • Build full-stack applications with Next.js, Express, SQL and more <br/>
                    • Explore backend systems, databases, auth flows, and APIs<br/>
                    • Diving deeper into infra, backend patterns, and how everything fits together
                </span>
            </span>
            <div className="ml-auto shadow-[0px_12px_12px_0px_rgba(0,0,0,0.25),inset_0px_12px_12px_0px_rgba(0,0,0,0.25)] aspect-square h-60 w-60 hidden md:block">
                <Image src="/portrait.png" alt="Syed Minhaj" width={240} height={240} 
                    className={` hidden md:block aspect-square h-60 w-60 relative z-[-10] `}  />
            </div>
        </div>
    )
}

export default Hero