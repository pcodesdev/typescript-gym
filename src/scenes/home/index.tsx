import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import GYM from "@/assets/gym.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorSafaricom from "@/assets/SponsorSafaricom.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1.0 }}
            transition={{ duration: 1.0 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 20 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "12rem" }}
                  src={GYM}
                  alt="home page text"
                />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Ipsum nisi culpa ut mollit minim voluptate eiusmod mollit laboris.
              Ipsum nisi culpa ut mollit minim voluptate eiusmod mollit laboris.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1.0 }}
            transition={{ delay: 1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 20 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-items-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="homepage graphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className=" my-10 h-[150px] w-full bg-primary-100  py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex items-center justify-center gap-10">
              <img src={SponsorSafaricom} alt="Safaricom" />
              <img src={SponsorRedBull} alt="Redbull" />
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fprtune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
// Finnished @220
