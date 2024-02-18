# Reactアプリケーションドキュメント - プロジェクトの概要

## プロジェクトの目的
このReactプロジェクトは、(ここにプロジェクトの目的や概要を記載します。例えば、ユーザーが商品を閲覧し、購入できるEコマースウェブアプリケーションの開発など。)

## 技術スタック

### フロントエンド
- **React 18:** ユーザーインターフェースを構築するためのJavaScriptライブラリ。
- **TypeScript:** JavaScriptに静的型付けを提供し、安全で読みやすいコードの記述をサポート。
- **Vite:** フロントエンドのビルドツール、超高速なHMR(ホットモジュールリプレイスメント)を提供。

### スタイリング
- **CSS/SASS:** スタイリングのための言語。コンポーネントの見た目を整えます。

### 状態管理
- **Tanstack Query:** サーバーステートの管理を行う。
- **Zustand:** グローバルステートの管理を行う。
- **useState:** ローカルステートの管理を行う。

### テスト
- **Vitest:** 高パフォーマンスなJavaScriptテストランナー。Jestと互換性があり、Viteとシームレスに統合されています。
- **Storybook:** UIコンポーネントの開発とテストのためのツール。各コンポーネントの異なる状態を視覚化し、インタラクションテストをサポート。
- **Mock Service Worker (MSW):** ネットワークリクエストをモックし、テストの信頼性を高めるためのライブラリ。

### コード品質
- **ESLint:** コードの構文チェックとスタイルガイドの適用を行う。
- **Prettier:** コードフォーマッター。コードの書式を統一し、読みやすく保つ。

## フォルダ構成

```plaintext
src/
├── assets        // 画像やフォントなどの静的ファイル
├── components    // アプリケーション全体で使用できる共通コンポーネント
├── config        // 環境変数などをエクスポートする
├── features      // 機能ベースモジュール
│ ├ features/<機能名>/routes       // 実際の画面を描画するtsxを格納
│ ├ features/<機能名>/components   // routesから参照するcomponentを格納
│ ├ features/<機能名>/api          // api呼び出しに関する処理を格納
│ └ features/<機能名>/types        // 型宣言に関するファイルを格納
├── hooks        // アプリケーション全体で使用できる共通hooks
├── lib          // ライブラリをアプリケーション用に設定して再度エクスポート
├── providers    // プロバイダー、サーバーステートなどのProviderを記述
├── routes       // ルーティングの設定
├── stores       // グローバルステートストア
├── test         // テストユーティリティとモックサーバ
├── types        // アプリケーション全体で使用される基本的な型の定義
└── utils        // 共通のユーティリティ関数
```

## コーディング規約
- **コンポーネントの作成:** アロー関数を使用し、型は`FC`の使用を省略する。
- **関数の作成:** アロー関数を使用する。
- **型定義:** `type`を使用し、`interface`の使用を避ける。
- **フォーム:** react-hook-formを使用し、yupでバリデーションを行う。

## 開発とデプロイメント
- **開発環境:** Viteを使用し、環境変数ファイルを商用、検証、開発の3つで管理する。
- **デプロイメント:** (CI/CDパイプラインの構築やホスティングサービスへのデプロイ方法を記載します。)

この概要は、プロジェクトの高レベルな構造と技術選択を説明しています。プロジェクトの具体的な要件や機能に応じて、さらに詳細なドキュメントや設計書を作成することをお勧めします。