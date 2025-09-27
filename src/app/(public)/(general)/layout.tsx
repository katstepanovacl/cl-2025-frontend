import { ReactNode } from "react";
import Header from "./_components/header";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default GeneralLayout;
