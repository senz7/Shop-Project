import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DiamondLogo({
  size = 50,
  color = "#5482ab",
  to = "/",
}) {
  const [logoSize, setLogoSize] = useState(size);
  const [isHover, setHover] = useState(false);

  // Адаптивный размер логотипа
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLogoSize(size * 0.75); // уменьшаем на 25% на мобильных
      } else {
        setLogoSize(size);
      }
    };

    handleResize(); // устанавливаем при монтировании
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const half = logoSize / 2;

  const styles = {
    wrapper: {
      display: "inline-block",
      cursor: "pointer",
    },
    svg: {
      transition: "transform .25s ease",
    },
    svgHover: {
      transform: "scale(1.08) rotate(5deg)",
    },
  };

  return (
    <Link to={to} style={styles.wrapper}>
      <svg
        width={logoSize}
        height={logoSize}
        viewBox={`0 0 ${logoSize} ${logoSize}`}
        style={isHover ? { ...styles.svg, ...styles.svgHover } : styles.svg}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <g transform={`translate(${half}, ${half}) rotate(45)`}>
          <rect
            x={-half * 0.7}
            y={-half * 0.7}
            width={logoSize * 0.7}
            height={logoSize * 0.7}
            fill={color}
            rx={6}
          />
        </g>
      </svg>
    </Link>
  );
}
