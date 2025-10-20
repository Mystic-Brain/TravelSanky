
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>TravelSanky — Under Construction</title>

  <style>
    :root{
      --bg1:#140a2f;
      --bg2:#2a1b3e;
      --card:#111827;
      --glass: rgba(255,255,255,0.03);
      --accent-start: #30f0d6;
      --accent-end: #f2d94b;
      --muted: rgba(255,255,255,0.72);
      --soft: rgba(255,255,255,0.06);
    }

    *{box-sizing:border-box;margin:0;padding:0}
    html,body{height:100%}
    body{
      font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: radial-gradient(1200px 600px at 10% 10%, rgba(47,10,60,0.9), transparent 10%),
                  radial-gradient(1000px 500px at 95% 90%, rgba(12,5,26,0.85), transparent 10%),
                  linear-gradient(180deg, #140a2f 0%, #2a1b3e 60%, #0c0630 100%);
      color: white;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:40px;
    }

    .card{
      width: min(1200px, 94%);
      border-radius: 28px;
      padding: 80px 60px;
      position:relative;
      backdrop-filter: blur(8px) saturate(120%);
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015));
      box-shadow: 0 30px 60px rgba(8,8,20,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.03);
      overflow:hidden;
    }

    /* soft rounded glow edges */
    .card::before{
      content:"";
      position:absolute;
      inset: -40%;
      background: radial-gradient(closest-side, rgba(63,201,176,0.06), transparent 40%),
                  radial-gradient(closest-side, rgba(242,217,75,0.04), transparent 40%);
      transform: translateY(-20%);
      pointer-events:none;
    }

    h1{
      font-size: clamp(40px, 6vw, 96px);
      letter-spacing: -2px;
      margin-bottom: 36px;
      text-align:center;
      font-weight:800;
      background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 10px 40px rgba(0,0,0,0.6), 0 2px 12px rgba(50,20,80,0.45);
    }

    .sub{
      text-align:center;
      margin-bottom: 22px;
      font-weight:700;
      font-size: 22px;
      color:#f4f7ff;
      display:flex;
      gap:10px;
      align-items:center;
      justify-content:center;
    }

    .gear {
      display:inline-block;
      width:34px;height:34px;border-radius:50%;
      background: linear-gradient(180deg,#ffef9a,#ffb86b);
      box-shadow: 0 4px 18px rgba(255,180,80,0.18), inset 0 -2px 6px rgba(0,0,0,0.12);
      transform: rotate(0deg);
      animation: spin 4s linear infinite;
      display:flex;align-items:center;justify-content:center;
      font-weight:700;color:#2a1b3e;font-size:18px;
    }

    @keyframes spin{
      0%{transform:rotate(0deg)}
      100%{transform:rotate(360deg)}
    }

    .when{
      text-align:center;
      margin: 20px 0 36px;
      color: #9fb0d8;
      font-size:18px;
    }
    .when b{
      color: #12d1ff;
      font-weight:800;
    }

    .footer{
      text-align:center;
      color: rgba(255,255,255,0.6);
      font-size:14px;
      margin-top: 20px;
      display:flex;
      gap:8px;
      align-items:center;
      justify-content:center;
    }

    /* large subtle spotlight under the card */
    .glow {
      position:absolute;
      left:50%;
      bottom:-8%;
      transform:translateX(-50%);
      width:70%;
      height:240px;
      filter: blur(40px);
      background: radial-gradient(closest-side, rgba(0,0,0,0.35), transparent 60%);
      z-index:-1;
    }

    /* small responsiveness */
    @media (max-width:720px){
      .card{padding:48px 26px}
      .footer{font-size:13px}
    }
  </style>
</head>
<body>

  <div class="card" role="main" aria-label="TravelSanky under construction">
    <h1>TravelSanky Project</h1>

    <div class="sub">
      <span>is under construction</span>
      <span class="gear">⚙️</span>
    </div>

    <div class="when">
      It will be completed before <b>20 Nov</b>
    </div>

    <div class="footer">
      <span>Made with ❤️ by Sanket — travel portfolio coming soon</span>
    </div>

    <div class="glow" aria-hidden="true"></div>
  </div>

</body>
</html>
