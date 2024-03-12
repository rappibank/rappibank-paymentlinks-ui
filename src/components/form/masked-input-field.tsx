/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

interface MaskedInputFieldProps {
  form: UseFormReturn<FieldValues | any>;
  name: string;
  label?: string;
  type?: 'tel' | 'text';
  format: string;
  className?: string;
  defaultValue?: string;
  readonly?: boolean;
  onBlur?: () => void;
}

export default function MaskedInputField({
  form,
  name,
  label,
  type,
  format,
  className,
  defaultValue,
  readonly,
  onBlur,
}: MaskedInputFieldProps) {
  const defaultType = type || 'text';

  return (
    <div className={className}>
      <div className='relative'>
        <Controller
          name={name}
          control={form.control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value } }) => (
            <PatternFormat
              id={name}
              format={format}
              className={`bg-alpha-0 peer block h-[60px] w-full appearance-none rounded-[15px] p-3 pt-6 text-sm text-gray-900 focus:border-none focus:outline-none focus:ring-0 ${
                form?.formState.errors[name]
                  ? 'border-states-error border'
                  : 'border-none'
              }`}
              onChange={onChange}
              value={value ?? defaultValue}
              onBlur={onBlur}
              readOnly={readonly}
              type={defaultType}
              placeholder=''
            />
          )}
        />
        <label
          htmlFor={name}
          className={`absolute left-3 top-5 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 ${
            form?.formState.errors[name] ? 'text-states-error' : 'text-alpha-40'
          }`}
        >
          {label}
        </label>
      </div>
      {form?.formState.errors[name] && (
        <div className='text-states-error mt-1 text-xs'>
          {`${form.formState.errors[name]?.message}` || 'Valor inválido'}
        </div>
      )}
    </div>
  );
}
