import CodeFace from "./codeFace";
import type { Token } from "./codeFace";
import HeroText from "./heroText";

type Face = {
    key: string;
    transform: string;
    filename: string;
    lines: Token[][];
};

const faces: Face[] = [
    {
        key: "react",
        transform: "rotateY(0deg) translateZ(7.5rem)",
        filename: "button.tsx",
        lines: [
            [{ c: "kw", v: "export" }, { c: "pl", v: " function " }, { c: "fn", v: "Button" }, { c: "punct", v: "() {" }],
            [{ c: "pl", v: "  " }, { c: "kw", v: "const" }, { c: "pl", v: " [c, s] = " }, { c: "fn", v: "useState" }, { c: "punct", v: "(0)" }],
            [{ c: "pl", v: "  const add = () => " }, { c: "fn", v: "s" }, { c: "punct", v: "(c + 1)" }],
            [{ c: "pl", v: "  const reset = () => " }, { c: "fn", v: "s" }, { c: "punct", v: "(0)" }],
            [{ c: "pl", v: "  const l = " }, { c: "str", v: "`count: ${c}`" }],
            [{ c: "kw", v: "return" }, { c: "punct", v: " (" }],
            [{ c: "pl", v: "    " }, { c: "punct", v: "<button onClick=" }, { c: "pl", v: "{add}" }, { c: "punct", v: ">" }],
            [{ c: "pl", v: "      " }, { c: "punct", v: "{" }, { c: "pl", v: "label" }, { c: "punct", v: "}" }],
            [{ c: "pl", v: "    " }, { c: "punct", v: "</button>" }],
            [{ c: "pl", v: "  " }, { c: "punct", v: ")" }],
            [{ c: "punct", v: "}" }],
            [],
            [{ c: "kw", v: "export" }, { c: "pl", v: " default " }, { c: "fn", v: "Button" }],
        ],
    },
    {
        key: "next",
        transform: "rotateY(90deg) translateZ(7.5rem)",
        filename: "route.ts",
        lines: [
            [{ c: "kw", v: "export" }, { c: "pl", v: " async " }, { c: "kw", v: "function" }, { c: "pl", v: " GET" }, { c: "punct", v: "() {" }],
            [{ c: "pl", v: "  const r = await " }, { c: "fn", v: "db" }, { c: "punct", v: ".all()" }],
            [{ c: "pl", v: "  if (!r) return " }, { c: "fn", v: "json" }, { c: "punct", v: "({err:1})" }],
            [],
            [{ c: "pl", v: "  const sorted = r" }, { c: "punct", v: ".sort()" }],
            [{ c: "pl", v: "  return " }, { c: "fn", v: "json" }, { c: "punct", v: "({rows: sorted})" }],
            [{ c: "punct", v: "}" }],
            [],
            [{ c: "kw", v: "async" }, { c: "pl", v: " function " }, { c: "fn", v: "POST" }, { c: "punct", v: "() {" }],
            [{ c: "pl", v: "  return " }, { c: "fn", v: "json" }, { c: "punct", v: "({ ok: 1 })" }],
            [{ c: "punct", v: "}" }],
            [],
            [{ c: "kw", v: "async" }, { c: "pl", v: " function " }, { c: "fn", v: "DELETE" }, { c: "punct", v: "() {" }],
            [{ c: "pl", v: "  return " }, { c: "fn", v: "json" }, { c: "punct", v: "({ ok: 1 })" }],
            [{ c: "punct", v: "}" }],
        ],
    },
    {
        key: "express",
        transform: "rotateY(180deg) translateZ(7.5rem)",
        filename: "server.ts",
        lines: [
            [{ c: "pl", v: "app" }, { c: "fn", v: ".use" }, { c: "punct", v: "((r, res, n) => {" }],
            [{ c: "pl", v: "  console" }, { c: "punct", v: ".log" }, { c: "punct", v: "(r.method, r.url)" }],
            [{ c: "pl", v: "  n" }, { c: "punct", v: "()" }],
            [{ c: "punct", v: "})" }],
            [],
            [{ c: "pl", v: "app" }, { c: "fn", v: ".get" }, { c: "punct", v: "(" }, { c: "str", v: '"/users"' }, { c: "punct", v: ",(r,res)=>{" }],
            [{ c: "pl", v: "  const rows = " }, { c: "fn", v: "db" }, { c: "punct", v: ".all()" }],
            [{ c: "pl", v: "  res" }, { c: "fn", v: ".json" }, { c: "punct", v: "(rows)" }],
            [{ c: "punct", v: "})" }],
            [],
            [{ c: "pl", v: "app" }, { c: "fn", v: ".post" }, { c: "punct", v: "(" }, { c: "str", v: '"/users"' }, { c: "punct", v: ",(r,res)=>{" }],
            [{ c: "pl", v: "  const u = req" }, { c: "punct", v: ".body" }],
            [{ c: "pl", v: "  db" }, { c: "punct", v: ".insert" }, { c: "punct", v: "(u)" }],
            [{ c: "pl", v: "  res" }, { c: "fn", v: ".json" }, { c: "punct", v: "({ ok: 1 })" }],
            [{ c: "punct", v: "})" }],
        ],
    },
    {
        key: "sql",
        transform: "rotateY(270deg) translateZ(7.5rem)",
        filename: "query.sql",
        lines: [
            [{ c: "pl", v: "SELECT u.name, count(o.id) c" }],
            [{ c: "pl", v: "FROM users u" }],
            [{ c: "pl", v: "JOIN orders o ON o.uid = u.id" }],
            [{ c: "pl", v: "WHERE o.status = 'paid'" }],
            [{ c: "pl", v: "  AND o.total > 100" }],
            [{ c: "pl", v: "GROUP BY u.name" }],
            [{ c: "pl", v: "HAVING c > 2" }],
            [{ c: "pl", v: "ORDER BY c DESC" }],
            [{ c: "pl", v: "LIMIT 10" }, { c: "punct", v: ";" }],
        ],
    },
    {
        key: "drizzle",
        transform: "rotateX(90deg) translateZ(7.5rem)",
        filename: "schema.ts",
        lines: [
            [{ c: "pl", v: "const users = " }, { c: "fn", v: "pgTable" }, { c: "punct", v: "(" }, { c: "str", v: '"user"' }, { c: "punct", v: ", {" }],
            [{ c: "pl", v: "  id: " }, { c: "fn", v: "uuid" }, { c: "punct", v: "().primaryKey()," }],
            [{ c: "pl", v: "  name: " }, { c: "fn", v: "varchar" }, { c: "punct", v: "(" }, { c: "str", v: '"name"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  email: " }, { c: "fn", v: "varchar" }, { c: "punct", v: "(" }, { c: "str", v: '"email"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  role: " }, { c: "fn", v: "text" }, { c: "punct", v: "(" }, { c: "str", v: '"role"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  active: " }, { c: "fn", v: "boolean" }, { c: "punct", v: "(" }, { c: "str", v: '"active"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  createdAt: " }, { c: "fn", v: "timestamp" }, { c: "punct", v: "(" }, { c: "str", v: '"ct"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  updatedAt: " }, { c: "fn", v: "timestamp" }, { c: "punct", v: "(" }, { c: "str", v: '"ut"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  password: " }, { c: "fn", v: "varchar" }, { c: "punct", v: "(" }, { c: "str", v: '"pwd"' }, { c: "punct", v: ")," }],
            [{ c: "pl", v: "  lastLogin: " }, { c: "fn", v: "timestamp" }, { c: "punct", v: "(" }, { c: "str", v: '"ll"' }, { c: "punct", v: ")," }],
            [{ c: "punct", v: "})" }],
        ],
    },
    {
        key: "auth",
        transform: "rotateX(270deg) translateZ(7.5rem)",
        filename: "auth.ts",
        lines: [
            [{ c: "pl", v: "const auth = " }, { c: "fn", v: "betterAuth" }, { c: "punct", v: "({" }],
            [{ c: "pl", v: "  emailAndPassword: {" }],
            [{ c: "pl", v: "    enabled" }, { c: "punct", v: ": " }, { c: "pl", v: "true," }],
            [{ c: "pl", v: "    minPasswordLength" }, { c: "punct", v: ": " }, { c: "num", v: "8," }],
            [{ c: "pl", v: "    verifyEmail" }, { c: "punct", v: ": " }, { c: "pl", v: "false," }],
            [{ c: "pl", v: "  }," }],
            [{ c: "pl", v: "  session: {" }],
            [{ c: "pl", v: "    expiresIn" }, { c: "punct", v: ": " }, { c: "num", v: "60 * 60 * 24 * 7," }],
            [{ c: "pl", v: "  }," }],
            [{ c: "pl", v: "  socialProviders: {" }],
            [{ c: "pl", v: "    github: { id, secret }," }],
            [{ c: "pl", v: "  }," }],
            [{ c: "punct", v: "})" }],
        ],
    },
];

const HeroCodeCube = () => {
    return (
        <div className="flex flex-row w/full  ">
            <HeroText />
            <div className="ml-auto hidden md:block aspect-square h-60 w-60 [perspective:800px]">
                <div className="relative h-full w-full [transform-style:preserve-3d] [animation:spin-cube_14s_linear_infinite]">
                    {faces.map((face) => (
                        <div
                            key={face.key}
                            className="absolute inset-0"
                            style={{ transform: face.transform }}
                        >
                            <CodeFace lines={face.lines} filename={face.filename} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroCodeCube
