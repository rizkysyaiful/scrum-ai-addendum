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
     The ball races through "build" and lingers "in users' hands". */
  const loop = document.getElementById("loop");
  if (loop) {
    const path = document.getElementById("loop-path");
    const ball = document.getElementById("loop-ball");
    const trailBox = document.getElementById("loop-trail");
    const labels = [...loop.querySelectorAll(".st")];
    const total = path.getTotalLength();
    // [time share of a lap, path position reached at the end of it, station lit]
    const legs = [
      [0.07, 0.0, 0],  // rest at Idea
      [0.16, 0.25, 1], // Idea -> Build: fast
      [0.1, 0.44, 1],  // Build -> users: fast
      [0.4, 0.56, 2],  // in users' hands: slow
      [0.14, 0.75, 3], // -> Learn
      [0.13, 1.0, 3],  // -> back to Idea
    ];
    const at = (u) => {
      u = ((u % 1) + 1) % 1;
      let t0 = 0, p0 = 0;
      for (const [dt, p1, st] of legs) {
        if (u <= t0 + dt) return { p: p0 + (p1 - p0) * smooth((u - t0) / dt), st };
        t0 += dt; p0 = p1;
      }
      return { p: 1, st: 0 };
    };
    const place = (el, p) => {
      const pt = path.getPointAtLength(p * total);
      el.setAttribute("cx", pt.x); el.setAttribute("cy", pt.y);
    };
    const light = (st) => labels.forEach((l) => l.classList.toggle("on", +l.dataset.st === st));

    if (reduced) {
      place(ball, 0.5); light(2);
    } else {
      const LAP = 7600, TRAIL = 7;
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
