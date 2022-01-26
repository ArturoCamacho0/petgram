import * as React from "react";
import { Svg } from "./styles";

export const Logo = (props) => (
  <Svg
    width={376.55}
    height={118.4}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="61.725 15.8 376.55 118.4"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter id="a">
        <feFlood floodColor="#ff6d00" floodOpacity={0.7} result="c1" />
        <feFlood floodColor="#ffc53f" floodOpacity={0.7} result="c3" />
        <feComposite operator="in" in="c1" in2="SourceAlpha" result="text-c1" />
        <feComposite operator="in" in="c3" in2="SourceAlpha" result="text-c3" />
        <feOffset in="text-c1" dx={3} dy={3} result="text1" />
        <feOffset in="text-c3" dx={-3} dy={-3} result="text3" />
        <feBlend
          in="SourceGraphic"
          in2="text1"
          mode="multiply"
          result="text4"
        />
        <feBlend in="text4" in2="text3" mode="multiply" />
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M152.015 96.14q-2.61 2.64-6.17 4.06-3.57 1.43-7.1 1.43-3.54 0-4.78-.62l-1.92 10.54-12.58 1.24 8.55-44.02 10.11-1.05-.81 4.27q2.61-4.4 8-4.4 6.08 0 9.3 3.91 2.85 3.53 2.85 8.93 0 5.39-1.42 9.23-1.43 3.85-4.03 6.48Zm-14.02-17.39-3.28 18.17q1.3 1.11 2.91 1.11t2.54-.62q.93-.62 1.62-1.86 1.86-3.34 3.34-13.51.44-2.98.44-5.89 0-2.92-.65-3.85-.65-.93-1.89-.93-3.79 0-5.03 7.38Zm48.3 11.16q1.55 1.06 1.55 3.38 0 2.33-1.18 3.81-1.17 1.49-3.1 2.48-3.96 2.05-8.24 2.05t-6.79-.93q-2.51-.93-4.19-2.67-3.28-3.28-3.28-9.3 0-9.36 5.08-15.06 5.46-6.14 14.94-6.14 5.89 0 8.81 2.48 2.17 1.86 2.17 4.9 0 10.91-18.85 10.91-.25 1.61-.25 2.98 0 2.85 1.27 3.93 1.27 1.09 3.63 1.09t4.87-1.09q2.51-1.08 3.56-2.82Zm-12.65-6.76q4.41 0 6.95-2.72 2.54-2.61 2.54-6.76 0-1.43-.53-2.2-.52-.78-1.58-.78-1.05 0-1.95.41-.9.4-1.83 1.76-2.29 3.1-3.6 10.29Zm21.52 11.04q0-1.67.87-5.89l3.28-16.74h-3.66l.25-1.86q7.44-2.23 14.63-7.69h2.98l-1.49 6.76h4.84l-.56 2.79h-4.77l-3.17 16.74q-.8 3.84-.8 5.15 0 2.97 2.6 3.59-.62 2.11-2.85 3.35-2.23 1.24-5.39 1.24-3.17 0-4.96-1.98-1.8-1.99-1.8-5.46Zm25.54-19.72q2.11-2.97 5.3-4.96 3.2-1.98 7.1-1.98 3.91 0 5.77 1.24l12.15-1.24-4.22 23.81q-2.17 12.15-6.75 16.92-4.41 4.53-12.96 4.53-6.51 0-10.23-2.05-3.72-2.04-3.72-5.45 0-2.54 1.92-4t4.9-1.46q2.6 0 4.59 1.18 1.17.62 1.73 1.49-1.42 1.24-1.42 3.28 0 2.67 2.48 2.67 4.15 0 6.51-9.8.68-2.66 1.24-5.33-2.79 3.41-9.12 3.41-4.4 0-6.94-2.11-2.54-2.1-2.54-7.06 0-3.1 1.05-6.61 1.05-3.5 3.16-6.48Zm8.06 13.27q0 4.22 2.17 4.22 1.49 0 2.92-1.61 1.11-1.31 1.55-3.23l3.16-15.93q-.31-.06-.62-.19-.62-.25-1.43-.25-3.78 0-6.01 6.2-1.74 4.84-1.74 10.79Zm44.08-4.77q2.24-3.97 2.24-8 0-2.67-1.93-2.67-1.48 0-3.03 2.55-1.62 2.54-2.11 5.82l-3.23 19.72-12.83 1.24 6.32-32.86 10.23-1.24-1.11 6.26q3.04-6.26 9.86-6.26 3.59 0 5.54 1.86 1.96 1.86 1.96 5.67 0 3.82-2.51 6.23-2.51 2.42-6.79 2.42-1.86 0-2.61-.74Zm15.6 15.56q-1.46-1.61-2.11-4.15-.65-2.55-.65-6.7t1.42-7.94q1.43-3.78 4.03-6.51 5.34-5.7 14.14-5.7 3.16 0 5.46 1.05l10.6-1.05-4.59 24.18q-.19.74-.19 2.11 0 1.36.84 2.23.84.87 2.08.99-.62 2.11-2.89 3.35-2.26 1.24-4.8 1.24t-4.25-.96q-1.7-.96-2.2-2.57-.99 1.55-3.1 2.54-2.11.99-4.93.99t-5.11-.74q-2.3-.75-3.75-2.36Zm13.08-25.17q-.71 1.11-1.33 3.01-.62 1.89-1.65 6.94-1.02 5.05-1.02 8.65 0 3.59.56 4.65.56 1.05 1.55 1.05 1.98 0 3.44-1.89t2.01-5.24l3.29-18.16q-1.3-1.12-2.82-1.12-1.52 0-2.42.5-.9.49-1.61 1.61Zm67.8 28.27q-7.51 0-7.51-5.83 0-2.54 1.09-7.47 1.08-4.93 1.46-6.91.86-4.53.86-5.95 0-3.17-2.35-3.17-1.55 0-3.04 2.14t-2.17 6.42l-3.84 19.53-12.09 1.24 3.34-16.86q.56-2.79 1.06-5.96.49-3.16.49-3.65 0-2.86-2.1-2.86-1.43 0-2.98 2.11t-2.42 6.45l-3.78 19.53-12.21 1.24 6.51-32.86 10.1-1.24-1.05 6.26q1.61-3.35 4.59-4.8 2.97-1.46 7.62-1.46 2.67 0 4.4 1.3 1.74 1.3 2.3 3.41 1.05-2.17 3.75-3.44t6.01-1.27q3.32 0 4.96.71 1.65.72 2.64 1.89 1.67 2.17 1.67 6.14 0 3.91-1.67 12.03-.87 3.97-.87 5.42 0 1.46.84 2.33.83.87 2.07.99-.62 2.11-2.76 3.35-2.13 1.24-4.92 1.24Z"
        fill="#e7008a"
      />
    </g>
  </Svg>
);
