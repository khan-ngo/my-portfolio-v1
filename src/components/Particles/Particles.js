import React from "react";
import Particles from "react-particles-js";

const ParticleEffects = () => {
  return (
    <Particles
      params={{
        particles: {
          number: { value: 180, density: { enable: true, value_area: 1000 } },
          color: {
            // value: ["#E31B6D", "#00d8ff"],
            value: "#9d967c",
          },
          shape: {
            type: "dots",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 1,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 225,
            color: "#fff",
            opacity: 0.9,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 500, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleEffects;
