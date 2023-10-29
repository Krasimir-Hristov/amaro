import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Amora {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-5 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Cleaning
            </span>
          </p>

          <p className="mt-10 mb-7 text-lg text-sm text-center md:text-start font-semibold">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("kontakt")}
            href="#contact"
          >
            Kontakt
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          {isAboveLarge ?
            (
              <div className="text-center md:text-start">
                <p className="font-semibold"><strong className="text-2xl uppercase">Email:</strong> MUSTERMAN@MUSTERMANN.DE</p>
                <p className="font-semibold"><strong className="text-2xl uppercase">Telephone:</strong> +49 123 45678</p>
                <p className="font-semibold"><strong className="text-2xl uppercase">Adresse:</strong> MUSTERSTRASSE 12 - STUTTGART</p>
                <p className="text-2xl mt-3"><span className="text-4xl mt-3 text-rose-900 font-bold">HOT LINE 24/7:</span> +49 123 123456789</p>
              </div>
            ) : (
              <div className="text-center md:text-start">
                <p className="font-semibold flex flex-col text-center justify-center"><strong className="text-xl uppercase">Email</strong> MUSTERMAN@MUSTERMANN.DE</p>
                <p className="font-semibold flex flex-col text-center justify-center"><strong className="text-xl uppercase">Telephone</strong> +49 123 45678</p>
                <p className="font-semibold flex flex-col text-center justify-center"><strong className="text-xl uppercase">Adresse</strong> MUSTERSTRASSE 12 - STUTTGART</p>
                <p className="text-2xl mt-3 flex flex-col text-center justify-center"><span className="text-2xl mt-3 text-rose-900 font-bold">HOT LINE 24/7</span> +49 123 123456789</p>
              </div>
            )}
        </motion.div>
      </div>
    </section >
  );
};

export default Landing;