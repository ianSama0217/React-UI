import Checkbox from "../../components/checkbox";

export const basicCheckbox = [
  <Checkbox title="basic checkbox#1" value="1" isChecked={false} />,
  <Checkbox title="basic checkbox#2" value="2" isChecked={false} />,
  <Checkbox title="basic checkbox#3" value="3" isChecked={false} />,
];

export const basicCheckboxContent = `    
  <Checkbox title="basic checkbox#1" value="1" isChecked={false} />
  <Checkbox title="basic checkbox#2" value="2" isChecked={false} />
  <Checkbox title="basic checkbox#3" value="3" isChecked={false} />
    `;

export const CheckboxSize = [
  <Checkbox title="checkbox-sm" size="checkbox-sm" isChecked={false} />,
  <Checkbox title="basic checkbox" isChecked={false} />,
  <Checkbox title="checkbox-lg" size="checkbox-lg" isChecked={false} />,
];

export const CheckboxSizeContent = `    
  <Checkbox title="checkbox-sm" size="checkbox-sm" isChecked={false} />
  <Checkbox title="basic checkbox" isChecked={false} />
  <Checkbox title="checkbox-lg" size="checkbox-lg" isChecked={false} />
    `;

export const onChangeCheckboxContent = `    
  const [dis, setDis] = useState<boolean>(false);

  function handleChange() {
    setDis(!dis);
    alert("click radio!!!");
  }

  const onChangeCheckbox = [
    <Checkbox title="click!" isChecked={dis} onChange={handleChange} />
    <Checkbox title="disabled" isChecked={false} disabled={true} />
  ];`;
