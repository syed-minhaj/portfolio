
type Project = {
    name : string ,
    shortDescription : string ,
    description : string ,
    video? : string,
    images : string[] ,
    url : string[] ,
    tech : string[] ,
    github : string[] ,
    role : string[] ,
    status : "Active" | "Inactive"
}

const Projects : Project[] = [
    {  
        name : "Geo Harvest" , 
        shortDescription : "Agtech Platform that helps farmers monitor thier crop. " ,
        description: `Geo_Harvest is a web application built with Next.js for agricultural data visualization 
        and management. It allows users to view and analyze data related to their fields, including information 
        fetched from third-party APIs.`,
        images : ["/projects/geoHarvest.png", "/projects/geoHarvest2.png" , "/projects/geoHarvest3.png" , "/projects/geoHarvest4.png"] ,
        url : ["https://geo-harvest.vercel.app"] ,
        tech : ["ReactJS", "NextJS", "TypeScript", "DrizzleORM", "PostgreSQL", "BetterAuth" , "Shadcn ui" ] ,
        github : ["https://github.com/syed-minhaj/geo_harvest"] ,
        role : ["Front-End Developer", "Back-End Developer" , "Database Administrator","Designer"] ,
        status : "Active"
    },
    {
        name : "Open Course",
        shortDescription : "Digital marketplace for pre packaged courses using free resources on internet." ,
        description: `This project is an e-commerce platform where users can create, sell, and buy online courses. 
        A unique feature of this platform is that course creators can use materials from the internet to build their course content. 
        The application is built with Next.js and utilizes a PostgreSQL database with Prisma for data management, Stripe for secure payments, 
        and NextAuth.js for authentication.`,
        images : ["/projects/openCourse.png"] ,
        url : ["https://open-course-ebon.vercel.app"] ,
        tech : ["ReactJS", "NextJS", "TypeScript", "PostgreSQL", "PrismaORM", "Stripe", "Supabase" , "AuthJS"] ,
        github : ["https://github.com/syed-minhaj/open-course"] ,
        role : ["Front-End Developer", "Back-End Developer" , "Database Administrator"] ,
        status : "Active"
    },
    {  
        name : "Open Auth" , 
        shortDescription: "Core: Auth library for web apps using One-Time Passwords (OTP) and Password-based login." ,
        description : `A simple and lightweight authentication library for web apps using One-Time Passwords (OTP) and Password-based login. 🔒
        Built in TypeScript, compiled for both CommonJS and ESModules. \n 
        UI: This package provides ready-to-use pages for signing in, signing up, and deleting accounts, with HTML inline styling so no CSS setup is required.`,
        images : ["/projects/openAuth.png"] ,
        url : ["https://www.npmjs.com/package/@open_auth/auth","https://www.npmjs.com/package/@open_auth/react-ui"] ,
        tech : ["ReactJS", "SQL", "PostgreSQL", "TypeScript", "ExpressJS" , "JWT"] ,
        github : ["https://github.com/syed-minhaj/open_auth"] ,
        role : ["Front-End Developer", "Back-End Developer"] ,
        status : "Active"
    },
    {
        name : "Image Convert",
        shortDescription:"Converts image formate and size." ,
        description : "Simple static web application that converts image formate and size at clients own divice." ,
        images : ["/projects/imageConvert.png"] ,
        url : ["https://image-convertor-two.vercel.app"] ,
        tech : ["ReactJS", "NextJS", "TypeScript", "TailwindCSS"] ,
        github : ["https://github.com/syed-minhaj/imageConvertor" ],
        role : ["Front-End Developer", "Back-End Developer" ,"Designer"] ,
        status : "Active"
    },
    {
        name : "Chat App",
        shortDescription:"Simple chat app using Socket.io." ,
        description : "Simple chat app which allow users to chat directly with each other or create chat groups, web sockets are used to enable real-time communication." ,
        images : ["/projects/chatApp.png","/projects/chatApp.png"] ,
        url : ["https://chatapp-seven-hazel.vercel.app"] ,
        tech : ["ReactJS", "NextJS", "ExpressJS", "WebSocket" , "Socket.io" , "TypeScript" , "TailwindCSS"] ,
        github : ["https://github.com/syed-minhaj/chatapp","https://github.com/syed-minhaj/chatapp-socketiobackend"] ,
        role : ["Front-End Developer", "Back-End Developer"] ,
        status : "Active"
    }
]

export { Projects }

export type { Project }