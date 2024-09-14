import Header from "@/app/components/admin/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="pt-20 px-[10vw] flex flex-col gap-10">
    <Header/>
    {children}
  </div>;
}
