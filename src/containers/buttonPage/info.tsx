import Button from "../../components/button";
import icon from "../../../public/react.svg";

export const basicButton = [
  <Button title="primary" style="primary" />,
  <Button title="secondary" style="secondary" />,
  <Button title="success" style="success" />,
  <Button title="warning" style="warning" />,
  <Button title="danger" style="danger" />,
];

export const basicButtonContent = `    
    <Button title="primary" style="primary" />
    <Button title="secondary" style="secondary" />
    <Button title="success" style="success" />
    <Button title="warning" style="warning" />
    <Button title="danger" style="danger" />
    `;

export const outlineButton = [
  <Button title="primary" style="outline-primary" />,
  <Button title="secondary" style="outline-secondary" />,
  <Button title="success" style="outline-success" />,
  <Button title="warning" style="outline-danger" />,
  <Button title="danger" style="outline-warning" />,
];

export const outlineButtonContent = `    
    <Button title="primary" style="outline-primary" />
    <Button title="secondary" style="outline-secondary" />
    <Button title="success" style="outline-success" />
    <Button title="warning" style="outline-danger" />
    <Button title="danger" style="outline-warning" />
    `;

export const ButtonSize = [
  <Button title="primary-sm" size="btn-sm" />,
  <Button title="primary" />,
  <Button title="primary-lg" size="btn-lg" />,
];

export const ButtonSizeContent = `    
    <Button title="primary-sm" size="btn-sm" />
    <Button title="primary" />
    <Button title="primary-lg" size="btn-lg" />
    `;

export const ButtonIcon = [
  <Button title="primary" startIcon={<i className="fa-brands fa-react"></i>} />,
  <Button title="primary" startIcon={icon} />,
  <Button title="primary" endIcon={<i className="fa-brands fa-react"></i>} />,
  <Button title="primary" endIcon={icon} />,
];

export const ButtonIconContent = ` 
    <Button title="primary" startIcon={<i className="fa-brands fa-react"></i>} />,
    <Button title="primary" startIcon={icon} />,
    <Button title="primary" endIcon={<i className="fa-brands fa-react"></i>} />,
    <Button title="primary" endIcon={icon} />,   
    `;
