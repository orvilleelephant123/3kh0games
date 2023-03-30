import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

// Bee Movie Script
import BeeMovieScript from '@site/src/lib/BeeMovieScript';
import TypingText from '@site/src/lib/TypingText';

export default function BeeMovie() {
    return (
        <BrowserOnly>{() => {
            const [text, setText] = useState('');
            useEffect(() => {
                TypingText(50, BeeMovieScript, setText);
            }, []);
            return (
                <div className={`container ${styles.beeMovie}`}>{text}</div>
            )
    }}</BrowserOnly>
    )
}