import { ReactNode, useEffect, useState } from 'react';
import { PaymentType } from '../../../types/payment-types';
import { PixIcon } from '../../icons/pix-icon';

interface PaymentTypeOptionsProps {
  paymentType?: PaymentType;
  setPaymentType: (value: PaymentType) => void;
}

interface OptionsProps {
  title: string;
  icon: ReactNode;
  type: PaymentType;
}

interface PillProps {
  title: string;
  icon: ReactNode;
}

export function PaymentTypeOptions({
  paymentType,
  setPaymentType,
}: PaymentTypeOptionsProps) {
  const [optionsClass, setOptionsClass] = useState('');
  const [selectedOptionClass, setSelectedOptionClass] = useState('');
  const [showOptions, setShowOptions] = useState(true);

  const CardIcon = () => (
    <svg
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.17854 3.14188C2.96581 2.29736 4.08096 1.83333 5.37619 1.83333H11.6238C12.9217 1.83333 14.0373 2.29703 14.8242 3.14228C15.6049 3.9808 16 5.1271 16 6.3901V9.60989C16 10.8729 15.6049 12.0192 14.8242 12.8577C14.0373 13.703 12.9217 14.1667 11.6238 14.1667H5.37619C4.07831 14.1667 2.96273 13.703 2.17579 12.8577C1.39513 12.0192 1 10.8729 1 9.60989V6.3901C1 5.12608 1.39732 3.97991 2.17854 3.14188ZM3.39765 4.27835C3.07682 4.6225 2.83916 5.08961 2.73114 5.66667H14.2692C14.1616 5.08902 13.9246 4.62188 13.6044 4.27796C13.1659 3.807 12.5101 3.5 11.6238 3.5H5.37619C4.49365 3.5 3.83736 3.80666 3.39765 4.27835ZM2.66667 9.60989V7.33333H14.3333V9.60989C14.3333 10.5289 14.0491 11.2444 13.6044 11.722C13.1659 12.193 12.5101 12.5 11.6238 12.5H5.37619C4.48994 12.5 3.8341 12.193 3.39563 11.722C2.9509 11.2444 2.66667 10.5289 2.66667 9.60989ZM4.66667 9.66667C4.20643 9.66667 3.83333 10.0398 3.83333 10.5C3.83333 10.9602 4.20643 11.3333 4.66667 11.3333H5.66667C6.1269 11.3333 6.5 10.9602 6.5 10.5C6.5 10.0398 6.1269 9.66667 5.66667 9.66667H4.66667Z'
        fill='black'
      />
    </svg>
  );

  const Option = ({ title, icon, type }: OptionsProps) => {
    return (
      <button
        type='button'
        className='md:w-max-[160px] flex h-[68px] w-full flex-col items-center justify-center gap-1 rounded-2xl border border-strong'
        onClick={() => setPaymentType(type)}
      >
        {icon}
        <span className='text-sm font-bold'>{title}</span>
      </button>
    );
  };

  const Pill = ({ title, icon }: PillProps) => {
    return (
      <div className='flex items-center gap-1 rounded-full border border-strong px-4 py-2'>
        {icon}
        <span className='text-xs font-bold sm:text-sm'>{title}</span>
      </div>
    );
  };

  function updatePaymentType(type: PaymentType) {
    setSelectedOptionClass('flip-vertical-left');
    setTimeout(() => setPaymentType(type), 200);
    setTimeout(() => setSelectedOptionClass(''), 700);
  }

  useEffect(() => {
    if (paymentType !== undefined) {
      setOptionsClass('flip-animation');
      setTimeout(() => setShowOptions(false), 400);
    }
  }, [paymentType]);

  return (
    <div className={`bg-white ${optionsClass} mb-5`}>
      {showOptions ? (
        <div className='flex justify-center gap-5'>
          <Option
            title='Pix'
            icon={<PixIcon size={16} />}
            type={PaymentType.Pix}
          />
          <Option
            title='Cartão de crédito'
            icon={<CardIcon />}
            type={PaymentType.CreditCard}
          />
        </div>
      ) : (
        <div className='rounded-3xl border-2 border-light p-4'>
          <div className={`flex justify-between ${selectedOptionClass}`}>
            {paymentType === PaymentType.Pix ? (
              <>
                <Pill icon={<PixIcon size={16} />} title='Pix' />
                <button
                  type='button'
                  className='text-sm text-link'
                  onClick={() => updatePaymentType(PaymentType.CreditCard)}
                >
                  Mudar para cartão
                </button>
              </>
            ) : (
              <>
                <Pill icon={<CardIcon />} title='Cartão de crédito' />
                <button
                  type='button'
                  className='text-sm text-link'
                  onClick={() => updatePaymentType(PaymentType.Pix)}
                >
                  Mudar para pix
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
