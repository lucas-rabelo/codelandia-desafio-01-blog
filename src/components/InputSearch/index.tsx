import { 
    Container,
    Icon,
    Input
} from './styles';

export function InputSearch() {
    return(
        <Container>
            <Icon />

            <Input 
                type="text"
                placeholder='Pesquise aqui'
            />
        </Container>
    );
}