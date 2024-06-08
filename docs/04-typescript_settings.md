# TypeScript設定

このドキュメントでは、TypeScriptを使用したプロジェクトのセットアップ後の`tsconfig.json`ファイルの設定を説明します。以下にその詳細を示します。

## tsconfig.jsonの概要

`tsconfig.json`はTypeScriptプロジェクトのコンパイラオプションを定義するためのファイルです。このファイルを通じて、TypeScriptのコンパイラに対して、どのようにコードを解析し、コンパイルするかの指示を出します。

### compilerOptions

このセクションでは、コンパイラがソースコードをどのように処理するかについての詳細設定を行います。

- **`target`**: `ESNext` - コンパイル後に最新のJavaScriptバージョンを出力します。
- **`useDefineForClassFields`**: `true` - クラスフィールドの明確な定義を強制します。
- **`lib`**: コンパイル時に使用できる組み込みライブラリを指定します。例: DOM操作、イテレーションプロトコル、最新のECMAScript機能。
- **`allowJs`**: `false` - JavaScriptファイルのインポートを許可しません。
- **`skipLibCheck`**: `true` - 型定義ファイルに対する型チェックをスキップし、ビルドパフォーマンスを向上させます。
- **`esModuleInterop`**: `false` - CommonJS/AMD/UMD形式のモジュールをESModulesと同様に扱います。
- **`allowSyntheticDefaultImports`**: `true` - 明示的にデフォルトエクスポートしていないモジュールも、デフォルトインポートとして扱います。
- **`strict`**: `true` - 厳格な型チェックを全て有効にし、より安全なコードを強制します。
- **`forceConsistentCasingInFileNames`**: `true` - ファイル名の大文字小文字の一貫性を強制します。
- **`module`**: `ESNext` - 最新のモジュール構文を使用します。
- **`moduleResolution`**: `Node` - Node.jsのモジュール解決アルゴリズムを使用します。
- **`resolveJsonModule`**: `true` - JSONファイルをインポートし、そのオブジェクトに型を自動的に付与します。
- **`isolatedModules`**: `true` - 各ファイルを独立したモジュールとして扱い、特定の記法に対してコンパイルエラーを発生させます。
- **`noEmit`**: `true` - コンパイル結果のファイルを出力しません。
- **`jsx`**: `react-jsx` - React 17以降の新しいJSX変換を使用します。
- **`baseUrl`**: `.` - モジュール解決のベースURLをプロジェクトのルートディレクトリに設定します。
- **`paths`**: モジュールのパスエイリアスを設定します。例: `@/*`を`./src/*`にマッピング。

### include

- **`include`**: コンパイラが処理するファイルのセットを指定します。ここでは`src`ディレクトリ内のすべてのファイルが含まれます。

### references

- **`references`**: 他のTypeScriptプロジェクトへの参照を設定します。これにより、プロジェクト間でのコード共有時の依存関係を管理します。例: `tsconfig.node.json`への参照。
