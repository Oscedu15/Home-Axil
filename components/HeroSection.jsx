"use client";

import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Img1 from "../public/image/hall.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between mx-auto">
      {/* left section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Offer for the best Interior
        </motion.p>

        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1"
        >
          Make your home a <br />
          piece of art
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Change your view with the best interior design. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Repudiandae, provident! Eos,
          quaerat fugit quasi aut saepe magnam tempora. Sit, asperiores.
          Repudiandae, provident! Eos, quaerat fugit quasi aut saepe magnam
          tempora. Sit, asperiores.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      {/* right section */}
      <div
        className="w-1/2
        "
      >
        <Image
          src={Img1}
          alt="heroImage"
          className="absolute right-18  xl:h-[448px] xl:w-[575px] lg:h-[344px] lg:w-[500px] hidden lg:block"
          width={800}
          height={500} placeholder="blur"
        />
      </div>
    </div>
  );
};

export default HeroSection;
