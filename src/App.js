import { Route, Routes } from "react-router-dom";
import Missing from "./components/Missing";
import FoodieHome from "./pages/FoodieHome";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Foodie - App</title>
      </Helmet>
   <div>
      <Routes>
        <Route path="/" element={<FoodieHome/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>

   </div>
   </HelmetProvider>
  );
}

export default App;
