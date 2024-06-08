# フォーム管理

React Hook FormとYupを使用してフォーム管理を行う方法について、このドキュメントでは詳細な説明を行います。ここでは、テキストボックス、セレクトボックスなどのフォーム要素のカスタムコンポーネントの作成、バリデーション、およびエラーメッセージの表示方法に焦点を当てます。

## フォーム管理の基本概念

React Hook FormはReactのフォームを効率的に扱うためのライブラリです。このライブラリを使用することで、フォームの状態管理やバリデーションが容易になります。Yupは、フォームのバリデーションを簡単に実装できるツールであり、React Hook Formと組み合わせて使用されます。

## セットアップ

プロジェクトに必要なパッケージをインストールします。

```bash
yarn add react-hook-form @hookform/resolvers yup
```

## フォーム要素のカスタムコンポーネントの作成

フォーム要素をカスタムコンポーネントとして作成することで、再利用性とメンテナンス性を高めます。以下に、テキストボックスとセレクトボックスのコンポーネント例を示します。

### FormTextInput.tsx

```typescript
// src/components/Form/FormTextInput.tsx
import React from 'react';
import { useFormContext, FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';

type Props<TFormValues> = {
    label: string;
    name: Path<TFormValues>;
    type?: React.HTMLInputTypeAttribute;
};

export const FormTextInput = <TFormValues extends FieldValues>({ label, name, type = 'text' }: Props<TFormValues>) => {
    const { register, formState: { errors } } = useFormContext<TFormValues>();
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                {...register(name)}
                className={clsx(
                    'relative w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                    errors[name] ? 'border-red-500' : 'border-gray-300'
                )}
                id={name}
            />
            {errors[name] && <p className="mt-2 text-sm text-red-500">{errors[name]?.message}</p>}
        </div>
    );
};
```

### FormTextArea.tsx

```typescript
// src/components/Form/FormTextArea.tsx
import React from 'react';
import { useFormContext, FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';

type Props<TFormValues> = {
    label: string;
    name: Path<TFormValues>;
};

export const FormTextArea = <TFormValues extends FieldValues>({ label, name }: Props<TFormValues>) => {
    const { register, formState: { errors } } = useFormContext<TFormValues>();
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <textarea
                {...register(name)}
                className={clsx(
                    'relative w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                    errors[name] ? 'border-red-500' : 'border-gray-300'
                )}
                id={name}
            ></textarea>
            {errors[name] && <p className="mt-2 text-sm text-red-500">{errors[name]?.message}</p>}
        </div>
    );
};
```

(注: 他のコンポーネントの例、バリデーションルールの設定、フォームコンポーネントの作成については、このドキュメントの範囲を超えるため、省略されています。)
