import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import Grid from "../../components/portfolio-grid/Grid";
import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "@tabler/icons-react";
import Head from "next/head";
// import billustration1 from "../../public/assets/portfolio/bookillustrations/IMG_5315.jpg";
// import billustration2 from "../../public/assets/portfolio/bookillustrations/IMG_5350.jpg";
// import billustration3 from "../../public/assets/portfolio/bookillustrations/IMG_9741.jpg";
// import billustration4 from "../../public/assets/portfolio/bookillustrations/IMG_5314.jpg";
// import billustration5 from "../../public/assets/portfolio/bookillustrations/IMG_5210.jpg";
// import billustration6 from "../../public/assets/portfolio/bookillustrations/IMG_5214.jpg";
// import billustration7 from "../../public/assets/portfolio/bookillustrations/IMG_5316.jpg";
// import billustration8 from "../../public/assets/portfolio/bookillustrations/IMG_5207.jpg";
// import billustration9 from "../../public/assets/portfolio/bookillustrations/IMG_5358.jpg";
// import billustration10 from "../../public/assets/portfolio/bookillustrations/IMG_9740.jpg";
// import billustration11 from "../../public/assets/portfolio/bookillustrations/IMG_5208.jpg";
// import billustration12 from "../../public/assets/portfolio/bookillustrations/IMG_5317.jpg";
// import billustration13 from "../../public/assets/portfolio/bookillustrations/IMG_5375.jpg";
// import billustration14 from "../../public/assets/portfolio/bookillustrations/IMG_9734.jpg";
// import billustration15 from "../../public/assets/portfolio/bookillustrations/IMG_9735.jpg";
// import billustration16 from "../../public/assets/portfolio/bookillustrations/IMG_9736.jpg";
// import billustration17 from "../../public/assets/portfolio/bookillustrations/IMG_9737.jpg";
// import billustration18 from "../../public/assets/portfolio/bookillustrations/IMG_5306.jpg";
// import character1 from "../../public/assets/portfolio/characterdesign/IMG_5806.jpg";
// import character2 from "../../public/assets/portfolio/characterdesign/IMG_5938.jpg";
// import character3 from "../../public/assets/portfolio/characterdesign/IMG_5803.jpg";
// import character4 from "../../public/assets/portfolio/characterdesign/IMG_5939.jpg";
// import character5 from "../../public/assets/portfolio/characterdesign/IMG_5597.jpg";
// import character6 from "../../public/assets/portfolio/characterdesign/IMG_5598.jpg";
// import character7 from "../../public/assets/portfolio/characterdesign/IMG_5591.jpg";
// import character8 from "../../public/assets/portfolio/characterdesign/IMG_5806.jpg";
// import character9 from "../../public/assets/portfolio/characterdesign/IMG_0763.jpg";
// import character10 from "../../public/assets/portfolio/characterdesign/IMG_6652.jpg";
// import character11 from "../../public/assets/portfolio/characterdesign/IMG_6665.jpg";
// import character12 from "../../public/assets/portfolio/characterdesign/IMG_8298.jpg";
// import character13 from "../../public/assets/portfolio/characterdesign/IMG_6082.jpg";
// import character14 from "../../public/assets/portfolio/characterdesign/IMG_5804.jpg";
// import character15 from "../../public/assets/portfolio/characterdesign/IMG_5805.jpg";
// import character16 from "../../public/assets/portfolio/characterdesign/IMG_5810.png";
// import character17 from "../../public/assets/portfolio/characterdesign/IMG_5811.png";
// import character18 from "../../public/assets/portfolio/characterdesign/IMG_0763.jpg";
// import children1 from "../../public/assets/portfolio/childrenart/IMG_5254.jpg";
// import children2 from "../../public/assets/portfolio/childrenart/IMG_9894.jpg";
// import children3 from "../../public/assets/portfolio/childrenart/IMG_0760.jpg";
// import children4 from "../../public/assets/portfolio/childrenart/IMG_9893.jpg";
// import children5 from "../../public/assets/portfolio/childrenart/IMG_5258.jpg";
// import children6 from "../../public/assets/portfolio/childrenart/IMG_5314.jpg";
// import children7 from "../../public/assets/portfolio/childrenart/IMG_0673.jpg";
// import children8 from "../../public/assets/portfolio/childrenart/IMG_5317.jpg";
// import concept1 from "../../public/assets/portfolio/conceptart/IMG_0794.jpg";
// import concept2 from "../../public/assets/portfolio/conceptart/IMG_5940.jpg";
// import concept3 from "../../public/assets/portfolio/conceptart/IMG_5942.jpg";
// import concept4 from "../../public/assets/portfolio/conceptart/IMG_5943.jpg";
// import concept5 from "../../public/assets/portfolio/conceptart/IMG_5944.jpg";
// import concept6 from "../../public/assets/portfolio/conceptart/IMG_5941.jpg";
// import concept7 from "../../public/assets/portfolio/conceptart/IMG_5948.jpg";
// import concept8 from "../../public/assets/portfolio/conceptart/IMG_5945.jpg";
// import concept9 from "../../public/assets/portfolio/conceptart/IMG_5946.jpg";
// import concept10 from "../../public/assets/portfolio/conceptart/IMG_5947.jpg";
// import concept11 from "../../public/assets/portfolio/conceptart/IMG_5949.jpg";
// import concept12 from "../../public/assets/portfolio/conceptart/IMG_5950.jpg";
// import concept13 from "../../public/assets/portfolio/conceptart/IMG_5952.jpg";
// import concept14 from "../../public/assets/portfolio/conceptart/IMG_5951.jpg";
// import concept15 from "../../public/assets/portfolio/conceptart/IMG_5954.jpg";
// import concept16 from "../../public/assets/portfolio/conceptart/IMG_5942.jpg";
// import concept17 from "../../public/assets/portfolio/conceptart/IMG_5955.jpg";
// import concept18 from "../../public/assets/portfolio/conceptart/IMG_5953.jpg";
// import cover1 from "../../public/assets/portfolio/coverart/IMG_5321.jpg";
// import cover2 from "../../public/assets/portfolio/coverart/IMG_7354.jpg";
// import cover3 from "../../public/assets/portfolio/coverart/4.jpg";
// import cover4 from "../../public/assets/portfolio/coverart/IMG_5339.png";
// import cover5 from "../../public/assets/portfolio/coverart/IMG_5322.jpg";
// import environment1 from "../../public/assets/portfolio/environmentaldesign/IMG_5400.jpg";
// import environment2 from "../../public/assets/portfolio/environmentaldesign/IMG_5945.jpg";
// import environment3 from "../../public/assets/portfolio/environmentaldesign/IMG_5946.jpg";
// import environment4 from "../../public/assets/portfolio/environmentaldesign/IMG_5404.jpg";
// import environment5 from "../../public/assets/portfolio/environmentaldesign/IMG_5954.jpg";
// import environment6 from "../../public/assets/portfolio/environmentaldesign/IMG_5955.jpg";
// import environment7 from "../../public/assets/portfolio/environmentaldesign/IMG_5953.jpg";
// import environment8 from "../../public/assets/portfolio/environmentaldesign/IMG_5412.png";
// import environment9 from "../../public/assets/portfolio/environmentaldesign/IMG_5397.jpg";
// import environment10 from "../../public/assets/portfolio/environmentaldesign/IMG_5375.jpg";
// import environment11 from "../../public/assets/portfolio/environmentaldesign/IMG_5953.jpg";
// import fantasy1 from "../../public/assets/portfolio/fantasyart/IMG_5984.png";
// import fantasy2 from "../../public/assets/portfolio/fantasyart/IMG_0772.jpg";
// import fantasy3 from "../../public/assets/portfolio/fantasyart/IMG_9889.jpg";
// import fantasy4 from "../../public/assets/portfolio/fantasyart/IMG_5985.png";
// import fantasy5 from "../../public/assets/portfolio/fantasyart/IMG_0774.jpg";
// import fantasy6 from "../../public/assets/portfolio/fantasyart/IMG_5940.jpg";
// import fantasy7 from "../../public/assets/portfolio/fantasyart/IMG_5988.png";
// import fantasy8 from "../../public/assets/portfolio/fantasyart/IMG_5948.jpg";
// import fantasy9 from "../../public/assets/portfolio/fantasyart/IMG_5952.jpg";
// import fantasy10 from "../../public/assets/portfolio/fantasyart/IMG_5986.png";
// import fantasy11 from "../../public/assets/portfolio/fantasyart/IMG_5987.png";
// import game1 from "../../public/assets/portfolio/gameart/IMG_5935.jpg";
// import game2 from "../../public/assets/portfolio/gameart/IMG_0748.jpg";
// import game3 from "../../public/assets/portfolio/gameart/IMG_6115.jpg";
// import game4 from "../../public/assets/portfolio/gameart/IMG_5939.jpg";
// import game5 from "../../public/assets/portfolio/gameart/IMG_0742.jpg";
// import game6 from "../../public/assets/portfolio/gameart/IMG_0750.jpg";
// import game7 from "../../public/assets/portfolio/gameart/IMG_5936.jpg";
// import game8 from "../../public/assets/portfolio/gameart/IMG_0751.jpg";
// import game9 from "../../public/assets/portfolio/gameart/IMG_0763.jpg";
// import game10 from "../../public/assets/portfolio/gameart/IMG_0764.jpg";
// import game11 from "../../public/assets/portfolio/gameart/IMG_5937.jpg";
// import game12 from "../../public/assets/portfolio/gameart/IMG_5938.jpg";
// import game13 from "../../public/assets/portfolio/gameart/IMG_5948.jpg";
// import game14 from "../../public/assets/portfolio/gameart/IMG_0745.jpg";
// import game15 from "../../public/assets/portfolio/gameart/IMG_5952.jpg";
// import graphic1 from "../../public/assets/portfolio/graphicdesign/IMG_5931.jpg";
// import graphic2 from "../../public/assets/portfolio/graphicdesign/IMG_3726.jpg";
// import graphic3 from "../../public/assets/portfolio/graphicdesign/IMG_5222.jpg";
// import graphic4 from "../../public/assets/portfolio/graphicdesign/IMG_3723.jpg";
// import graphic5 from "../../public/assets/portfolio/graphicdesign/IMG_3805.jpg";
// import graphic6 from "../../public/assets/portfolio/graphicdesign/IMG_5226.jpg";
// import graphic7 from "../../public/assets/portfolio/graphicdesign/IMG_5220.jpg";
// import graphic8 from "../../public/assets/portfolio/graphicdesign/IMG_3772.jpg";
// import graphic9 from "../../public/assets/portfolio/graphicdesign/IMG_5223.jpg";
// import graphic10 from "../../public/assets/portfolio/graphicdesign/IMG_5225.jpg";
// import graphic11 from "../../public/assets/portfolio/graphicdesign/IMG_5227.jpg";
// import graphic12 from "../../public/assets/portfolio/graphicdesign/IMG_5229.jpg";
// import graphic13 from "../../public/assets/portfolio/graphicdesign/IMG_5326.jpg";
// import graphic14 from "../../public/assets/portfolio/graphicdesign/IMG_3721.jpg";
// import illustration1 from "../../public/assets/portfolio/illustrationss/IMG_0767.jpg";
// import illustration2 from "../../public/assets/portfolio/illustrationss/IMG_0774.jpg";
// import illustration3 from "../../public/assets/portfolio/illustrationss/IMG_0758.jpg";
// import illustration4 from "../../public/assets/portfolio/illustrationss/IMG_5818.jpg";
// import illustration5 from "../../public/assets/portfolio/illustrationss/IMG_0759.jpg";
// import illustration6 from "../../public/assets/portfolio/illustrationss/IMG_0770.jpg";
// import illustration7 from "../../public/assets/portfolio/illustrationss/IMG_0791.jpg";
// import illustration8 from "../../public/assets/portfolio/illustrationss/IMG_0771.jpg";
// import illustration9 from "../../public/assets/portfolio/illustrationss/IMG_0772.jpg";
// import illustration10 from "../../public/assets/portfolio/illustrationss/IMG_5829.jpg";
// import illustration11 from "../../public/assets/portfolio/illustrationss/IMG_5830.jpg";
// import illustration12 from "../../public/assets/portfolio/illustrationss/IMG_5603.jpg";
// import illustration13 from "../../public/assets/portfolio/illustrationss/IMG_0765.jpg";
// import illustration14 from "../../public/assets/portfolio/illustrationss/IMG_5827.jpg";
// import illustration15 from "../../public/assets/portfolio/illustrationss/IMG_0773.jpg";
// import illustration16 from "../../public/assets/portfolio/illustrationss/IMG_5447.png";
// import illustration17 from "../../public/assets/portfolio/illustrationss/IMG_0757.jpg";
// import illustration18 from "../../public/assets/portfolio/illustrationss/IMG_0769.jpg";
// import storyboard1 from "../../public/assets/portfolio/storyboards/IMG_5352.jpg";
// import storyboard2 from "../../public/assets/portfolio/storyboards/IMG_5353.jpg";
// import storyboard3 from "../../public/assets/portfolio/storyboards/IMG_5354.jpg";
// import storyboard4 from "../../public/assets/portfolio/storyboards/IMG_5355.jpg";
// import storyboard5 from "../../public/assets/portfolio/storyboards/IMG_5356.jpg";
// import storyboard6 from "../../public/assets/portfolio/storyboards/IMG_5356.jpg";
// import visual1 from "../../public/assets/portfolio/visualdevelopment/IMG_5377.jpg";
// import visual2 from "../../public/assets/portfolio/visualdevelopment/IMG_5693.jpg";
// import visual3 from "../../public/assets/portfolio/visualdevelopment/IMG_9201.jpg";
// import visual4 from "../../public/assets/portfolio/visualdevelopment/IMG_3519.jpg";
// import visual5 from "../../public/assets/portfolio/visualdevelopment/IMG_0241.jpg";
// import visual6 from "../../public/assets/portfolio/visualdevelopment/IMG_0240.jpg";
// import visual7 from "../../public/assets/portfolio/visualdevelopment/IMG_5241.jpg";
// import visual8 from "../../public/assets/portfolio/visualdevelopment/IMG_9889.jpg";
// import visual9 from "../../public/assets/portfolio/visualdevelopment/IMG_0749.jpg";
// import visual10 from "../../public/assets/portfolio/visualdevelopment/IMG_0750.jpg";
// import visual11 from "../../public/assets/portfolio/visualdevelopment/IMG_0751.jpg";
// import visual12 from "../../public/assets/portfolio/visualdevelopment/IMG_9890.jpg";
// import visual13 from "../../public/assets/portfolio/visualdevelopment/IMG_5244.jpg";
// import visual14 from "../../public/assets/portfolio/visualdevelopment/IMG_5247.jpg";
// import visual15 from "../../public/assets/portfolio/visualdevelopment/IMG_5249.jpg";
// import visual16 from "../../public/assets/portfolio/visualdevelopment/IMG_0746.jpg";
// import visual17 from "../../public/assets/portfolio/visualdevelopment/IMG_0747.jpg";
// import visual18 from "../../public/assets/portfolio/visualdevelopment/IMG_9892.jpg";

