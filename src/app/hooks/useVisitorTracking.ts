import { useEffect } from 'react';
import { getIpData, getGpsLocation, getBrowserInfo } from '../../utils/locationUtils';
import { sendToTelegram } from '../../utils/telegramUtils';

export const useVisitorTracking = () => {
  useEffect(() => {
    getIpData().then((data) => {
      if (data) {
        getGpsLocation().then((gpsData) => {
          const browser = getBrowserInfo();
          
          const message = `
*New Portfolio Visitor*

*IP Information*:
- *IP*: ${data.ip || 'Not available'}
- *Hostname*: ${data.hostname || 'Not available'}
- *City*: ${data.city || 'Not available'}
- *Region*: ${data.region || 'Not available'}
- *Country*: ${data.country || 'Not available'}
- *Location*: ${data.loc || 'Not available'}
- *ISP*: ${data.org || 'Not available'}

*GPS Location*:
- *Latitude*: ${gpsData.latitude || 'Not available'}
- *Longitude*: ${gpsData.longitude || 'Not available'}
- *Accuracy*: ${gpsData.accuracy || 'Not available'}
- *Google Maps Link*: [View Location](https://www.google.com/maps?q=${gpsData.latitude},${gpsData.longitude})

*Browser Information*:
\`\`\`
${browser}
\`\`\`

*Page*: ${window.location.href}
*Time*: ${new Date().toLocaleString()}
          `;
          
          sendToTelegram(message);
        }).catch((error) => {
          console.error('Error getting GPS location:', error);
          
          const browser = getBrowserInfo();
          
          const fallbackMessage = `
*New Portfolio Visitor* (GPS unavailable)

*IP Information*:
- *IP*: ${data.ip || 'Not available'}
- *Hostname*: ${data.hostname || 'Not available'}
- *City*: ${data.city || 'Not available'}
- *Region*: ${data.region || 'Not available'}
- *Country*: ${data.country || 'Not available'}
- *Location*: ${data.loc || 'Not available'}
- *ISP*: ${data.org || 'Not available'}

*Browser Information*:
\`\`\`
${browser}
\`\`\`

*Page*: ${window.location.href}
*Time*: ${new Date().toLocaleString()}
          `;
          
          sendToTelegram(fallbackMessage);
        });
      }
    }).catch(error => {
      console.error('Error fetching IP data:', error);
    });
  }, []);
}; 