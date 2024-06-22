import React, { useRef, useState } from 'react';
import './Question.css';
import { data } from "../assets/data";
import { Navigate, redirect, useNavigate } from 'react-router-dom';

function Question() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);
  const navigate=useNavigate();

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const optionArr = [option1, option2, option3, option4];

  const Answers = (e, ans) => {
    if (!done) {
      if (data[index].answer === ans) {
        e.target.classList.add("correct");
        console.log(e.target.classList);
        setMarks(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        console.log(e.target.classList);
        optionArr[data[index].answer - 1].current.classList.add("correct");
      }
      setDone(true);

<<<<<<< HEAD
     
=======
      if (index === data.length - 1) {
        setTimeout(() => {
          setResult(true);
        }, 1000);
      }
>>>>>>> 2315543aae1faef4c2ec1caa64731b001c3850c3
    }
  };
  const Checkscore=()=>{
    setResult(true);
  }

  const next = () => {
    if (done && index < data.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
      setDone(false);
      optionArr.forEach(option => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
<<<<<<< HEAD
    } else if (!done) {
=======
    }else if(!done){
>>>>>>> 2315543aae1faef4c2ec1caa64731b001c3850c3
      alert("please select an answer before proceeding");
    }
  };

  const reset = () => {
    setIndex(0);
    setMarks(0);
    setDone(false);
    setResult(false);
    navigate("/");
    optionArr.forEach(option => {
      option.current.classList.remove("wrong");
      option.current.classList.remove("correct");
      
    });
    
  };

  const progress = ((index + 1) / data.length) * 100;
  const trophy=(marks>3)?"https://img.freepik.com/free-vector/employees-celebrating-business-success-with-huge-trophy_1150-37475.jpg?t=st=1718615257~exp=1718618857~hmac=1f6f603229311254aedde2f8ee5e3373ed02ddc95e58023df6c0c0d65d665676&w=740":"https://img.freepik.com/free-vector/hand-drawn-hurt-emoji-illustration_23-2151264793.jpg?t=st=1718617071~exp=1718620671~hmac=412850b42610eec0e8e545d45554eb902246ade28d76f6ecb3623c7213d84911&w=740";
  const end=(marks>3)?`Congratulations on your outstanding achievement! Scoring ${marks} is no small feat and a testament to your hard work and dedication. Keep up the excellent work and continue to strive for greatness. Well done!`:`You scored ${marks}. Don't be discouraged,use this as an opportunity to study more and improve. Keep pushing, and you'll get there!`;

  return (
    <div className='container'>
    {!result &&(<div className='progress-bar'>
        <div className='progress-line' style={{ width: `${progress}%` }}></div>
      </div>)
     }
      {result ? (
      
        <>
          <img className='quiz-end' src={trophy} alt='pic'></img>
          <h2 className='end-text' >Your score is {marks} out of {data.length}</h2>
          <p className='end-text1'>{end}</p>
          <button id='reset' onClick={reset}>Reset</button>
         
        </>
      ) : (
        <>
        <div><img className='quiz-pic' src={data[index].pic} alt='pic'/></div>
          <h3>{index + 1}. {data[index].question}</h3>
          <div className='question-options'>
            <div className="option1" ref={option1} onClick={(e) => { Answers(e, 1) }}>{data[index].option1}</div>
            <div className="option2"  ref={option2} onClick={(e) => { Answers(e, 2) }}>{data[index].option2}</div>
          
            <div className="option3" ref={option3} onClick={(e) => { Answers(e, 3) }}>{data[index].option3}</div>
            <div className="option4"  ref={option4} onClick={(e) => { Answers(e, 4) }}>{data[index].option4}</div>
          </div>
          
          {index < data.length - 1 ? (<button className='next' onClick={next}>Next</button>):( <button className='next' onClick={Checkscore}>Check Score</button>)}
          {/* <div className="numbering">{index + 1} of {data.length}</div> */}
        </>
      )}
    </div>
  );
}

<<<<<<< HEAD
export default Question
=======
export default Question;
>>>>>>> 2315543aae1faef4c2ec1caa64731b001c3850c3
