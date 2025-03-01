import axios from 'axios';

// Fungsi untuk mendapatkan informasi IP dari ipinfo.io
export const getIpData = async () => {
  try {
    const response = await axios.get('https://ipinfo.io?token=df102f87a5d587'); // Ganti dengan token dari ipinfo.io
    const data = response.data;
    
    // Log the full information to the console
    console.log("Full IP Information:", data);

    // You can also extract individual pieces of information like:
    const userInfo = {
      ip: data.ip,
      hostname: data.hostname,
      city: data.city,
      region: data.region,
      country: data.country,
      location: data.loc, // Latitude and Longitude
      org: data.org, // ISP info
    };

    console.log("User Information:", userInfo); // Log user-specific info to the console
    return userInfo;
  } catch (error) {
    console.error('Error fetching IP data:', error);
  }
};

// Fungsi untuk mendapatkan lokasi GPS
export const getGpsLocation = () => {
  return new Promise<any>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const gpsData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy, // Optionally include accuracy
          };
          console.log("GPS Location:", gpsData); // Log GPS data to the console
          resolve(gpsData);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          reject(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
    }
  });
};

// Fungsi untuk mendapatkan informasi peramban (browser)
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  console.log("Browser Information:", userAgent);
  return userAgent;
};
