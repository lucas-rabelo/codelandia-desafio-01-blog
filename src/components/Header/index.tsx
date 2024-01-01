import { InputSearch } from "../InputSearch";

import {
    Container,
    Title
} from './styles';

export function Header() {
    return(
        <Container>
            <Title>
                <span>Code</span>lândia
            </Title>

            <InputSearch />
        </Container>
    )
}