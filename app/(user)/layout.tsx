import { useSession } from "next-auth/react";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col  px-[106px] py-[20px]">
      <Header
        links={[
          { label: "Home", path: "/" },
          { label: "Opportunities", path: "/opportunities/allOpportunities/" },
          { label: "About Us", path: "/" },
          { label: "Blogs", path: "/" },
        ]}
      />
      <TabMenu
        classNames="my-10"
        items={[
          {
            lable: "All opportunities",
            url: "/opportunities/allOpportunities/",
          },
          {
            lable: "Opportunities of interest",
            url: "/opportunities/favouriteOpportunities",
          },
          // { lable: "My opportunities", url: "/opportunities/myOpportunities" },
        ]}
      />
      {children}
    </div>
  );
}
