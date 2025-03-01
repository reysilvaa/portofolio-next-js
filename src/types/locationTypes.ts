// src/types/locationTypes.ts
export interface IpData {
    ip: string;
    hostname?: string;
    city?: string;
    region?: string;
    country?: string;
    loc?: string;
    org?: string;
  }
  
  export interface GpsData {
    latitude: number;
    longitude: number;
    accuracy: number;
  }