import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Box, Flex, Heading } from '../../coreComponents'
import { t } from 'i18next'
import styles from './About.module.css';

function About() {
  const text = useMemo(() => {
    return t`about`.split(' ').map((el) => {
      if (el.toLowerCase().trim() === 'frontend') {
        return `${el} developer, `;
      }
      if (el.toLocaleLowerCase().trim() === 'developer,') {
        return '';
      }
  
      return el;
    });
  }, []) 

  const refHeading = useRef<HTMLDivElement | null>(null);
  
  const handleMouseOver = useCallback((e) => {
    if (e.target.localName === 'span') {
      const word = e.target.innerText.toLowerCase().trim();
      if (word === 'frontend developer,') {(e.target as HTMLElement)
        e.target.style.color = '#3182ce'
      } else {
        e.target.style.color = '#000';
      }
    }
  }, []);

  const handleMouseOut = useCallback((e) => {
    if (e.target.localName === 'span') {
      setTimeout(() => {
        const word = e.target.innerText.toLowerCase().trim();
        if (word === 'frontend developer,') {
          e.target.style.color = '#000'
        } else {
          e.target.style.color = '#8f8f8f';
        }
      }, 300)
    }
  }, []);

  const delay = useCallback((ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }, []);

  const initAnimation = useCallback(async() => {
    const maxValue = text.length - 1;
    
    if (refHeading.current) {
      const words: HTMLCollectionOf<HTMLElement> = refHeading.current.children as HTMLCollectionOf<HTMLElement>;
     
      for (let i = 0; i <= maxValue; i++) {
        const randomIndex = Math.floor(Math.random() * maxValue);
        words[randomIndex].style.color = '#000'
        await delay(100);
      }

      for (let i = 0; i <= maxValue; i++) {
        const word = words[i].innerText.toLowerCase().trim();
        if (word === 'frontend developer,') {
           words[i].style.color = '#000'
        } else {
          words[i].style.color = '#8f8f8f'
        }
        await delay(25);
      }
    }
  }, [delay, text.length])

  useEffect(() => {
    initAnimation();
  })

  return (
    <Box>
      <Flex h='100%' align='center' className={styles.about}>
        <Heading size='2xl' color={'#8f8f8f'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} ref={refHeading}>
          {text.map((el, index) => <span key={`${el}${index}`}>{el} </span>)}
        </Heading>
      </Flex>
    </Box>
  )
}

export default React.memo(About);
