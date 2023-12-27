import React, { useEffect } from 'react';
import BarChartData, { BarComponent } from '../components/BarChartData';
import NotificationComponent from'../components/NotificationComponent'
import "typeface-roboto";

function DashboardComponent() {
  // This useEffect will run when the component mounts
  useEffect(() => {
    // Perform any initialization logic here
    console.log('DashboardComponent is mounted');

    // Optionally, you can return a cleanup function
    return () => {
      // Perform cleanup logic here
      console.log('DashboardComponent will be unmount');
    };
  }, []); // The empty dependency array means this effect will run once when the component mounts

  return (
    <>
    
<div class="absolute bottom-5 left-2 flex items-start">
  <BarComponent />
  <div class="ml-4"></div>
  
</div>
    </>
  );
}

export default DashboardComponent;