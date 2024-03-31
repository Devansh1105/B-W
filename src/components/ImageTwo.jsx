
import { Parallax } from 'react-parallax';
import T2 from "../images/2_cropped.png";

const ImageTwo = () => (
    <Parallax className="image" bgImage={T2}  strength={800} style={{ height: '200vh' }} >
        <div className="content">
<span className="img-txt" >Copyright 2</span>
        </div>
    </Parallax>
);

export default ImageTwo