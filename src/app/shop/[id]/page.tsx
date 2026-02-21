use client";

import { Suspense, use, useCallback } from "react";
import { useRouter } from "next/navigation";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import ProductDetailCard from "@/components/ecommerce/productDetail/ProductDetailCard";
import ProductCart from "@/components/ecommerce/cart/ProductCart";
import { useProductDetail } from "@/hooks/useProductDetail";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    return (
        <Suspense fallback={null}>
            <ProductPageContent params={params} />
        </Suspense>
    );
}

function ProductPageContent({ params }: ProductPageProps) {
    const { id } = use(params);
    const router = useRouter();

    const {
        product,
        isLoading,
        images,
        meta,
        variants,
        quantityVariant,
        selectedQuantity,
        createCartItem,
    } = useProductDetail(id);

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        addItem,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { buyNow, checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleAddToCart = useCallback(() => {
        const item = createCartItem();
        if (item) {
            addItem(item);
        }
    }, [createCartItem, addItem]);

    const handleBuyNow = useCallback(() => {
        if (product) {
            buyNow(product, selectedQuantity);
        }
    }, [product, selectedQuantity, buyNow]);

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
                            { name: "Shop", id: "/shop" },
                            { name: "Contact", id: "/contact" },
                        ]}
                        brandName="Life"
                        bottomLeftText="Embrace Nature's Beauty"
                        bottomRightText="hello@lifestudio.com"
                        button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                    />
                </div>

                <main>
                    {isLoading ? (
                        <div className="min-h-screen flex items-center justify-center pt-20">
                            <p className="text-foreground">Loading product...</p>
                        </div>
                    ) : !product ? (
                        <div className="min-h-screen flex items-center justify-center pt-20">
                            <div className="text-center">
                                <p className="text-foreground mb-4">Product not found</p>
                                <button
                                    onClick={() => router.push("/shop")}
                                    className="primary-button px-6 py-2 rounded-theme"
                                >
                                    Back to Shop
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div id="product-detail-card" data-section="product-detail-card">
                            <ProductDetailCard
                                layout="page"
                                name={product.name}
                                price={product.price}
                                salePrice={meta.salePrice}
                                rating={product.rating || 0}
                                description={product.description}
                                images={images}
                                variants={variants.length > 0 ? variants : undefined}
                                quantity={quantityVariant}
                                ribbon={meta.ribbon}
                                inventoryStatus={meta.inventoryStatus}
                                inventoryQuantity={meta.inventoryQuantity}
                                sku={meta.sku}
                                buttons={[
                                    { text: "Add To Cart", onClick: handleAddToCart },
                                    { text: "Buy Now", onClick: handleBuyNow },
                                ]}
                            />
                        </div>
                    )}
                </main>

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
                            { title: "Studio", items: [{ label: "About Us", href: "#about" }, { label: "Our Story", href: "#about" }, { label: "Team", href: "#team" }] },
                            { title: "Shop", items: [{ label: "Bouquets", href: "#shop" }, { label: "Seasonal", href: "#shop" }, { label: "Gifts", href: "#shop" }] },
                            { title: "Services", items: [{ label: "Weddings", href: "#services" }, { label: "Events", href: "#services" }, { label: "Subscriptions", href: "#services" }] },
                            { title: "Help", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact Us", href: "#contact" }, { label: "Blog", href: "#blog" }] }
                        ]}
                        bottomLeftText="© 2024 Life Flowers Studio. All rights reserved."
                        bottomRightText="Crafted with Love & Nature"
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
