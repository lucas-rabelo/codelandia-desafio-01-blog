import { useState } from 'react';
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

export type CardProps = {
    date: string;
    title: string;
    description: string;
    isFavorite: boolean;
}

export function Card(props: CardProps) {
    const { date, title, description, isFavorite } = props;

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
            <Content>
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