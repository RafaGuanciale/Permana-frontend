import React from "react";
import permanaCoin from "../../images/brand/logo-coin/permana-coin-reverse-264.png";

export function Loader({
  message = "Preparando sua identidade olfativa",
  fullscreen = false,
  light = false,
  size = 140,
  style,
}) {
  const tone = light ? "default" : "reverse";
  const body = (
    <div
      className={"loader" + (light ? " loader--light" : "")}
      role="status"
      aria-live="polite"
      aria-busy="true"
      style={fullscreen ? undefined : style}
    >
      <div className="loader__coinwrap">
        <span className="loader__halo" aria-hidden="true"></span>
        <span
          className="loader__halo loader__halo--delayed"
          aria-hidden="true"
        ></span>
        <img
          src={permanaCoin}
          alt=""
          className="loader__coin"
          width={size}
          height={size}
        />
      </div>
      <div className="loader__text">
        <span className="loader__name">PERMANA</span>
        {message ? <span className="loader__msg">{message}</span> : null}
        <span className="loader__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );

  if (fullscreen) {
    return (
      <div className="loader--screen" style={style}>
        {body}
      </div>
    );
  }
  return body;
}

export default Loader;
