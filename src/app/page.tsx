"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSmallSizeMediumTitles"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[{name:"Home",id:"/"},{name:"About",id:"/#about"},{name:"Shop",id:"/shop"},{name:"Services",id:"/#services"},{name:"Contact",id:"/#contact"},{name:"Blog",id:"/blog"}]}
          brandName="Life"
          bottomLeftText="Embrace Nature's Beauty"
          bottomRightText="hello@lifestudio.com"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          tag="Where Beauty Blooms"
          title="Life Flowers Studio: Crafting Moments with Nature's Art"
          description="Discover exquisite floral arrangements for every occasion. Our passion for flowers transforms ordinary moments into extraordinary memories."
          mediaItems={[{imageSrc:"https://img.b2bpic.net/free-photo/elegant-rose-bouquet_23-2147697781.jpg",imageAlt:"Luxurious bouquet of fresh, vibrant flowers."},{imageSrc:"https://img.b2bpic.net/free-photo/spring-composition-with-bouquet-flowers-vase-closeup_169016-29760.jpg",imageAlt:"Elegant floral display for an event."}]}
          rating={5}
          ratingText="Loved by thousands of happy customers"
          buttons={[{text:"Shop Now",href:"/shop"},{text:"Our Story",href:"/#about"}]}
          background={{variant:"plain"}}
          mediaAnimation="slide-up"
        />
      </div>
      <div id="about" data-section="about">
        <TextAbout
          tag="Our Passion, Your Joy"
          title="At Life Flowers Studio, we believe every bloom tells a story. We handcraft arrangements that speak volumes."
          useInvertedBackground={false}
          buttons={[{text:"Meet Our Team",href:"/#team"},{text:"Visit Our Studio",href:"/#contact"}]}
        />
      </div>
      <div id="shop" data-section="shop">
        <ProductCardThree
          title="Our Signature Arrangements"
          description="Explore our curated collection of fresh flowers and unique designs, perfect for any occasion."
          products={[{id:"1",name:"Eternal Elegance Bouquet",price:"$75.00",imageSrc:"https://img.b2bpic.net/free-photo/bouquet-pink-roses-single-branch-rose-with-green-leaves-inside-vase_114579-1440.jpg?_wi=1",imageAlt:"A lush bouquet of pink roses and white lilies."},{id:"2",name:"Modern Serenity Vase",price:"$60.00",imageSrc:"https://img.b2bpic.net/free-photo/beautiful-white-poinsettia-composition_23-2149138679.jpg",imageAlt:"A minimalist arrangement of white tulips in a glass vase."},{id:"3",name:"Vibrant Celebration Mix",price:"$85.00",imageSrc:"https://img.b2bpic.net/free-photo/woman-holding-bouquet-yellow-orange-dahliason-light-background_169016-39443.jpg",imageAlt:"A colorful mix of sunflowers, daisies, and lavender."},{id:"4",name:"Sunset Dream Bouquet",price:"$90.00",imageSrc:"https://img.b2bpic.net/free-photo/bouquet-pink-roses-single-branch-rose-with-green-leaves-inside-vase_114579-1440.jpg?_wi=2",imageAlt:"Warm-toned roses and exotic foliage."}]}
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="services" data-section="services">
        <PricingCardThree
          title="Our Floral Services"
          description="Find the perfect floral solution for your special events and everyday needs."
          plans={[{id:"1",name:"Daily Deliveries",price:"From $50",features:["Fresh seasonal blooms","Customizable options","Same-day delivery available","Personalized note included"],buttons:[{text:"Order Now",href:"/#contact"}]},{id:"2",badge:"Most Popular",badgeIcon:Sparkles,name:"Event Florals",price:"Quote Basis",features:["Wedding & corporate events","Venue decoration","Bridal bouquets & boutonnieres","Consultation with expert florists"],buttons:[{text:"Book Consultation",href:"/#contact"}]},{id:"3",name:"Subscription Boxes",price:"From $40/month",features:["Weekly or bi-weekly fresh flowers","Exclusive seasonal selections","Flexible delivery schedule","Cancel anytime"],buttons:[{text:"Subscribe",href:"/#contact"}]}]}
          carouselMode="buttons"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial={"\"Life Flowers Studio transformed my wedding day with the most breathtaking arrangements. Every detail was perfect!\""}
          rating={5}
          author="Sophia R., Bride"
          avatars={[{src:"https://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",alt:"Sophia R."},{src:"https://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",alt:"Mark T."},{src:"https://img.b2bpic.net/free-photo/smiling-young-woman-typing-her-laptop_231208-13559.jpg",alt:"Emily K."},{src:"https://img.b2bpic.net/free-photo/waist-up-shot-handsome-middle-aged-man-wearing-suit-tie-pondering-new-ideas_1098-19245.jpg",alt:"David L."},{src:"https://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg",alt:"Grace M."},{src:"https://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",alt:"Alex S."}]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Have questions? We've got answers about our flowers and services."
          faqs={[{id:"1",title:"What kind of flowers do you offer?",content:"We offer a wide selection of fresh, seasonal flowers, including roses, lilies, tulips, hydrangeas, and exotic blooms. Our inventory changes regularly to ensure peak freshness and variety."},{id:"2",title:"Do you offer custom arrangements?",content:"Absolutely! We specialize in creating bespoke floral designs tailored to your specific preferences, occasion, and budget. Contact us for a personalized consultation."},{id:"3",title:"What are your delivery options?",content:"We offer local delivery within a 20-mile radius of our studio. Same-day delivery is available for orders placed before 1 PM. Please inquire for special requests."},{id:"4",title:"How do I care for my flowers?",content:"To ensure your flowers last, trim stems, change water daily, and keep them away from direct sunlight and heat. We provide care instructions with every order."}]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="blog" data-section="blog">
        <BlogCardThree
          title="Latest Blooms & News"
          description="Stay updated with our floral tips, seasonal highlights, and studio news."
          blogs={[{id:"1",category:"Floral Care",title:"Extend the Life of Your Fresh Cut Flowers",excerpt:"Discover expert tips and tricks to keep your bouquets vibrant and fresh for longer.",imageSrc:"https://img.b2bpic.net/free-photo/man-apron-holds-vase-flowers-closeup_169016-34913.jpg",imageAlt:"Vase of fresh flowers with care tools",authorName:"Flora Bloom",authorAvatar:"https://img.b2bpic.net/free-photo/smiling-young-woman-typing-her-laptop_231208-13559.jpg",date:"April 15, 2024"},{id:"2",category:"Seasonal Guide",title:"Spring's Best: Flowers to Brighten Your Home",excerpt:"A guide to the most beautiful and fragrant blooms available this spring season.",imageSrc:"https://img.b2bpic.net/free-photo/view-flower-press-technique-still-life_23-2150276371.jpg",imageAlt:"Assortment of spring flowers",authorName:"Lily Petal",authorAvatar:"https://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",date:"March 28, 2024"},{id:"3",category:"Event Planning",title:"Trending Wedding Florals for 2024",excerpt:"Get inspired by the latest trends in bridal bouquets and wedding decorations.",imageSrc:"https://img.b2bpic.net/free-photo/young-bride-her-wedding-dress_23-2149003466.jpg",imageAlt:"Elegant wedding floral arch",authorName:"Rose Garden",authorAvatar:"https://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg",date:"February 10, 2024"}]}
          carouselMode="buttons"
          uniformGridCustomHeightClasses="min-h-[500px]"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Let's Create Something Beautiful Together"
          description="Whether it's a special event or a daily dose of joy, our team is here to help you with exquisite floral designs. Reach out to us!"
          background={{variant:"plain"}}
          useInvertedBackground={false}
          inputPlaceholder="Your email address"
          buttonText="Send Message"
          termsText="By contacting us, you agree to our privacy policy and terms of service."
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[{title:"Studio",items:[{label:"About Us",href:"/#about"},{label:"Our Story",href:"/#about"},{label:"Team",href:"/#team"}]},{title:"Shop",items:[{label:"Bouquets",href:"/shop"},{label:"Seasonal",href:"/shop"},{label:"Gifts",href:"/shop"}]},{title:"Services",items:[{label:"Weddings",href:"/#services"},{label:"Events",href:"/#services"},{label:"Subscriptions",href:"/#services"}]},{title:"Help",items:[{label:"FAQ",href:"/#faq"},{label:"Contact Us",href:"/#contact"},{label:"Blog",href:"/blog"}]}]}
          bottomLeftText="© 2024 Life Flowers Studio. All rights reserved."
          bottomRightText="Crafted with Love & Nature"
        />
      </div>
    </ThemeProvider>
  );
}
