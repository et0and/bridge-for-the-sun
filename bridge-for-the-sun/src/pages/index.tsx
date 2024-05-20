import React, { useEffect, useState } from "react";
import Head from "next/head";

const HomePage: React.FC = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();

      let gradientClasses = "";

      if (hour >= 18 || (hour === 17 && minute >= 30)) {
        // 6PM - 9PM
        gradientClasses = "from-black via-blue-950 to-purple-950";
      } else if (hour >= 21 || (hour === 20 && minute >= 30)) {
        // 9PM - 4AM
        gradientClasses = "from-black to-indigo-950";
      } else if (hour >= 4 && hour < 6) {
        // 4AM - 6AM
        gradientClasses = "from-blue-900 via-yellow-900 to-orange-950";
      } else if (hour >= 6 && hour < 8) {
        // 6AM - 8AM
        gradientClasses = "from-sky-500 via-yellow-600 to-orange-700";
      } else if (hour >= 8 && hour < 15) {
        // 8AM - 3PM
        gradientClasses = "from-sky-300 via-yellow-200 to-sky-500";
      } else {
        // 3PM - 6PM
        gradientClasses = "from-yellow-300 via-orange-500 to-sky-900";
      }

      setGradient(`${gradientClasses} h-screen w-screen bg-gradient-to-b`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Bridge for the Sun</title>
        <meta property="og:title" content="Bridge for the Sun" key="title" />
        <meta property="twitter:title" content="Bridge for the Sun" />
        <meta property="og:type" content="website" />
        <meta
          property="description"
          content="Wherever I am, I look to the sun and think of you (for Esmé)"
        />
        <meta
          property="og:description"
          content="Wherever I am, I look to the sun and think of you (for Esmé)"
        />
        <meta
          property="twitter:description"
          content="Wherever I am, I look to the sun and think of you (for Esmé)"
        />
        <meta
          property="og:url"
          content="https://work.tom.so/bridge-for-the-sun"
        />
        <meta property="og:image" content="/bridge-for-the-sun/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/bridge-for-the-sun/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/bridge-for-the-sun/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/bridge-for-the-sun/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/bridge-for-the-sun/favicon-16x16.png"
        />
        <link rel="manifest" href="/bridge-for-the-sun/site.webmanifest" />
      </Head>
      <div className={gradient}></div>
    </>
  );
};

export default HomePage;
