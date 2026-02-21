"use client";

import { Fragment } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import MediaContent from "@/components/shared/MediaContent";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment, ButtonAnimationType } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureItem = {
  id: string;
  category: string[];
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
};

interface FeatureCardTwentyTwoProps {
  features: FeatureItem[];
  animationType: CardAnimationType;
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  textboxLayout: TextboxLayout;
  useInvertedBackground: InvertedBackground;
  tag?: string;
  tagIcon?: LucideIcon;
  tagAnimation?: ButtonAnimationType;
  buttons?: ButtonConfig[];
  buttonAnimation?: ButtonAnimationType;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxTitleClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
  textBoxDescriptionClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  cardContentClassName?: string;
  cardTitleClassName?: string;
  categoryContainerClassName?: string;
  categoryClassName?: string;
  mediaWrapperClassName?: string;
  mediaClassName?: string;
}

const FeatureCardTwentyTwo = ({
  features,
  animationType,
  title,
  titleSegments,
  description,
  textboxLayout,
  useInvertedBackground,
  tag,
  tagIcon,
  tagAnimation,
  buttons,
  buttonAnimation,
  ariaLabel = "Features section",
  className = "",
  containerClassName = "",
  textBoxTitleClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  textBoxDescriptionClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
  gridClassName = "",
  cardClassName = "",
  cardContentClassName = "",
  cardTitleClassName = "",
  categoryContainerClassName = "",
  categoryClassName = "",
  mediaWrapperClassName = "",
  mediaClassName = "",
}: FeatureCardTwentyTwoProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: features.length });

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20 w-full", useInvertedBackground && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
        <CardStackTextBox
          title={title}
          titleSegments={titleSegments}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          tagAnimation={tagAnimation}
          buttons={buttons}
          buttonAnimation={buttonAnimation}
          textboxLayout={textboxLayout}
          useInvertedBackground={useInvertedBackground}
          textBoxClassName={textBoxClassName}
          titleClassName={textBoxTitleClassName}
          titleImageWrapperClassName={titleImageWrapperClassName}
          titleImageClassName={titleImageClassName}
          descriptionClassName={textBoxDescriptionClassName}
          tagClassName={textBoxTagClassName}
          buttonContainerClassName={textBoxButtonContainerClassName}
          buttonClassName={textBoxButtonClassName}
          buttonTextClassName={textBoxButtonTextClassName}
        />

        <div className={cls("grid grid-cols-1 md:grid-cols-2 gap-8 card rounded-theme-capped p-5 md:p-8", gridClassName)}>
          {features.map((feature, index) => (
            <article
              key={feature.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={cls("relative h-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer", cardClassName)}
            >
              <div className={cls("relative z-1 w-full md:h-50 md:w-auto aspect-square rounded-theme-capped overflow-hidden shrink-0", mediaWrapperClassName)}>
                <MediaContent
                  imageSrc={feature.imageSrc}
                  videoSrc={feature.videoSrc}
                  imageAlt={feature.imageAlt || feature.title}
                  videoAriaLabel={feature.videoAriaLabel || feature.title}
                  imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                />
              </div>
              <div className={cls("relative z-1 flex flex-col gap-2 min-w-0 flex-1", cardContentClassName)}>
                <h3 className={cls(
                  "text-3xl font-medium leading-tight line-clamp-2",
                  shouldUseLightText ? "text-background" : "text-foreground",
                  cardTitleClassName
                )}>
                  {feature.title}
                </h3>
                <div className={cls("flex flex-wrap items-center gap-2", categoryContainerClassName)}>
                  {feature.category.map((cat, idx) => (
                    <Fragment key={idx}>
                      <span className={cls(
                        "text-sm",
                        shouldUseLightText ? "text-background/75" : "text-foreground/75",
                        categoryClassName
                      )}>
                        {cat}
                      </span>
                      {idx < feature.category.length - 1 && (
                        <span className="text-sm text-accent">•</span>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

FeatureCardTwentyTwo.displayName = "FeatureCardTwentyTwo";

export default FeatureCardTwentyTwo;
