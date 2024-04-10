import React, { useState, useEffect } from "react";

import ImageOne from "../components/ImageOne";
import ImageTwo from "../components/ImageTwo";
import ImageThree from "../components/ImageThree";
import ImageFour from "../components/ImageFour";
import InstagramIcon from '@mui/icons-material/Instagram';
import MyComponent from "../components/MyComponent";



function Home(){
return(
<div>
<ImageOne />
<ImageTwo />
<ImageFour />
<ImageThree />
<MyComponent />
<p style={{ textAlign: 'center', color: 'white', fontSize: '18px', marginBottom: "20px" }}>Contact Us:</p>
<p style={{ textAlign: 'center', color: 'white', fontSize: '18px',marginBottom: '7.5px'  }}>Piyush Ranjan-9916200578</p>
<p style={{ textAlign: 'center', color: 'white', fontSize: '18px', marginBottom: '70px'  }}>Devansh Agarwal-9638920953</p>

<div class="footer">
    <a href="/Privacy">Privacy Policy</a>
    <a href="/CancellationandRefund">Cancellations & Refunds</a>
    <a href="/ShippingPolicy">Shipping Policy</a>
    <a href="/TandC">Terms & Conditions</a>
</div>

</div>
)
}


export default Home;