import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info, num }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <article className="question">
        <header className="flex items-center justify-center hover:bg-yellow-400">
          <h4 onClick={() => setExpanded(!expanded)} className="question-title">
            {title}
          </h4>
          <button className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {expanded && <p>{info}</p>}
      </article>
    </div>
  );
};

export default Question;
