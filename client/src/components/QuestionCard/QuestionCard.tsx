import { client } from '../../client';
import { useState, useEffect } from 'react'

interface Question {
    question: string,
    a: string,
    b: string,
    c: string,
    d: string,
    right_answers: [],
    explanation: string,
    isValidated: boolean
}

// interface SelectedAnswers {
//     answers: [string]
// }

interface QuestionResult {
    result: boolean,
    counter: number
}

export function QuestionCard() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]); //Store user selected answers
    const [rightQuestions, setRightQuestions] = useState<QuestionResult[]>([]); // Retrieves right answers from database

    //onChange={handleCheckbox}

    // function handleCheckbox(e: { target: { checked: boolean; value: any; name: any; }; }) {
    //     const checked = e.target.checked;
    //     const checkedValue = e.target.value;
    //     const checkedName = e.target.name;

    //     if (checked) {
    //         setSelectedAnswers(...selectedAnswers, checkedValue)
    //     }
        
    //     // to get the checked value
    //     // to get the checked name        
    //     console.log(checked)
    //     console.log(checkedValue)
    //     console.log(checkedName)
    // }

    function handleQuestionValidation(questionIndex: number) {                    
        //loop again with map and save question right answers                  
        const validatedQuestions = questions.map((question, index) => 
        questionIndex === index 
        ? {            
          ...question,  
          isValidated: !question.isValidated
        } 
        : question
        )        
        setQuestions(validatedQuestions)        
    }

    useEffect(() => {
        const query = '*[_type == "question" && !(_id in path("drafts.**"))]' //Last part of the query removes extra drafts

        client.fetch<Question[]>(query)
            .then((data) => {
                setQuestions(data) 
            })                    
    }, [])

    // function handleCheckbox(){        
    //     // Gets all checkboxes 
    //     var markedCheckbox:SelectedAnswers = document.getElementsByName('question');     
    //     setSelectedAnswers(markedCheckbox);
    //     console.log(selectedAnswers)    
    // }
    
    
    return (
        <>
            {questions.map((question, index) => (
                <figure key={index} className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-3">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <h2>{index + 1} - {question.question}</h2>
                        <hr />
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleQuestionValidation(index)
                        }
                        }>
                            <fieldset>
                                <label><input type="checkbox" name="question" value="a" /> A -  {question.a}</label><br />
                                <label><input type="checkbox" name="question" value="b" /> B - {question.b}</label><br />
                                <label><input type="checkbox" name="question" value="c" /> C - {question.c}</label><br />
                                <label><input type="checkbox" name="question" value="d" /> D - {question.d}</label><br />
                                <hr className="mt-6" />
                                <button className="mt-6" type='submit'>Show Answer</button>
                                {question.isValidated ?
                                    <div>
                                    <h1 className='mt-4'>{question.right_answers.toString().toLocaleUpperCase()}</h1>
                                    <p  className='mt-4'><strong> Explanation:</strong> {question.explanation}</p>                                     
                                    </div>
                                    :
                                    ''
                                }                                
                            </fieldset>
                        </form>
                    </div>
                </figure>
            ))}

        </>
    )
}