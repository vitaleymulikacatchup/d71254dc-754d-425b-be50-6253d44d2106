"use client";

import { Suspense, useCallback } from "react";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import ProductCart from "@/components/ecommerce/cart/ProductCart";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";

function ShopPageContent() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleCheckout = useCallback(async () => {
        if (cartItems.length === 0) return;

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("success", "true");

        await checkout(getCheckoutItems(), { successUrl: currentUrl.toString() });
    }, [cartItems, checkout, getCheckoutItems]);

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
                <div id="navbar" data-section="navbar">
                    <NavbarStyleFullscreen
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "About", id: "/#about" },
                            { name: "Services", id: "/#services" },
                            { name: "Contact", id: "/#contact" },
                        ]}
                        brandName="Life"
                        bottomLeftText="Embrace Nature's Beauty"
                        bottomRightText="hello@lifestudio.com"
                    />
                </div>
                
                {isLoading ? (
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
                ) : (
                    <div id="product-catalog" data-section="product-catalog">
                        <ProductCatalog
                            layout="page"
                            products={products}
                            searchValue={search}
                            onSearchChange={setSearch}
                            searchPlaceholder="Search products..."
                            filters={filters}
                            emptyMessage="No products found"
                        />
                    </div>
                )}
                
                <div id="product-cart" data-section="product-cart">
                    <ProductCart
                        isOpen={cartOpen}
                        onClose={() => setCartOpen(false)}
                        items={cartItems}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                        total={`$${cartTotal}`}
                        buttons={[
                            {
                                text: isCheckoutLoading ? "Processing..." : "Check Out",                                onClick: handleCheckout,
                            },
                        ]}
                    />
                </div>

                <div id="footer" data-section="footer">
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
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}

export default function ShopPage() {
    return (
        <Suspense>
            <ShopPageContent />
        </Suspense>
    );
}
