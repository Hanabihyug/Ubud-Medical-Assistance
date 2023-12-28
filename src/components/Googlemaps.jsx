// components/Googlemaps.jsx
import React from 'react';

function Googlemaps() {
  return (
    <div className="h-screen">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.805891051853!2d115.26261455869141!3d-8.508804099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d693e107e21%3A0x6d2c808dc4936e54!2sUbud%20Medical%20Assistance!5e0!3m2!1sid!2sid!4v1703733317069!5m2!1sid!2sid"
        width="100%"
        height="100%"
        loading="lazy"
        className="z-[-1]"
      ></iframe>
    </div>
  );
}

export default Googlemaps;
