import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {    
    variant: ButtonVariant;
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    cursor: pointer;

    background-color: ${props => props.theme.primary };
    color: ${props => props.theme.white};
    border-color: ${props => props.theme.secondary};

`

    /* ${props => {
        return css`
        background-color: ${buttonVariants[props.variant]}
        `
    }
    } */