// import React, { useState, useEffect, Card } from 'react';
// import puppeteer from 'puppeteer';

// const ThumbnailCards = ({ url }) => {
//   const [screenshotUrl, setScreenshotUrl] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScreenshot = async () => {
//       try {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.setViewport({ width: 1200, height: 800 });
//         await page.goto(url);
//         await page.waitForTimeout(2000); 
//         const screenshotBuffer = await page.screenshot({ fullPage: true });
//         const imageUrl = URL.createObjectURL(new Blob([screenshotBuffer]));
//         setScreenshotUrl(imageUrl);
//         await browser.close();
//         setLoading(false);
//       } catch (error) {
//         console.error('Error capturing screenshot:', error);
//         setLoading(false);
//       }
//     };

//     fetchScreenshot();
//   }, [url]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Card>
//       {screenshotUrl && (
//         <img src={screenshotUrl} alt="Website Screenshot" style={{ width: '100%', height: 'auto' }} />
//       )}
//     </Card>
//   );
// };

// export default ThumbnailCards;
