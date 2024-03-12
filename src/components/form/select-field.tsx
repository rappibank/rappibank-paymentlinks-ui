/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn, FieldValues, Controller } from 'react-hook-form';

interface IProps {
  form: UseFormReturn<FieldValues | any>;
  name: string;
  label: string;
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  options: {
    label: string;
    value: string | number;
  }[];
}

export default function SelectField({
  form,
  name,
  label,
  className,
  defaultValue,
  disabled,
  options,
}: IProps) {
  return (
    <Controller
      name={name}
      control={form.control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <div className={className}>
          <div className='relative'>
            <select
              id={name}
              className={`block h-[60px] rounded-[15px] p-3 pt-6 w-full text-sm text-gray-900 bg-alpha-0 appearance-none focus:outline-none focus:ring-0 peer ${
                form?.formState.errors[name] ? 'border border-states-error' : 'border-none'
              }`}
              onChange={onChange}
              value={value}
              disabled={disabled}
            >
              {!form.watch(name) && <option className='text-black'>Selecionar</option>}
              {options.map((opt) => (
                <option
                  key={opt.label}
                  value={opt.value}
                >
                  {opt.label}
                </option>
              ))}
            </select>
            <label
              htmlFor={name}
              className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
                form?.formState.errors[name] ? 'text-states-error' : 'text-alpha-40'
              }`}
            >
              {label}
            </label>
          </div>
          {form?.formState.errors[name] && (
            <div className='mt-1 text-xs text-states-error'>
              {`${form.formState.errors[name]?.message}` || 'Valor inválido'}
            </div>
          )}
        </div>
      )}
    />
  );
}
