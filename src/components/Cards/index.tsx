import { useNavigate } from 'react-router-dom';

import { Card, CardProps } from '../Card';

import { posts } from '../../utils/posts';

import { Container } from './styles';
interface DataListProps extends CardProps {
    id: string;
}

export function Cards() {

    const navigate = useNavigate();
    const DATA: DataListProps[] = posts;

    function handleOpenPost(postId: string) {
        navigate(`/post/${postId}`);
    }

    return(
        <Container>
            { DATA.map(value => (
                <Card 
                    key={value.id}
                    data={value}
                    onClick={() => handleOpenPost(value.id)}
                />
            )) }
        </Container>
    )
}