//Next.js configuration - renders component on the client side/browser, apply to components with interactivity
"use client";
import React from 'react';
import { TypeAnimation } from "react-type-animation";
import styles from './TypingAnimation.module.css';

//Typing Animation Component
export default function TypingAnimation(){
    return(
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Dylan Hedges: Web Development',
                    1000,
                    'Dylan Hedges: UI Development',
                    1000,
                    'Dylan Hedges: Front-end Development',
                    1000,
                    'Dylan Hedges: Email Development',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                className={styles.typingAnimation}
                repeat={Infinity}
            />
        </div>
    )
}