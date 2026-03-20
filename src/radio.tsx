import React, { useId } from "react";
import { If, Then } from "react-if";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import "../../styles/utils/common.scss";
import "./radio.scss";
import "./radioGroup.scss";

export interface RadioGroupOption {
  value: string;
  label: string;
  supportingText?: string;
  isDisabled?: boolean;
}

export type RadioGroupSize = "medium";

/**
 * Auro RadioGroup built on Ark UI's `RadioGroup.Root`.
 *
 * This component accepts most Ark `RadioGroup.Root` props via `RadioGroupProps` (through `extends Omit<...>`),
 * but the controlled/semantic props listed below (e.g. `value`, `isInvalid`, `isDisabled`) are the supported
 * surface area and take precedence when both are provided.
 */
export interface RadioGroupProps extends Omit<React.ComponentProps<typeof ArkRadioGroup.Root>,
  | "children"
  | "className"
  | "value"
  | "disabled"
  | "invalid"
  | "readOnly"
  | "required"
  | "name"
  | "onValueChange"
> {
  /** Radio options. */
  options: RadioGroupOption[];

  /** Group label above the options. If undefined, label block is hidden. */
  label?: string;

  /** Helper text above the options. */
  description?: string;

  /** Shows the tooltip icon in the label row. */
  isTooltipVisible?: boolean;

  /** Shows a required indicator next to the label and sets `aria-required`. */
  isRequired?: boolean;

  /** Currently exposed for YAML parity. */
  size?: RadioGroupSize;

  /** Name for form submission. */
  name?: string;

  /** Tooltip content (`title` / aria). */
  tooltipText?: string;

  /** Controlled selected value. Ark may use `null` to represent no selection. */
  value?: string | null;

  /** Disables the entire group. */
  isDisabled?: boolean;

  /** Invalid/error state. */
  isInvalid?: boolean;

  /** Invalid/error state message */
  invalidMessage?: string;

  /** Prevents selection changes. */
  isReadOnly?: boolean;

  /** Called when selection changes. Ark may report `null` when no option is selected. */
  onValueChange?: (details: { value: string | null }) => void;

  /** Called when tooltip icon is clicked. */
  onTooltipClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Styling hook. */
  className?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const TOOLTIP_ICON_CLASS = "icon_status_question_mark";

export function RadioGroup({
  options,
  label,
  description,
  isTooltipVisible = false,
  isRequired = false,
  size = "medium",
  name,
  tooltipText,
  value,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  invalidMessage = '',
  onValueChange,
  onTooltipClick,
  className,
  ...rest
}: RadioGroupProps) {
  const uid = useId();
  const hasLabelBlock = Boolean(label) || Boolean(description);
  const labelId = label ? `${uid}__label` : undefined;
  const descId = description ? `${uid}__description` : undefined;

  return (
    <ArkRadioGroup.Root
      {...rest}
      className={cx("auro-radio-group", className)}
      data-size={size}
      name={name}
      value={value}
      disabled={isDisabled}
      invalid={isInvalid}
      readOnly={isReadOnly}
      required={isRequired}
      aria-labelledby={labelId}
      aria-describedby={descId}
      onValueChange={(details) => {
        if (isReadOnly) return;
        onValueChange?.({ value: details.value });
      }}
    >
      <If condition={hasLabelBlock}>
        <Then>
          <div className="auro-radio-group__text-container">
            <If condition={label}>
              <Then>
                <div className="auro-radio-group__label-row">
                  <span id={labelId} className="auro-input-label">
                    {label}
                    <If condition={isRequired}>
                      <Then>
                        <span className="auro-input-required" aria-hidden="true">
                          *
                        </span>
                      </Then>
                    </If>
                  </span>
                  <If condition={isTooltipVisible}>
                    <Then>
                      <button
                        type="button"
                        className="auro-input-icon"
                        aria-label={tooltipText ?? "More information"}
                        title={tooltipText}
                        disabled={isDisabled}
                        onClick={onTooltipClick}
                      >
                        <span className={cx("icon", TOOLTIP_ICON_CLASS)} aria-hidden="true" />
                      </button>
                    </Then>
                  </If>
                </div>
              </Then>
            </If>
            <If condition={description}>
              <Then>
                <div id={descId} className="auro-input-description">
                  {description}
                </div>
              </Then>
            </If>
          </div>
        </Then>
      </If>
      <div className="auro-radio-group__options">
        {options.map((opt) => (
          <ArkRadioGroup.Item
            key={opt.value}
            className="auro-radio"
            value={opt.value}
            disabled={Boolean(opt.isDisabled) || isDisabled}
          >
            <ArkRadioGroup.ItemHiddenInput className="auro-radio__hidden-input" />
            <ArkRadioGroup.ItemControl className="auro-radio__control" aria-hidden="true">
              <span className="auro-radio__state-layer" aria-hidden="true">
                <span className="auro-radio__dot" aria-hidden="true" />
              </span>
            </ArkRadioGroup.ItemControl>
            <span className="auro-radio__text">
              <ArkRadioGroup.ItemText className="auro-radio__label">{opt.label}</ArkRadioGroup.ItemText>
              <If condition={opt.supportingText}>
                <Then>
                  <span className="auro-radio__supporting-text">{opt.supportingText}</span>
                </Then>
              </If>
            </span>
          </ArkRadioGroup.Item>
        ))}
        <If condition={isInvalid && invalidMessage}>
          <Then>
            <div className="auro-input-error-message" role="alert">
              <span className="icon icon_status_alert_circle" aria-hidden="true"></span>
              <span className="error-message">{invalidMessage}</span>
            </div>
          </Then>
        </If>
      </div>
    </ArkRadioGroup.Root>
  );
}
