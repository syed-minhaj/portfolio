
type Project = {
    name : string ,
    description : string ,
    image : string ,
    url : string ,
    tech : string[] ,
    github : string ,
    role : string[] ,
    status : "Active" | "Inactive"
}

const Projects : Project[] = [
    {  
        name : "Geo Harvest" , 
        description : "A web application that helps farmers to track and manage their crops and livestock." ,
        image : "/geoHarvest.png" ,
        url : "https://geo-harvest.com/" ,
        tech : ["ReactJS", "NextJS", "ExpressJS", "PostgreSQL", "PrismaORM", "Stripe", "DrizzleORM"] ,
        github : "https://github.com/syed-minhaj/geo_harvest" ,
        role : ["Front-End Developer", "Back-End Developer"] ,
        status : "Active"
    },
    {
        name : "Open Course",
        description : "A web application that helps farmers to track and manage their crops and livestock." ,
        image : "/openCourse.png" ,
        url : "https://geo-harvest.com/" ,
        tech : ["ReactJS", "NextJS", "ExpressJS", "PostgreSQL", "PrismaORM", "Stripe", "DrizzleORM"] ,
        github : "https://github.com/syed-minhaj/open-course" ,
        role : ["Front-End Developer", "Back-End Developer"] ,
        status : "Inactive"
    },
    {  
        name : "Geo Harvest" , 
        description : "A web application that helps farmers to track and manage their crops and livestock." ,
        image : "/geoHarvest.png" ,
        url : "https://geo-harvest.com/" ,
        tech : ["ReactJS", "NextJS", "ExpressJS", "PostgreSQL", "PrismaORM", "Stripe", "DrizzleORM"] ,
        github : "https://github.com/syed-minhaj/geo_harvest" ,
        role : ["Front-End Developer", "Back-End Developer"] ,
        status : "Active"
    },
    {
        name : "Open Course",
        description : "A web application that helps farmers to track and manage their crops and livestock." ,
        image : "/openCourse.png" ,
        url : "https://geo-harvest.com/" ,
        tech : ["ReactJS", "NextJS", "ExpressJS", "PostgreSQL", "PrismaORM", "Stripe", "DrizzleORM"] ,
        github : "https://github.com/syed-minhaj/open-course" ,
        role : ["Front-End Developer", "Back-End Developer"] ,
        status : "Active"
    }
]

export { Projects }

export type { Project }