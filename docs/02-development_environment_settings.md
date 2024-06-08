# 開発環境の設定

開発環境の設定は、開発プロセスの基礎を形成します。以下のガイドでは、MacとWindowsでのnodeenv、Node.js、Yarnのインストール、Viteを使用したプロジェクトのセットアップ、そして環境変数の管理について説明します。

## 1. Macの場合のnodeenvとNode.jsとYarnのインストール

### 1.1 nodeenvのインストール

`nodeenv`は仮想環境内でNode.jsのバージョンを管理するためのツールです。

```bash
# Homebrewを使用してnodeenvをインストール
brew install nodeenv
```

### 1.2 Node.jsのインストール

```bash
# nodeenvを使用して特定のバージョンのNode.jsをインストール
nodeenv nenv --node=バージョン番号
# 例: nodeenv nenv --node=14.15.4

# 作成した環境に入る
source nenv/bin/activate
```

### 1.3 Yarnのインストール

```bash
# Node.jsがインストールされた後、npmを使用してYarnをインストール
npm install -g yarn
```

## 2. Windowsの場合のnodeenvとNode.jsとYarnのインストール

Windowsでもnodeenvを使うことは可能ですが、多くの場合、Node.jsの公式インストーラーを使用した方が簡単です。以下の手順でNode.jsとYarnをインストールできます。

### 2.1 Node.jsのインストール

- [Node.jsの公式サイト](https://nodejs.org/)からインストーラーをダウンロードして実行します。
- インストールプロセス中に、npmも一緒にインストールされます。

### 2.2 Yarnのインストール

```bash
# npmを使用してYarnをインストール
npm install -g yarn
```

## 3. Viteを使用したプロジェクトのセットアップ

Viteは、高速な開発サーバーとビルドツールを提供するフロントエンドのビルドツールです。

```bash
# Viteで新しいプロジェクトを作成
yarn create vite my-vue-app --template react-ts
```

- 上記のコマンドは、React + TypeScriptのテンプレートを使用して新しいプロジェクトを作成します。
- プロジェクト名(`my-vue-app`)とテンプレート(`react-ts`)は、プロジェクトや使用するフレームワークに応じて変更してください。

## 4. 環境変数の管理（開発、検証、本番）

プロジェクトには、開発(`development`)、検証(`staging`)、本番(`production`)の3つの環境があり、それぞれ異なる設定を持つことが一般的です。

- `.env.development` - 開発用の設定
- `.env.staging` - 検証用の設定
- `.env.production` - 本番用の設定

Viteは、プロジェクトルートにある`.env`ファイルを自動的に読み込みます。環境固有の設定を使用するには、ファイル名のプレフィックスとして`.local`（例: `.env.local`）を追加するか、環境名（例: `.env.development`）を使用します。

```plaintext
# .env.development
VITE_API_URL=https://dev.api.example.com

# .env.production
VITE_API_URL=https://api.example.com
```

- Viteで環境変数を使用するには、変数名を`VITE_`で始める必要があります。
- これらの環境変数は、`import.meta.env`を通じてアプリケーションのコードでアクセス可能です。
