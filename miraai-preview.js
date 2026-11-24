const preview = document.querySelector('[data-miraai-preview]');

preview?.addEventListener('click', (event) => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();

  const video = document.createElement('video');
  video.className = 'miraai-demo-video';
  video.src = './assets/video/miraai-demo.mp4';
  video.poster = './images/miraai-preview.webp';
  video.controls = true;
  video.playsInline = true;
  video.setAttribute('aria-label', 'Miraai demo');

  preview.replaceWith(video);
  video.focus();
  // Native controls still allow playback if the browser rejects play().
  video.play().catch(() => {});
});
