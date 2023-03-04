import React from "react";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

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
      </motion.div>
    </section>
  );
};

export default Benefits;
//@250
