'use client';
import { useEffect, useState } from 'react';
import {SunIcon, MoonIcon} from "lucide-react"
import { useTheme } from 'next-themes';

export const DarkmoodToggler: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {currentTheme === 'dark' ? (
                <SunIcon
                    className='w-10 h-8 cursor-pointer text-slate-900 dark:text-gray-100'
                    onClick={() => setTheme('light')}
                />
            ) : (
                <MoonIcon
                    className='w-10 h-8 cursor-pointer text-slate-900 dark:text-gray-100'
                    onClick={() => setTheme('dark')}
                />
            )}
        </div>
    );
};
