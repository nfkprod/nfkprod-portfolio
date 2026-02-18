import Image from "next/image";

type FloatingObjectsProps = {
  depth: "front" | "back";
};

const orbitIcons = [
  { src: "/icons/ae-custom.png", alt: "Ae icon", x: 31, y: 25, size: 118, rotate: -8, z: 40 },
  { src: "/icons/nuke-custom.png", alt: "Nuke icon", x: 53, y: 18, size: 92, rotate: 5, z: 35 },
  { src: "/icons/ai-custom.png", alt: "Ai icon", x: 74, y: 31, size: 104, rotate: -6, z: 45 },
  { src: "/icons/unreal-custom.png", alt: "Unreal icon", x: 73, y: 58, size: 90, rotate: 7, z: 25 },
  { src: "/icons/blender-custom.png", alt: "Blender icon", x: 51, y: 76, size: 98, rotate: -9, z: 30 },
  { src: "/icons/cinema-logo.png", alt: "Cinema icon", x: 26, y: 60, size: 94, rotate: 8, z: 25 }
];

const backGlows = [
  { x: 52, y: 50, size: 280, color: "rgba(255,60,166,0.12)" },
  { x: 66, y: 36, size: 186, color: "rgba(45,226,255,0.14)" },
  { x: 34, y: 64, size: 176, color: "rgba(181,27,255,0.16)" }
];

const burstRays = [
  { angle: -122, length: 128 },
  { angle: -84, length: 146 },
  { angle: -36, length: 152 },
  { angle: 14, length: 144 },
  { angle: 60, length: 136 },
  { angle: 118, length: 124 }
];

export default function FloatingObjects({ depth }: FloatingObjectsProps) {
  if (depth === "back") {
    return (
      <div className="relative h-full w-full">
        {backGlows.map((glow, index) => (
          <div
            key={`${glow.x}-${glow.y}-${index}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              left: `${glow.x}%`,
              top: `${glow.y}%`,
              width: `${glow.size}px`,
              height: `${glow.size}px`,
              background: `radial-gradient(circle, ${glow.color} 0%, rgba(0,0,0,0) 72%)`
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(234,240,255,0.08)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(45,226,255,0.06)]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,226,255,0.54)_0%,rgba(255,60,166,0.26)_42%,rgba(255,60,166,0)_75%)] blur-[10px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(234,240,255,0.18)] opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(234,240,255,0.28)] bg-[radial-gradient(circle,rgba(234,240,255,0.18),rgba(18,26,58,0)_72%)]" />

      {burstRays.map((ray, index) => (
        <div
          key={`${ray.angle}-${ray.length}-${index}`}
          className="pointer-events-none absolute left-1/2 top-1/2 h-px origin-left bg-[linear-gradient(90deg,rgba(45,226,255,0.26),rgba(255,60,166,0.16),rgba(255,60,166,0))]"
          style={{
            width: `${ray.length}px`,
            transform: `translateY(-50%) rotate(${ray.angle}deg)`
          }}
        />
      ))}

      {orbitIcons.map((icon, index) => (
        <div
          key={`${icon.src}-${index}`}
          className="absolute animate-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            zIndex: icon.z,
            transform: `translate(-50%, -50%) rotate(${icon.rotate}deg)`,
            animationDelay: `${index * 0.35}s`,
            animationDuration: `${5.6 + index * 0.6}s`
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            fill
            sizes={`${icon.size}px`}
            className="object-contain drop-shadow-[0_16px_28px_rgba(9,15,58,0.55)]"
          />
        </div>
      ))}
    </div>
  );
}
