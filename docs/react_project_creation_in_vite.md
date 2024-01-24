Viteは、高速な開発サーバーとビルドツールを提供する新しいフロントエンド開発ツールで、ReactやVueなどのフレームワークで利用されています。
以下は、Yarnを使用してViteでTypescriptのReactプロジェクトを作成する手順です。

まず、以下のコマンドを実行して、Yarnを使ってViteをインストールします。

```bash
yarn create vite react-vite-project-template --template react-ts
```

上記のコマンドで `react-vite-project-template` というディレクトリにReact TypeScriptプロジェクトが作成されます。作成されたディレクトリに移動します。

```bash
cd react-vite-project-template
```

次に、プロジェクトの依存関係をインストールします。

```bash
yarn install
```

これでプロジェクトのセットアップが完了しました。以下のコマンドを使用して開発サーバーを起動します。

```bash
yarn dev
```

デフォルトでは、Viteは`http://localhost:3000`でアプリケーションを提供します。ブラウザでこのURLにアクセスすると、React TypeScriptプロジェクトが表示されます。

Viteの開発サーバーはホットモジュールリプレースメント（HMR）をサポートしており、ファイルを変更すると即座に反映されます。これにより、迅速な開発が可能となります。

以上で、Yarnを使用してViteでTypescriptのReactプロジェクトを作成する手順が完了です。