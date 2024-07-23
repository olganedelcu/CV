interface Theme {
    background: string;
    color: string;
    linkColor: string;
    buttonBackground: string;
    buttonColor: string;
    buttonHoverBackground: string;
    buttonHoverColor: string;
}

export const lightTheme: Theme = {
    background: 'linear-gradient(135deg, rgba(217, 102, 255, 0.8) 10%, rgba(150, 80, 255, 0.8) 80%)',
    color: '#1c32a8',
    linkColor: 'rgb(217, 102, 255)',
    buttonBackground: 'rgb(217, 102, 255)',
    buttonColor: '#ffffff',
    buttonHoverBackground: '#c653e8',
    buttonHoverColor: '#ffffff',
};

export const darkTheme: Theme = {
    background: 'linear-gradient(135deg, rgba(217, 102, 255, 0.8) 10%, rgba(150, 80, 255, 0.8) 80%)',
    color: '#e0e0e0',
    linkColor: 'rgb(217, 102, 255)',
    buttonBackground: '#6a1b9a',
    buttonColor: '#ffffff',
    buttonHoverBackground: '#4a0072',
    buttonHoverColor: '#ffffff',
};
