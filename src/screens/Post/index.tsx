import { useParams } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { HeaderPost } from '../../components/HeaderPost';
import { Paragraph } from '../../components/Paragraph';

import {
    Container,
    Content
} from './styles';
import { usePost } from '../../hooks/usePost';

type RootParams = {
    postId: string;
}

export function Post() {
    
    const params = useParams<RootParams>();
    const postId = params.postId;

    const { title, content, date } = usePost(postId!);

    return(
        <Container>
            <HeaderPost 
                title={title}
                date={date}
            />

            <Content>
                <Paragraph 
                    text={content}
                />
            </Content>
            <Footer />
        </Container>
    );
}