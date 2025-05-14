
import React from "react";
import SectionDivider from "../components/SectionDivider";


function FormPage() {
 return (
   <>
     <style>
       {`
         .container {
           display: flex;
           justify-content: center;
           align-items: center;
           height: 100vh;
           background: linear-gradient(135deg, #fcb69f, #f8d0c5, #f9c4d2); /* Warm orange-pink gradient */
           padding: 0 20px; /* Adjusted padding to avoid overflow */
           box-sizing: border-box; /* Ensure padding doesn't add to width */
           width: 100%; /* Ensure full width */
           overflow-x: hidden; /* Prevent horizontal overflow */
         }


         .card {
           width: 100%;
           max-width: 1000px; /* Increased maximum width for a larger form */
           background-color: #ffffff;
           border-radius: 12px;
           box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
           overflow: hidden;
           padding: 10px;
           box-sizing: border-box;
         }


         .iframe {
           border: none;
           border-radius: 8px;
           width: 100%; /* Make iframe responsive */
           height: 0;
           padding-bottom: 75%; /* Aspect ratio adjusted to make the form taller */
           position: relative;
         }
        
         .iframe > iframe {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
         }
       `}
     </style>
     <div className="container">
       <div className="card">
         <div className="iframe">
           <iframe
             src="https://docs.google.com/forms/d/e/1FAIpQLScCsg-_MDOfzzWiVV2y3ScUDZV6eHw8k4KUawHNseFa-8g-8A/viewform?embedded=true"
             frameBorder="0"
             marginHeight="0"
             marginWidth="0"
             title="Form"
           >
             Loading…
           </iframe>
         </div>
       </div>
     </div>
   </>
 );
}


export default FormPage;
