import React, { useState } from "react";
import {
  basicRadio,
  basicRadioContent,
  RadioSize,
  RadioSizeContent,
  onChangeRadioContent,
} from "./info";
import BasicLayouy from "../../components/basicLayout";
import Radio from "../../components/radio";

const RadioPage: React.FC = () => {
  const [dis, setDis] = useState<boolean>(false);

  function handleChange() {
    setDis(!dis);
    alert("click radio!!!");
  }

  const onChangeRadio = [
    <Radio title="click!" isChecked={dis} onChange={handleChange} />,
    <Radio title="disabled" isChecked={false} disabled={true} />,
  ];

  return (
    <div className="button-page  flex-column ai-center w-full basic-bg">
      <BasicLayouy
        title="basic Radio style"
        components={basicRadio}
        code={basicRadioContent}
      />
      <BasicLayouy
        title="Radio size"
        components={RadioSize}
        code={RadioSizeContent}
      />
      <BasicLayouy
        title="Radio size"
        components={onChangeRadio}
        code={onChangeRadioContent}
      />
    </div>
  );
};

export default RadioPage;
