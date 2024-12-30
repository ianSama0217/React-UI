import React, { useState } from "react";
import BasicLayouy from "../../components/basicLayout";
import { basicSwitch, basicSwitchContent, onChangeSwitchContent } from "./info";
import Switch from "../../components/switch";

const SwitchPage: React.FC = () => {
  const [dis, setDis] = useState<boolean>(false);

  function handleChange() {
    setDis(!dis);
  }

  const onChangeSwitch = [
    <Switch title="wifi" isChecked={dis} onChange={handleChange} />,
    <Switch title="wifi" isChecked={false} type="square" disabled={true} />,
  ];

  return (
    <div className="button-page  flex-column ai-center w-full basic-bg">
      <BasicLayouy
        title="basic Switch style"
        components={basicSwitch}
        code={basicSwitchContent}
      />
      <BasicLayouy
        title="onChange Switch"
        components={onChangeSwitch}
        code={onChangeSwitchContent}
      />
    </div>
  );
};

export default SwitchPage;
