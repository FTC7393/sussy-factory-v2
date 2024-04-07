"use client";

import React, { useContext } from 'react';
import { useAppState } from '../AppContext';
import { useRouter } from 'next/navigation';
import {Button, Input} from "@nextui-org/react";

function InfoPage() {
  // const { team, phone, taken, submitted, setValue } = useContext(AppContext);
  const { state , setValue} = useAppState();
  const {team, currentState, phone } = state;
  
  const router = useRouter();
  
  const next = () => {

      console.log(team)
      if (team === '') {
        alert('team/name required')
      } else {
        fetch(`/team?team=${encodeURIComponent(team)}&phone=${encodeURIComponent(phone)}`) //
        .then(res => res.text())
        .then(res => {
          if (res === 'invalid') {
            alert('invalid phone number, please try again');
            res = '';
          } else {
            setValue('phone', res);//sanatized phone number is returned
            if (currentState == 'taken') {
                router.push('/user/taken');
            } else if (currentState == 'submitted') { //when you're gonna add a phone number
                router.push('/user/waiting');
            } else {
                router.push('/user/customize');
            }
          }
        });
      }
  };

  return (
    <div className="flex flex-col sm:flex-row m-0 min-h-screen" style={{ backgroundImage: 'url(/img/background.png)', backgroundSize: 'cover 100%', backgroundRepeat: 'repeat-x' }}>
      <div className="mx-auto">
        <h2>Enter Your Info</h2>
        <div>
          <label>Team/Name (e.g. FTC 7393 or Joe Schmoe):</label>
          <Input
            type="text"
            value={team}
            onChange={(e) => setValue('team', e.target.value)}
          />
        </div>
        <div>
          <label>(optional) Phone Number to be notified when the print is done (SMS charges may apply):</label>
          <Input type="text"
            value={phone}
            onChange={(e) => {setValue('phone', e.target.value)}}
          />
            
        </div>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
};

export default InfoPage;