// import axios from "axios";

// const bookIllustrations = {
//   image1: billustration1,
//   image2: billustration2,
//   image3: billustration3,
//   image4: billustration4,
//   image5: billustration5,
//   image6: billustration6,
//   image7: billustration7,
//   image8: billustration8,
//   image9: billustration9,
//   image10: billustration10,
//   image11: billustration11,
//   image12: billustration12,
//   image13: billustration13,
//   image14: billustration14,
//   image15: billustration15,
//   image16: billustration16,
//   image17: billustration17,
//   image18: billustration18,
// };

// const characterDesign = {
//   image1: character1,
//   image2: character2,
//   image3: character3,
//   image4: character4,
//   image5: character5,
//   image6: character6,
//   image7: character7,
//   image8: character8,
//   image9: character9,
//   image10: character10,
//   image11: character11,
//   image12: character12,
//   image13: character13,
//   image14: character14,
//   image15: character15,
//   image16: character16,
//   image17: character17,
//   image18: character18,
// };

// const childrenArt = {
//   image1: children1,
//   image2: children2,
//   image3: children3,
//   image4: children4,
//   image5: children5,
//   image6: children6,
//   image7: children7,
//   image8: children8,
// };

// const conceptArt = {
//   image1: concept1,
//   image2: concept2,
//   image3: concept3,
//   image4: concept4,
//   image5: concept5,
//   image6: concept6,
//   image7: concept7,
//   image8: concept8,
//   image9: concept9,
//   image10: concept10,
//   image11: concept11,
//   image12: concept12,
//   image13: concept13,
//   image14: concept14,
//   image15: concept15,
//   image16: concept16,
//   image17: concept17,
//   image18: concept18,
// };

