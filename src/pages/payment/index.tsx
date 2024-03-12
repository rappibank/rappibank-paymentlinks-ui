import { useState } from 'react';
import { Ticket } from '../../components/ticket';
import { PaymentTypeOptions } from '../../components/pages/payments/payment-type-options';
import { PaymentType } from '../../types/payment-types';
import { Pix } from './pix';
import { CreditCard } from './credit-card';
import DataItem from '../../components/data-item';

export default function Payment() {
  const [paymentType, setPaymentType] = useState<PaymentType>();

  return (
    <div className='grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2'>
      <div>
        <h3 className='mb-1 text-[26px] font-bold'>Olá, [cliente]!</h3>
        <p className='mb-6'>
          Selecione a forma de pagamento para concluir seu pedido.
        </p>

        <div className='mb-6 flex w-full flex-col items-center justify-center space-y-4'>
          <Ticket order={93820} value={65.9} date={new Date()} />
          <p className='text-sm'>Selecione a forma de pagamento:</p>
        </div>

        <PaymentTypeOptions
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />

        {paymentType && (
          <>{paymentType === PaymentType.Pix ? <Pix /> : <CreditCard />}</>
        )}
      </div>

      <div className='space-y-4'>
        <DataItem title='Favorecido' value='Rappi' center />
        <DataItem title='CPF / CNPJ' value='11.987.654/0001-20' center />
        <DataItem
          title='Endereço'
          value='Av. Girassol, 555 - São Paulo/SP'
          center
        />
      </div>
    </div>
  );
}
