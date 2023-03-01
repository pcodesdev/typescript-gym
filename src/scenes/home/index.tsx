import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img
                  style={{ width: "12rem" }}
                  src={GYM}
                  alt="home page text"
                />
              </div>
            </div>
            <p>
              Ipsum nisi culpa ut mollit minim voluptate eiusmod mollit laboris.
              Ipsum nisi culpa ut mollit minim voluptate eiusmod mollit laboris.
            </p>
          </div>
          {/* ACTIONS */}
          <div className="">
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
          </div>
        </div>
        {/* IMAGE */}
        <div className="">
          <img src={HomePageGraphic} alt="homepage graphic" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
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
// Poused @207
