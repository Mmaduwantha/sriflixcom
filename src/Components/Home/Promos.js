import React from 'react';
import { FiUser } from 'react-icons/fi';

function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg-gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Movies
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            Download movies from our website and watch them offline. We have a wide range of movies to choose from.
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-col bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4K
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser /> 2K
            </div>
          </div>
        </div>
        <div>
          <img src="/images/mobile.png" alt="Mobile app" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Promos;
