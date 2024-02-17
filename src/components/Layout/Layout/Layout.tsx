export type LayoutProps = { children: JSX.Element }

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
