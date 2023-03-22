import React, { useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import Grid from "../../components/portfolio-grid/Grid";
import { illustrations } from "../../data/portfolio/illustrations";
import { conceptArt } from "../../data/portfolio/concept-art";
import { visualDevelopment } from "../../data/portfolio/visual-development";
import { fantasyArt } from "../../data/portfolio/fantasy-art";
import { coverArt } from "../../data/portfolio/cover-art";
import { childrenArt } from "../../data/portfolio/children-art";
import { environmentalDesign } from "../../data/portfolio/environmental-design";
import { gameArt } from "../../data/portfolio/game-art";
import { graphicDesign } from "../../data/portfolio/graphic-design";
import { storyboard } from "../../data/portfolio/storyboard";
import { characterDesign } from "../../data/portfolio/character-design";
import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "@tabler/icons-react";
import Head from "next/head";
import illustration1 from "../../public/assets/portfolio/book-illustrations/IMG_5315.jpg";
import illustration2 from "../../public/assets/portfolio/book-illustrations/IMG_5207.jpg";
import illustration3 from "../../public/assets/portfolio/book-illustrations/IMG_5208.jpg";
import illustration4 from "../../public/assets/portfolio/book-illustrations/IMG_5314.jpg";
import illustration5 from "../../public/assets/portfolio/book-illustrations/IMG_5210.jpg";
import illustration6 from "../../public/assets/portfolio/book-illustrations/IMG_5214.jpg";
import illustration7 from "../../public/assets/portfolio/book-illustrations/IMG_5316.jpg";
import illustration8 from "../../public/assets/portfolio/book-illustrations/IMG_5350.jpg";
import illustration9 from "../../public/assets/portfolio/book-illustrations/IMG_5358.jpg";
import illustration10 from "../../public/assets/portfolio/book-illustrations/IMG_9740.jpg";
import illustration11 from "../../public/assets/portfolio/book-illustrations/IMG_9741.jpg";
import illustration12 from "../../public/assets/portfolio/book-illustrations/IMG_5317.jpg";
import illustration13 from "../../public/assets/portfolio/book-illustrations/IMG_5375.jpg";
import illustration14 from "../../public/assets/portfolio/book-illustrations/IMG_9734.jpg";
import illustration15 from "../../public/assets/portfolio/book-illustrations/IMG_9735.jpg";
import illustration16 from "../../public/assets/portfolio/book-illustrations/IMG_9736.jpg";
import illustration17 from "../../public/assets/portfolio/book-illustrations/IMG_9737.jpg";
import illustration18 from "../../public/assets/portfolio/book-illustrations/IMG_5306.jpg";

const bookIllustrations = {
  image1: illustration1,
  image2: illustration2,
  image3: illustration3,
  image4: illustration4,
  image5: illustration5,
  image6: illustration6,
  image7: illustration7,
  image8: illustration8,
  image9: illustration9,
  image10: illustration10,
  image11: illustration11,
  image12: illustration12,
  image13: illustration13,
  image14: illustration14,
  image15: illustration15,
  image16: illustration16,
  image17: illustration17,
  image18: illustration18,
};

const Portfolio = () => {
  const ref = useRef(null);
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
            <Tab.Group>
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
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                          className={
                            selected
                              ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                              : "illustrations-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Illustrations
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
                              : "character-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Character design
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
                              : "concept-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Concept Art
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
                              : "visual-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Visual development
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
                              : "fantasy-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Fantasy art
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
                              : "book-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Book illustration
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
                              : "cover-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Cover art
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
                              : "children-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Children&apos;s art
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
                              : "environment-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Environmental concept design
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
                              : "game-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Game art
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
                              : "graphics-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Graphics design
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
                              : "storyboard-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Storyboard
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
                              : "unreal-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Unreal engine
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
                              : "animation-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          2d animation
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
                              : "voiceover-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          Voice over
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
                              : "ui-tab-bg text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                          }
                        >
                          User interface design
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
                  <Grid images={illustrations} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={characterDesign} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={conceptArt} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={visualDevelopment} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={fantasyArt} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={bookIllustrations} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={coverArt} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={childrenArt} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={environmentalDesign} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={gameArt} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={graphicDesign} />
                </Tab.Panel>
                <Tab.Panel>
                  <Grid images={storyboard} />
                </Tab.Panel>
                {/* ... */}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
