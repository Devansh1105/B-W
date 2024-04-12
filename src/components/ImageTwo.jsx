
// import { Parallax } from 'react-parallax';
// import T2 from "../images/2_cropped.png";



// const ImageTwo = () => (
//     <Parallax className="image" bgImage={T2} onScroll={animateText} strength={800} style={{ height: '200vh' }} >
//         <div className="content">
//             <h1 className='image2Text' id='image2Text'>LESSGO</h1>

//         </div>
//     </Parallax>
// );



// function animateText()
// {
    
//     const textElement = document.getElementById('image2Text');
//     let scrollPosition = window.scrollY;
//     let movementAmount = scrollPosition/0.6;
//     textElement.style.transform=`translateX(-${movementAmount})`;

// }





// export default ImageTwo


// ------------------------------------------


import React from 'react';
import { Parallax } from 'react-parallax';
import T2 from "../images/2_cropped.png";
import Sticker from "../images/15.png"

const ImageTwo = () => {
    // Function to handle parallax effect
    const handleParallax = (percentage, props) => {
        // Calculate the horizontal movement amount based on the percentage scrolled
        
        const movementAmount = percentage * 100;
        // Return the style object to apply to the content
        return {
            transform: `translateX(${movementAmount*5}px) translateY(${movementAmount*5}px)`
        };
    };

    
    return (
        <Parallax
            className="image2"
            strength={800}
            renderLayer={(percentage) => (
                <div style={handleParallax(percentage)}>
                    <div className="content">
                        <h1 className="stickertext" id="stickertextid1">ULTUR</h1>
                        <h1 className="stickertext subStickerText" id="stickertextid2">COLLECTION</h1>
                        <h1 className="stickertext subStickerText" id="stickertextid3">World's <b>Finest</b> French Cotton</h1>
                    </div>
                
                </div>
            )}
        >

<img src={Sticker} alt="Sticker"  className="sticker"/>
<div className="stickerpara playfair-display">
 <ul>
 <li><p>Embossed <b>3D</b> texture</p></li>
     <li><p><b>ONLY</b> 35 pieces <b>tailor-made</b></p></li>
     <li><p><b>260 </b>GSM</p></li></ul>
 </div>

 <a href="https://rzp.io/i/bhangandwhite"><button className="Image2button glass">Order Now</button></a>
</Parallax>

    );
};

export default ImageTwo;


// ----------------------------------------------------------------