// const coverArt = {
//   image1: cover1,
//   image2: cover2,
//   image3: cover3,
//   image4: cover4,
//   image5: cover5,
// };

// const environmentalDesign = {
//   image1: environment1,
//   image2: environment2,
//   image3: environment3,
//   image4: environment4,
//   image5: environment5,
//   image6: environment6,
//   image7: environment7,
//   image8: environment8,
//   image9: environment9,
//   image10: environment10,
//   image11: environment11,
// };

// const fantasyArt = {
//   image1: fantasy1,
//   image2: fantasy2,
//   image3: fantasy3,
//   image4: fantasy4,
//   image5: fantasy5,
//   image6: fantasy6,
//   image7: fantasy7,
//   image8: fantasy8,
//   image9: fantasy9,
//   image10: fantasy10,
//   image11: fantasy11,
// };

// const gameArt = {
//   image1: game1,
//   image2: game2,
//   image3: game3,
//   image4: game4,
//   image5: game5,
//   image6: game6,
//   image7: game7,
//   image8: game8,
//   image9: game9,
//   image10: game10,
//   image11: game11,
//   image12: game12,
//   image13: game13,
//   image14: game14,
//   image15: game15,
// };

// const graphicDesign = {
//   image1: graphic1,
//   image2: graphic2,
//   image3: graphic3,
//   image4: graphic4,
//   image5: graphic5,
//   image6: graphic6,
//   image7: graphic7,
//   image8: graphic8,
//   image9: graphic9,
//   image10: graphic10,
//   image11: graphic11,
//   image12: graphic12,
//   image13: graphic13,
//   image14: graphic14,
// };

