import Image from "next/image";
import Header from "./components/Header";
import TabMenu from "./components/TabMenu";
import Layout from "./components/Layout";
import Welcome from "./components/home/Welcome";
export default function Home() {
  return (
    <Layout isShowTabMenu={false}>
      <Welcome/>
    </Layout>
  );
}
