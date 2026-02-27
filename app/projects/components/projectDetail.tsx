import { Project } from "../../data/projects";
import Image from "next/image";

const ProjectDetail = ({project , updateHash} : {project : Project , updateHash : (hash : string) => void}) => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-5   ">
            <button onClick={() => updateHash("")}
            className="absolute top-0 left-0 p-4 cursor-pointer ">
                {"<- Back"}
            </button>
            <div className="w-full md:w-2/3 flex flex-col gap-9 ">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[1.75rem] font-extralight">{project.name}</h2>
                    <span className="text-[1.125rem] font-light">{"Role: "} 
                        <span className="font-extralight">{project.role.join(" , ")}</span>
                    </span>
                </div>
                <span className="text-[1.125rem] font-light">{"Project Description: "}
                    <span className="font-extralight">{project.description}</span>
                </span>
                {project.images.map((image : string, index : number) => (
                      <Image className="max-w-full" src={image} alt={project.name} width={440} height={260} />
                ))}
                <span className="text-[1.125rem] font-light flex flex-row flex-wrap items-center gap-2 ">Tech Stack:
                    {project.tech.map((tech : string, index : number) => {
                        return (
                            <span key={index} className="font-extralight text-[1rem] px-4 py-1 border border-foreground rounded-full ">
                                {tech}
                            </span>
                        )
                    })}
                </span>
            </div>
            <div><div className="md:h-full md:w-[1px] w-full h-[1px] bg-foreground/25"></div></div>
            <div className="w-full md:w-1/3 flex flex-col gap-9 ">
                {project.status == "Active" &&
                    <>
                        {project.url.map((url : string, index : number) => {
                            return (
                                <a key={index} className=" text-[1.125rem] break-all font-extralight hover:font-light text-green-700" 
                                target="_blank" href={url}>{url}</a>
                            )
                        })}
                    </>
                }
                <div className="text-[1.125rem]">
                    <span className="font-light">{"Github: "}</span>
                    {project.github.map((url : string, index : number) => {
                        return (
                            <a key={index} href={url} target="_blank"
                            className="font-extralight break-all hover:font-light text-green-700">{url}<br/></a>
                        )
                    })}
                </div>
                <div className={`w-fit text-[1rem] font-light py-1 px-2 rounded-full border ${ project.status == "Active" ? "border-green-700 text-green-700" : "border-foreground"}` } >
                    {project.status}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail