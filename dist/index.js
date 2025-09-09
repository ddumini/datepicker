"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  DatePicker: () => DatePicker
});
module.exports = __toCommonJS(index_exports);

// src/components/button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  children,
  state = "default",
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  size = "medium",
  onClick,
  ...props
}) => {
  const baseClasses = "w-full flex justify-center items-center rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 bg-transparent aspect-square border-none p-0";
  const sizeClasses = {
    small: "w-10",
    medium: "w-12",
    large: "w-14"
  };
  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    // variantClasses[variant],
    className
  ].filter(Boolean).join(" ");
  const handleClick = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      type,
      className: combinedClasses,
      disabled: disabled || loading,
      onClick: handleClick,
      "aria-disabled": disabled || loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "svg",
          {
            className: "animate-spin -ml-1 mr-2 h-4 w-4",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        ),
        children
      ]
    }
  );
};

// src/components/chevron-arrow-icon/ChevronArrowIcon.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ChevronArrowIcon = ({
  size = 24,
  color = "currentColor",
  direction = "right",
  className = "",
  onClick,
  "aria-label": ariaLabel
}) => {
  const getRotation = () => {
    switch (direction) {
      case "left":
        return "rotate-0";
      case "up":
        return "-rotate-90";
      case "down":
        return "rotate-90";
      case "right":
      default:
        return "";
    }
  };
  const getPoints = () => {
    switch (direction) {
      case "left":
        return "15 18 9 12 15 6";
      case "up":
        return "18 15 12 9 6 9";
      case "down":
        return "6 9 12 15 18 9";
      case "right":
      default:
        return "9 18 15 12 9 6";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "svg",
    {
      className: `${getRotation()} ${className}`,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      onClick,
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: getPoints() })
    }
  );
};

// src/components/container/Container.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Container = ({ children, className, theme = "primary" }) => {
  const baseClasses = "rounded-lg p-4 flex flex-col gap-4";
  const themeClasses = {
    primary: "border border-gray-200",
    secondary: "border border-amber-500",
    dark: "border border-gray-200"
  };
  const combinedClasses = [baseClasses, themeClasses[theme], className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: combinedClasses, children });
};

// src/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var DatePicker = (DatePickerProps) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Container, { theme: DatePickerProps.theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { size: DatePickerProps.size, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronArrowIcon, { direction: "left" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Sept 2025" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { size: DatePickerProps.size, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronArrowIcon, { direction: "right" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "grid grid-cols-7 gap-2", children: Array.from({ length: 31 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { size: DatePickerProps.size, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: index + 1 }) }) }, index)) })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DatePicker
});
