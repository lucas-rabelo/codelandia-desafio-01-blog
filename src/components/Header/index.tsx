import { InputSearch } from "../InputSearch";
// import { Button } from '../Button';

import {
    Container,
    Title,
    // HeaderArea,
    // Logo,
    // ButtonsArea,
} from './styles';

export function Header() {
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

            <InputSearch />
        </Container>
    )
}