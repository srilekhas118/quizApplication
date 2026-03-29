import { useState } from "react";
import Result from "./Result";

let QuizPage=()=>{

    let data= window.localStorage.getItem("questionData");
    console .log(data);

    let questionData= JSON.parse(data)!=null? JSON.parse(data): [];
    console.log(questionData);

    const [currentQuestion, setCurrentQuestion]= useState(0);
    const [score, setScore]= useState(0);
    const [selectedOption, setSelectedOption]= useState(null);
    
    function userAnswer(option){
        setSelectedOption(option);
    }

    function nextClick(){
        if(questionData[currentQuestion].correctAnswer==selectedOption) setScore(score+1);
        setCurrentQuestion(currentQuestion+1);
        setSelectedOption(null);
        
        console.log(score, currentQuestion)

    }

    if(currentQuestion>= questionData.length){
        return <Result score= {score}/>
    }

    return <main>
        <div className="text-center">
            <h1 className="text-mist-300 font-semibold text-5xl font-serif text-center pt-10">India's Nation Identity Quiz</h1>
            <header className="inline-block text-blue-300 font-semibold text-3xl m-15 h-130 w-200 box-border border-4 border-gray-400 rounded-2xl">
                <p className="text-blue-200 text-4xl p-10">{questionData[currentQuestion].question}</p>
                <h3>
                    {questionData[currentQuestion].options.map((option, ind)=>(
                        
                        <div key={ind} className="pb-2 ml-80 text-left">
                            <label className="hover:cursor-pointer hover:text-blue-200">
                                <input type="radio"  name="questionOption" value={option} 
                                        className="w-4 h-4 mr-3 accent-zinc-700 hover:cursor-pointer"
                                        onChange={()=>userAnswer(option)} 
                                        checked={selectedOption==option}/> {option}
                            </label>
                        </div>                        
                    ))}
                </h3>

                <button className="bg-blue-400 h-13 w-30 mt-15 text-3xl text-blue-950 font-semibold rounded-2xl hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-30"
                        onClick={()=>nextClick()}
                        disabled={selectedOption==null}>
                    Next
                </button>

            </header>
        </div>

    </main>
}

export default QuizPage