interface LayoutPropsType {
  children: React.ReactNode;
  isShowTabMenu?: boolean;
}
import Header from "./Header";
import TabMenu from "./TabMenu";
const Layout: React.FC<LayoutPropsType> = ({
  children,
  isShowTabMenu = true,
}) => {
  return (
    <main className="flex min-h-screen flex-col  px-[106px] py-[20px]">
      <Header
        links={[
          { label: "Home", path: "/" },
          { label: "Opportunities", path: "/opportunities/allOpportunities/" },
          { label: "About Us", path: "/" },
          { label: "Blogs", path: "/" },
        ]}
      />
      <div className="pt-[40px]">
        {isShowTabMenu && (
          <TabMenu
            items={[
              {
                lable: "All opportunities",
                url: "/opportunities/allOpportunities/",
              },
              {
                lable: "Opportunities of interest",
                url: "/opportunities/favouriteOpportunities",
              },
              // {
              //   lable: "My opportunities",
              //   url: "/opportunities/myOpportunities",
              // },
            ]}
          />
        )}
        {children}
      </div>
    </main>
  );
};
export default Layout;
