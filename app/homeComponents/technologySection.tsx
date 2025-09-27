import { JSX } from "react";
import { ReactSvg, TypescriptSvg , SqlSvg,
     PostgresqlSvg,ExpressSvg ,SupabaseSvg , NextjsSvg, 
    PrismaSvg , StripSvg , DrizzleSvg } from "../components/svg/svg";


const Technology = ({name , icoComponent} : {name : string , icoComponent : JSX.Element}) => {
    return (
        <div className="flex flex-row items-center gap-2 px-2.5 rounded border w-fit text-[1.125rem] h-12 ">
            {icoComponent}
            {name}
        </div>
    )
}

const TechnologySection = () => {
    
    return (
        <div className="w-full ">
            <div className="flex flex-col items-center gap-11">
                <h2 className="text-[1.75rem] ">Technologies I Use</h2>
                <div className="flex flex-row items-center justify-evenly gap-11 flex-wrap w-full">
                    <Technology name="ReactJS" icoComponent={<ReactSvg />} />
                    <Technology name="TypeScript" icoComponent={<TypescriptSvg />} />
                    <Technology name="SQL" icoComponent={<SqlSvg />} />
                </div>
                <div className="flex flex-row items-center justify-evenly gap-11 flex-wrap w-full">
                    <Technology name="PostgreSQL" icoComponent={<PostgresqlSvg />} />
                    <Technology name="ExpressJS" icoComponent={<ExpressSvg />} />
                    <Technology name="Supabase" icoComponent={<SupabaseSvg />} />
                    <Technology name="NextJS" icoComponent={<NextjsSvg />} />
                </div>
                <div className="flex flex-row items-center justify-evenly gap-11 flex-wrap w-full ">
                    <Technology name="PrismaORM" icoComponent={<PrismaSvg />} />
                    <Technology name="Stripe" icoComponent={<StripSvg />} />
                    <Technology name="DrizzleORM" icoComponent={<DrizzleSvg />} />
                </div>
            </div>
        </div>
    )
}

export default TechnologySection