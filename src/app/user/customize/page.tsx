"use client";

import React, { useContext } from 'react';
import { useAppState } from '@/AppContext';
import Canvas from '../../components/Canvas';
import { useRouter } from 'next/navigation';
import { Button, Checkbox, Input } from '@nextui-org/react';

function Customize() {
    const { state , setValue} = useAppState();

  const {
    topText,
    bottomText,
    shoes,
    colorOfTheDay,

    stlUrl,
  } = state;
  const router = useRouter();

  // if state == 'submitted' | 'printed' | 'taken': router.push('/' + state)

  const generate = () => {
    router.push('/generating')
  };

  const editInfo = () => {
    router.push('/user');
  };

  return (
    <div className="flex flex-col sm:flex-row m-0 min-h-screen" style={{ backgroundImage: 'url(/img/background.png)', backgroundSize: 'cover 100%', backgroundRepeat: 'repeat-x' }}>
      <div className="flex flex-col mx-auto space-y-2">
        <h2>Customize Figurine</h2>
        <div>
          <label>Top Text:</label>
          <Input
            type="text"
            value={topText}
            onChange={(e) => setValue('topText', e.target.value)}
          />
        </div>
        <div>
          <label>Bottom Text (optional):</label>
          <Input
            type="text"
            value={bottomText}
            onChange={(e) => setValue('bottomText', e.target.value)}
          />
        </div>
        <div>
          <label>
            <Checkbox
              type="checkbox"
              checked={shoes}
              onChange={(e) => setValue('shoes', e.target.checked)}
            />
            Drip Shoes?
          </label>
        </div>
        <div className="flex flex-row justify-center space-x-2">
          <Button onClick={generate}>Generate Preview</Button>
        <Button onClick={editInfo}>Edit Team Info</Button>
        </div>
        
        <p>NOTE: More than 6 characters per row will be unreadable!</p>
        <p>
          Color of the Day: <span style={{ background: colorOfTheDay }}>{colorOfTheDay}</span>
        </p>
        {/* <Canvas stlUrl={stlUrl} color={colorOfTheDay} /> */}
      </div>
    </div>
  );
};

export default Customize;