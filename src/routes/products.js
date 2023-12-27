import React from 'react';
import CardComponent from '../components/CardComponent';

function ProductComponent() {
  return (
    <>
    
      {/* Centered section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 mt-16">
        <div className="grid grid-cols-1 gap-4">
          <CardComponent header ="Bonsai" website="Amazon" price="39.99$"source="https://m.media-amazon.com/images/I/81xHUB9NlRL._AC_SX569_.jpg"/>
          <CardComponent className="sm:mt-[-10px]" header ="Bamboo Brush & Stand for Mindfulness Meditation" website="Amazon" price="29.99$" source="https://m.media-amazon.com/images/I/410teGDSUjL._AC_SX679_.jpg" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <CardComponent header ="Foot Spa/Bath Massager" website="Amazon" price="70.99$" source="https://m.media-amazon.com/images/I/713gGNPontL._AC_SX679_.jpg"/>
          <CardComponent />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <CardComponent />
        
        </div>
        <div className="grid grid-cols-1 gap-4">
          <CardComponent />
          
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
