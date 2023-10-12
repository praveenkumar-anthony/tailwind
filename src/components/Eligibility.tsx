import React from "react";

import {RadioGroup, Radio, useRadio, VisuallyHidden, cn} from "@nextui-org/react";

export const CustomRadio = (props: any) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:bg-current",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </div>
    </Component>
  );
};

export default function Eligibility() {
  return (
    <RadioGroup label="Plans">
      <CustomRadio description="Up to 20 items" value="free">
        Free
      </CustomRadio>
      <CustomRadio description="Unlimited items. $10 per month." value="pro">
        Pro
      </CustomRadio>
      <CustomRadio
        description="24/7 support. Contact us for pricing."
        value="enterprise"
      >
        Enterprise
      </CustomRadio>
    </RadioGroup>
  );
}
