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
                    'Web Development',
                    1000,
                    'UI Development',
                    1000,
                    'Front-end Development',
                    1000,
                    'Email Development',
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