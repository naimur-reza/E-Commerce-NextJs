import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      Filter
      {children}
    </div>
  );
};

export default layout;
