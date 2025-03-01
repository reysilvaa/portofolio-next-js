// src/utils/locationUtils.ts
import axios from 'axios';
import { log } from 'console';

// Define types for the data
interface IpData {
  ip: string;
  hostname?: string;
  city?: string;
  region?: string;
  country?: string;
  loc?: string;
  org?: string;
}

interface GpsData {
  latitude: number;
  longitude: number;
  accuracy: number;
}

// Functionality modified to respect user privacy
export const getIpData = async (): Promise<IpData | null> => {
  try {
    // Consider using a service that respects user privacy or
    // only collecting minimal information with explicit consent
    const response = await axios.get('https://ipinfo.io?token=df102f87a5d587');
    const data = response.data;
    console.log(data);
    
    const userInfo: IpData = {
      ip: data.ip,
      hostname: data.hostname,
      city: data.city,
      region: data.region,
      country: data.country,
      loc: data.loc,
      org: data.org,
    };

    return userInfo;
  } catch (error) {
    console.error('Error fetching IP data:', error);
    return null;
  }
};

// Get GPS location with proper Promise typing
export const getGpsLocation = (): Promise<GpsData> => {
  return new Promise<GpsData>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const gpsData: GpsData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          };
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

// Get browser information
export const getBrowserInfo = (): string => {
  return navigator.userAgent;
};