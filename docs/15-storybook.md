### Storybookのインストールとインタラクションテストガイド

この文書は、React開発環境にStorybookをインストールし、UIコンポーネントのカタログを作成するための手順、及びインタラクションテストを実施する方法を説明します。Storybookは、UIコンポーネントの独立した開発とテストを容易にするオープンソースツールです。

#### 前提条件

- Node.jsがインストールされていること。
- yarnパッケージマネージャが使用されていること。

#### 手順

##### 1. 不足パッケージの追加

Storybookとそのインタラクションテストを使用するために、いくつかの依存関係が必要になります。以下のコマンドでこれらのパッケージを追加してください。

```bash
yarn add @storybook/jest @storybook/testing-library --dev
```

- `@storybook/jest`と`@storybook/testing-library`は、Storybook内でのコンポーネントのテストをサポートします。

##### 2. Storybookのインストールと初期設定

以下のコマンドを実行して、Storybookをインストールし、初期設定を行います。

```bash
npx storybook init --builder @storybook/builder-vite
```

このコマンドは、Storybookの必要なファイルと設定をプロジェクトに追加します。`@storybook/builder-vite`はViteビルドツールを使用する設定です。

##### 3. Storybookのインストール確認

以下のメッセージが表示されたら、Storybookのインストールが成功しています。

```plaintext
Storybook was successfully installed in your project! 🎉
To run Storybook manually, run yarn storybook. CTRL+C to stop.
```

`DeprecationWarning`が表示される場合は、Node.jsの非推奨警告ですが、Storybookの動作には影響しません。

##### 4. Storybookの起動

以下のコマンドでStorybookを起動し、`http://localhost:6006/`でアクセスして確認します。

```bash
yarn storybook
```

##### 注意

ViteのCJSビルドが非推奨の警告が表示される場合は、Viteの設定を確認し、必要に応じて更新してください。詳細は[Viteの公式ドキュメント](https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated)を参照してください。

#### インタラクションテストの実装

Storybookのインストール後、インタラクションテストを含むコンポーネントのストーリーを作成できます。以下は`LoginForm`コンポーネントのストーリー例です。この例では、`@storybook/jest`、`@storybook/testing-library`を使用して、ユーザーインタラクションのテストを行います。

