"use client";
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div className="order-first text-2xl font-semibold tracking-tight sm:text-3xl">
        {String(timeLeft.days).padStart(2, "0")} :{" "}
        {String(timeLeft.hours).padStart(2, "0")} :{" "}
        {String(timeLeft.minutes).padStart(2, "0")} :{" "}
        {String(timeLeft.seconds).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Countdown;
