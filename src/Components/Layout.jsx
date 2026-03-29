import {Outlet} from "react-router-dom"

let Layout=()=>{

    return <main>
        <section className="bg-zinc-800 min-h-screen w-screen m-0 fixed">
            <Outlet/>
        </section>
    </main>
}

export default Layout;