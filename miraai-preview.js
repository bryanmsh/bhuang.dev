const preview = document.querySelector('[data-miraai-preview]');

function playMiraaiDemo({ muted = false, focus = false } = {}) {
  if (!preview?.isConnected) return;

  const video = document.createElement('video');
  video.className = 'miraai-demo-video';
  video.src = './assets/video/miraai-demo.mp4';
  video.poster = './images/miraai-preview.webp';
  video.controls = true;
  video.muted = muted;
  video.playsInline = true;
  video.setAttribute('aria-label', 'Miraai demo');

  preview.replaceWith(video);
  if (focus) video.focus();
  // Keep native controls available if autoplay is blocked.
  video.play().catch(() => {});
}

preview?.addEventListener('click', (event) => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  playMiraaiDemo({ focus: true });
});

function playLinkedMiraaiProject() {
  if (window.location.hash === '#miraai' && preview?.closest('#miraai')) {
    playMiraaiDemo({ muted: true });
  }
}

playLinkedMiraaiProject();
window.addEventListener('hashchange', playLinkedMiraaiProject);
