import Head from "next/head";
import Image from "next/image";

import Resume from "../components/Resume.jsx";

export default function ResumeRanggo() {
  return (
    <div>
      <Head>
        <title>Ranggo Pato</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logoicon.ico" />
      </Head>
      <Resume />
    </div>
  );
}
