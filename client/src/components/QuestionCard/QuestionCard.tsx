import { client } from '../../client';
import { useState, useEffect } from 'react'

interface Question {
    question : string,
    a : string,
    b : string,
    c : string,
    d : string,
    right_answers: [],
    explanation: string

}

function handleQuestionValidation(right_answers:string[]) {
    
}

function handleShowAnswer(){
    
}

export function QuestionCard() {

    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(()=> {
        const query = '*[_type == "question"]'        

        client.fetch<Question[]>(query)
        .then((data) => {
            setQuestions(data)
        })
    }, [])


    console.log(questions)
    return (
        <>  
        {questions.map((question, index) => (
 <figure key={index} className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-3">
 <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
 <h2>{index + 1} - {question.question}</h2>
     <hr />
     <form action="/tutorial/action.html">
         <fieldset>             
             <label><input type="checkbox" name="html" value="html" /> A -  {question.a}</label><br />
             <label><input type="checkbox" name="css" value="css" /> B - {question.b}</label><br />
             <label><input type="checkbox" name="javascript" value="javascript" /> C - {question.c}</label><br />
             <label><input type="checkbox" name="csharp" value="csharp" /> D - {question.d}</label><br />             
             <hr className="mt-6" />                                 
             <button className="mt-6" onClick={handleShowAnswer()}>Show Answer</button>             
         </fieldset>
     </form>
 </div>
</figure>
        ))}      
           
        </>
    )
}