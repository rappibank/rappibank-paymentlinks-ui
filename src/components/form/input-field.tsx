/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface InputFieldProps {
  form?: UseFormReturn<FieldValues | any>;
  name: string;
  label: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'date';
  className?: string;
  defaultValue?: string | number;
  readonly?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  maxValue?: number;
  minValue?: number;
  onBlur?: any;
  onlyAcceptNumbers?: boolean;
}

export default function InputField({
  form,
  name,
  label,
  type,
  className,
  defaultValue,
  readonly,
  required,
  maxLength,
  minLength,
  maxValue,
  minValue,
  onBlur,
  onlyAcceptNumbers,
}: InputFieldProps) {
  return (
    <div className={className}>
      <div className='relative'>
        <input
          {...form?.register(name)}
          type={type ?? 'text'}
          id={name}
          className={`block h-[60px] rounded-[15px] p-3 pt-6 w-full text-sm text-gray-900 bg-alpha-0 appearance-none read-only:text-alpha-30 focus:outline-none focus:ring-0 peer ${
            form?.formState.errors[name]
              ? 'border border-states-error focus:border-states-error'
              : 'border-none'
          }`}
          placeholder=' '
          defaultValue={defaultValue ?? ''}
          autoComplete='off'
          step='any'
          onBlur={onBlur}
          required={required}
          readOnly={readonly}
          maxLength={maxLength}
          minLength={minLength}
          max={maxValue}
          min={minValue}
          inputMode={onlyAcceptNumbers ? 'numeric' : 'text'}
        />
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
  );
}
