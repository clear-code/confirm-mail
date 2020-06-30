/*
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
'use strict';

import '/extlib/l10n.js';

import {
  configs
} from '/common/common.js';

import * as Dialog from '/common/dialog.js';

const mCounter = document.getElementById('count');
const mSkipButton = document.getElementById('skip');
const mCancelButton = document.getElementById('cancel');

configs.$loaded.then(() => {
  mCounter.textContent = configs.countdownSeconds;

  if (configs.countdownAllowSkip) {
    Dialog.initAcceptButton(mSkipButton);
  }
  else {
    mSkipButton.style.display = 'none';
  }

  Dialog.initCancelButton(mCancelButton);

  Dialog.notifyReady();

  const start = Date.now();
  window.setInterval(() => {
    const rest = Math.ceil(configs.countdownSeconds - ((Date.now() - start) / 1000));
    mCounter.textContent = rest;
    if (rest <= 0)
      Dialog.accept();
  }, 250);
});
