import { useTheme } from '../../hooks/use-theme';
import WhatsAppLogo from '../../assets/img/whatsapp-logo.svg';

export function Header() {
  const theme = useTheme();

  return (
    <header
      className='mb-5 h-full w-full'
      style={{ height: '82px', backgroundColor: theme.theme?.colors.primary }}
    >
      <div className='container flex h-full items-center justify-between gap-4 px-6'>
        <div className='flex h-full items-center gap-2'>
          <img
            src={theme.theme?.logoUrl}
            className='aspect-square w-[50px] rounded-full object-contain'
            alt={`Logo ${theme.theme?.name}`}
          />

          <span className='text-xl font-bold leading-6 text-white'>
            {theme.theme?.name}
          </span>
        </div>

        <div className='cursor-pointer'>
          <img
            src={WhatsAppLogo}
            className='aspect-square w-[35px] object-contain'
            alt='WhatsApp Logo'
          />
        </div>
      </div>
    </header>
  );
}