```typescript
// --------------------------------------------------------------------------------
// LoginFormのストーリー定義
// --------------------------------------------------------------------------------
import { expect } from '@storybook/jest'
import { type StoryObj, type Meta } from '@storybook/react'
import { waitFor, within, userEvent } from '@storybook/testing-library'
import { LoginForm } from './LoginForm'
import { TestAppProvider } from '@/test/testUtilityComponent'

// --------------------------------------------------------------------------------
// Storyのメタデータ設定
// --------------------------------------------------------------------------------
const meta: Meta<typeof LoginForm> = {
  title: 'features/login/components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      // MSWや、各種Providerをテスト用にまとめているコンポーネント
      <TestAppProvider isDisplayLocation={true}>
        <Story />
      </TestAppProvider>
    ),
  ],
}

export default meta

// --------------------------------------------------------------------------------
// Storyの型定義
// --------------------------------------------------------------------------------
type Story = StoryObj<typeof meta>

// --------------------------------------------------------------------------------
// 各ストーリーと対応するインタラクションテストの定義
// --------------------------------------------------------------------------------
// Primaryは表示のみの状態を表しているためテストを記述しない
export const Primary: Story = {}

export const InputEmailPassword: Story = {
  play: async ({ canvasElement, step }) => {
    await step('メールアドレス、パスワードが入力できる', async () => {
      // --------------------------------------------------------------------------------
      // 準備
      // --------------------------------------------------------------------------------
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'
      const passwordValue = 'password'

      // --------------------------------------------------------------------------------
      // 実行
      // --------------------------------------------------------------------------------
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)

      // --------------------------------------------------------------------------------
      // 検証
      // --------------------------------------------------------------------------------
      await expect(canvas.getByDisplayValue(emailValue)).toBeInTheDocument()
      await expect(canvas.getByDisplayValue(passwordValue)).toBeInTheDocument()
    })
  },
}

export const ErrorEmail: Story = {
  play: async ({ canvasElement, step }) => {
    await step('メールアドレス未入力エラー', async () => {
      // --------------------------------------------------------------------------------
      // 準備
      // --------------------------------------------------------------------------------
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const passwordValue = 'password'

      // --------------------------------------------------------------------------------
      // 実行
      // --------------------------------------------------------------------------------
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // --------------------------------------------------------------------------------
      // 検証
      // --------------------------------------------------------------------------------
      await expect(
        canvas.getByText('Emailを入力してください。'),
      ).toBeInTheDocument()
    })
  },
}

export const ErrorPassword: Story = {
  play: async ({ canvasElement, step }) => {
    await step('パスワード未入力エラー', async () => {
      // --------------------------------------------------------------------------------
      // 準備
      // --------------------------------------------------------------------------------
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'

      // --------------------------------------------------------------------------------
      // 実行
      // --------------------------------------------------------------------------------
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // --------------------------------------------------------------------------------
      // 検証
      // --------------------------------------------------------------------------------
      await expect(
        canvas.getByText('Passwordを入力してください。'),
      ).toBeInTheDocument()
    })
  },
}

export const ErrorEmailPassword: Story = {
  play: async ({ canvasElement, step }) => {
    await step('メールアドレス、パスワード未入力エラー', async () => {
      // --------------------------------------------------------------------------------
      // 準備
      // --------------------------------------------------------------------------------
      // コンポーネント描画
      const canvas = within(canvasElement)

      // --------------------------------------------------------------------------------
      // 実行
      // --------------------------------------------------------------------------------
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // --------------------------------------------------------------------------------
      // 検証
      // --------------------------------------------------------------------------------
      await waitFor(() => {
        void expect(
          canvas.getByText('Email、Passwordを入力してください。'),
        ).toBeInTheDocument()
      })
    })
  },
}

export const LoginSuccess: Story = {
  play: async ({ canvasElement, step }) => {
    await step('ログイン成功', async () => {
      // --------------------------------------------------------------------------------
      // 準備
      // --------------------------------------------------------------------------------
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'
      const passwordValue = 'password'

      // --------------------------------------------------------------------------------
      // 実行
      // --------------------------------------------------------------------------------
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // --------------------------------------------------------------------------------
      // 検証
      // --------------------------------------------------------------------------------
      await waitFor(() => {
        void expect(canvas.getByText('/top')).toBeInTheDocument()
      })
    })
  },
}

export const LoginFailure: Story = {
  play: async ({ canvasElement, step }) => {
    await step('ログイン失敗', async () => {
      // --------------------------------------------------------------------------------
      // 準備
      // --------------------------------------------------------------------------------
      // コンポーネント描画
      const canvas = within(canvasElement)
      // テスト対象のテキストボックスに入力する値
      const emailValue = 'nomura-koshiro@xxx.co.jp'
      const passwordValue = 'password1234'

      // --------------------------------------------------------------------------------
      // 実行
      // --------------------------------------------------------------------------------
      await userEvent.type(canvas.getByLabelText('Email'), emailValue)
      await userEvent.type(canvas.getByLabelText('Password'), passwordValue)
      await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }))

      // --------------------------------------------------------------------------------
      // 検証
      // --------------------------------------------------------------------------------
      await waitFor(() => {
        void expect(
          canvas.getByText('ログインに失敗しました。'),
        ).toBeInTheDocument()
      })
    })
  },
}
```

この例では、`play`関数を使用して、ストーリー内でのユーザーのアクション（入力、クリックなど）とそれに対する期待される結果（表示されるテキスト、エラーメッセージなど）をシミュレートしています。各ステップには、準備、実行、検証のフェーズが含まれており、これらを通じてコンポーネントの振る舞いを確認します。

#### まとめ

このガイドに従って、ReactアプリケーションにStorybookを追加し、インタラクションテストを含むストーリーを作成することで、UIコンポーネントの開発とテスト環境を整えることができます。Storybookの豊富なアドオンと機能を活用し、効率的なコンポーネント開発を行いましょう。
