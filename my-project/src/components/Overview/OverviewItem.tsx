import Arrow from "@components/common/Icons/Arrow";
import Button from "@components/shared/Button";
import { OverviewItemProps } from "@components/utils/types";
import React from "react";

const OverviewItem: React.FC<OverviewItemProps> = ({ label, value }) => {
  return (
    <div className="w-full flex justify-between items-center px-5 py-4">
      {label}
      <div>
        {value !== null ? value : "-"}
        <Button className="ml-3">
          <Arrow />
        </Button>
      </div>
    </div>
  );
};

export default OverviewItem;
