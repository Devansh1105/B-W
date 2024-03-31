

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";










export default function App(){
return (
    
    <div>
    <BrowserRouter>
       <Routes>
   <Route index element={<Home />} />
   <Route path="*" element={<h1>NO SUCH PAGE EXISTS</h1>}/>
       
       </Routes>
    </BrowserRouter>

 


    </div>

)
}