import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Canvas from '../components/Canvas';
import { useRouter } from 'next/router';

const CustomizePage: React.FC = () => {
  const {
    topText,
    bottomText,
    shoes,
    colorOfTheDayHex,
    taken,
    submitted,
    stlUrl,
    setValue
  } = useContext(AppContext);
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
      <div className="mx-auto">
        <h2>Customize Figurine</h2>
        <div>
          <label>Top Text:</label>
          <input
            type="text"
            value={topText}
            onChange={(e) => setValue('topText', e.target.value)}
          />
        </div>
        <div>
          <label>Bottom Text (optional):</label>
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setValue('bottomText', e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={shoes}
              onChange={(e) => setValue('shoes', e.target.checked)}
            />
            Drip Shoes?
          </label>
        </div>
        <button onClick={generate}>Generate Preview</button>
        <button onClick={editInfo}>Edit Team Info</button>
        <p>NOTE: More than 6 characters per row will be unreadable!</p>
        <p>
          Color of the Day: <span style={{ background: colorOfTheDayHex }}>{colorOfTheDayHex}</span>
        </p>
        <Canvas stlUrl={stlUrl} color={colorOfTheDayHex} />
      </div>
    </div>
  );
};

export default CustomizePage;