# ESLint設定

Reactプロジェクトでのコード品質を維持し、一貫したコーディングスタイルを保持するために、静的コード解析ツールであるESLintの導入が推奨されます。このドキュメントでは、ESLintをインストールし、Standardスタイルガイドに準拠した設定方法を詳細に説明します。

## 1. ESLintのインストール

プロジェクトにESLintを導入するには、開発依存関係としてESLintをインストールします。以下のコマンドを実行してください。

```bash
yarn add --dev eslint
```

このコマンドは、プロジェクトにESLintを追加し、開発環境を向上させます。

## 2. ESLint設定ファイルの初期化

次に、ESLintの設定ファイルを生成します。以下のコマンドを実行してください。

```bash
npx eslint --init
```

このコマンドを実行すると、いくつかの質問が表示されます。以下のように回答することで、適切な設定が選択されます。

- **How would you like to use ESLint?**
  - `To check syntax, find problems, and enforce code style`

- **What type of modules does your project use?**
  - `JavaScript modules (import/export)`

- **Which framework does your project use?**
  - `React`

- **Does your project use TypeScript?**
  - `Yes`

- **Where does your code run?**
  - `Browser`

- **How would you like to define a style for your project?**
  - `Use a popular style guide`

- **Which style guide do you want to follow?**
  - `Standard`

- **What format do you want your config file to be in?**
  - `JSON`

- **Would you like to install them now?**
  - `Yes`

- **Which package manager do you want to use?**
  - `yarn`

これにより、`.eslintrc.json`ファイルがプロジェクトルートに生成され、Standardスタイルガイドに準拠するための関連パッケージがインストールされます。

## 3. npmスクリプトの追加（オプション）

`package.json`に以下のスクリプトを追加することで、コマンドラインからESLintを簡単に実行できます。

```json
"scripts": {
  "lint:es": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
  "lint:es:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'"
}
```

これにより、`yarn lint:es`を使用してコードを検査し、`yarn lint:es:fix`を使用して自動修正を試みることができます。

## 4. 追加の共有設定やプラグインのインストールと設定

a11y（アクセシビリティ）とReact HooksのルールをESLintに追加するため、以下のパッケージをインストールします。

```bash
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

## 5. `.eslintrc.json`の説明

以下は`.eslintrc.json`のサンプルです。このファイルには、ESLintの設定が記載されており、プロジェクトのコード品質を保つためのルールやプラグインが定義されています。各セクションの役割と特定の設定の意味を以下に説明します。

この`.eslintrc.json`ファイルは、ESLintの設定を記述したもので、コードの品質を保つためのルールやプラグインが定義されています。以下に、ファイル内の各セクションについて詳細に説明します。

### `env`:
このセクションでは、コードが実行される環境を指定します。
- **`browser`:** コードがブラウザ環境で実行されることを意味し、ブラウザ固有のグローバル変数（例: `window`, `document`）を事前定義します。
- **`es2023`:** ECMAScript 2023の機能を使用することを示します。これにより、ESLintは最新のJavaScriptの機能に対応できます。

### `extends`:
このセクションでは、ESLintに適用する一連の設定を指定します。
- **`eslint:recommended`:** ESLintの推奨設定を適用します。
- **`plugin:@typescript-eslint/recommended`:** TypeScriptに関する基本的なルールを適用します。
- **`plugin:@typescript-eslint/recommended-requiring-type-checking`:** 型チェックを要求するTypeScriptのルールを適用します。
- **`standard-with-typescript`:** JavaScript Standard Styleに準拠したTypeScriptのコーディングスタイルを適用します。
- **`plugin:jsx-a11y/recommended`:** JSX内でのアクセシビリティに関連するルールを適用します。
- **`plugin:react/recommended`:** React特有のルールを適用します。
- **`plugin:react/jsx-runtime`:** ReactのJSXランタイムに特化したルールを適用します。
- **`plugin:react-hooks/recommended`:** Reactのフックに関するベストプラクティスとルールを適用します。

### `parserOptions`:
このセクションでは、ESLintがコードをどのように解析するかに関する設定を行います。
- **`ecmaVersion`:** 使用するECMAScriptのバージョンを指定します。`"latest"`は最新バージョンを意味します。
- **`tsconfigRootDir`:** TypeScriptの設定ファイル`tsconfig.json`が置かれているディレクトリを指します。
- **`project`:** TypeScriptプロジェクトの設定ファイルのパスを指定します。
- **`sourceType`:** コードがECMAScriptモジュールを使用していることを示します。

### `plugins`:
このセクションでは、プロジェクトで使用するESLintのプラグインを指定します。
- **`@typescript-eslint`:** TypeScriptのコードを解析・検証するためのプラグイン。
- **`jsx-a11y`:** JSXのアクセシビリティルールを提供するプラグイン。
- **`react`:** React特有のルールを提供するプラグイン。
- **`react-hooks`:** Reactのフックに関するルールを提供するプラグイン。

### `rules`:
このセクションでは、プロジェクトの特定の要件に基づいて、個々のルールを有効化、無効化、またはカスタマイズします。
- **`padding-line-between-statements`:** 文の間に空行を入れるルールを定義します。ここでは、`return`の前には常に空行を入れるように設定されています。
- **`@typescript-eslint/consistent-type-definitions`:** TypeScriptの型定義の一貫性に関するルールを無効化しています。
- **`@typescript-eslint/explicit-function-return-type`:** 関数の戻り値の型を明示的にするルールを無効化しています。
- **`@typescript-eslint/explicit-module-boundary-types`:** モジュール境界の型を明示的にするルールを有効化しています。
- **`@typescript-eslint/no-misused-promises`:** Promiseの誤用に関するルールを有効化しています。
- **`@typescript-eslint/no-unused-vars`:** 使用されていない変数に関するルールを有効化し、特定のパターンを除外しています。
- **`@typescript-eslint/triple-slash-reference`:** トリプルスラッシュ参照に関するルールを有効化しています。
- **`import/extensions`:** インポート時の拡張子に関するルールを設定しています。
- **`import/order`:** インポート順に関するルールを設定しています。
- **`react/display-name`:** Reactのdisplay nameに関するルールを無効化しています。

### `overrides`:
このセクションでは、特定のファイルタイプや特定の状況に対して、特定のルールを上書きします。
- ここでは、`.tsx`ファイルに対して`react/prop-types`ルールを無効化しています。

### `settings`:
このセクションでは、ESLintの動作を細かく制御するための設定を行います。
- **`react`:** Reactのバージョンを自動検出するように設定しています。

この`.eslintrc.json`ファイルにより、ESLintは指定されたルールに従ってコードを検査し、一貫性のある高品質なコードベースを維持するのに役立ちます。プロジェクトのニーズやチームの好みに応じて、これらの設定をさらにカスタマイズすることが可能です。
