
## MSW（Mock Service Worker）の概要

MSW（Mock Service Worker）は、ブラウザとNode.jsの両方で実行できるAPIモッキングライブラリです。サービスワーカーを利用して実際のネットワークリクエストをインターセプトし、定義したモックデータでレスポンスを返すことで、フロントエンド開発中やテスト中にAPIのモックを簡単に作成することができます。これにより、バックエンドの準備が整っていない場合や、外部APIとの統合テストを行う際にも便利です。

## インストール

以下の手順に従って、MSWをプロジェクトにインストールします。ターミナルで以下のコマンドを実行してください（yarnを使用）:

```zsh
yarn add msw@2.2.1
```

## 設定手順

1. **サービスワーカーの初期化**

    プロジェクトのルートにある `public` ディレクトリ内に、MSWのサービスワーカーを初期化します。このステップは、コマンドラインから次のコマンドを実行することで行えます:

    ```zsh
    npx msw init public/
    ```

    これにより、`mockServiceWorker.js` ファイルが `public` ディレクトリに追加されます。

2. **モックサーバの設定**

    モック定義を作成するために、`src/mocks` ディレクトリを作成し、その中に `handlers.js` と `browser.js` を作成します。

    - `handlers.js`: これはAPIリクエストをモックするためのハンドラを定義するファイルです。
    - `browser.js`: これはブラウザ環境でMSWを起動するためのスクリプトです。

    **`src/mocks/handlers.js`**:

    ```javascript
    import { rest } from 'msw';

    // APIエンドポイントのモックハンドラ
    export const handlers = [
        // GETリクエストのモック
        rest.get('/api/messages', (req, res, ctx) => {
            return res(ctx.json({ messages: ['Message 1', 'Message 2'] }));
        }),

        // POSTリクエストのモック
        rest.post('/api/messages', (req, res, ctx) => {
            return res(ctx.status(201), ctx.json({ message: 'Message created' }));
        }),

        // PUTリクエストのモック
        rest.put('/api/messages/:id', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json({ message: 'Message updated' }));
        }),

        // DELETEリクエストのモック
        rest.delete('/api/messages/:id', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json({ message: 'Message deleted' }));
        }),
    ];
    ```

    **`src/mocks/browser.js`**:

    ```javascript
    import { setupWorker } from 'msw';
    import { handlers } from './handlers';

    // MSWのサービスワーカーを設定・起動
    export const worker = setupWorker(...handlers);
    ```

3. **アプリケーションでMSWを起動する**

    開発モードでアプリケーションを実行している間にのみMSWを起動するようにします。これを行うために、アプリケーションのエントリポイント（通常は `src/main.tsx` または `src/index.js`）で、以下のコードを追加します:

    ```javascript
    if (process.env.NODE_ENV === 'development') {
        const { worker } = require('./mocks/browser');
        worker.start();
    }
    ```
