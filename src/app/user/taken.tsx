import React from 'react';

const TakenPage: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row m-0 min-h-screen" style={{ backgroundImage: 'url(/img/background.png)', backgroundSize: 'cover 100%', backgroundRepeat: 'repeat-x' }}>
      <div className="mx-auto">
        <h2>Thanks :]</h2>
        <p>Thank you for picking up your print from our pit area!</p>
        <p>
          You can't make any more print requests, but you can still customize a figurine, download the STL, and print it
          yourself. (Or just admire the 3D preview :)
        </p>
        {/* Render any additional content here */}
      </div>
    </div>
  );
};

export default TakenPage;