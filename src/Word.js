import React from 'react';
// stateless component
// functional component
export const Word = (props) => (
    <div>
        <h3 style={{ color: props.wordInfo.isMemorized ? 'green' : 'red' }}>
            {props.wordInfo.en}
        </h3>
        <p>{props.wordInfo.vn}</p>
    </div>
);
// { Word: Word } 
// export default Word;
