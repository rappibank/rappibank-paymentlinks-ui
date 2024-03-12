import { IconClockHour4 } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function PixExpirationBar() {
  const duration = 120;
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / (duration * 1000)) * 100;
      const newTimeLeft = Math.max(
        0,
        duration - Math.floor(elapsedTime / 1000)
      );

      if (newProgress <= 100) {
        setProgress(newProgress);
        setTimeLeft(newTimeLeft);
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
      }
    };

    updateProgress();

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration]);

  const formatTime = (seconds: number): string => {
    const pad = (num: number) => (num < 10 ? '0' + num : num);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };

  return (
    <div className='flex flex-col items-center justify-center space-y-3 pb-3 pt-7 text-center'>
      <p className='text-xs font-bold'>Expira em:</p>
      <div className='h-1.5 w-[138px] rounded-full bg-light'>
        <div
          className='h-1.5 rounded-full bg-feedback-success transition-transform'
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className='flex items-center gap-1.5'>
        <IconClockHour4 size={14} color='#919AAA' />
        <span className='text-xs text-weak'>{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
}
