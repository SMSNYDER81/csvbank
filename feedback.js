// feedback.js — CSV Bank
// Toast + exit-intent modal, each shown once per visitor
(function () {
  const script = document.currentScript;
  const repo = script ? script.getAttribute('data-repo') : 'https://github.com/SMSNYDER81/csvbank/issues';

  const TOAST_KEY = 'fb_toast_seen';
  const EXIT_KEY  = 'fb_exit_seen';

  function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
      #fb-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(100px);background:#1a1916;color:#f8f7f4;padding:12px 20px;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;display:flex;align-items:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.2);z-index:9999;transition:transform 0.4s ease,opacity 0.4s ease;opacity:0;white-space:nowrap;}
      #fb-toast.show{transform:translateX(-50%) translateY(0);opacity:1;}
      #fb-toast a{color:#3fb950;text-decoration:none;font-weight:500;}
      #fb-toast a:hover{text-decoration:underline;}
      #fb-toast-close{background:none;border:none;color:#9a9890;cursor:pointer;font-size:16px;line-height:1;padding:0 0 0 8px;}
      #fb-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9998;display:flex;align-items:center;justify-content:center;}
      #fb-modal{background:#ffffff;border-radius:14px;padding:32px;max-width:400px;width:90%;font-family:'DM Sans',sans-serif;box-shadow:0 8px 40px rgba(0,0,0,0.15);}
      #fb-modal h3{font-size:18px;font-weight:600;color:#1a1916;margin-bottom:10px;}
      #fb-modal p{font-size:14px;color:#5a5750;line-height:1.6;margin-bottom:20px;}
      .fb-btns{display:flex;gap:10px;flex-wrap:wrap;}
      .fb-btn-primary{background:#1a7f4e;color:white;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;text-decoration:none;font-family:'DM Sans',sans-serif;}
      .fb-btn-primary:hover{background:#2da066;}
      .fb-btn-ghost{background:none;border:1px solid #e2e0d8;color:#5a5750;padding:10px 20px;border-radius:8px;font-size:14px;cursor:pointer;font-family:'DM Sans',sans-serif;}
      .fb-btn-ghost:hover{border-color:#9a9890;color:#1a1916;}
    `;
    document.head.appendChild(s);
  }

  function showToast() {
    if (localStorage.getItem(TOAST_KEY)) return;
    const t = document.createElement('div');
    t.id = 'fb-toast';
    t.innerHTML = `💬 Find a bug or have a suggestion? <a href="${repo}" target="_blank" rel="noopener">Share feedback</a><button id="fb-toast-close" aria-label="Close">×</button>`;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 100);
    setTimeout(() => dismissToast(t), 7000);
    document.getElementById('fb-toast-close').addEventListener('click', () => dismissToast(t));
    localStorage.setItem(TOAST_KEY, '1');
  }

  function dismissToast(t) {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }

  function showExitModal() {
    if (localStorage.getItem(EXIT_KEY)) return;
    localStorage.setItem(EXIT_KEY, '1');
    const o = document.createElement('div');
    o.id = 'fb-overlay';
    o.innerHTML = `<div id="fb-modal"><h3>Before you go…</h3><p>Did the converter work well for you? We'd love to hear about your experience — or if you hit any issues.</p><div class="fb-btns"><a class="fb-btn-primary" href="${repo}" target="_blank" rel="noopener">Leave feedback</a><button class="fb-btn-ghost" id="fb-modal-close">No thanks</button></div></div>`;
    document.body.appendChild(o);
    document.getElementById('fb-modal-close').addEventListener('click', () => o.remove());
    o.addEventListener('click', e => { if (e.target === o) o.remove(); });
  }

  function init() {
    injectStyles();
    setTimeout(showToast, 4000);
    document.addEventListener('mouseleave', function onLeave(e) {
      if (e.clientY < 10) { showExitModal(); document.removeEventListener('mouseleave', onLeave); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
