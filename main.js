window.addEventListener('load', () => {
  const ring   = document.getElementById('progress-circle');
  const doneEl = document.getElementById('done-message');
  const midEl  = document.getElementById('mid-message');

  // アニメーション開始
  setTimeout(() => {
    ring.style.strokeDashoffset = 0;
  }, 100); // iOS 対策で少し遅延

  // 58 秒後に中間メッセージをフェードアウト
  setTimeout(() => {
    midEl.classList.add('fade-out');
  }, 58_000);

  // 60 秒後に完了メッセージ
  setTimeout(() => {
    midEl.hidden = true;
    doneEl.hidden = false;
    doneEl.classList.add('show');
  }, 60_000);

  // Service Worker 登録 (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.error);
  }
});
