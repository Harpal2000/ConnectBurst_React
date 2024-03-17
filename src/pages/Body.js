import LeftSidebar from "../components/LeftSidebar";
import MainCenterDiv from "./MainCenterDiv";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";

const Body = () => {


  return (
    <div id="home-screen">
      <Header/>
        <div className="main_body w-full flex flex-wrap gap-8 justify-start py-5 mt-20 mb-3 text-[#CACACA]">
          <div className="LeftSidebar w-full lg:w-1/5 xl:w-1/5 hidden lg:block">
            <LeftSidebar />
          </div>

          <div className="MainContainer bg-[#242424a7] rounded-[20px] w-full lg:w-[44%] xl:w-[46%]">
            <MainCenterDiv />
          </div>

          <div className="RightSideBar w-full lg:w-[27%] xl:w-[28%] hidden lg:block">
            <RightSidebar />
          </div>
        </div>
    </div>
  );
};

export default Body;
