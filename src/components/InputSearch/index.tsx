import { InputHTMLAttributes } from 'react';
import { 
    Container,
    ButtonIcon,
    Icon,
    Input
} from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    onSubmit: () => void;
}

export function InputSearch({ onSubmit, ...rest }: Props) {    
    return(
        <Container onSubmit={() => onSubmit}>
            <ButtonIcon type="submit">
                <Icon />
            </ButtonIcon>

            <Input 
                type="text"
                placeholder='Pesquise aqui'
                {...rest}
            />
        </Container>
    );
}