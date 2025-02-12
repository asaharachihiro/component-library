#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import "zx/globals";

// ビルド
await $`npm run build-storybook`;

// ビルドされたものの修正
await within(async () => {
  cd("storybook-static");

  // .nojekyllファイルを作成
  await $`touch .nojekyll`;
});

// キャッシュ削除
await $`rm -rf node_modules/.cache/gh-pages`;
