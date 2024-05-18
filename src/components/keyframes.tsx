import * as React from "react";

interface IProps {
  name: string;
  delay: string;
  [key: string]: React.CSSProperties | string;
}

export const Keyframes = (props: IProps) => {
  const toCss = (cssObject: React.CSSProperties | string) =>
    typeof cssObject === "string"
      ? cssObject
      : Object.keys(cssObject).reduce((accumulator, key) => {
          const cssKey = key.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`);
          const cssValue = (cssObject as any)[key].toString().replace("'", "");
          return `${accumulator}${cssKey}:${cssValue};`;
        }, "");

  return (
    <style>
      {`@keyframes key${props.name} {
        ${Object.keys(props)
          .map((key) => {
            return ["from", "to"].includes(key)
              ? `${key} { ${toCss(props[key])} }`
              : /^_[0-9]+$/.test(key)
                ? `${key.replace("_", "")}% { ${toCss(props[key])} }`
                : "";
          })
          .join(" ")}
      }
      .${props.name} {
        animation: key${props.name} ${props.delay || 1}s linear infinite;
      }
      `}
    </style>
  );
};
