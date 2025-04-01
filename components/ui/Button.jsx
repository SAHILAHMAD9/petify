import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ShimmerButton = forwardRef(
  (
    {
      header,
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      href,
      ...props
    },
    ref
  ) => {
    return (
      <Link href={`${href}`} >
        <button
          style={{
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          }}
          className={cn(
            `group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 ${header ? " px-4 py-2 md:px-6 md:py-3" : "px-6 py-3"} [background:var(--bg)] [border-radius:var(--radius)] text-black`,
            "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
            className
          )}
          ref={ref}
          {...props}
        >
          {/* Spark container */}
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]"
            )}
          >
            {/* Spark */}
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              {/* Spark before */}
              <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>

          {children}

          {/* Highlight */}
          <div
            className={cn(
              "insert-0 absolute size-full",
              "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              "transform-gpu transition-all duration-300 ease-in-out",
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )}
          />

          {/* Backdrop */}
          <div
            className={cn(
              "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
            )}
          />
        </button>
      </Link>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
