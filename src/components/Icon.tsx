import * as React from "react";

export type IconName =
  | "phone"
  | "mail"
  | "mapPin"
  | "globe"
  | "checkCircle"
  | "shield"
  | "leaf"
  | "clipboard"
  | "star"
  | "award"
  | "key"
  | "home"
  | "house"
  | "building"
  | "church"
  | "baby"
  | "broom"
  | "chat"
  | "handshake"
  | "sparkles"
  | "heart"
  | "clock"
  | "lightbulb"
  | "camera"
  | "x";

type Props = {
  name: IconName;
  className?: string;
  size?: number;
  title?: string;
};

const baseSvgProps: React.SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function Icon({ name, className, size = 18, title }: Props) {
  const ariaProps =
    title && title.trim().length > 0
      ? ({ role: "img", "aria-label": title } as const)
      : ({ "aria-hidden": true } as const);

  return (
    <svg
      {...baseSvgProps}
      {...ariaProps}
      width={size}
      height={size}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L9.9 11a16 16 0 0 0 3.1 3.1l1.5-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9Z" />
    </>
  ),
  mail: (
    <>
      <path d="M4 4h16v16H4z" opacity={0} />
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z" />
      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </>
  ),
  globe: (
    <>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M2 12h20" />
      <path d="M12 2c2.5 2.8 4 6.2 4 10s-1.5 7.2-4 10c-2.5-2.8-4-6.2-4-10s1.5-7.2 4-10Z" />
    </>
  ),
  checkCircle: (
    <>
      <path d="M22 12a10 10 0 1 1-6-9" />
      <path d="m22 4-10 10-3-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13C4 7 11 4 20 4c0 9-3 16-9 16Z" />
      <path d="M8 14c4-1 7-4 9-9" />
    </>
  ),
  clipboard: (
    <>
      <path d="M16 4h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1" />
      <path d="M9 4h6v3H9z" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
  star: (
    <>
      <path d="m12 2 3 7 7 .6-5.3 4.6 1.7 7-6.4-3.8-6.4 3.8 1.7-7L2 9.6 9 9l3-7Z" />
    </>
  ),
  award: (
    <>
      <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
    </>
  ),
  key: (
    <>
      <path d="M21 2l-2 2" />
      <path d="M7.5 14.5a4.5 4.5 0 1 1 3.2-7.7 4.5 4.5 0 0 1-3.2 7.7Z" />
      <path d="M10.7 7.8 21 18v3h-3l-2-2-2 2-2-2-2 2-2-2" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 10v11h14V10" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  house: (
    <>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 10v11h12V10" />
    </>
  ),
  building: (
    <>
      <path d="M3 22h18" />
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
      <path d="M10 6h2" />
      <path d="M10 10h2" />
      <path d="M10 14h2" />
      <path d="M14 6h2" />
      <path d="M14 10h2" />
      <path d="M14 14h2" />
    </>
  ),
  church: (
    <>
      <path d="M12 2v6" />
      <path d="M10 4h4" />
      <path d="M6 22V10l6-4 6 4v12" />
      <path d="M9 22v-5a3 3 0 0 1 6 0v5" />
    </>
  ),
  baby: (
    <>
      <path d="M12 21a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z" />
      <path d="M9.5 10.5h0" />
      <path d="M14.5 10.5h0" />
      <path d="M9.5 16c1.2 1 3.8 1 5 0" />
      <path d="M9 7c.8-1 2-1.5 3-1.5S14.2 6 15 7" />
    </>
  ),
  broom: (
    <>
      <path d="M3 21h6" />
      <path d="M7 21 21 7" />
      <path d="M14 6l4 4" />
      <path d="M5 21v-4a2 2 0 0 1 2-2h2" />
    </>
  ),
  chat: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </>
  ),
  handshake: (
    <>
      <path d="M12 12 9 9a2.5 2.5 0 0 0-3.5 0L3 11.5" />
      <path d="M12 12l3 3a2.5 2.5 0 0 0 3.5 0L21 12.5" />
      <path d="M7 13l2 2" />
      <path d="M10 16l1 1" />
      <path d="M14 13l-2 2" />
      <path d="M16 15l-1 1" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z" />
      <path d="M5 13l.8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8L5 13Z" />
      <path d="M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13Z" />
    </>
  ),
  heart: (
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </>
  ),
  clock: (
    <>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.4 1 2v1h6v-1c0-.6.3-1.4 1-2a7 7 0 0 0-4-12Z" />
    </>
  ),
  camera: (
    <>
      <path d="M4 7h4l2-2h4l2 2h4v14H4V7Z" />
      <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </>
  ),
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </>
  ),
};
