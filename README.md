> [!CAUTION]
> こちらは自身の勉強用のプロジェクトです。

# Next.js 14 Blog(without backend)

## プロジェクトの始め方

まず、このプロジェクトをクローンし、パッケージをインストールしてください。

```zsh
$ git clone [prefix]mustardlake5/nextjs-14-blog.git
$ cd nextjs-14-blog
$ yarn install
```

次に、Next.js の開発サーバをポート 3000 番で立ち上げます。

```zsh
$ yarn dev
```

このプロジェクトはバックエンドの API や DB が存在しないので、json-server を使用してローカルで動作確認をするようにしています。
擬似的な API エンドポイントに必要な json-server 用モックファイル(articles.mock.json)を準備し、json-server をポート 3001 番で立ち上げてください。

```zsh
$ cp articles.mock.json{.template,}
$ yarn json-server
```

以上で、ブログの準備は完了です。

ブラウザから[http://localhost:3000](http://localhost:3000)へアクセスし、右上の「記事を書く」から最初の記事を書いてください。
