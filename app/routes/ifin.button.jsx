import React, {useState} from "react";

function update(){
    alert('update sucessfully');
}


export default function Button() {
    return (
        <>
        <div>
            <button onClick={update}
             type="submit"
             className="  rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400 "
            >
                Button
            </button>
        </div>
         
     <div>
         <button disabled onClick={update}
          className=" rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400 "
         >
             Button
         </button>
     </div>
     
     </>
    )
}



