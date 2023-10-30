import React, { FC } from 'react';
import TypeWriter from '../components/TypeWriter';

const Home: FC = () => {
    return (
        <div>
            { 'Hello! My name is Andrew Lee.' }
            <TypeWriter baseText={'I am a'} words={['Software Engineer.', 'Home cook', 'Sports fanatic.']} />
        </div>
    )
}

export default Home;