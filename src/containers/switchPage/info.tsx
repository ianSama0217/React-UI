import Switch from "../../components/switch";

export const basicSwitch = [
  <Switch title="wifi" isChecked={true} />,
  <Switch isChecked={false} />,
  <Switch title="light" isChecked={true} type="square" />,
  <Switch isChecked={false} type="square" />,
];

export const basicSwitchContent = `    
   <Switch title="wifi" isChecked={true} />
   <Switch isChecked={false} />
   <Switch title="light" isChecked={true} type="square" />
   <Switch isChecked={false} type="square" />
    `;

export const onChangeSwitchContent = `    
    const [dis, setDis] = useState<boolean>(false);

    function handleChange() {
      setDis(!dis);
    }

    <Switch title="wifi" isChecked={dis} onChange={handleChange} />,
    <Switch title="wifi" isChecked={false} type="square" disabled={true} />,
     `;
