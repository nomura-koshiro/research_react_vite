import * as yup from 'yup'

// NOTE フォームバリデーションエラー時にエラーメッセージの定義、個別にエラーメッセージを上書きも可能
yup.setLocale({
  mixed: {
    default: '入力エラーです',
    required: '必須入力項目です。',
    oneOf: ({ values }) => `次の値のいずれかでなければなりません: ${values}`,
    notOneOf: ({ values }) => `次の値のいずれかであってはなりません: ${values}`,
    notType: '形式が違います',
  },
  string: {
    length: ({ length }) => `${length}文字入力して下さい`,
    min: ({ min }) => `${min}文字以上入力してください`,
    max: ({ max }) => `${max}文字以内で入力して下さい`,
    matches: '形式が違います',
    email: '形式が違います',
    url: '文字列はURLではありません。',
    trim: '前後にスペースを入れてはいけません',
    lowercase: '小文字でなければなりません',
    uppercase: '大文字でなければなりません',
  },
  number: {
    min: ({ min }) => `${min}以上の値を入力して下さい`,
    max: ({ max }) => `${max}以下の値を入力して下さい`,
    positive: '正の数を入力して下さい',
    negative: '負の数を入力して下さい',
    integer: '整数を入力して下さい',
  },
  object: {
    noUnknown: '有効なキーを持ったデータを入力して下さい',
  },
  array: {
    min: '必須入力項目です。',
    max: ({ max }) => `${max}個以下の値を入力して下さい`,
  },
})

export default yup
