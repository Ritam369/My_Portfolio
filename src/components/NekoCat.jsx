import { useState, useEffect } from "react";

const SPRITE_URL =
  "https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.gif";

const spriteSets = {
  idle:        [[-3, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  tired:       [[-3, -2]],
  sleeping:    [[-2, 0], [-2, -1]],
  N:  [[-1, -2], [-1, -3]],
  NE: [[ 0, -2], [ 0, -3]],
  E:  [[-3,  0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S:  [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W:  [[-4, -2], [-4, -3]],
  NW: [[-1,  0], [-1, -1]],
};

function runNeko() {
  const el = document.createElement("div");
  el.id = "oneko";
  Object.assign(el.style, {
    width: "32px",
    height: "32px",
    position: "fixed",
    left: "16px",
    top: "16px",
    zIndex: "9999",
    pointerEvents: "none",
    imageRendering: "pixelated",
    backgroundImage: `url(${SPRITE_URL})`,
  });
  document.body.appendChild(el);

  const SPEED = 10;
  let x = 32, y = 32, mx = 32, my = 32;
  let frameCount = 0, idleTime = 0, idleAnim = null, idleFrame = 0;
  let lastTs;

  const onMove = (e) => { mx = e.clientX; my = e.clientY; };
  document.addEventListener("mousemove", onMove);

  function setSprite(name, f) {
    const [sx, sy] = spriteSets[name][f % spriteSets[name].length];
    el.style.backgroundPosition = `${sx * 32}px ${sy * 32}px`;
  }

  function idle() {
    idleTime++;
    if (idleTime > 10 && !idleAnim && Math.random() < 0.005)
      idleAnim = ["sleeping", "scratchSelf"][Math.floor(Math.random() * 2)];

    if (idleAnim === "sleeping") {
      idleFrame < 8 ? setSprite("tired", 0) : setSprite("sleeping", Math.floor(idleFrame / 4));
      if (idleFrame++ > 192) { idleAnim = null; idleFrame = 0; }
    } else if (idleAnim === "scratchSelf") {
      setSprite("scratchSelf", idleFrame);
      if (idleFrame++ > 9) { idleAnim = null; idleFrame = 0; }
    } else {
      setSprite("idle", 0);
    }
  }

  function frame(ts) {
    frameCount++;
    if (!lastTs) lastTs = ts;
    if (ts - lastTs < 100) { requestAnimationFrame(frame); return; }
    lastTs = ts;

    const dx = x - mx, dy = y - my;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < SPEED || dist < 20) { idle(); requestAnimationFrame(frame); return; }

    idleAnim = null; idleFrame = 0; idleTime = 0;

    let dir = "";
    if (dy / dist > 0.5) dir += "N";
    else if (dy / dist < -0.5) dir += "S";
    if (dx / dist > 0.5) dir += "W";
    else if (dx / dist < -0.5) dir += "E";

    setSprite(dir, frameCount);

    x -= (dx / dist) * SPEED;
    y -= (dy / dist) * SPEED;
    x = Math.min(Math.max(16, x), window.innerWidth - 16);
    y = Math.min(Math.max(16, y), window.innerHeight - 16);
    el.style.left = `${x - 16}px`;
    el.style.top  = `${y - 16}px`;

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);

  return () => {
    document.removeEventListener("mousemove", onMove);
    el.remove();
  };
}

const NekoCat = () => {
  const [released, setReleased] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!released) return;
    return runNeko();
  }, [released]);

  if (released) return null;

  return (
    <div
      className="hidden md:block fixed top-2 left-2 z-50 cursor-pointer select-none"
      onClick={() => setReleased(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: 32,
          height: 32,
          imageRendering: "pixelated",
          backgroundImage: `url(${SPRITE_URL})`,
          backgroundPosition: "-96px -96px", // idle/sit frame
          filter: hovered ? "drop-shadow(0 0 6px #a78bfa)" : "none",
          transition: "filter 0.2s",
        }}
      />
      {hovered && (
        <span className="absolute left-10 top-1 text-xs bg-black/70 text-white px-2 py-0.5 rounded whitespace-nowrap pointer-events-none">
          Click me! 🐱
        </span>
      )}
    </div>
  );
};

export default NekoCat;
