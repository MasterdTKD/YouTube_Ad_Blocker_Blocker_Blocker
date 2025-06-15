(() => {
  'use strict';
  const removeElements = () => {
    //ダイアログ""tp-yt-paperdialog"削除
    const dialog = document.querySelector('tp-yt-paper-dialog');
    if (dialog) dialog.remove();
  
    //バックドロップ削除
    const backdrop = document.querySelector('ytd-popup-container tp-yt-iron-overlay-backdrop');
    if (backdrop) backdrop.remove();

    //メッセージ削除
    const adblockNotice = document.querySelector('.style-scope.yt-notification-action-renderer');
    if (adblockNotice) adblockNotice.remove();

    document.body.style.overflow = 'auto';
  };

  chrome.storage.sync.get(['enabled'], (result) => {
    if (result.enabled === false) return;

    const observer = new MutationObserver(removeElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // 初回呼び出し
    removeElements();
  });
})();