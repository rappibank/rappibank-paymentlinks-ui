import { Badge } from './badge';

interface DataItemProps {
  title: string;
  value?: string;
  center?: boolean;
}

export default function DataItem({ title, value, center }: DataItemProps) {
  return (
    <div className={`flex flex-col gap-1 ${center ? 'items-center' : ''}`}>
      <Badge text={title} />
      <p className='break-all text-base'>{value}</p>
    </div>
  );
}
