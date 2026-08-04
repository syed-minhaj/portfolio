import Image from "next/image";
import Link from "next/link";

export default function GeoHarvestCaseStudy() {
    return (
        <div className="max-w-3xl mx-auto px-5 py-0 sm:py-12 md:py-20 flex flex-col gap-8 font-[family-name:var(--font-jetbrains-mono)]">
            <Link href="/case-studies" className="text-sm hover:opacity-60 transition-opacity">
                {"<- Back"}
            </Link>

            <article className="flex flex-col leading-relaxed text-[0.95rem] font-light">

                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-light">
                        GeoHarvest — Precision Agriculture with Satellite Imagery
                    </h1>
                    <p className="mt-3 text-foreground/70">
                        A full-stack web app that uses Sentinel-2 satellite data to help farmers monitor water, nitrogen, phosphorus, and crop stress on their fields.
                    </p>
                </div>

                <div className="flex flex-col items-center mb-8">
                    <Image className="w-full rounded border" src="/webp/projects/geoHarvest1.webp" alt="GeoHarvest landing page" width={1280} height={720} />
                </div>

                <div className="flex flex-row flex-wrap items-center gap-2 mb-8">
                    <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Full Stack</span>
                    <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">GIS</span>
                    <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Satellite Imagery</span>
                    <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Next.js</span>
                    <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">PostgreSQL</span>
                </div>

                <div className="flex flex-row flex-wrap items-center gap-4 mb-8">
                    <a href="https://geo-harvest.vercel.app" target="_blank" className="text-sm bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition-colors">Live Demo</a>
                    <a href="https://github.com/syed-minhaj/geo_harvest" target="_blank" className="text-sm bg-foreground/10 text-foreground px-5 py-2 rounded-md hover:bg-foreground/20 transition-colors">GitHub</a>
                </div>

                <div className="h-px bg-foreground/15 mb-8" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-3 pl-3 border-l-2 border-green-700">TL;DR</h2>
                    <p>
                        GeoHarvest is a precision agriculture web app built with Next.js. It connects to Copernicus Sentinel-2 satellites, downloads spectral imagery for crop fields, and visualizes water requirement, nitrogen, phosphorus, and crop stress as color-coded map overlays. The hardest technical challenge was integrating with the Sentinel-2 API — writing custom evalscripts for each spectral index without a background in agronomy or remote sensing. The app is built with Next.js 16, Neon PostgreSQL with Drizzle ORM, Supabase Storage, Better-Auth, Leaflet for maps, and runs weekly automated updates via Vercel Cron.
                    </p>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-4 pl-3 border-l-2 border-green-700">Project Snapshot</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="border border-foreground/15 rounded p-3">
                            <span className="block text-xs text-foreground/60 mb-1">Role</span>
                            <span className="block text-sm">Solo full-stack developer</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3">
                            <span className="block text-xs text-foreground/60 mb-1">Timeline</span>
                            <span className="block text-sm">2-3 months active, ongoing maintenance</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3">
                            <span className="block text-xs text-foreground/60 mb-1">Stack</span>
                            <span className="block text-sm">Next.js, Drizzle, Neon, Tailwind</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3">
                            <span className="block text-xs text-foreground/60 mb-1">Platform</span>
                            <span className="block text-sm">Web + PWA (responsive)</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3">
                            <span className="block text-xs text-foreground/60 mb-1">Architecture</span>
                            <span className="block text-sm">Server actions, cron, sharp</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3">
                            <span className="block text-xs text-foreground/60 mb-1">Deployment</span>
                            <span className="block text-sm">Vercel + Neon + Supabase</span>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-4 pl-3 border-l-2 border-green-700">Results / Project Highlights</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                        <div className="border border-foreground/15 rounded p-3 text-center">
                            <span className="block text-lg">4</span>
                            <span className="block text-xs text-foreground/60">vegetation indices</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3 text-center">
                            <span className="block text-lg">48</span>
                            <span className="block text-xs text-foreground/60">crop-stage-aware ramps</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3 text-center">
                            <span className="block text-lg">Auto</span>
                            <span className="block text-xs text-foreground/60">weekly satellite updates</span>
                        </div>
                        <div className="border border-foreground/15 rounded p-3 text-center">
                            <span className="block text-lg">3</span>
                            <span className="block text-xs text-foreground/60">crop types tracked</span>
                        </div>
                    </div>

                    <ul className="flex flex-col gap-2 list-disc pl-5">
                        <li>4 spectral indices — NDMI (water), NDRE (nitrogen), CIre (phosphorus), NDVI (stress)</li>
                        <li>Fully automated satellite pipeline — no manual work after setup</li>
                        <li>Weekly cron job checks for new Sentinel-2 imagery and processes it</li>
                        <li>3 crop types with growth stage tracking — wheat, rice, cotton</li>
                        <li>Interactive map with 3 modes — overview, field detail with overlay, boundary drawing</li>
                        <li>Analytics dashboard with trend charts, field comparison, and crop distribution</li>
                        <li>Server-side image processing with sharp — no browser computation</li>
                        <li>Published an npm package to fix an abandoned dependency</li>
                    </ul>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-3 pl-3 border-l-2 border-green-700">Problem</h2>
                    <p>
                        Pakistan has one of the highest per-acre water usage rates in the world. Yields are low. A big reason is that farmers treat entire fields uniformly — same water, same fertilizer everywhere. But fields aren&apos;t uniform. Some parts drain faster. Some soil holds more nutrients. Some sections get more sun.
                    </p>
                    <p className="mt-3">
                        If you could tell a farmer <span className="italic text-foreground/70">&quot;the northwest corner of your field needs water today, the rest is fine,&quot;</span> that saves water, saves fertilizer, and probably improves yield.
                    </p>
                    <p className="mt-3">
                        I am not a farmer. I didn&apos;t build this to start a company. I built it because it is a genuinely hard technical problem and I wanted to see if I could solve it.
                    </p>
                </section>

                <div className="flex flex-col items-center mb-12">
                    <video className="w-11/12 md:w-5/6 rounded border" src="/projects/videos/geoHarvest.mp4" controls autoPlay loop muted playsInline />
                </div>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-3 pl-3 border-l-2 border-green-700">Solution</h2>
                    <p>
                        There are two separate phases. Satellite data is fetched during field creation and weekly cron jobs. Viewing a field just reads cached data.
                    </p>
                    <p className="mt-3">
                        <strong className="font-normal">Data collection.</strong> When a field is created, the server searches the Copernicus catalog for recent Sentinel-2 images covering that area with low cloud cover. If it finds one, it sends 4 evalscripts to Sentinel&apos;s Process API — one for each index. Each evalscript is a piece of JavaScript that tells Sentinel which bands to use, how to compute the index, and what color ramp to apply. Sentinel returns 4 colorized PNGs. These get uploaded to Supabase Storage. Then sharp decodes each PNG pixel by pixel, matches every RGB value against the crop-stage-specific color ramp to find the closest health value, averages all non-transparent pixels, normalizes the result, and stores it in Postgres.
                    </p>
                    <p className="mt-3">
                        A Vercel cron job runs every Sunday and does the same thing for every field — checks for new imagery, downloads anything new, processes it, and stores it. No manual intervention.
                    </p>
                    <p className="mt-3">
                        <strong className="font-normal">Viewing.</strong> When you open a field and switch between water, nitrogen, phosphorus, or stress views, no satellite API is called. The overlay is the PNG already sitting in Supabase Storage. The chart is the trend data already sitting in Postgres. Both were fetched and computed during field creation or the last cron run.
                    </p>
                    <p className="mt-3">
                        The indices themselves work on a simple principle: plants, soil, and water all reflect light differently across the spectrum. NDMI uses near-infrared and shortwave infrared (B8A, B11) to estimate water content. NDRE uses red-edge and near-infrared (B05, B08) for nitrogen. CIre uses two red-edge bands (B05, B07) for phosphorus. NDVI uses red and near-infrared (B04, B08) for overall crop stress.
                    </p>
                    <p className="mt-3">
                        The color ramps change based on what crop was planted and how long ago. Wheat at 20 days is in seedling stage and uses different thresholds than wheat at 80 days in heading stage. Same NDVI value, different interpretation. Currently supports wheat, rice, and cotton with variety selection and growth stage tracking.
                    </p>
                </section>

                <div className="flex flex-col items-center mb-12">
                    <Image className="w-11/12 md:w-5/6 rounded border" src="/webp/projects/geoHarvest-fields.webp" alt="Fields overview page showing field cards with SVG polygon previews" width={1280} height={720} />
                    <span className="block text-xs text-foreground/50 text-center mt-2">Fields overview with SVG polygon previews and health indicators</span>
                </div>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-4 pl-3 border-l-2 border-green-700">Technical Challenges</h2>

                    <h3 className="font-normal mt-4">The react-leaflet-draw Nightmare</h3>
                    <p>
                        react-leaflet-draw did not work with React 19. The library was essentially abandoned. The maintainer was not responding to PRs. There was a fix sitting in a pull request for months with people tagging the maintainer to look at it.
                    </p>
                    <p className="mt-3">
                        I spent 7 to 10 days debugging. Tried workarounds. Read every GitHub thread. Eventually I cloned the contributor&apos;s fork, built it, and published it as <code className="text-sm">minhaj-react-leaflet-draw</code> on npm. Used my own package until the main library finally got updated and I switched back.
                    </p>
                    <p className="mt-3">
                        This is the kind of problem that takes more time than any feature. It is not technically hard — it is just dealing with a dead project and deciding whether to wait or ship your own fix.
                    </p>

                    <h3 className="font-normal mt-8">Sentinel-2 Integration</h3>
                    <p>
                        This was genuinely difficult. Custom evalscripts are JavaScript that runs on Sentinel&apos;s servers. They tell the API which bands to use and how to compute the index. Get the script wrong and you get blank images.
                    </p>
                    <p className="mt-3">
                        I am not a physicist or a plant scientist. I don&apos;t know the exact reflectance properties of different crops at different growth stages. So I did the pragmatic thing: generated the evalscripts with an LLM, tested them on Sentinel Playground, and picked the ones that produced reasonable results.
                    </p>
                    <p className="mt-3">
                        I am still not confident these are correct. The spectral scripts and color ramps are at the top of my improvement list. But they produce good-looking results and the system works end to end.
                    </p>

                    <h3 className="font-normal mt-8">The Color Ramp System</h3>
                    <p>
                        Initially I used a handful of generic color ramps. Then I realized that doesn&apos;t make sense — a water stress map for a mature cotton field should look different from a wheat field in seedling stage.
                    </p>
                    <p className="mt-3">
                        So I built a system with 48 unique ramps: 3 crops x 4 growth stages x 4 indices, plus a generic catch-all. Each ramp maps pixel values to health-appropriate colors for that specific combination. Growth stages are calculated from the planting date using crop-specific thresholds.
                    </p>
                    <p className="mt-3">
                        These were also LLM-generated. Also need validation.
                    </p>
                </section>

                <div className="flex flex-col items-center mb-12">
                    <Image className="w-11/12 md:w-5/6 rounded border" src="/webp/projects/geoHarvest-dashboard.webp" alt="Farm at a Glance dashboard with overview map, KPI cards, and field health table" width={1280} height={720} />
                    <span className="block text-xs text-foreground/50 text-center mt-2">Farm at a Glance dashboard with overview map, KPIs, and health indicators</span>
                </div>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-4 pl-3 border-l-2 border-green-700">Architecture</h2>
                    <p className="mb-4">The stack is straightforward:</p>
                    <div className="flex flex-row flex-wrap items-center gap-2 mb-4">
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Next.js 16</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">TypeScript</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Neon PostgreSQL</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Drizzle ORM</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Supabase Storage</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Better-Auth</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Leaflet</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Recharts</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Tailwind v4</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">shadcn/ui</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">Copernicus Sentinel-2</span>
                        <span className="text-sm px-3 py-1 border border-foreground/30 rounded-full">sharp</span>
                    </div>
                    <p className="text-sm text-foreground/70 italic">
                        The satellite pipeline runs entirely on the server — from evalscript execution to pixel processing. The client only renders cached overlays and charts.
                    </p>
                </section>

                <div className="flex flex-col items-center mb-12">
                    <Image className="w-11/12 md:w-5/6 rounded border" src="/webp/projects/geoHarvest-analytics.webp" alt="Analytics page with cross-field KPIs, vegetation index trends, and field comparison charts" width={1280} height={720} />
                    <span className="block text-xs text-foreground/50 text-center mt-2">Analytics page with trend charts, field comparison, and crop distribution</span>
                </div>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-4 pl-3 border-l-2 border-green-700">Features</h2>

                    <h3 className="font-normal mt-2">Three Map Modes</h3>
                    <p className="mt-1">The Farm at a Glance dashboard shows all fields as colored polygons on OpenStreetMap. The field detail map switches to high-res ArcGIS satellite imagery and overlays the colorized index PNG at 55% opacity. A drawing map with Leaflet Draw handles boundary creation.</p>

                    <h3 className="font-normal mt-5">Farm at a Glance Dashboard</h3>
                    <p className="mt-1">4 KPI cards — total fields, active crops, latest data date, fields with recent data. Below that, field cards render pure SVG polygon previews of each boundary (no Leaflet, just clean vectors), and a full fields table with color-coded health dots based on the average of the latest 4 index values.</p>

                    <h3 className="font-normal mt-5">Detailed Analytics</h3>
                    <p className="mt-1">Cross-field KPI comparisons, vegetation index trend charts, field comparison bar charts, crop distribution donut, and data freshness tracking that shows how recent each field&apos;s imagery is.</p>

                    <h3 className="font-normal mt-5">Crop Management</h3>
                    <p className="mt-1">Pick wheat, rice, or cotton, enter the variety and planting date. The system tracks growth stages automatically and adjusts color ramps as the crop matures.</p>

                    <h3 className="font-normal mt-5">Scheduled Updates</h3>
                    <p className="mt-1">A Vercel cron job runs every Sunday. It checks for new Sentinel-2 imagery for every field, downloads anything new, processes it, and stores it automatically.</p>

                    <h3 className="font-normal mt-5">Demo Mode</h3>
                    <p className="mt-1">Two sample fields are accessible without login. Anyone can explore the app without creating an account.</p>

                    <h3 className="font-normal mt-5">Quality of Life</h3>
                    <p className="mt-1">Dark mode, PWA with standalone install, responsive layout with bottom nav on mobile and sidebar on desktop.</p>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-4 pl-3 border-l-2 border-green-700">Engineering Decisions</h2>

                    <p><strong className="font-normal">3-field limit per user.</strong> Keeps Copernicus API usage within free quotas. Also keeps database queries fast and predictable.</p>

                    <p className="mt-4"><strong className="font-normal">Hash-based navigation instead of state.</strong> The image type selector uses URL hashes. The map overlay and the chart both read from the same hash. No complex state management needed.</p>

                    <p className="mt-4"><strong className="font-normal">All processing is server-side.</strong> Satellite PNGs are decoded with sharp in server actions — no heavy binary in the browser bundle, no client-side pixel computation. The field creation flow and weekly cron both handle everything on the backend. The client just renders the already-processed overlay and chart.</p>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-3 pl-3 border-l-2 border-green-700">What I Would Change Today</h2>
                    <p>
                        The spectral scripts and color ramps are the first thing I would fix. They work, but I don&apos;t fully trust them. I would want someone with domain knowledge to review them.
                    </p>
                    <p className="mt-3">
                        I would add support for more crops — the major ones in Pakistan are covered, but there are more.
                    </p>
                    <p className="mt-3">
                        Weather data would make the analysis more useful. Knowing it rained yesterday changes how you interpret a water requirement map.
                    </p>
                    <p className="mt-3">
                        But none of that matters if the core spectral analysis is not solid. Scripts first, everything else second.
                    </p>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-12">
                    <h2 className="text-lg font-light mb-3 pl-3 border-l-2 border-green-700">Lessons Learned</h2>
                    <p>
                        This was the most technically complex project I have built. Not because any single piece is hard — at its core it is a CRUD app with a map and some API calls.                         The difficulty was in getting everything to work together. The abandoned library. The satellite API with its own scripting language. The domain knowledge I didn&apos;t have.
                    </p>
                    <p className="mt-3">
                        When react-leaflet-draw was broken, I forked it and published my own package. When I didn&apos;t understand spectral indices, I tested scripts in Sentinel Playground until something worked. When the color ramps were too generic, I built a system with 48 variants. Ship first, improve later.
                    </p>
                </section>

                <div className="h-px bg-foreground/15 mb-12" />

                <section className="mb-8">
                    <h2 className="text-lg font-light mb-3 pl-3 border-l-2 border-green-700">Let&apos;s Work Together</h2>
                    <p className="mb-4">
                        Interested in building dashboards, GIS software, AI tools, or complex web applications?
                    </p>
                    <div className="flex flex-row flex-wrap items-center gap-3">
                        <a href="mailto:minhajsulmuneeb@gmail.com" className="text-sm border border-green-700 text-green-700 px-4 py-1.5 rounded-full hover:bg-green-700 hover:text-white transition-colors">Contact</a>
                        <a href="https://github.com/syed-minhaj" target="_blank" className="text-sm border border-foreground/30 px-4 py-1.5 rounded-full hover:border-foreground/60 transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/syed-minhaj-ul-haque/" target="_blank" className="text-sm border border-foreground/30 px-4 py-1.5 rounded-full hover:border-foreground/60 transition-colors">LinkedIn</a>
                    </div>
                </section>

            </article>
        </div>
    );
}
