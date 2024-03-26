# Prettier設定

Reactアプリケーション開発では、コードの品質を保つために、コードスタイルと構文のチェックが重要です。このドキュメントでは、コードフォーマッターであるPrettierと、コード構文チェッカーであるESLintを統合する方法について説明します。

## 1. PrettierとESLintの競合を回避する設定

PrettierとESLintは、共にコードの書式を整えるツールですが、設定によっては相互に競合することがあります。これを解消するために、ESLintのルールをPrettierに合わせる必要があります。

### インストール方法

以下のコマンドを使用して、必要なパッケージをインストールします。`eslint-config-prettier`はESLintとPrettierの競合を解消するための共有設定です。

```bash
yarn add -D prettier eslint-config-prettier
```

## 2. ESLint設定の更新

`.eslintrc.json`ファイルを編集し、`extends`セクションの末尾に`prettier`を追加します。これにより、Prettierと競合する可能性のあるESLintのルールが無効になります。

### `.eslintrc.json` の例

```json
{
  "extends": [
    // 既存の設定
    "prettier"
  ]
}
```

## 3. Prettierの設定

プロジェクトのルートに`.prettierrc.json`ファイルを作成し、Prettierの設定を記述します。以下は一例ですが、プロジェクトの要件に応じて設定を調整できます。

### `.prettierrc.json` の例

```json
{
  "singleQuote": true, // シングルクォートを使用
  "endOfLine": "auto"  // 改行コードの設定を自動にする
}
```

## 結論

PrettierとESLintを併用することで、コードの一貫性を保ちつつ、スタイルと構文の両方で高品質なコードを保つことができます。これらの設定を適切に行うことで、開発効率の向上にもつながります。
