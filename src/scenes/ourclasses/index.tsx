import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "NExcepteur exercitation ipsum commodo ad id sit excepteur Lorem dolor. Lorem consequat aute quis do ipsum cupidatat esse elit anim excepteur dolor qui non qui. Ipsum aliqua nisi velit id laborum ut. Non exercitation adipisicing adipisicing id consequat Lorem. Et cillum minim tempor sunt in. Cillum reprehenderit minim velit esse et aliquip minim ex consequat laboris anim officia non. Veniam dolor pariatur pariatur incididunt aute officia eu.",
    image: image1,
  },
  {
    name: " Training Classes",
    description:
      "NUllamco sit quis culpa ullamco ullamco in. Esse deserunt tempor elit exercitation consectetur nisi. Velit mollit duis enim laborum sunt irure officia. Eu eiusmod proident eu mollit esse dolor incididunt ea consectetur id Lorem laboris. Eu Lorem adipisicing sunt esse anim. Est laboris nulla cupidatat incididunt reprehenderit. Veniam mollit duis duis sint officia.",
    image: image2,
  },
  {
    name: "Fitness Classes",
    description: "Elit consectetur minim dolor amet aliqua sunt.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "NOfficia culpa dolore quis irure deserunt irure occaecat elit non ea minim in. Anim voluptate exercitation sint cillum excepteur. Incididunt sit dolor duis culpa non sit esse laborum esse elit ex nulla qui.",
    image: image4,
  },
  {
    name: "Weight loss Classes",
    description:
      "NOccaecat exercitation Lorem qui eu cillum ut cupidatat velit esse laborum sint commodo ad ad. Sit magna ea anim quis occaecat sunt est eu duis duis in nisi mollit. Proident officia nisi dolore et do. Duis nisi exercitation nostrud aliqua ad culpa consequat nisi. Exercitation enim ullamco veniam labore culpa.",
    image: image5,
  },
  {
    name: "Yoga Training Classes",
    description:
      "NVeniam non exercitation labore irure enim. Adipisicing velit commodo eu cupidatat Lorem voluptate commodo qui exercitation Lorem. Adipisicing pariatur velit elit anim incididunt sint.",
    image: image6,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="div"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1.0 }}
          transition={{ duration: 1.0 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 20 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Adipisicing minim laboris dolor fugiat occaecat labore ut ad qui
              nisi nulla pariatur. Anim velit non fugiat labore veniam. Anim
              veniam officia non laboris culpa incididunt quis officia amet.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
// @321
