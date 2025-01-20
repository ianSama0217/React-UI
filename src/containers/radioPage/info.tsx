import Radio from "../../components/radio";

export const basicRadio = [
  <Radio title="basic radio#1" radioName="basic" value="1" isChecked={false} />,
  <Radio title="basic radio#2" radioName="basic" value="2" isChecked={false} />,
  <Radio title="basic radio#3" radioName="basic" value="3" isChecked={false} />,
];

export const basicRadioContent = `    
  <Radio title="basic radio#1" radioName="basic" value="1" isChecked={false} />
  <Radio title="basic radio#2" radioName="basic" value="2" isChecked={false} />
  <Radio title="basic radio#3" radioName="basic" value="3" isChecked={false} />
    `;

export const RadioSize = [
  <Radio title="radio-sm" radioName="size" size="radio-sm" isChecked={false} />,
  <Radio title="basic radio" radioName="size" isChecked={false} />,
  <Radio title="radio-lg" radioName="size" size="radio-lg" isChecked={false} />,
];

export const RadioSizeContent = `    
  <Radio title="radio-sm" radioName="size" size="radio-sm" isChecked={false} />
  <Radio title="basic radio" radioName="size" isChecked={false} />
  <Radio title="radio-lg" radioName="size" size="radio-lg" isChecked={false} />
    `;

export const onChangeRadioContent = `    
  const [dis, setDis] = useState<boolean>(false);

  function handleChange() {
    setDis(!dis);
    alert("click radio!!!");
  }

  const onChangeRadio = [
    <Radio title="click!" isChecked={dis} onChange={handleChange} />
    <Radio title="disabled" isChecked={false} disabled={true} />
  ];`;
