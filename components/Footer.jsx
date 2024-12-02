"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function Footer() {
  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 py-14 mx-auto">
        <div className="grid gap-4 pb-4 text-center lg:text-left lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            <h2 className="pb-4 text-xl uppercase font-semibold dark:text-primary">
              Company
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Abouyt Us
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Press
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Carrers
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Contact
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl uppercase font-semibold dark:text-primary">
              Development
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Documentation
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Reference
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Changelog
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Status
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl uppercase font-semibold dark:text-primary">
              Conect
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Twitter
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Linkedin
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Facebook
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="Email Address" />
            <button
              className="absolute bg-black text-white rounded-full 
            h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black
            hover:bg-white hover:text-black dark:bg-primary"
            >
              Subscribe
            </button>
          </div>
          <p className="pt-4 text-gray-500">
            By subscribing to our newsletter, you agree to receive emails from
            us. Your personal data will be stored and processed in accordance
            with our Privacy Policy and you can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
      {/* Copyright */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="container text-white text-center lg:flex lg:justify-between ">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2024 Interior. All Rights Reserved</p>
          </div>
          <div>
            <span className="text-primary dark:text-white italic font-semibold">
              Devolpemnt: Oscar Garcia
            </span>
          </div>
          <div>
            <Link href="/" className="p-4 hover:underline">
              Privacy
            </Link>
            <Link href="/" className="p-4 hover:underline">
             Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
