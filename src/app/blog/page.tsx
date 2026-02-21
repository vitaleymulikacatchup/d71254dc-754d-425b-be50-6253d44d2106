"use client";

import React from 'react';
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

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
            <ReactLenis root>
                <NavbarStyleFullscreen
                    navItems={[
                        { name: "Home", id: "/" },
                        { name: "About", id: "/#about" },
                        { name: "Services", id: "/#services" },
                        { name: "Contact", id: "/#contact" }
                    ]}
                    brandName="Life"
                    bottomLeftText="Embrace Nature's Beauty"
                    bottomRightText="hello@lifestudio.com"
                />

                {isLoading ? (
                    <div className="w-content-width mx-auto py-20 text-center">
                        <p className="text-foreground">Loading posts...</p>
                    </div>
                ) : (
                    <BlogCardOne
                        blogs={posts}
                        title="Latest Articles"
                        description="Insights and updates from our team"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                        carouselMode="buttons"
                    />
                )}

                <FooterSimple
                    columns={[
                        { title: "Studio", items: [{ label: "About Us", href: "/#about" }, { label: "Our Story", href: "/#about" }, { label: "Team", href: "/#team" }] },
                        { title: "Shop", items: [{ label: "Bouquets", href: "/shop" }, { label: "Seasonal", href: "/shop" }, { label: "Gifts", href: "/shop" }] },
                        { title: "Services", items: [{ label: "Weddings", href: "/#services" }, { label: "Events", href: "/#services" }, { label: "Subscriptions", href: "/#services" }] },
                        { title: "Help", items: [{ label: "FAQ", href: "/#faq" }, { label: "Contact Us", href: "/#contact" }, { label: "Blog", href: "/blog" }] }
                    ]}
                    bottomLeftText="© 2024 Life Flowers Studio. All rights reserved."
                    bottomRightText="Crafted with Love & Nature"
                />
            </ReactLenis>
        </ThemeProvider>
    );
}
