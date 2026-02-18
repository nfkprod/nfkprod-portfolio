import type { CSSProperties } from "react";

type OrbitTile = {
  id: string;
  angle: number;
  size: number;
  radius: 125 | 180;
  hideOnMobile?: boolean;
};

const orbitTiles: OrbitTile[] = [
  { id: "t1", angle: 35, size: 96, radius: 125 },
  { id: "t2", angle: 95, size: 52, radius: 180, hideOnMobile: true },
  { id: "t3", angle: 150, size: 96, radius: 125 },
  { id: "t4", angle: 220, size: 72, radius: 180 },
  { id: "t5", angle: 290, size: 72, radius: 125 },
  { id: "t6", angle: 340, size: 52, radius: 180, hideOnMobile: true }
];

export default function FloatingOrbitObjects() {
  return (
    <div className="orbit-root relative h-full w-full">
      <div className="orbit-core-glow" />
      <div className="orbit-core-bloom" />
      <div className="orbit-group">
        {orbitTiles.map((item, index) => {
          const isSmall = item.size === 52;
          const style = {
            "--a": `${item.angle}deg`,
            "--r": `${item.radius}px`
          } as CSSProperties;

          return (
            <div key={item.id} className={`orbit-node ${item.hideOnMobile ? "orbit-hide-mobile" : ""}`} style={style}>
              <div
                className={`orbit-tile ${isSmall ? "orbit-small" : "orbit-main"}`}
                style={
                  {
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                    borderRadius: `${Math.round(item.size * 0.24)}px`
                  } as CSSProperties
                }
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .orbit-root {
          --orbit-scale: 0.86;
        }

        .orbit-core-glow {
          pointer-events: none;
          position: absolute;
          left: 54%;
          top: 56%;
          width: 156px;
          height: 156px;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(45, 226, 255, 0.24) 0%, rgba(181, 27, 255, 0.15) 44%, rgba(181, 27, 255, 0) 78%);
          filter: blur(14px);
          opacity: 0.9;
        }

        .orbit-core-bloom {
          pointer-events: none;
          position: absolute;
          left: 54%;
          top: 56%;
          width: 236px;
          height: 236px;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(255, 60, 166, 0.14) 0%, rgba(7, 10, 18, 0) 74%);
          filter: blur(22px);
          opacity: 0.75;
        }

        .orbit-group {
          position: absolute;
          left: 54%;
          top: 56%;
          animation: none;
        }

        .orbit-node {
          position: absolute;
          left: 0;
          top: 0;
          transform: rotate(var(--a)) translate(calc(var(--r) * var(--orbit-scale))) rotate(calc(-1 * var(--a)));
        }

        .orbit-tile {
          position: relative;
          transform: translate(-50%, -50%);
          animation: none;
          border: 1px solid rgba(234, 240, 255, 0.2);
          background:
            linear-gradient(160deg, rgba(234, 240, 255, 0.12), rgba(234, 240, 255, 0) 44%),
            linear-gradient(145deg, rgba(18, 26, 58, 0.72), rgba(11, 16, 34, 0.5));
          backdrop-filter: blur(14px) saturate(145%);
          -webkit-backdrop-filter: blur(14px) saturate(145%);
          box-shadow:
            inset 0 1px 0 rgba(234, 240, 255, 0.26),
            inset 0 -1px 0 rgba(10, 16, 34, 0.55),
            0 14px 26px rgba(7, 10, 18, 0.58);
        }

        .orbit-tile::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: linear-gradient(145deg, rgba(234, 240, 255, 0.2), rgba(234, 240, 255, 0) 42%);
          pointer-events: none;
        }

        .orbit-main {
          opacity: 1;
          filter: drop-shadow(0 18px 30px rgba(7, 10, 18, 0.62));
        }

        .orbit-small {
          opacity: 0.75;
          filter: blur(0.5px) drop-shadow(0 8px 14px rgba(7, 10, 18, 0.36));
        }

        @media (max-width: 768px) {
          .orbit-root {
            --orbit-scale: 0.72;
          }

          .orbit-hide-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
