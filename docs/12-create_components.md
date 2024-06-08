以下は、PlopをReactプロジェクトに導入し、新しいコンポーネントを生成するための整形されたドキュメントです。このガイドは、開発者が手順に従って効率的にコードを生成できるように構成されています。

---

### PlopをReactプロジェクトに導入する方法

このドキュメントでは、PlopをReactプロジェクトに導入し、新規コンポーネントを生成する方法について説明します。

#### 1. インストール方法
開発依存性としてPlopをプロジェクトに追加するため、以下のコマンドを実行します。これにより、Plopのジェネレータ機能がプロジェクト内で使用可能になります。

```bash
yarn add plop --dev
```

#### 2. package.jsonへのnpmコマンド追記
`package.json`ファイルに新しいスクリプトを追加して、`yarn generate`コマンド経由でPlopを実行できるようにします。

```json
"scripts": {
  "generate": "plop"
}
```

#### 3. 設定ファイル作成
プロジェクトのルートディレクトリに`plopfile.mjs`を作成し、Plopによって使用されるジェネレータとテンプレートの設定を定義します。

```javascript
const pad00 = (num) => String(num).padStart(2, '0');
const date = new Date();
const year = date.getFullYear();
const month = pad00(date.getMonth() + 1);
const day = pad00(date.getDate());
const hms = `${pad00(date.getHours())}:00:00`;
const datePrefix = `${year}-${month}-${day}`;
const categories = ['Other', 'Tech', 'BlogOps'];

export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'どこにコンポーネントを置きますか？(例: src/components/)'
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネントの名前を入力してください'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component/component.stories.tsx.hbs'
      }
    ]
  });
}
```

#### 4. テンプレートファイル作成とファイルの内容の説明
`plop-templates`ディレクトリを作成し、動的コンポーネント生成用のテンプレートファイルを配置します。

- **component.stories.tsx.hbs**:
  ```typescript
  import { type StoryObj, type Meta } from '@storybook/react';
  import { {{ properCase name }} } from './{{ properCase name }}';

  const meta: Meta<typeof {{ properCase name }}> = {
    title: 'components/{{ properCase name }}',
    component: {{ properCase name }},
    tags: ['autodocs'],
    argTypes: {}
  };

  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {}
  };
  ```

- **component.tsx.hbs**:
  ```typescript
  export type {{properCase name}}Props = {};

  export const {{properCase name}} = (props: {{properCase name}}Props): JSX.Element => {
    return <div>{{properCase name}}</div>;
  };
  ```

- **index.tsx.hbs**:
  ```typescript
  export

 * from './{{pascalCase name}}';
  ```

#### 5. コンポーネント作成のデモ
コマンド`yarn generate`を使用して新しいコンポーネントを生成し、以下の手順に従ってプロンプトに回答します。プロセスは以下の通りです:

```bash
% yarn generate
yarn run v1.22.21
$ plop
? どこにコンポーネントを置きますか？(例: src/components/) src/components
? コンポーネントの名前を入力してください StyledTextbox
✔  ++ /src/components/StyledTextbox/index.tsx
✔  ++ /src/components/StyledTextbox/StyledTextbox.tsx
✔  ++ /src/components/StyledTextbox/StyledTextbox.stories.tsx
✨  Done in 27.73s.
```

このプロセスは、新しいコンポーネント`StyledTextbox`が`src/components`ディレクトリに正しく生成されたことを示しています。生成されたファイルには、コンポーネントの定義、インデックスファイル、およびStorybook用のストーリーファイルが含まれています。

---
