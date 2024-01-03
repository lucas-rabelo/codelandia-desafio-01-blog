import { useNavigate } from 'react-router-dom';

import { Card, CardProps } from '../Card';

import { posts } from '../../utils/posts';

import { Container } from './styles';
interface DataListProps extends CardProps {
    id: string;
}

interface Props {
    search: string;
}

export function Cards({ search }: Props) {

    const navigate = useNavigate();
    const DATA: DataListProps[] = posts;

    const filteredPosts = search.length > 0
        ? DATA.filter(post => post.title.includes(search))
        : DATA;

    function handleOpenPost(postId: string) {
        navigate(`/post/${postId}`);
    }

    return(
        <Container>
            { filteredPosts.map(value => (
                <Card 
                    key={value.id}
                    data={value}
                    onClick={() => handleOpenPost(value.id)}
                />
            )) }
        </Container>
    )
}