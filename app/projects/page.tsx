"use client";
import Image from "next/image";
import { Projects , Project } from "../data/projects";
import { useHash } from "../hooks/hash";
import ProjectDetail from "./components/projectDetail";
import { useEffect } from "react";

export default function Home() {
    const {hash, updateHash} = useHash("")

    useEffect(() => {
        const html = document.querySelector("html")
        if(hash != ""){
            html?.classList.add("overflow-hidden")
        }else{
            html?.classList.remove("overflow-hidden")
        }
    }, [hash])
    
    return (
        <div className="w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-16 py-10 overflow-x-hidden">
            {Projects.map((project : Project, index:number) => {
                return (
                    <div key={index} onClick={() => {updateHash(JSON.stringify(index)); }}
                        className="flex flex-col gap-5 hover:scale-105 transition-all duration-300 cursor-pointer ">
                        <Image className="w-full h-full border border-foreground/25 " src={project.image} alt={project.name} width={400} height={300} />
                        <div className="flex flex-col ">
                            <h2 className="text-[1.125rem] font-light">{project.name}</h2>
                            <p className="text-[0.875rem] font-extralight">{project.description}</p>
                        </div>
                    </div>
                )
            })}
            {hash != "" &&
                <div onClick={() => updateHash("")} className="bg-black/25 w-screen h-screen fixed  top-0 left-0 "></div>
            }
            <div className={`h-screen lg:w-[75vw] bg-background fixed top-0 right-0  transition-transform duration-500 ease-in-out px-10 py-20 overflow-scroll 
                ${hash != "" ? "translate-x-0" : "translate-x-[100%]"}`}>
                    <ProjectDetail project={Projects[Number(hash)]} updateHash={updateHash} />
            </div>
        </div>
    );
}