# 北区滝野川少年野球連盟

東京都北区で活動する少年野球連盟の公式サイトです。

公開URL: https://yoji-t.github.io/takinogawa-baseball/

Notion から移した静的な HTML サイトです。ビルドツールや外部サービスは使っていません。`main` ブランチへ push すると、GitHub Actions が GitHub Pages に公開します。

## 最初の1回だけ

リポジトリを作った直後は、Pages がまだ有効になっていません。所有者のアカウントで次を一度だけ行ってください。

1. GitHub でこのリポジトリを開く
2. **Settings** → **Pages**
3. **Build and deployment** の **Source** を **GitHub Actions** にする
4. **Actions** タブの「Deploy GitHub Pages」を開き、失敗している実行の **Re-run jobs** を押す

これ以降は、`main` への push だけで公開されます。反映まで数分かかることがあります。

## ページ

| ファイル | 内容 |
| --- | --- |
| `index.html` | ホーム。大会結果、試合日程、お知らせ |
| `tournament/index.html` | トーナメント表・試合結果 |
| `contact/index.html` | 連絡・問合せ先 |
| `css/style.css` | 見た目 |
| `js/site.js` | スマホ用メニューと、画像の拡大表示 |
| `images/` | 写真とトーナメント表 |

共通の案内は各 HTML のヘッダーとフッターにあります。ページを増やすときは、3ファイルのナビと `sitemap.xml` を一緒に直してください。

## 内容の直し方

1. 該当する HTML を編集します。試合は、その大会の「試合日程」にある日付のブロックへ、同じ形で行を足します。
2. 写真を載せるときは `images/` にファイルを置き、近くの写真と同じ `figure` をコピーして `src` と説明文を変えます。画像はクリック（タップ）で拡大します。
3. 変更を `main` ブランチに push します。
4. GitHub の Actions タブで「Deploy GitHub Pages」が成功すれば、数分でサイトに反映されます。

ローカルで見るときは、このフォルダで次を実行します。

```sh
python3 -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます。

## 検索用のファイル

- 各ページの `title` と `description`
- OGP（`og:title` など）
- `sitemap.xml`
- `robots.txt`
- 連盟情報の構造化データ（SportsOrganization）

## 原文との違い

本文は Notion の原文に合わせています。次だけ直しています。

- 「４月１十九日」は、大会期間に書かれている 4月19日（土）と一致する誤記だったため「４月１９日」にしました。開会式の日付と、4月19日の試合日程の見出しの2か所です。
- メールアドレスの `\_` は Markdown の記法なので、実際のアドレス（アンダースコア）に戻しています。

連絡ページの題名には「加盟チーム案内」とありますが、移行元の本文にチーム一覧はありませんでした。チーム案内を載せる場合は `contact/index.html` に節を追加してください。
