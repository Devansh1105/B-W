

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import CancellationandRefund from "./Pages/CancellationandRefund";
import TandC from "./Pages/TandC";
import Privacy from "./Pages/Privacy";
import ShippingPolicy from "./Pages/ShippingPolicy";





export default function App(){
return (
    
    <div>
    <BrowserRouter>
       <Routes>
   <Route index element={<Home />} />
   <Route path="/privacy" element={<Privacy />} />
   <Route path="/tandc" element={<TandC />} />
   <Route path="/shippingpolicy" element={<ShippingPolicy />} />
   <Route path="/cancellationandrefund" element={<CancellationandRefund />} />
   
   <Route path="*" element={<h1>NO SUCH PAGE EXISTS</h1>}/>
       
       </Routes>
    </BrowserRouter>

 


    </div>

)
}