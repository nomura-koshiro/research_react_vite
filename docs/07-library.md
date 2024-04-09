
### Dependencies

1. **@hookform/resolvers**
   - 説明: react-hook-formのためのバリデーションリゾルバーのコレクションです。Yup、Zod、Superstructなどの外部バリデーションライブラリと連携します。
   - 公式ドキュメント: [Hookform Resolvers](https://github.com/react-hook-form/resolvers)

2. **@tanstack/react-query**
   - 説明: データフェッチング、キャッシング、同期、アップデートのためのライブラリです。サーバー状態の管理を効率的に行うことができます。
   - 公式ドキュメント: [React Query](https://tanstack.com/query/v4/docs/overview)

3. **@tanstack/react-query-devtools**
   - 説明: React Queryの開発者ツールです。データフェッチの状態やキャッシュデータを簡単に確認できます。
   - 公式ドキュメント: [React Query Devtools](https://tanstack.com/query/v4/docs/devtools/overview)

4. **axios**
   - 説明: ブラウザやNode.jsで動作するPromiseベースのHTTPクライアント。簡単にHTTPリクエストを行うことができます。
   - 公式ドキュメント: [Axios](https://axios-http.com/)

5. **clsx**
   - 説明: classNameを条件付きで結合するための小さなユーティリティライブラリです。コンポーネントのクラスを動的に組み合わせる際に便利です。
   - 公式ドキュメント: [clsx GitHub](https://github.com/lukeed/clsx)

6. **lodash**
   - 説明: JavaScriptのユーティリティライブラリで、配列、数値、オブジェクト、文字列などを操作する便利なメソッドを提供します。
   - 公式ドキュメント: [Lodash](https://lodash.com/)

7. **react**
   - 説明: ユーザーインターフェイスを構築するためのJavaScriptライブラリです。コンポーネントベースで開発を行うことができます。
   - 公式ドキュメント: [React](https://reactjs.org/)

8. **react-dom**
   - 説明: React要素をDOMにレンダリングするためのライブラリです。Reactと一緒に使用されます。
   - 公式ドキュメント: [React DOM](https://reactjs.org/docs/react-dom.html)

9.  **react-error-boundary**
    - 説明: Reactコンポーネントのエラーバウンダリを簡単に実装できるライブラリです。エラーをキャッチして、代替のUIを表示することができます。
    - 公式ドキュメント: [React Error Boundary](https://github.com/bvaughn/react-error-boundary)

10. **react-hook-form**
    - 説明: React用の軽量でパフォーマンスに優れたフォームライブラリです。簡単にフォームのバリデーションと送信を扱うことができます。
    - 公式ドキュメント: [React Hook Form](https://react-hook-form.com/)

11. **react-router-dom**
    - 説明: React用のルーティングライブラリです。シングルページアプリケーションのナビゲーションを実現します。
    - 公式ドキュメント: [React Router](https://reactrouter.com/)

12. **yup**
    - 説明: JavaScriptオブジェクトのスキーマ検証を行うためのライブラリです。主にフォームのバリデーションに使用されます。
    - 公式ドキュメント: [Yup](https://github.com/jquense/yup)

13. **zustand**
    - 説明: React用の状態管理ライブラリです。グローバルステートを簡単に作成し、使用することができます。
    - 公式ドキュメント: [Zustand](https://github.com/pmndrs/zustand)

### DevDependencies

1. **@playwright/test**
   - 説明: ブラウザの自動化とエンドツーエンドテストを可能にするNode.jsライブラリです。複数のブラウザでテストを実行する機能を提供します。
   - 公式ドキュメント: [Playwright Test](https://playwright.dev/)

2. **@storybook/addon-essentials**, **@storybook/addon-interactions**, **@storybook/addon-links**, **@storybook/addon-onboarding**, **@storybook/blocks**, **@storybook/jest**, **@storybook/react**, **@storybook/react-vite**, **@storybook/test**, **@storybook/testing-library**
   - 説明: Storybookは、UIコンポーネントの開発とテストのためのオープンソースツールです。これらのアドオンは、ストーリーブック内での拡張機能や機能を提供します。
   - 公式ドキュメント: [Storybook](https://storybook.js.org/)

3. **@types/eslint**, **@types/jsdom**, **@types/lint-staged**, **@types/lodash**, **@types/node**, **@types/react**, **@types/react-dom**
   - 説明: これらはTypeScriptのための型定義ファイルです。特定のライブラリやモジュールをTypeScriptで利用する際に型情報を提供します。
   - 公式ドキュメント: [DefinitelyTyped](https://definitelytyped.org/)

4. **@typescript-eslint/eslint-plugin**, **@typescript-eslint/parser**
   - 説明: TypeScriptコードの静的解析を行うためのESLintプラグインとパーサーです。TypeScriptのコーディングスタンダードとベストプラクティスを適用するのに役立ちます。
   - 公式ドキュメント: [TypeScript ESLint](https://typescript-eslint.io/)

5. **@vitejs/plugin-react**
   - 説明: ViteとReactアプリケーションを統合するための公式プラグインです。Reactの高速なホットリロードや最適化されたビルドを提供します。
   - 公式ドキュメント: [Vite Plugin React](https://vitejs.dev/guide/features.html#react)

6. **eslint**
   - 説明: JavaScriptおよびTypeScriptのコードを静的解析するためのツールです。コードのバグやスタイルの問題を検出するのに役立ちます。
   - 公式ドキュメント: [ESLint](https://eslint.org/)

7. **jsdom**
   - 説明: JavaScriptのための仮想DOM環境を提供します。サーバーサイドでのDOM操作やテストを可能にします。
   - 公式ドキュメント: [JSDOM](https://github.com/jsdom/jsdom)

8. **lint-staged**
   - 説明: Gitのステージングエリアに追加されたファイルに対して、lintや他のコマンドを自動的に実行するツールです。
   - 公式ドキュメント: [Lint Staged](https://github.com/okonet/lint-staged)

9. **msw**
   - 説明: 開発とテストのためのAPIモッキングライブラリです。リアルなサーバーレスポンスを模倣して、フロントエンドのテストを改善します。
   - 公式ドキュメント: [MSW](https://mswjs.io/)

10. **plop**
    - 説明: ファイルジェネレーターツールです。定義されたテンプレートを使用して、繰り返し必要なコードのスニペットやファイルを迅速に生成します。
    - 公式ドキュメント: [Plop](https://plopjs.com/)

11. **autoprefixer**, **postcss**, **tailwindcss**
    - 説明: CSSを扱うためのツールです。PostCSSはCSSのトランスパイルを行い、AutoprefixerはCSSにベンダープレフィックスを自動追加します。Tailwind CSSはユーティリティファーストのCSSフレームワークです。
    - 公式ドキュメント: [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer), [Tailwind CSS](https://tailwindcss.com/)

12. **prettier**
    - 説明: コードフォーマッターで、コードスタイルを一貫して整えます。多くの言語と統合されており、コードベース全体で一貫したスタイルを維持するのに役立ちます。
    - 公式ドキュメント: [Prettier](https://prettier.io/)

13. **simple-git-hooks**
    - 説明: Gitフックを簡単に設定し管理するためのツールです。プロジェクトの品質を保つためにコードのチェックやテストを自動化します。
    - 公式ドキュメント: [Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks)

14. **typescript**
    - 説明: JavaScriptに静的型を追加する言語で、大規模なアプリケーションの開発に適しています。
    - 公式ドキュメント: [TypeScript](https://www.typescriptlang.org/)

15. **vite**
    - 説明: フロントエンドの開発とビルドを高速化するツールです。瞬時にモジュールのホットリローディングを提供し、ビルド時間を短縮します。
    - 公式ドキュメント: [Vite](https://vitejs.dev/)

16. **vite-tsconfig-paths**
    - 説明: Viteプロジェクト内でTypeScriptのtsconfigのパスエイリアスをサポートします。プロジェクト内のインポートパスを簡単に設定できます。
    - 公式ドキュメント: [Vite Tsconfig Paths](https://github.com/aleclarson/vite-tsconfig-paths)

17. **vitest**
    - 説明: Viteエコシステムに組み込まれたテストフレームワークです。効率的なテスト実行と開発体験を提供します。
    - 公式ドキュメント: [Vitest](https://vitest.dev/)
