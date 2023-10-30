import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
    baseText?: string;
    words: string [];
}

const TypeWriter = ({ baseText, words }: TypeWriterProps) => {
    const cursor: string = '|';
    const [currText, setCurrText] = useState(words[0]);
    const [currIndex, setCurrIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [text, setText] = useState(cursor);

    function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
          if (isTyping && text !== currText) {
            setText(currText.slice(0, text.length + 1));
          } else if (text === currText && isTyping) {
            sleep(2000).then(() => {
              setIsTyping(false);
            });
          } else if (
            (text === currText && !isTyping) ||
            !isTyping
          ) {
            setText(currText.slice(0, text.length - 1));
            if (text.length <= 1) {
                setCurrIndex((currIndex + 1) % words.length);
                setCurrText(words[currIndex]);
                setIsTyping(true);
            }
          }
        }, 100);
    
        return () => clearTimeout(timeout);
      }, [text, isTyping]);

    return (
        <div>
            {baseText + " " + text}
        </div>
    );
}

export default TypeWriter;