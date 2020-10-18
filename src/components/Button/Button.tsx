import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

const ThemedButton: React.FC<ButtonProps> = props => {
    const { children, ...restProps } = props;

    return (
        <Button {...restProps}>
            {children}
        </Button>
    )
};

export default ThemedButton;
