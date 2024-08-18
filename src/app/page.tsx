"use client";
import Banner from "@/components/Banner";
import CardSuperiority from "@/components/CardSuperiority";
import { CardSuperiorityData } from "..";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Promotion from "@/components/Promotion";
import { motion } from "framer-motion";
export default function Home() {
  const bannerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const propertiesVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const faqVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const promotionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      {/* Banner Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bannerVariants}
      >
        <Banner />
      </motion.div>

      {/* Card Superiority Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
        className="lg:flex-row flex-wrap lg:flex-nowrap flex justify-between gap-2 lg:p-10 px-6 mt-12 lg:mt-0"
      >
        {CardSuperiorityData.map((item, index) => (
          <CardSuperiority icon={item.icon} title={item.title} key={index} />
        ))}
      </motion.div>

      {/* Featured Properties Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }} // Changed amount to 0 for immediate trigger
        variants={propertiesVariants}
      >
        <FeaturedProperties />
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={testimonialVariants}
      >
        <Testimonial />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={faqVariants}
      >
        <Faq />
      </motion.div>

      {/* Promotion Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={promotionVariants}
      >
        <Promotion />
      </motion.div>
    </div>
  );
}
