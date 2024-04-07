import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useRouter } from 'next/router';
export function Waiting() {
    
  const {
    phone
  } = useContext(AppContext);
  
    const router = useRouter();

    const editInfo = () => {
        router.push('/user');
    }

    return (
        <div>
            <div className="p-4">
                <div className="font-amogus font-bold text-2xl">
                    Waiting for Figurine to be Printed
                </div>
                <p className="font-medium my-2">Submitted successfully.</p>
                <p className="font-medium my-2">Keep this page open, an alert will pop up when your figurine is ready to pick up.</p>
                {phone? 
                    <p className="font-medium my-2">You will also recieve a text message at the number you provided earlier.</p>
                    :
                    <p className="font-bold my-2">You can also provide a phone number to get a text message when your print is done.</p>
                }
                
                <button className="font-bold my-2 transition py-2 bg-lmao-yellow dark:text-gray-800 shadow-2xl rounded-md text-center w-full" 
                    onClick={editInfo}>edit phone number</button>
                <img className="w-full p-10 max-w-xl" alt="" src="/img/radio.png" />
            </div>
        </div>
        );
}
  




