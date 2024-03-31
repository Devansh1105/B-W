
import { Parallax } from 'react-parallax';
import T3 from "../images/12.png" ;


const ImageThree = () => (
    <Parallax className="image3" bgImage={T3}  strength={800}>
        <div className="content">
<span className="img-txt">Copyright 3</span>
        </div>
    </Parallax>
);

export default ImageThree