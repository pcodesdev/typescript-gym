import React from "react";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of Art Facilities",
    description:
      "Dolore dolore ut aliqua ut id dolor sunt cupidatat aliquip ullamco culpa eiusmod consequat irure.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Freedom to Choose Various Classes",
    description:
      "Dolore dolore ut aliqua ut id dolor sunt cupidatat aliquip ullamco culpa eiusmod consequat irure.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Certified Trainers",
    description:
      "Dolore dolore ut aliqua ut id dolor sunt cupidatat aliquip ullamco culpa eiusmod consequat irure.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto my-14 min-h-full w-5/6 py-20" id="benefits">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1.0 }}
          transition={{ duration: 1.0 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 20 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>Join Our Premier Gym Today!</HText>
          <p className="my-5 text-sm">
            Nostrud id fugiat minim in eu enim officia excepteur cupidatat
            proident Lorem. Cillum adipisicing labore adipisicing amet sint aute
            laborum commodo occaecat cillum tempor. Magna cupidatat ad ullamco
            qui labore aliquip magna eiusmod.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphics"
          />
          {/* DESCRIPTION */}
          <div className="">
            {/* TITLE */}
            <div className="relative">
              <div className="before: before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 1.0 }}
                  transition={{ duration: 1.0 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 20 },
                  }}
                  className=""
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1.0 }}
              transition={{ delay: 0.3, duration: 1.0 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 20 },
              }}
              className=""
            >
              <p className="my-5 text-justify ">
                Amet quis laborum quis sint nulla eu in sit consectetur. Ut quis
                officia sint dolor. Reprehenderit consequat laboris incididunt
                fugiat laborum magna consequat veniam ullamco.
              </p>
              <p className="mb-5 text-justify ">
                Amet quis laborum quis sint nulla eu in sit consectetur. Ut quis
                officia sint dolor. Reprehenderit consequat laboris incididunt
                fugiat laborum magna consequat veniam ullamco.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
//@300
