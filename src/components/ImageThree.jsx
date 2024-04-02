import { Parallax } from 'react-parallax';
import { useState, useEffect } from 'react';
import T3 from "../images/12.png";

const ImageThree = () => {
    const [text, setText] = useState("BEIGE COLORWAY");
    const [animationTriggered, setAnimationTriggered] = useState(false);
    // const letters = "abcdefghijklmnopqrstuvwxyz";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const hackerText = document.getElementById("img-txt1");
        const hackerTextArr = hackerText.innerText.split("");


        const revealText = () => {
            let iterations = 0;
            const hackInterval = setInterval(() => {
                hackerText.innerText = hackerText.innerText.split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return hackerTextArr[index];
                        } else {
                            return letters[Math.floor(Math.random() * 26)];
                        }
                    })
                    .join('');

                if (iterations >= hackerTextArr.length) {
                    clearInterval(hackInterval);
                }

                iterations += 1 / 4;
            }, 50);
        };

        const handleScroll = () => {
            if (!animationTriggered) {
                revealText();
                setAnimationTriggered(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("mouseover", handleScroll);

        //INTERSECTION OBSERVER

        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry =>{
                if(entry.isIntersecting==true)
                {
                    revealText();
                }
            }, {threshold:1})
        })

        observer.observe(hackerText);



        return () => {
            window.removeEventListener("mouseover", handleScroll);
        };
    }, [animationTriggered]);

    return (
        <Parallax className="image3" bgImage={T3} strength={800}>
            <div className="content">
                <div></div>
                {/* <img className="realImage3" src={T3}></img> */}
                <p className="img-txt" id="img-txt1">{text}</p>
                <span className="img-txt" id="img-txt2"><b>Only</b> 30 pieces <b>tailor-made</b></span>
                <span className="img-txt" id="img-txt3"><b>Grabs Yours While You Still Can</b></span>
                <a href="https://forms.gle/HPrjp7sjGxwa116d7"><button className="Image3button glass">Order Now</button></a>
            </div>
        </Parallax>
    );
};

export default ImageThree;
