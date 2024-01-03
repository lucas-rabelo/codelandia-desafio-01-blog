import { AnchorHTMLAttributes, useState } from 'react';
import {
    Container,
    Header,
    Date,
    ButtonIcon,
    Icon,
    Content,
    Title,
    Description
} from './styles';

export interface CardProps {
    date: string;
    title: string;
    description: string;
    isFavorite: boolean;
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    data: CardProps;
}

export function Card({ data, ...rest }: Props) {
    const { date, title, description, isFavorite } = data;

    const [favorite, setFavorite] = useState<boolean>(isFavorite);

    function handleFavorite() {
        setFavorite(!favorite);
    }

    return(
        <Container>
            <Header>
                <Date>{ date }</Date>

                <ButtonIcon onClick={handleFavorite}>
                    <Icon weight={favorite ? 'fill' : 'regular'} />
                </ButtonIcon>
            </Header>
            <Content {...rest}>
                <Title>
                    { title }
                </Title>
                <Description>
                    { description }
                </Description>
            </Content>
        </Container>
    );
}