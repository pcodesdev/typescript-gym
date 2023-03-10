import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = ` mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="bt-32 mx-auto w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1.0 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 text-justify">
            Id sunt anim officia laborum laborum cillum in dolor deserunt sint
            sint pariatur. Id dolore minim veniam est occaecat et laboris aute
            proident Lorem in. Quis aliquip ipsum minim laborum velit commodo
            Lorem occaecat. Tempor dolore amet consequat do est sunt ad
            voluptate cupidatat. Tempor ipsum deserunt sit irure excepteur ipsum
            elit minim cillum dolor sit non minim velit. Laboris duis dolore
            sint anim nostrud id elit. Aute Lorem duis cillum minim ex.
          </p>
        </motion.div>
        {/* FORM AMD IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1.0 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              action="https://formsubmit.co/362bd42b0e08cfaa542bf94d2ea659e4"
              method="POST"
              onSubmit={onSubmit}
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This filed is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This filed is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 1000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This filed is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 1000 characters."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                {" "}
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1.0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 20 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:-z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
// @344
