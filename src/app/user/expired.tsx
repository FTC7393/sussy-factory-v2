import React from 'react';

const ExpiredPage: React.FC = () => {
  return (
    <div className="p-4">
      <div className="font-amogus font-bold text-2xl">
        Expired :(
      </div>
      <div className="flex flex-col w-full">
        <img alt="among us ghost" src="/img/yellow-ghost.png" className="w-20 block m-auto my-4" />
      </div>
      <p className="font-medium my-2">Unfortunately your QR code has expired.</p>
      <p className="font-medium my-2">You can still customize a figurine, download the STL, and print it yourself. (Or just admire the 3D preview :)</p>
    </div>

  );
};

export default ExpiredPage;