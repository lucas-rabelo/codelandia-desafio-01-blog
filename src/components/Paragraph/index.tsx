import { Container } from './styles';

interface Props {
    text: string;
}

export function Paragraph(props: Props) {
    const { text } = props;

    return(
        <Container>
            {text}
        </Container>
    );
}