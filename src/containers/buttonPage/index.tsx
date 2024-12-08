import React from "react";
import BasicLayouy from "../../components/basicLayout";
import {
  basicButton,
  basicButtonContent,
  outlineButton,
  outlineButtonContent,
  ButtonSize,
  ButtonSizeContent,
  ButtonIcon,
  ButtonIconContent,
} from "./info";

const ButtonPage: React.FC = () => {
  return (
    <div className="button-page  flex-column ai-center w-full basic-bg">
      <BasicLayouy
        title="basic Button style"
        components={basicButton}
        code={basicButtonContent}
      />
      <BasicLayouy
        title="outline Button style"
        components={outlineButton}
        code={outlineButtonContent}
      />
      <BasicLayouy
        title="Button size"
        components={ButtonSize}
        code={ButtonSizeContent}
      />
      <BasicLayouy
        title="icon in Button"
        components={ButtonIcon}
        code={ButtonIconContent}
      />
    </div>
  );
};

export default ButtonPage;
