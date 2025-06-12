window.addEventListener('load', () => {
  const ring   = document.getElementById('progress-circle');
  const doneEl = document.getElementById('done-message');

  // アニメーション開始
  setTimeout(() => {
    ring.style.strokeDashoffset = 0;
  }, 100); // iOS 対策で少し遅延

  // 60 秒後に完了メッセージ
  setTimeout(() => {
    doneEl.hidden = false;
    doneEl.classList.add('show');
  }, 60_000);

  // Service Worker 登録 (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.error);
  }
});
