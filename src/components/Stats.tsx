import { Fragment } from "react";
import { useInView } from "../hooks/useInView";

const stats = [
  { value: "150+", label: "Vessels in Fleet" },
  { value: "42", label: "Destinations" },
  { value: "$10K+", label: "From Per Night" },
  { value: "24/7", label: "Concierge Access" },
];

export function Stats() {
  const { ref, inView } = useInView(0.2);

  return (
    <div className="stats" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={`stats__inner reveal${inView ? " in-view" : ""}`}>
        {stats.map((stat, i) => (
          <Fragment key={stat.label}>
            <div className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && (
              <div className="stats__divider" aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
