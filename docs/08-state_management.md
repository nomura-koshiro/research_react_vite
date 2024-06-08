# ステート管理

ステート管理はReactアプリケーションにおいて非常に重要な部分で、アプリケーションのデータフローや状態の保持方法を定義します。主に3つのタイプのステートがあります：サーバーステート、グローバルステート、ローカルステート。これらのステートの管理にはそれぞれ異なるツールやアプローチが使用されます。

## ステートのタイプ

1. **サーバーステート**: これは外部のAPIやデータベースから取得したデータを指します。サーバーステートはアプリケーション外部のソースに依存するため、これを管理する際にはデータの取得、更新、キャッシング、同期などの考慮が必要です。

2. **グローバルステート**: アプリケーション全体で共有されるステートです。例えば、ユーザーのログイン情報やテーマ設定など、多くのコンポーネントで共有されるデータがこれに該当します。

3. **ローカルステート**: 特定のコンポーネント内でのみ使用されるステートです。例えば、フォームの入力値やUIの状態（開いている/閉じている）などがこれにあたります。

## ステート管理のツール

### TanStack Query

TanStack Queryは、サーバーステートを管理するためのツールです。API呼び出しを行い、データの取得、キャッシング、更新、同期を簡単に行うことができます。

#### 使用例

```tsx
import { useQuery } from 'react-query';

const fetchUserData = async () => {
    const response = await fetch('/api/user');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const UserComponent = () => {
    const { data, error, isLoading } = useQuery('userData', fetchUserData);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <div>User: {data.name}</div>;
};
```

### Zustand

Zustandは、グローバルステートの管理に使用される軽量なライブラリです。非常にシンプルでありながら、ReactのコンテキストAPIに依存せずにステートを管理できます。

#### 使用例

```tsx
import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

export const CounterComponent = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
```

### useState

`useState`はReactの基本的なフックの一つで、コンポーネント内のローカルステートを管理するために使用されます。

#### 使用例

```tsx
import React, { useState } from 'react';

export const ToggleComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <button onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};
```
