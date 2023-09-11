import React, { useEffect, useRef, useState } from "react";

import GlslCanvas from "glslCanvas";

const Shader = (props) => {
  console.log("shader-mounted");
  const [reloaded, setReloaded] = useState(false);

  const canvasRef = useRef();
  const containerRef = useRef();

  const resizer = (canvas, container) => {
    // canvas.width = container.clientWidth + window.devicePixelRatio;
    // canvas.height = container.clientHeight + window.devicePixelRatio;
    // canvas.style.width = container.clientWidth + "px";
    // canvas.style.height = container.clientHeight + "px";
    setReloaded(true);
    if (reloaded) {
      location.reload();
    }
  };

  useEffect(() => {
    console.log("useEffect ran");
    const node = canvasRef.current;
    const container = containerRef.current;
    const sandbox = new GlslCanvas(canvasRef.current);

    if (props.setUniforms) {
      for (let k in props.setUniforms) {
        sandbox.setUniform(k, props.setUniforms[k]);
      }
    }

    const frag = `
      #ifdef GL_ES
      precision highp float;
      #endif

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform sampler2D image;

      varying vec2 v_texcoord;

      vec2 aspect(vec2 uv, float texture_ratio, float canvas_ratio) {
        // if canvas is too portrait for the texture, stretch across
        // else canvas too landscape for the texture, stretch down
        if (texture_ratio > canvas_ratio) {
            float diff = canvas_ratio / texture_ratio;
            uv.x *= diff;
            uv.x += (1.0 - diff) / 2.0;
        } else {
            float diff = texture_ratio / canvas_ratio;
            uv.y *= diff;
            uv.y += (1.0 - diff) / 2.0;
        }

        return uv;
      }

      void main(void) {
          vec2 uv = v_texcoord;
          uv.y = uv.y;

          float texture_ratio = 1200.0 / 1800.0;
          float canvas_ratio = u_resolution.x / u_resolution.y;

          vec2 coords = aspect(uv, texture_ratio, canvas_ratio);

          coords = mix(vec2(0.1, 0.1), vec2(0.9, 0.9), coords);

          vec2 mouse = u_mouse / u_resolution;

          float blocks = 12.0;
          float x = floor(uv.x * blocks) / blocks;
          float y = floor(uv.y * blocks) / blocks;

          vec2 distortion = 0.1 * vec2(
            sin(u_time * 0.5 + x * 1.0 + y * 1.5 + 0.005 * u_mouse.x * 2.0 + 0.001 * u_mouse.y ),
            cos(u_time * 0.2 + x * 1.1 + y * 2.0 + 0.005 * u_mouse.x * 0.5 + 0.001 * u_mouse.y )
        );
        

          vec4 color = texture2D(image, coords + distortion);

          gl_FragColor = color;
      }
    `;

    sandbox.load(frag);

    resizer(node, container);

    const handler = () => {
      console.log("handling resize");
      if (
        node.clientWidth !== container.clientWidth ||
        node.clientHeight !== container.clientHeight
      ) {
        console.log("if statement ran");
        resizer(canvasRef.current, containerRef.current);
      }
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [props.setUniforms]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Shader;
