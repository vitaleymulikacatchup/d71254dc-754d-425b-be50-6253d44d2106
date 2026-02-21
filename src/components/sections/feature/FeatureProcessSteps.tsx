"use client";

import { memo } from "react";
import TextBox from "@/components/Textbox";
import Tag from "@/components/shared/Tag";
import { useButtonAnimation } from "@/components/hooks/useButtonAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";
import type { ButtonConfig, ButtonAnimationType } from "@/types/button";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tag?: string;
}

interface FeatureProcessStepsProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  tagAnimation?: ButtonAnimationType;
  buttons?: ButtonConfig[];
  buttonAnimation?: ButtonAnimationType;
  stepsAnimation: ButtonAnimationType;
  steps: ProcessStep[];
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  gridClassName?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  stepsContainerClassName?: string;
  stepClassName?: string;
  stepNumberClassName?: string;
  stepContentClassName?: string;
  stepTitleClassName?: string;
  stepTagClassName?: string;
  stepDescriptionClassName?: string;
}

const FeatureProcessSteps = ({
  title,
  description,
  tag,
  tagIcon,
  tagAnimation,
  buttons,
  buttonAnimation,
  stepsAnimation,
  steps,
  useInvertedBackground,
  ariaLabel = "Process steps section",
  className = "",
  containerClassName = "",
  gridClassName = "",
  leftColumnClassName = "",
  rightColumnClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  stepsContainerClassName = "",
  stepClassName = "",
  stepNumberClassName = "",
  stepContentClassName = "",
  stepTitleClassName = "",
  stepTagClassName = "",
  stepDescriptionClassName = "",
}: FeatureProcessStepsProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { containerRef: stepsContainerRef } = useButtonAnimation({ animationType: stepsAnimation });

  return (
    <section
      aria-label={ariaLabel}
      className={cls(
        "relative py-20 w-full",
        useInvertedBackground && "bg-foreground",
        className
      )}
    >
      <div className={cls("w-content-width mx-auto", containerClassName)}>
        <div className={cls("grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-center", gridClassName)}>
          <div className={cls("flex flex-col", leftColumnClassName)}>
            <TextBox
              title={title}
              description={description}
              tag={tag}
              tagIcon={tagIcon}
              tagAnimation={tagAnimation}
              buttons={buttons}
              buttonAnimation={buttonAnimation}
              useInvertedBackground={useInvertedBackground}
              className={cls("gap-3 md:gap-3", textBoxClassName)}
              titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
              descriptionClassName={cls("text-lg leading-tight text-balance", descriptionClassName)}
              tagClassName={cls("mb-1", tagClassName)}
              buttonContainerClassName={cls("mt-2", buttonContainerClassName)}
              buttonClassName={buttonClassName}
              buttonTextClassName={buttonTextClassName}
            />
          </div>
          <div className={cls("flex flex-col gap-6", rightColumnClassName)}>
            {steps && steps.length > 0 && (
              <div ref={stepsContainerRef} className={cls("flex flex-col", stepsContainerClassName)}>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={cls(
                      "flex gap-6",
                      stepClassName
                    )}
                  >
                    {/* Number box with line below */}
                    <div className="flex flex-col items-center">
                      <div
                        className={cls(
                          "card h-12 w-fit aspect-square rounded-theme flex items-center justify-center shrink-0",
                          stepNumberClassName
                        )}
                      >
                        <p
                          className={cls(
                            "text-lg font-medium",
                            shouldUseLightText ? "text-background" : "text-foreground"
                          )}
                        >
                          {step.number}
                        </p>
                      </div>
                      {/* Line segment */}
                      {index < steps.length - 1 && (
                        <div
                          className={cls(
                            "h-full w-px",
                            useInvertedBackground ? "bg-background/20" : "bg-foreground/20"
                          )}
                        />
                      )}
                    </div>
                    <div className={cls("w-full min-w-0 flex flex-col gap-2", stepContentClassName)}>
                      <div className="w-full min-w-0 flex items-center gap-3">
                        <h3
                          className={cls(
                            "text-2xl font-medium truncate",
                            useInvertedBackground ? "text-background" : "text-foreground",
                            stepTitleClassName
                          )}
                        >
                          {step.title}
                        </h3>
                        {step.tag && (
                          <Tag
                            text={step.tag}
                            useInvertedBackground={useInvertedBackground}
                            className={cls("text-xs text-nowrap", stepTagClassName)}
                          />
                        )}
                      </div>
                      <p
                        className={cls(
                          "text-base leading-tight mb-12",
                          useInvertedBackground ? "text-background/75" : "text-foreground/75",
                          stepDescriptionClassName
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

FeatureProcessSteps.displayName = "FeatureProcessSteps";

export default memo(FeatureProcessSteps);
