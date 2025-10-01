import React from "react";
import * as Label from "@radix-ui/react-label";
import * as Tooltip from "@radix-ui/react-tooltip";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  isInvalid?: boolean;
  tooltipText?: string;
  showTooltip?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, errorMessage, isInvalid,tooltipText,showTooltip, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <Label.Root htmlFor={props.id} className="block text-base font-medium font-sora text-white">
        {label}
      </Label.Root>
      <div className="relative">
        <input
        ref={ref}
          {...props}
          className={`w-full px-3 py-4 border ${
            isInvalid ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-invalid={isInvalid ? "true" : "false"}
          aria-describedby={isInvalid && errorMessage ? `${props.id}-error` : undefined}
        />
        {showTooltip && (
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  type="button"
                  className="inline-block w-4 h-4 text-gray-400 cursor-help focus:outline-none"
                >
                  ?
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                  sideOffset={5}
                >
                  {tooltipText}
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
      {isInvalid && errorMessage && (
        <p id={`${props.id}-error`} className="text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
     );
    }
  );



CustomInput.displayName = "CustomInput"; 
export default CustomInput;