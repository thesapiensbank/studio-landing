import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import Grid from "../../components/portfolio-grid/Grid";
import { illustrations } from "./illustrations";
import { conceptArt } from "./concept-art";
import { visualDevelopment } from "./visual-development";
import { fantasyArt } from "./fantasy-art";
import { bookIllustrations } from "./book-illustrations";
import { coverArt } from "./cover-art";
import { childrenArt } from "./children-art";
import { environmentalDesign } from "./environmental-design";
import { gameArt } from "./game-art";
import { graphicDesign } from "./graphic-design";
import { storyboard } from "./storyboard";
import { characterDesign } from "./character-design";

const Portfolio = () => {
  return (
    <div className="w-full lg:flex ">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 h-max bg-black lg:ml-auto text-white py-4 font-primary">
        <div className="flex flex-col justify-center w-full">
          <Tab.Group>
            <Tab.List className="flex justify-center items-end md:space-x-2 space-x-1 flex-wrap md:space-y-2 space-y-1">
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Children's art
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
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
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    User interface design
                  </button>
                )}
              </Tab>
              {/* ...  */}
            </Tab.List>
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
  );
};

export default Portfolio;
