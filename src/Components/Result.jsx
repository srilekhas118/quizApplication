let Result=({score})=>{

    console.log(score)
    return <main className="text-center">
                <section className="text-7xl text-gray-200 animate-pulse mask-linear-to-indigo-50 pt-20 font-mono">Quiz Result</section>
                <p className="p-5 border-8 rounded-2xl w-150 h-90 pt-12 border-mist-700 mx-auto mt-15 font-serif">
                    <section className="text-5xl text-gray-300 pb-3">Final Score: {score}</section>
                    <section className="text-5xl text-gray-300 pb-10">Percentage: {score*100/5}%</section>
                    <section className="text-2xl text-gray-300 pb-2">Pass Percentage: 50%</section>
                    <section className="text-3xl text-gray-300 p-3 animate-pulse">{score>=3? "Excellent!!! 🏅": "Better Luck Next Time 👍"}</section>

                </p>
            </main>
}

export default Result;