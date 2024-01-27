# Reactアプリケーションドキュメント - フォーム管理

React Hook FormとValibotを使用してフォーム管理を行う方法について詳細な説明を行います。ここでは、フォーム要素のカスタムコンポーネントの作成（テキストボックス、セレクトボックスなど）とバリデーション、エラーメッセージの表示方法を取り上げます。

## フォーム管理の基本概念

React Hook Formは、Reactのフォームを効率的に扱うためのライブラリです。このライブラリを使用することで、フォームの状態管理やバリデーションが容易になります。Valibotは、フォームのバリデーションを簡単に実装できるツールで、React Hook Formと組み合わせて使用されます。

## セットアップ

まず、プロジェクトに必要なパッケージをインストールします。

```bash
yarn add react-hook-form @hookform/resolvers valibot
```

## フォーム要素のカスタムコンポーネントの作成

フォーム要素をカスタムコンポーネントとして作成することで、再利用性とメンテナンス性を高めることができます。以下に、テキストボックスとセレクトボックスのコンポーネントを例として示します。

### テキストボックスコンポーネント

`src/components/Form/TextBox.tsx` にテキストボックスのコンポーネントを作成します。

```typescript
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
};

export const TextBox: React.FC<Props> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register(name)} />
    </div>
  );
};
```

### セレクトボックスコンポーネント

`src/components/Form/SelectBox.tsx` にセレクトボックスのコンポーネントを作成します。

```typescript
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  options: { label: string; value: string }[];
};

export const SelectBox: React.FC<Props> = ({ name, label, options }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
```

## バリデーションとエラーメッセージの表示

Valibotを使用して、フォームの入力値に対するバリデーションを行います。エラーメッセージは、不正な入力があった場合に表示されます。

以下は、バリデーションルールを設定し、エラーメッセージを表示する方法の例です。

### バリデーションルールの設定

Valibotを使用してバリデーションルールを設定します。ここでは、簡単な例として「必須」と「最大文字数」のルールを設定します。

```typescript
import { schema, string } from 'valibot';

const validationSchema = schema({
  firstName: string().required('First name is required').maxLength(20, 'First name cannot be longer than 20 characters'),
  age: string().required('Age is required').numeric('Age must be a number'),
});
```

### フォームコンポーネントの作成

`src/components/Form/MyForm.tsx` にフォームコンポーネントを作成し、上記で作成したカスタムコンポーネントとバリデーションルールを組み合わせます。

```typescript
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextBox, SelectBox } from './';
import { validationSchema } from '../validation';

export const MyForm: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <TextBox name="firstName" label="First Name" />
        <SelectBox name="age" label="Age" options={[{ label: '20', value: '20' }, { label: '30', value: '30' }]} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
```

このように、React Hook FormとValibotを組み合わせることで、効率的にフォームの状態管理とバリデーションを行うことができます。また、カスタムコンポーネントを作成することで、コードの再利用性とメンテナンス性を高めることが可能です。