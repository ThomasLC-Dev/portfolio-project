import { useState } from 'react';

import styles from './ImageSlider.module.css';

import leftArrow from '../../../assets/img/left-arrow-black.png';
import rightArrow from '../../../assets/img/right-arrow-black.png';

const ImageSlider = props => {

    const [current, setCurrent] = useState(0);

    const length = props.images.length;

    const slideRight = () => {
        setCurrent((current+1) % props.images.length);
    }

    const slideLeft = () => {
        const nextIndex = current - 1;
        if(nextIndex < 0){
            setCurrent(length-1);
        }
        else{
            setCurrent(nextIndex);
        }
    }

    return(
        <div style={styles['image-slider']}>
            <img className={styles['left-arrow']} src={leftArrow} alt="left arrow" onClick={slideLeft}/>
            <img className={styles.slide} src={props.images[current]} alt="current slide" />
            <img className={styles['right-arrow']} src={rightArrow} alt="right arrow" onClick={slideRight}/>
        </div>
    );
}

export default ImageSlider;