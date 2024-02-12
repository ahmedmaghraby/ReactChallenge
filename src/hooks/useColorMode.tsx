import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore'

const useColorMode = () => {
    const { theme, toggleTheme } = useThemeStore();

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        theme === 'dark'
            ? bodyClass.add(className)
            : bodyClass.remove(className);
    }, [theme]);

    return [theme, toggleTheme];
};

export default useColorMode;