import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base strokeWidth={2.25} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </Base>
  );
}

export function BurgerIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Base>
  );
}

export function RestaurantIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2M9 11v11M17 2c-1.6 1.5-2.2 3.1-2.2 5.1S15.4 11 17 12.5V22" />
    </Base>
  );
}

export function RetailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </Base>
  );
}

export function HotelIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 19v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <path d="M3 19v2M21 19v2M3 15h18v4H3zM13 12h6a2 2 0 0 1 2 2v3" />
    </Base>
  );
}

export function OfficeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </Base>
  );
}

export function SalonIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.6 8.4 19 19M8.6 15.6 19 5" />
    </Base>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Base>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.6 10.5c1.2 2.4 3.5 4.7 5.9 5.9l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1z" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" />
    </Base>
  );
}

export function MultiDeviceIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <path d="M6 18h6" />
      <rect x="17" y="9" width="5" height="9" rx="1" />
    </Base>
  );
}

export function ScheduleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M12 14v3l2 1" />
    </Base>
  );
}

export function RemoteIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="1.8" />
      <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10.5 10.5 0 0 0 0 14.2M19.1 4.9a10.5 10.5 0 0 1 0 14.2" />
    </Base>
  );
}

export function GroupsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="18" cy="9" r="2.3" />
      <path d="M16.5 14c2.8.4 4.5 2.3 4.5 5" />
    </Base>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0V8z" />
      <path d="M12 16v5" />
    </Base>
  );
}

export function SizesIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </Base>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </Base>
  );
}

export function ToggleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="2" y="7" width="20" height="10" rx="5" />
      <circle cx="16" cy="12" r="3" />
    </Base>
  );
}
