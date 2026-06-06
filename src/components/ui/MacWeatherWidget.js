"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from '@/contexts/LanguageContext';

const CASABLANCA = { lat: 33.5731, lon: -7.5898 };

const WEATHER_ICONS = {
  clear: '☀️',
  cloudy: '⛅',
  fog: '🌫️',
  rain: '🌧️',
  snow: '❄️',
  thunder: '⛈️',
};

function weatherIconFromCode(code) {
  if (code === 0) return WEATHER_ICONS.clear;
  if (code >= 1 && code <= 3) return WEATHER_ICONS.cloudy;
  if (code >= 45 && code <= 48) return WEATHER_ICONS.fog;
  if (code >= 51 && code <= 67) return WEATHER_ICONS.rain;
  if (code >= 71 && code <= 77) return WEATHER_ICONS.snow;
  if (code >= 80 && code <= 82) return WEATHER_ICONS.rain;
  if (code >= 95) return WEATHER_ICONS.thunder;
  return WEATHER_ICONS.clear;
}

export default function MacWeatherWidget({ className = '' }) {
  const { t } = useTranslation();
  const [weather, setWeather] = useState({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeather() {
      try {
        const params = new URLSearchParams({
          latitude: String(CASABLANCA.lat),
          longitude: String(CASABLANCA.lon),
          current: 'temperature_2m,weather_code',
          timezone: 'Africa/Casablanca',
        });

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error('Weather request failed');

        const data = await response.json();
        const temp = data?.current?.temperature_2m;
        const code = data?.current?.weather_code;

        if (typeof temp !== 'number') throw new Error('Invalid weather data');

        setWeather({
          status: 'ready',
          temp: Math.round(temp),
          icon: weatherIconFromCode(code),
        });
      } catch (error) {
        if (error.name === 'AbortError') return;
        setWeather({
          status: 'error',
          temp: null,
          icon: WEATHER_ICONS.clear,
        });
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, []);

  const { temp, icon, status } = weather;
  const tempLabel =
    status === 'loading' ? '…' : temp !== null ? `${temp}°C` : '—';

  return (
    <div
      className={`mac-weather-widget w-full xs:w-auto justify-center xs:justify-start ${className}`}
      aria-live="polite"
      aria-busy={status === 'loading'}
    >
      <span className="text-2xl shrink-0" aria-hidden="true">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="hidden sm:block text-xs font-medium opacity-90 truncate">{t('weather.city')}</p>
        <p className="text-2xl font-semibold leading-tight tabular-nums">{tempLabel}</p>
      </div>
    </div>
  );
}
