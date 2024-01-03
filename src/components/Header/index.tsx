import { ReactNode } from "react";

// import { Button } from '../Button';

import {
    Container,
    Title,
    // HeaderArea,
    // Logo,
    // ButtonsArea,
} from './styles';

interface Props {
    children: ReactNode;
}

export function Header({ children }: Props) {
    return(
        <Container>
            {/* <HeaderArea>
                <Logo>
                    <span>Code</span>lândia
                </Logo>

                <ButtonsArea>
                    <Button title="Entrar com o Google" icon="google" />
                </ButtonsArea>
            </HeaderArea> */}

            <Title>
                <span>Code</span>lândia
            </Title>

            { children }
        </Container>
    )
}