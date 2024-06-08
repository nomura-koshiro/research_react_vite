# React-Error-Boundary について

## 概要

React-Error-Boundary は、React アプリケーションにおけるエラー境界（Error Boundaries）を簡単に実装するためのライブラリです。エラー境界とは、子コンポーネントツリーで発生した JavaScript エラーをキャッチし、これらのエラーによってアプリケーションがクラッシュするのを防ぐための React のコンセプトです。React-Error-Boundary を使用すると、エラーを適切にハンドリングしてユーザーにフレンドリーなフィードバックを提供することができます。

## インストール

React-Error-Boundary をプロジェクトに追加するには、以下のコマンドを使用します。

```bash
npm install --save react-error-boundary
```

もしくは、yarn を使用している場合は以下のようにします。

```bash
yarn add react-error-boundary
```

## 設定方法

React-Error-Boundary を使用するための基本的な設定は、ErrorBoundary コンポーネントをアプリケーションに組み込むことです。これにより、子コンポーネントで発生したエラーを捕捉し、エラーが発生したときに表示するフォールバック UI を設定することができます。

## 利用方法

以下は、React-Error-Boundary の基本的な利用方法を示す例です。

```typescript
// ErrorBoundaryFallback.tsx
import React from 'react';

type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const ErrorBoundaryFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>何らかのエラーが発生しました。</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>再試行</button>
    </div>
  );
};
```

```typescript
// App.tsx
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';
import YourComponent from './YourComponent';

const App: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        // エラーをリセットするために実行するアクション
      }}
    >
      <YourComponent />
    </ErrorBoundary>
  );
};

export default App;
```

この例では、`ErrorBoundary` コンポーネントが `YourComponent` をラップしています。`YourComponent` またはその子孫で JavaScript エラーが発生した場合、`ErrorBoundaryFallback` コンポーネントがレンダリングされ、エラーメッセージと「再試行」ボタンが表示されます。ユーザーがこのボタンをクリックすると、エラーがリセットされ、コンポーネントツリーが再度マウントされます。
