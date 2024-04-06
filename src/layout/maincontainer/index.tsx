import { ReactNode } from "react";
import Navbar from "../../component/navbar";

interface IMainContainer {
  children: ReactNode;
}
const MainContainer = ({ children }: IMainContainer) => {
  return (
    <div className="h-[100vh] w-[100%] overflow-auto ">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;
