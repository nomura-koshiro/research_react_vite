// eslint-disable-next-line @typescript-eslint/ban-types
export type DescriptionProps = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Description = (props: DescriptionProps): JSX.Element => {
  return (
    <div className="w-40% mx-auto my-20">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                実装予定機能
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">ログイン</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">トップページ</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Get(一覧)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Get</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Post</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Put</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Post</td>
            </tr>
          </tbody>
        </table>
        <table className="mt-4 min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                使用ライブラリ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Vite</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">React</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Tanstack Query</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">axios</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Tanstack Router</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Tailwindcss</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">react-hook-form</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">yup</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">MSW</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Storybook</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Playwright</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
