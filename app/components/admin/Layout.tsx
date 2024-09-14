import Header from "./Header";
interface LayoutPropsType {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </>
  );
};
export default Layout;
