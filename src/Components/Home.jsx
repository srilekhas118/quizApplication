import { NavLink } from "react-router-dom"
import Data from "./Data"
import { GiIndiaGate } from "react-icons/gi";

let Home=()=>{
    return <main>
        <Data/>
        <h1 className="text-zinc-400 font-extrabold text-7xl text-shadow-zinc-50 italic decoration-red-300 text-center pt-30">Quiz Application</h1>
        <p><GiIndiaGate className="text-blue-100 mx-auto text-5xl mt-15"/></p>
        <h2 className="text-center text-4xl font-semibold pt-24 text-olive-300 font-serif animate-pulse">Nation's Identity Quiz</h2>
        <p className="text-center p-20 ">
            <span>
                <NavLink to={"QuizPage"} className="rounded-bl-xl rounded-tr-xl rounded-br-xs rounded-tl-xs 
                                                    bg-amber-100 text-2xl font-serif text-amber-800 text-center 
                                                    pt-3 pb-3 pl-5 pr-5 
                                                    animate-pulse
                                                    hover:bg-amber-200 hover:text-amber-900 hover:animate-none">Continue</NavLink>
            </span>
        </p>
    </main>

}

export default Home