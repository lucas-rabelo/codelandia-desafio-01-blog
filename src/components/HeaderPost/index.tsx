import { useNavigate } from 'react-router-dom';

import {
    Container,
    Header,
    BackButton,
    BackIcon,
    Logo,
    DatePost,
    Title
} from './styles';

interface Props {
    title: string;
    date: string;
}

export function HeaderPost(props: Props) {

    const navigate = useNavigate();
    const { title, date } = props;

    function handleGoBackHome() {
        navigate('/');
    }

    return(
        <Container>
            <Header>
                <BackButton onClick={handleGoBackHome}>
                    <BackIcon />

                    <Logo>
                        <span>Code</span>lândia
                    </Logo>
                </BackButton>

                <DatePost>
                    {date}
                </DatePost>
            </Header>

            <Title>
                {title}
            </Title>
        </Container>
    )
}