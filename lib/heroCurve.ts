// @ts-nocheck
// Hero animation: a smooth curve drawn along the bottom of the hero. A point travels along it,
// carrying its tangent line, and leaves the derivative f′(x) traced behind it as a dashed line.
// Follows the mouse on desktop. Pauses off-screen. Respects reduced motion.
// Plain JS on purpose: the same function is pasted into the static preview page.
export function startHeroCurve(cv, readout) {
  const ctx = cv.getContext("2d");
  if (!ctx) return () => {};
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W = 0, H = 0, raf = 0, visible = true, mouseX = null, px = null, frameNo = 0;
  let colors = {};
  const t0 = performance.now();
  let last = t0;

  const css = (n) => getComputedStyle(cv).getPropertyValue(n).trim();
  const readColors = () => { colors = { line: css("--line"), muted: css("--muted"), accent: css("--accent") }; };
  const rgba = (hex, a) => {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  };
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.max(1, Math.round(W * dpr)); cv.height = Math.max(1, Math.round(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduce) draw(performance.now());
  };

  // geometry: the curve sits in a band along the bottom of the hero, clear of the text
  const k1 = 0.0052, k2 = 0.0123;
  const band = () => ({ base: H - Math.min(H * 0.17, 150), amp: Math.min(H * 0.06, 50) });
  const g = (x, p) => Math.sin(x * k1 + p) + 0.5 * Math.sin(x * k2 - p * 1.3);
  const gp = (x, p) => k1 * Math.cos(x * k1 + p) + 0.5 * k2 * Math.cos(x * k2 - p * 1.3);
  const y = (x, p) => { const b = band(); return b.base - b.amp * g(x, p); };
  const slope = (x, p) => band().amp * gp(x, p); // maths slope, up = positive
  const maxSlope = () => band().amp * (k1 + 0.5 * k2);

  const host = cv.parentElement;
  const onMove = (e) => { if (e.pointerType === "mouse") mouseX = e.clientX - cv.getBoundingClientRect().left; };
  const onLeave = () => { mouseX = null; };
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerleave", onLeave);

  const ease = (v) => 1 - Math.pow(1 - Math.max(0, Math.min(1, v)), 3);

  function draw(now) {
    const dt = Math.min(now - last, 50) / 1000; last = now;
    const el = (now - t0) / 1000;
    if (frameNo++ % 60 === 0) readColors();
    const p = reduce ? 0.8 : el * 0.11;                     // slow breathing of the curve
    const reveal = reduce ? 1 : ease((el - 2.2) / 1.8);      // draw-in once the typing has started
    const { base, amp } = band();

    // where the point should be: follow the mouse, else glide left↔right with eased ends
    const s = 0.5 - 0.5 * Math.cos((el * 2 * Math.PI) / 16);
    const target = mouseX ?? W * (0.08 + 0.84 * s);
    px = px == null || reduce ? target : px + (target - px) * (1 - Math.exp(-dt * 5));
    const pxv = Math.min(px, W * reveal);

    ctx.clearRect(0, 0, W, H);

    // faint grid and axis
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgba(colors.line, 0.55);
    for (let gx = 32; gx < W; gx += 64) { ctx.beginPath(); ctx.moveTo(gx + 0.5, base - amp * 2.2); ctx.lineTo(gx + 0.5, H); ctx.stroke(); }
    ctx.setLineDash([2, 6]);
    ctx.strokeStyle = rgba(colors.muted, 0.35);
    ctx.beginPath(); ctx.moveTo(0, base + 0.5); ctx.lineTo(W * reveal, base + 0.5); ctx.stroke();
    ctx.setLineDash([]);

    if (reveal <= 0) return;
    const end = W * reveal;

    // the curve f(x)
    ctx.lineWidth = 1.6; ctx.strokeStyle = rgba(colors.muted, 0.85);
    ctx.beginPath();
    for (let x = 0; x <= end; x += 3) x ? ctx.lineTo(x, y(x, p)) : ctx.moveTo(x, y(x, p));
    ctx.stroke();

    // the derivative f′(x), traced behind the point
    const ms = maxSlope();
    ctx.setLineDash([4, 5]); ctx.lineWidth = 1.4; ctx.strokeStyle = rgba(colors.accent, 0.7);
    ctx.beginPath();
    for (let x = 0; x <= pxv; x += 3) { const dy = base - (slope(x, p) / ms) * amp * 0.9; x ? ctx.lineTo(x, dy) : ctx.moveTo(x, dy); }
    ctx.stroke(); ctx.setLineDash([]);

    // tangent at the point, fading out at both ends
    const py = y(pxv, p), m = slope(pxv, p);
    const L = Math.min(W * 0.16, 220), dx = L / Math.sqrt(1 + m * m);
    const x1 = pxv - dx, y1 = py + m * dx, x2 = pxv + dx, y2 = py - m * dx;
    const tg = ctx.createLinearGradient(x1, y1, x2, y2);
    tg.addColorStop(0, rgba(colors.accent, 0)); tg.addColorStop(0.5, rgba(colors.accent, 1)); tg.addColorStop(1, rgba(colors.accent, 0));
    ctx.lineWidth = 2; ctx.strokeStyle = tg;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();

    // drop line from the point to its derivative value
    const dyv = base - (m / ms) * amp * 0.9;
    ctx.setLineDash([2, 4]); ctx.lineWidth = 1; ctx.strokeStyle = rgba(colors.accent, 0.5);
    ctx.beginPath(); ctx.moveTo(pxv, py); ctx.lineTo(pxv, dyv); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = colors.accent;
    ctx.beginPath(); ctx.arc(pxv, dyv, 2.5, 0, Math.PI * 2); ctx.fill();

    // the point, with a gentle pulse
    const pulse = reduce ? 0 : (Math.sin(el * 3) + 1) / 2;
    ctx.strokeStyle = rgba(colors.accent, 0.25 + 0.2 * pulse); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(pxv, py, 10 + 3 * pulse, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(pxv, py, 4.5, 0, Math.PI * 2); ctx.fill();

    if (readout && frameNo % 4 === 0) readout.textContent = (m / ms).toFixed(3);
  }

  function frame(now) {
    draw(now);
    raf = !reduce && visible ? requestAnimationFrame(frame) : 0;
  }

  readColors();
  const ro = new ResizeObserver(resize); ro.observe(cv);
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf && !reduce) { last = performance.now(); raf = requestAnimationFrame(frame); }
  });
  io.observe(cv);
  resize();
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
  };
}
