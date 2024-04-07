import React from 'react';

const PrintedPage: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row m-0 min-h-screen" style={{ backgroundImage: 'url(/img/background.png)', backgroundSize: 'cover 100%', backgroundRepeat: 'repeat-x' }}>
      <div className="mx-auto">
        <h2>Done Printing!</h2>
        <p>Your figurine has printed, come pick it up from FTC 7393's pit area.</p>
        {/* Render any additional content here */}
      </div>
    </div>
  );
};

export default PrintedPage;