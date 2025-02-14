import React from 'react';

const InterviewInsight = ({title,text,quote}) => {
  return (
    <div className="insight-card">
      <h2 className="insight-title">{title}</h2>

      <div className="insight-content">
        <p className="insight-text">
          {text}
        </p>
        <p className="insight-quote">
                {quote}
        </p>
      </div>
    </div>
  );
};

export default InterviewInsight;