let Data=()=>{
    async function storeData(){
        let questionData= [
            {
                question: "What is the national fruit of India",
                options: ["Mango", "Papaya", "Apple", "JackFruit"],
                correctAnswer: "Mango"
            },
            {
                question: "What is the national animal of India",
                options: ["Lion", "Elephant", "Tiger", "Cheetah"],
                correctAnswer: "Tiger"
            },
            {
                question: "What is the national bird of India",
                options: ["Dove", "Pigeon", "Peacock", "Sparrow"],
                correctAnswer: "Peacock"
            },
            {
                question: "What is the national tree of India",
                options: ["Neen Tree", "Banyan Tree", "Palm Tree", "Oak Tree"],
                correctAnswer: "Banyan Tree"
            },
            {
                question: "National river of India is",
                options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
                correctAnswer: "Ganga"
            }
        ]

        let jsonData= JSON.stringify(questionData);
        console.log(jsonData);

        window.localStorage.setItem("questionData", jsonData);

        // window.localStorage.setItem("questionData", questionData);
        // console.log(questionData)
    }

    storeData();
}

export default Data;