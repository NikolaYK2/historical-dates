import React, { forwardRef, Ref, SVGProps } from "react";

const Vector = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="currentColor" stroke-width="2" />
    </svg>
  );
};

export const VectorSVG = forwardRef(Vector);
