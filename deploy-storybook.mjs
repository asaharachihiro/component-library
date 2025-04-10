#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import "zx/globals";

const REPO_NAME = "component-library"; //

// ビルド
try {
  await $`npm run build-storybook`;
} catch (error) {
  console.warn("Warning: build-storybook completed with warnings.");
}

// ビルドされたものの修正
await within(async () => {
  cd("storybook-static");

  // .nojekyllファイルを作成
  await $`touch .nojekyll`;

  // iframe.htmlがassets/iframe.*.jsを読み込めるように修正
  const iframehtml = await fs.readFile("iframe.html", "utf-8");
  await fs.writeFile(
    "iframe.html",
    iframehtml.replace(/\/assets/g, `/${REPO_NAME}/assets`)
  );

  // assets内の*.jsや*.map.jsファイルにも同様のパス修正が必要
  const assetjs_path = await glob("assets/*.@(map|js)");
  await assetjs_path.forEach(async (path) => {
    const assetjs = await fs.readFile("./" + path, "utf-8");
    await fs.writeFile(
      "./" + path,
      assetjs.replace(/assets\//g, `${REPO_NAME}/assets/`)
    );
  });
});

// キャッシュ削除
await $`rm -rf node_modules/.cache/gh-pages`;
