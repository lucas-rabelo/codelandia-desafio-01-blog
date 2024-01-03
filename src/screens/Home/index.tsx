import { FormEvent, useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Cards } from "../../components/Cards";
import { InputSearch } from "../../components/InputSearch";

import { 
    Container,
    Main
} from './styles';

export function Home() {
    const [search, setSearch] = useState('');

    function handleFindPost(event: FormEvent) {
        event.preventDefault();
    }

    return(
        <Container>
            <Header>
                <InputSearch 
                    onSubmit={() => handleFindPost}
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                />
            </Header>
            <Main>
                <Cards
                    search={search}
                />
            </Main>
            <Footer />
        </Container>
    )
}