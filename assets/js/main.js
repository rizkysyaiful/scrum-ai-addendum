(() => {
  "use strict";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const smooth = (x) => x * x * (3 - 2 * x);

  /* ---- reveal on scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ---- hero: the learning loop ----
     Path positions run clockwise from Plan (0): Initial build 0.25, users 0.5,
     Review 0.75. Between the two meetings the line is orange, and its width
     shows where the time goes: thin where the ball moves at 2x (initial build),
     very thick where it moves at 1/4 (in users' hands). */
  const loop = document.getElementById("loop");
  if (loop) {
    const path = document.getElementById("loop-path");
    const ball = document.getElementById("loop-ball");
    const trailBox = document.getElementById("loop-trail");
    const band = document.getElementById("loop-band");
    const labels = [...loop.querySelectorAll(".st")];
    const total = path.getTotalLength();
    const pt = (p) => path.getPointAtLength((((p % 1) + 1) % 1) * total);

    // time spent per unit of path (1 = the speed around Plan and Review)
    const BAND = [0.125, 0.625]; // midway Plan→build to midway users→Review
    const ramp = (p, a, b, from, to) => from + (to - from) * smooth(Math.min(1, Math.max(0, (p - a) / (b - a))));
    const dens = (p) => {
      if (p < 0.09 || p >= 0.66) return 1;
      if (p < BAND[0]) return ramp(p, 0.09, BAND[0], 1, 0.5);
      if (p < 0.29) return 0.5;                              // initial build: 2x speed
      if (p < 0.46) return ramp(p, 0.29, 0.46, 0.5, 4);      // gradually slows down
      if (p < BAND[1]) return 4;                             // in users' hands: 1/4 speed
      return ramp(p, BAND[1], 0.66, 4, 1);
    };
    // lap time fraction -> path position
    const N = 1000, cum = new Float64Array(N + 1);
    for (let i = 0; i < N; i++) cum[i + 1] = cum[i] + dens((i + 0.5) / N);
    const posAt = (u) => {
      const target = (((u % 1) + 1) % 1) * cum[N];
      let lo = 0, hi = N;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= target) lo = m; else hi = m; }
      return (lo + (target - cum[lo]) / (cum[lo + 1] - cum[lo])) / N;
    };
    const station = (p) => (p >= 0.875 || p < 0.125 ? 0 : p < 0.375 ? 1 : p < 0.625 ? 2 : 3);

    // the orange band, as wide as the time spent there
    const width = (p) => 3 + ((dens(p) - 0.5) / 3.5) * 19;
    const L = [], R = [], S = 160, e = 0.0015;
    for (let i = 0; i <= S; i++) {
      const p = BAND[0] + (BAND[1] - BAND[0]) * (i / S);
      const a = pt(p - e), b = pt(p + e), c = pt(p), h = width(p) / 2;
      const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      const nx = -(b.y - a.y) / len, ny = (b.x - a.x) / len;
      L.push((c.x + nx * h).toFixed(2) + " " + (c.y + ny * h).toFixed(2));
      R.push((c.x - nx * h).toFixed(2) + " " + (c.y - ny * h).toFixed(2));
    }
    band.querySelector("path").setAttribute("d", "M" + L.join(" L") + " L" + R.reverse().join(" L") + "Z");
    band.querySelectorAll("circle").forEach((cap, i) => {
      const q = pt(BAND[i]);
      cap.setAttribute("cx", q.x); cap.setAttribute("cy", q.y); cap.setAttribute("r", width(BAND[i]) / 2);
    });

    const place = (el, p) => { const q = pt(p); el.setAttribute("cx", q.x); el.setAttribute("cy", q.y); };
    const light = (st) => labels.forEach((l) => l.classList.toggle("on", +l.dataset.st === st));
    const at = (u) => { const p = posAt(u); return { p, st: station(p) }; };

    if (reduced) {
      place(ball, 0.5); light(2);
    } else {
      const LAP = 10000, TRAIL = 7;
      const dots = [];
      for (let i = 0; i < TRAIL; i++) {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("class", "loop-dot");
        c.setAttribute("r", 8 - i * 0.9);
        c.setAttribute("opacity", 0.34 - i * 0.045);
        trailBox.appendChild(c); dots.push(c);
      }
      let visible = true, lit = -1;
      new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(loop);
      const start = performance.now() + 1500; // after the chalk line is drawn
      const frame = (now) => {
        if (visible && !document.hidden) {
          const u = Math.max(0, now - start) / LAP;
          const { p, st } = at(u);
          place(ball, p);
          dots.forEach((d, i) => place(d, at(u - (i + 1) * 0.006).p));
          if (st !== lit) { lit = st; light(st); }
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }

  /* ---- header menu on narrow screens ---- */
  const menuBtn = document.querySelector(".menu-btn");
  const siteNav = document.getElementById("site-nav");
  if (menuBtn && siteNav) {
    const setOpen = (open) => { siteNav.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); };
    menuBtn.addEventListener("click", () => setOpen(!siteNav.classList.contains("open")));
    siteNav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { setOpen(false); menuBtn.focus(); } });
    document.addEventListener("click", (e) => { if (!e.target.closest(".site-header")) setOpen(false); });
    matchMedia("(min-width: 1061px)").addEventListener("change", (m) => { if (m.matches) setOpen(false); });
  }

  /* ---- blog: writer tabs on phones (both columns show on desktop) ---- */
  const writers = document.getElementById("writers");
  if (writers) {
    const tabs = [...writers.querySelectorAll("[role=tab]")];
    const panels = [...writers.querySelectorAll(".writer")];
    const pick = (i, focus) => {
      tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; });
      panels.forEach((p, j) => p.classList.toggle("on", j === i));
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => pick(i));
      t.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); pick((i + 1) % tabs.length, true); }
        if (e.key === "ArrowLeft") { e.preventDefault(); pick((i + tabs.length - 1) % tabs.length, true); }
      });
    });
    pick(0);
  }

  /* ---- the core idea: two Sprints of the same length on one clock ----
     Both reach the Sprint Review together; what fills the ring differs. */
  const cycles = document.getElementById("cycles");
  if (cycles) {
    const rings = [...cycles.querySelectorAll(".cyc")].map((c) => {
      const path = c.querySelector(".cr-path");
      const val = c.querySelector("[data-val]");
      return {
        c, path, total: path.getTotalLength(),
        ball: c.querySelector(".cr-ball"),
        fills: [...c.querySelectorAll(".cr-fill")].map((el) => ({ el, a: +el.dataset.a, b: +el.dataset.b })),
        marks: [...c.querySelectorAll("[data-at]")].map((el) => ({ el, at: +el.dataset.at })),
        val, bar: c.querySelector(".cc-bar i"),
        vals: val ? val.dataset.vals.split(",").map(Number) : [],
        ats: val ? val.dataset.ats.split(",").map(Number) : [],
      };
    });
    const render = (r, p, review) => {
      const pt = r.path.getPointAtLength(p * r.total);
      r.ball.setAttribute("cx", pt.x); r.ball.setAttribute("cy", pt.y);
      const q = p * 100;
      r.fills.forEach((f) => { f.el.style.strokeDasharray = Math.max(0, Math.min(f.b, q) - f.a) + " 100"; });
      r.marks.forEach((m) => m.el.classList.toggle("done", q >= m.at));
      if (r.val) {
        const v = r.vals[r.ats.filter((a) => q >= a).length];
        if (r.val.textContent !== String(v)) {
          r.val.textContent = v;
          r.bar.style.width = (v / r.vals[r.vals.length - 1]) * 100 + "%";
        }
      }
      r.c.classList.toggle("at-review", review);
    };
    if (reduced || !("IntersectionObserver" in window)) {
      rings.forEach((r) => render(r, 1, true));
    } else {
      const LAP = 10500, PLAN = 500, RUN = 8000; // RUN..LAP: holding at the Sprint Review
      let start = 0, raf = 0;
      const frame = (now) => {
        const t = (now - start) % LAP;
        const p = Math.min(1, Math.max(0, t - PLAN) / (RUN - PLAN));
        if (!document.hidden) rings.forEach((r) => render(r, p, t >= RUN));
        raf = requestAnimationFrame(frame);
      };
      rings.forEach((r) => render(r, 0, false));
      new IntersectionObserver((e) => {
        cancelAnimationFrame(raf);
        if (e[0].isIntersecting) { start = performance.now(); raf = requestAnimationFrame(frame); }
      }, { threshold: 0.35 }).observe(cycles);
    }
  }

  /* ---- the risk: build time shrinks, the habit stays, scope grows ---- */
  const demo = document.getElementById("demo");
  if (demo) {
    const DUR = [2600, 2600, 2600, 3600, 4200, 3600];
    let step = 0, timer = 0, inView = false, manual = false;
    const count = demo.querySelector("[data-step-n]");
    const show = (n) => {
      step = n;
      demo.dataset.step = n;
      count.textContent = n + 1;
      for (let i = 1; i <= 5; i++) demo.classList.toggle("on-s" + i, i <= n);
    };
    demo.querySelectorAll(".step-btn").forEach((b) => b.addEventListener("click", () => {
      manual = true; clearTimeout(timer);
      show((step + DUR.length + +b.dataset.dir) % DUR.length);
    }));
    const next = () => { show((step + 1) % DUR.length); timer = setTimeout(next, DUR[step]); };
    const play = () => { clearTimeout(timer); show(0); timer = setTimeout(next, DUR[0]); };
    if (reduced || !("IntersectionObserver" in window)) show(5);
    else new IntersectionObserver((e) => {
      const was = inView; inView = e[0].isIntersecting;
      if (inView && !was && !manual) play();
      if (!inView) clearTimeout(timer);
    }, { threshold: 0.3 }).observe(demo);
  }

  /* ---- sprint length: rounds with users ---- */
  const len = document.getElementById("len");
  if (len) {
    const lanes = { short: len.querySelector(".ln-short"), full: len.querySelector(".ln-full") };
    const ROUNDS = { short: 2, full: 5 }, STEP = 1100, HOLD = 5000;
    let timers = [], inView = false;
    const reset = () => {
      timers.forEach(clearTimeout); timers = [];
      Object.values(lanes).forEach((l) => { l.classList.remove("done"); l.querySelectorAll(".rd").forEach((r) => r.classList.remove("on")); l.querySelector("[data-count]").textContent = "0"; });
    };
    const play = () => {
      reset();
      Object.entries(lanes).forEach(([k, l]) => {
        const rds = l.querySelectorAll(".rd");
        for (let i = 0; i < ROUNDS[k]; i++) timers.push(setTimeout(() => { rds[i].classList.add("on"); l.querySelector("[data-count]").textContent = i + 1; }, 600 + i * STEP));
        timers.push(setTimeout(() => l.classList.add("done"), 600 + ROUNDS[k] * STEP + 200));
      });
      timers.push(setTimeout(play, 600 + ROUNDS.full * STEP + HOLD));
    };
    const finish = () => { Object.entries(lanes).forEach(([k, l]) => { l.querySelectorAll(".rd").forEach((r, i) => r.classList.toggle("on", i < ROUNDS[k])); l.querySelector("[data-count]").textContent = ROUNDS[k]; l.classList.add("done"); }); };
    if (reduced || !("IntersectionObserver" in window)) finish();
    else new IntersectionObserver((e) => {
      const was = inView; inView = e[0].isIntersecting;
      if (inView && !was) play();
      if (!inView) { timers.forEach(clearTimeout); timers = []; }
    }, { threshold: 0.3 }).observe(len);
  }
})();
