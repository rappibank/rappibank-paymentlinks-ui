import { useTheme } from '../hooks/use-theme';
import { Icon } from '@tabler/icons-react';

interface ButtonProps {
  title?: string;
  Icon?: Icon;
  isLoading?: boolean;
  isSubmit?: boolean;
  isDisabled?: boolean;
  handleClick?: () => void;
}

export function Button({
  title,
  Icon,
  isSubmit,
  isLoading,
  isDisabled,
  handleClick,
}: ButtonProps) {
  const theme = useTheme();

  isDisabled = isLoading || isDisabled;

  const getBgColor = () => {
    if (isDisabled) return '#ECEFF3';

    return theme.theme?.colors.secondary;
  };

  const getTextColor = () => {
    if (isDisabled) return '#919AAA';
    else {
      const color = theme.theme?.colors.secondary.replace('#', '');
      if (color) {
        const r = parseInt(color!.slice(0, 2), 16);
        const g = parseInt(color!.slice(2, 4), 16);
        const b = parseInt(color!.slice(4, 6), 16);
        if (r * 0.299 + g * 0.587 + b * 0.114 > 186) return '#141414';
        else return '#ffffff';
      }
    }
    return 'white';
  };

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      className='flex w-full items-center justify-center gap-2 rounded-full p-4 text-sm font-bold leading-4'
      disabled={isDisabled || isLoading}
      style={{
        backgroundColor: getBgColor(),
        color: getTextColor(),
      }}
    >
      {isLoading ? (
        'Aguarde'
      ) : (
        <>
          {Icon && <Icon size={20} color={getTextColor()} />}
          {title}
        </>
      )}
    </button>
  );
}
