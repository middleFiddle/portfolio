import React from "react"

const TitleCard = () => {
    return (
        <div
            id="title"
            className="bg-gradient-to-l font-sans mb-2 rounded-md shadow-slate-700 p-1 from-slate-900  bg-slate-800 shadow-lg "
        >
            <h1 className="text-6xl text-emerald-300 font-thin tracking-widest flex-wrap text-opacity-90 p-2">
                Ryan Gregory
            </h1>
            <h1 className="text-4xl text-rose-300 font-mono font-thin indent-1 tracking-widest pb-2 pl-2">
                Web Developer
            </h1>
        </div>
    )
}

export default TitleCard
