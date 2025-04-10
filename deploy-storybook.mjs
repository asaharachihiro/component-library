#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import "zx/globals";

const REPO_NAME = "component-library"; //

// ビルド
await $`npm run build-storybook`;

// ビルドされたものの修正
if (!(await fs.exists("storybook-static"))) {
  console.error("Error: storybook-static directory does not exist.");
  process.exit(1);
}
await within(async () => {
  cd("storybook-static");

  // .nojekyllファイルを作成
  await $`touch .nojekyll`;

  // iframe.htmlが存在するか確認
  if (!(await fs.exists("iframe.html"))) {
    console.error("Error: iframe.html does not exist.");
    process.exit(1);
  }

  // iframe.htmlがassets/iframe.*.jsを読み込めるように修正
  const iframehtml = await fs.readFile("iframe.html", "utf-8");
  await fs.writeFile(
    "iframe.html",
    iframehtml.replace(/\/assets/g, `/${REPO_NAME}/assets`)
  );

  // assets内の*.jsや*.map.jsファイルにも同様のパス修正が必要
  const assetjs_path = await glob("assets/*.@(map|js)");
  for (const path of assetjs_path) {
    const assetjs = await fs.readFile(path, "utf-8");
    await fs.writeFile(
      path,
      assetjs.replace(/assets\//g, `${REPO_NAME}/assets/`)
    );
  }
});

// キャッシュ削除
await $`rm -rf node_modules/.cache/gh-pages`;
