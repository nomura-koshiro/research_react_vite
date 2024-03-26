# 目次

- [目次](./00-table_of_contents.md)

- [プロジェクトの概要](./01-introduction.md)

  - [プロジェクトの目的](./01-introduction.md)

  - [技術スタック](./01-introduction.md)

    - [フロントエンド](./01-introduction.md)

    - [スタイリング](./01-introduction.md)

    - [状態管理](./01-introduction.md)

    - [テスト](./01-introduction.md)

    - [コード品質](./01-introduction.md)

  - [フォルダ構成](./01-introduction.md)

  - [コーディング規約](./01-introduction.md)

  - [開発とデプロイメント](./01-introduction.md)

- [開発環境の設定](./02-development_environment_settings.md)

  - [1. Macの場合のnodeenvとNode.jsとYarnのインストール](./02-development_environment_settings.md)

    - [1.1 nodeenvのインストール](./02-development_environment_settings.md)

- [Homebrewを使用してnodeenvをインストール](./02-development_environment_settings.md)

    - [1.2 Node.jsのインストール](./02-development_environment_settings.md)

- [nodeenvを使用して特定のバージョンのNode.jsをインストール](./02-development_environment_settings.md)

- [例: nodeenv nenv --node=14.15.4](./02-development_environment_settings.md)

- [作成した環境に入る](./02-development_environment_settings.md)

    - [1.3 Yarnのインストール](./02-development_environment_settings.md)

- [Node.jsがインストールされた後、npmを使用してYarnをインストール](./02-development_environment_settings.md)

  - [2. Windowsの場合のnodeenvとNode.jsとYarnのインストール](./02-development_environment_settings.md)

    - [2.1 Node.jsのインストール](./02-development_environment_settings.md)

    - [2.2 Yarnのインストール](./02-development_environment_settings.md)

- [npmを使用してYarnをインストール](./02-development_environment_settings.md)

  - [3. Viteを使用したプロジェクトのセットアップ](./02-development_environment_settings.md)

- [Viteで新しいプロジェクトを作成](./02-development_environment_settings.md)

  - [4. 環境変数の管理（開発、検証、本番）](./02-development_environment_settings.md)

- [.env.development](./02-development_environment_settings.md)

- [.env.production](./02-development_environment_settings.md)

- [TypeScript設定](./03-typescript_settings.md)

  - [tsconfig.jsonの概要](./03-typescript_settings.md)

    - [compilerOptions](./03-typescript_settings.md)

    - [include](./03-typescript_settings.md)

    - [references](./03-typescript_settings.md)

- [コンポーネントとフォルダ構造](./04-components_and_folder_structure.md)

  - [概要](./04-components_and_folder_structure.md)

  - [ディレクトリ構成](./04-components_and_folder_structure.md)

    - [src](./04-components_and_folder_structure.md)

      - [assets](./04-components_and_folder_structure.md)

      - [components](./04-components_and_folder_structure.md)

      - [config](./04-components_and_folder_structure.md)

      - [features](./04-components_and_folder_structure.md)

        - [features/<機能名>](./04-components_and_folder_structure.md)

          - [routes](./04-components_and_folder_structure.md)

          - [components](./04-components_and_folder_structure.md)

          - [api](./04-components_and_folder_structure.md)

          - [types](./04-components_and_folder_structure.md)

      - [hooks](./04-components_and_folder_structure.md)

      - [lib](./04-components_and_folder_structure.md)

      - [providers](./04-components_and_folder_structure.md)

      - [routes](./04-components_and_folder_structure.md)

      - [stores](./04-components_and_folder_structure.md)

      - [test](./04-components_and_folder_structure.md)

      - [types](./04-components_and_folder_structure.md)

      - [utils](./04-components_and_folder_structure.md)

  - [コン](./04-components_and_folder_structure.md)

    - [共通コンポーネント](./04-components_and_folder_structure.md)

    - [ルーティングとページコンポーネント](./04-components_and_folder_structure.md)

  - [まとめ](./04-components_and_folder_structure.md)

