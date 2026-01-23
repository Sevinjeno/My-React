

interface inputProps{
    label:string;
    type?:"text"|"email"|"textarea";
    name?:string;
    value?:string|number;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
      error?: string
}


const CustomInput = ({label,type,name,value,onChange,error}:inputProps) => {
  return (
    <div>
        <div>
        <label htmlFor={name}>{label}</label>
        </div>
        <input type={type} name={name} value={value} onChange={onChange} />
        {error && <span className="error-text">{error}</span>}
    </div>
  )
}

export default CustomInput