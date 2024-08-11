import styled from 'styled-components';

interface ThemeProps {
  themeMode: string;
}

export const ToggleButtonWrapper = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 60px;
  height: 30px;
  background-color: ${({ themeMode }) => (themeMode === 'black' ? '#333' : '#ccc')};
  border-radius: 30px;
  position: relative;
  margin-top:20px;
  transition: background-color 0.3s ease;

  .toggleButton {
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ themeMode }) => (themeMode === 'black' ? '32px' : '2px')};
    transition: left 0.3s ease;
  }
`;

export const ToggleButtonLabel = styled.span<ThemeProps>`
  margin-left: 10px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  margin-top:20px;
  color: ${({ themeMode }) => (themeMode === 'black' ? '#fff' : '#333')};
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