- [ステート管理](./05-state_management.md)

  - [ステートのタイプ](./05-state_management.md)

  - [ステート管理のツール](./05-state_management.md)

    - [TanStack Query](./05-state_management.md)

      - [使用例](./05-state_management.md)

    - [Zustand](./05-state_management.md)

      - [使用例](./05-state_management.md)

    - [useState](./05-state_management.md)

      - [使用例](./05-state_management.md)

- [APIの設計と使用](./06-design_and_use_of_api.md)

  - [1. API 呼び出しの設計方針](./06-design_and_use_of_api.md)

    - [概要](./06-design_and_use_of_api.md)

    - [基本原則](./06-design_and_use_of_api.md)

    - [実装サンプル](./06-design_and_use_of_api.md)

  - [2. モックサーバ(MSW)の使用](./06-design_and_use_of_api.md)

    - [概要](./06-design_and_use_of_api.md)

    - [設定方法](./06-design_and_use_of_api.md)

    - [モックサーバ設定例](./06-design_and_use_of_api.md)

  - [3. レスポンスとエラーハンドリング](./06-design_and_use_of_api.md)

    - [概要](./06-design_and_use_of_api.md)

    - [react-error-boundaryの使用](./06-design_and_use_of_api.md)

    - [エラーハンドリングサンプル](./06-design_and_use_of_api.md)

- [フォーム管理](./07-form-management.md)

  - [フォーム管理の基本概念](./07-form-management.md)

  - [セットアップ](./07-form-management.md)

  - [フォーム要素のカスタムコンポーネントの作成](./07-form-management.md)

    - [FormTextInput.tsx](./07-form-management.md)

    - [FormTextArea.tsx](./07-form-management.md)

    - [ステップ 1: 必要なパッケージのインストール](./08-styling.md)

    - [ステップ 2: Tailwind CSSの設定](./08-styling.md)

    - [ステップ 3: Tailwind CSSをプロジェクトに適用](./08-styling.md)

    - [ステップ 4: ViteプロジェクトでTailwind CSSを使用](./08-styling.md)

    - [ステップ 5: Headless UIとclsxの使用](./08-styling.md)

    - [PlopをReactプロジェクトに導入する方法](./09-create_components.md)

      - [1. インストール方法](./09-create_components.md)

      - [2. package.jsonへのnpmコマンド追記](./09-create_components.md)

      - [3. 設定ファイル作成](./09-create_components.md)

      - [4. テンプレートファイル作成とファイルの内容の説明](./09-create_components.md)

      - [5. コンポーネント作成のデモ](./09-create_components.md)

    - [Storybookのインストールとインタラクションテストガイド](./10-storybook.md)

      - [前提条件](./10-storybook.md)

      - [手順](./10-storybook.md)

        - [1. 不足パッケージの追加](./10-storybook.md)

        - [2. Storybookのインストールと初期設定](./10-storybook.md)

        - [3. Storybookのインストール確認](./10-storybook.md)

        - [4. Storybookの起動](./10-storybook.md)

        - [注意](./10-storybook.md)

      - [インタラクションテストの実装](./10-storybook.md)

      - [まとめ](./10-storybook.md)

- [ESLint設定](./11-eslint.md)

  - [1. ESLintのインストール](./11-eslint.md)

  - [2. ESLint設定ファイルの初期化](./11-eslint.md)

  - [3. npmスクリプトの追加（オプション）](./11-eslint.md)

  - [4. 追加の共有設定やプラグインのインストールと設定](./11-eslint.md)

  - [5. .eslintrc.jsonの説明](./11-eslint.md)

    - [env:](./11-eslint.md)

    - [extends:](./11-eslint.md)

    - [parserOptions:](./11-eslint.md)

    - [plugins:](./11-eslint.md)

    - [rules:](./11-eslint.md)

    - [overrides:](./11-eslint.md)

    - [settings:](./11-eslint.md)

- [Prettier設定](./12-prettier.md)

  - [1. PrettierとESLintの競合を回避する設定](./12-prettier.md)

    - [インストール方法](./12-prettier.md)

  - [2. ESLint設定の更新](./12-prettier.md)

    - [.eslintrc.json の例](./12-prettier.md)

  - [3. Prettierの設定](./12-prettier.md)

    - [.prettierrc.json の例](./12-prettier.md)

  - [結論](./12-prettier.md)

- [dependencies](./99-library.md)
