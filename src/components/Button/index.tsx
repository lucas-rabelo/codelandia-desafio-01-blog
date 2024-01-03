import { ButtonHTMLAttributes } from "react";

import {
    Container,
    IconAdd,
    IconGoogle,
    IconSignOut
} from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    icon: 'add' | 'google' | 'logoff';
}

export function Button({ title, icon }: Props) {
    return(
        <Container>
            { icon === 'google' && <IconGoogle weight="bold" /> }
            { icon === 'add' && <IconAdd weight="fill" /> }
            { icon === 'logoff' && <IconSignOut weight="fill" /> }
            { title }
        </Container>
    );
}