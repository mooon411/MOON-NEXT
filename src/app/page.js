"use client";

import React, { useEffect } from "react";

import smooth from "@/utils/smooth";
import link from "@/utils/link";
import { logAnimation } from "@/utils/log";
import { portAnimation } from "@/utils/port";
import { reveal } from "@/utils/animation";
import ScrollHeader from "@/utils/ScrollHeader";

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Port from "@/components/Port";
import Log from "@/components/Log";
import Info from "@/components/Info";
// import Comment from "@/components/Comment";
import Contact from "@/components/Contact";

export default function Home() {
  ScrollHeader();
  useEffect(() => {
    smooth();
    portAnimation();
    link();
    logAnimation();
    reveal();
  }, []);

  return (
    <>
      <Header />
      <main id="main" role="main">
        <Intro />
        <About />
        <Port />
        <Log />
        <Info />
        {/* <Comment /> */}
        <Contact />
      </main>
    </>
  );
}
