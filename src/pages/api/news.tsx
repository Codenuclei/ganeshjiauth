import React from "react";
import Image from 'next/image';
import Header from '@/app/header';
import VOT from '@/pages/vote.webp';
import '@/pages/auth/news.css';
export default function News() {
  return (
    <div>
    <Header />
    <div id="main">
        <h2>Catch up with the Latest Polling news across different sources</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/E4UHAUBtPsU?si=_ulcez5dQ1ioW9qp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uXlhyciKKQA?si=xmY_MvU61p5X0lju" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LSVoaUxz0zY?si=DyGtquzBrl7gmnXv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UrZidFExltQ?si=bG_R3Tb7w6dalXiC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mJ8F4eBoS0U?si=_DGZFOGQrrnXpfEc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-Xlsflz1bYc?si=2x5UiuRE7EQq-nN1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
</div>
  );
}