### 概要

`tanstack-query`は、データフェッチングとキャッシングを効率化するためのモダンなライブラリです。ReactなどのJavaScriptフレームワークで使用することができ、APIからのデータ取得、キャッシング、更新、および同期を簡単に行えます。`tanstack-query`は特に非同期データの取り扱いに強く、Reactアプリケーションのパフォーマンスを向上させることができます。

### インストール

まず、プロジェクトに`tanstack-query`をインストールします。また、HTTPクライアントとして`axios`を使用するため、これも合わせてインストールします。

```bash
npm install @tanstack/react-query axios
```

開発ツール（DevTools）も利用する場合は、以下を実行します。

```bash
npm install @tanstack/react-query-devtools
```

### 初期設定

Reactプロジェクトに`tanstack-query`を設定するため、`QueryClient`を初期化し、アプリケーションを`QueryClientProvider`でラップします。これにより、アプリケーションのどこからでもQuery機能を利用できるようになります。

```javascript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ここにアプリコンポーネントを挿入 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### 各リクエストのサンプル

#### GETリクエスト

```javascript
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function Posts() {
  const { data, error, isLoading } = useQuery(['posts'], fetchPosts);

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

#### POSTリクエスト

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const createPost = async (newPost) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  return data;
};

function AddPost() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newPost = {
      title: form.title.value,
      body: form.body.value,
      userId: 1,
    };

    mutation.mutate(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" required />
      <textarea name="body" required />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

#### PUTリクエスト

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const updatePost = async ({ id, ...updateInfo }) => {
  const { data } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updateInfo);
  return data;
};

function EditPost({ postId }) {
  const queryClient = useQueryClient();
  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedPost = {
      id: postId,
      title: form.title.value,
      body: form.body.value,
    };

    mutation

.mutate(updatedPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" required />
      <textarea name="body" required />
      <button type="submit">Update Post</button>
    </form>
  );
}
```

#### DELETEリクエスト

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deletePost = async (postId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return postId;
};

function RemovePost({ postId }) {
  const queryClient = useQueryClient();
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  const handleDelete = () => {
    mutation.mutate(postId);
  };

  return (
    <button onClick={handleDelete}>Delete Post</button>
  );
}
```
