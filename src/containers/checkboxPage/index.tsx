import React, { useState } from "react";
import {
  basicCheckbox,
  basicCheckboxContent,
  CheckboxSize,
  CheckboxSizeContent,
  onChangeCheckboxContent,
} from "./info";
import BasicLayouy from "../../components/basicLayout";
import Checkbox from "../../components/checkbox";

const CheckboxPage: React.FC = () => {
  const [dis, setDis] = useState<boolean>(false);

  function handleChange() {
    setDis(!dis);
    alert("click checkbox!!!");
  }

  const onChangeCheckbox = [
    <Checkbox title="click!" isChecked={dis} onChange={handleChange} />,
    <Checkbox title="disabled" isChecked={false} disabled={true} />,
  ];

  return (
    <div className="button-page  flex-column ai-center w-full basic-bg">
      <BasicLayouy
        title="basic Radio style"
        components={basicCheckbox}
        code={basicCheckboxContent}
      />
      <BasicLayouy
        title="Radio size"
        components={CheckboxSize}
        code={CheckboxSizeContent}
      />
      <BasicLayouy
        title="Radio size"
        components={onChangeCheckbox}
        code={onChangeCheckboxContent}
      />
    </div>
  );
};

export default CheckboxPage;
