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
          <>
            <div className="stat" key={stat.label}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
            {i < stats.length - 1 && (
              <div
                className="stats__divider"
                key={`div-${i}`}
                aria-hidden="true"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