// const illustrations = {
//   image1: illustration1,
//   image2: illustration2,
//   image3: illustration3,
//   image4: illustration4,
//   image5: illustration5,
//   image6: illustration6,
//   image7: illustration7,
//   image8: illustration8,
//   image9: illustration9,
//   image10: illustration10,
//   image11: illustration11,
//   image12: illustration12,
//   image13: illustration13,
//   image14: illustration14,
//   image15: illustration15,
//   image16: illustration16,
//   image17: illustration17,
//   image18: illustration18,
// };

// const storyboard = {
//   image1: storyboard1,
//   image2: storyboard2,
//   image3: storyboard3,
//   image4: storyboard4,
//   image5: storyboard5,
//   image6: storyboard6,
// };

// const visualDevelopment = {
//   image1: visual1,
//   image2: visual2,
//   image3: visual3,
//   image4: visual4,
//   image5: visual5,
//   image6: visual6,
//   image7: visual7,
//   image8: visual8,
//   image9: visual9,
//   image10: visual10,
//   image11: visual11,
//   image12: visual12,
//   image13: visual13,
//   image14: visual14,
//   image15: visual15,
//   image16: visual16,
//   image17: visual17,
//   image18: visual18,
// };

const Portfolio = () => {
  const ref = useRef(null);

  const [tab, setTab] = useState(null);

  const handleScrollLeft = () => {
    if (window) {
      ref.current.scrollBy({
        left: -(window.innerWidth * 60) / 100,
        behaviour: "smooth",
      });
    }
  };
  const handleScrollRight = () => {
    if (window) {
      ref.current.scrollBy({
        left: (window.innerWidth * 60) / 100,
        behaviour: "smooth",
      });
    }
  };

  useEffect(() => {
    if (window) {
      console.log(parseInt(window?.sessionStorage?.getItem("tab")) > 0);
      const selected =
        parseInt(window?.sessionStorage?.getItem("tab")) > 0
          ? parseInt(window?.sessionStorage?.getItem("tab"))
          : 0;
      setTab(selected);
    }
  }, []);

  // const [bookIllustrations, setBookIllustrations] = useState([]);

  // const segregateData = (data) => {
  //   console.log("in");
  //   if (data?.length < 0) return;
  //   data.forEach((element) => {
  //     switch (element?.category) {
  //       case "book-illustration":
  //         setBookIllustrations((prev) => [...prev, element]);
  //         break;
  //     }
  //   });
  // };

  // const fetchData = async () => {
  //   await axios
  //     .get("/api/get_images")
  //     .then((response) => {
  //       const res = response.data.data;
  //       console.log(res);
  //       res.forEach((element) => {
  //         switch (element?.category) {
  //           case "book-illustration":
  //             setBookIllustrations((previousData) => [
  //               ...previousData,
  //               element,
  //             ]);
  //             break;
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // // const fetch = async () => {
  // //   await fetchData();
  // // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Supersapiens Studio</title>
        <meta
          name="Supersapiens Studio"
          content="Proud Design Studio Since 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="w-full lg:flex">
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
        <div className="lg:w-4/5 h-max bg-black lg:ml-auto text-white py-4 font-primary">
          <div className="flex flex-col justify-center w-full">
            <Tab.Group
              onChange={(index) => {
                window.sessionStorage.setItem("tab", index);
                setTab(index);
              }}
              selectedIndex={tab > 0 ? tab : 0}
            >
              <div className="w-full flex items-center justify-between md:space-x-3 space-x-2 lg:px-11 md:px-5 px-4">
                <button
                  className="hover:text-primary md:mt-2.5 mt-1.5"
                  onClick={handleScrollLeft}
                >
                  <IconCircleChevronLeft size={32} className="" />
                </button>
                <div
                  ref={ref}
                  className="md:w-full w-full overflow-scroll flex hidescroll space-x-2 "
                >
                  <Tab.List className="flex justify-center items-end md:space-x-2 space-x-1 px-auto w-max  md:space-y-2 space-y-1">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "illustrations-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">Illustrations</p>
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "character-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            Character design
                          </p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "concept-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Concept Art</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "visual-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            Visual development
                          </p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment} className="hidden md:block">
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "fantasy-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Fantasy art</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment} className="hidden md:block">
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "book-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            Book illustration
                          </p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "cover-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Cover art</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "children-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            Children&apos;s art
                          </p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "environment-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            Environmental concept design
                          </p>
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "game-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Game art</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "graphics-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            Graphics design
                          </p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "storyboard-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Storyboard</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "unreal-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Unreal engine</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "animation-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> 2d animation</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "voiceover-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white"> Voice over</p>{" "}
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "ui-tab-bg after text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          <p className="relative text-white">
                            {" "}
                            User interface design
                          </p>{" "}
                        </button>
                      )}
                    </Tab>
                    {/* ...  */}
                  </Tab.List>
                </div>
                <button
                  className="hover:text-primary md:mt-2.5 mt-1.5"
                  onClick={handleScrollRight}
                >
                  <IconCircleChevronRight size={32} className="" />
                </button>
              </div>

              <Tab.Panels className="mt-10">
                <Tab.Panel>
                  <Grid category="illustrations" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="character-design" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="concept-art" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="visual-development" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="fantasy-art" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="book-illustration" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="cover-art" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="children-art" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="environmental-design" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="game-art" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="graphic-design" />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid category="storyboard" />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
