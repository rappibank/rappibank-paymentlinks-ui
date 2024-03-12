interface BadgeProps {
  text: string;
}

export function Badge({ text }: BadgeProps) {
  return (
    <span className='w-fit rounded-lg bg-light px-2 py-1 text-xs font-semibold leading-4'>
      {text}
    </span>
  );
}
