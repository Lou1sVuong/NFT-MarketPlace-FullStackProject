import React, { useState, useEffect } from 'react';

interface CountdownProps {
  hours: number;
}

const Countdown: React.FC<CountdownProps> = ({ hours }) => {
  const [timeLeft, setTimeLeft] = useState<number>(hours * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hours]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}  : ${minutes
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center text-textW backdrop backdrop-blur-sm w-[18rem] rounded-[1.25rem] bg-[#3B3B3B80]">
        <div className='flex flex-col  w-[80%] p-4'>
            <div>Auction ends in:</div>
            <div className="text-[2.375rem] font-bold">{formatTime(timeLeft)}</div>
        </div>
    </div>
  );
};

export default Countdown;
