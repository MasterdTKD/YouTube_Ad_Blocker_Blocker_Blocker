document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const toggleLabel = document.getElementById('toggle-label');

  // メッセージのローカライズ
  toggleLabel.textContent = chrome.i18n.getMessage('toggle_enable');

  chrome.storage.sync.get(['enabled'], (result) => {
    toggle.checked = result.enabled !== false;
  });

  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ enabled: toggle.checked });
  });
});
