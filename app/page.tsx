
import Hero from "./homeComponents/hero";
import Technology from "./homeComponents/technologySection";

export default function Home() {
  return (
    <main className="w-10/12 mx-auto flex flex-col py-11 md:py-22 gap-22 font-extralight">
      <Hero />
      <div className="flex flex-col gap-[1.125rem]  ">
        <h2 className="text-[1.75rem] ">Skills</h2>
        <div>
            <div className="flex flex-col md:flex-row md:gap-30  ">
                <div >
                    • Front-End devolpement <br/>
                    • Back-End devolpement
                </div>
                <div >
                    • Database managment <br/>
                    • Systems Design
                </div>
            </div>
        </div>
      </div>
      <Technology />
    </main>
  );
}
