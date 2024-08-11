import React from 'react';
import { ToggleButtonWrapper, ToggleButtonLabel, ToggleButtonContainer } from './styles.modules';
import { useTheme } from '../themecontext';

const ThemeToggleButton:React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleButtonContainer>
            <ToggleButtonWrapper themeMode={theme} onClick={toggleTheme}>
                <div className="toggleButton" />
            </ToggleButtonWrapper>
            <ToggleButtonLabel themeMode={theme}>
                {theme === 'black' ? 'Dark Mode' : 'Light Mode'}
            </ToggleButtonLabel>
        </ToggleButtonContainer>
    );
};

export default ThemeToggleButton;
