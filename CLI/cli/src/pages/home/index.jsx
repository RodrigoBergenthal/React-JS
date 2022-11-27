import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import BannerImage from '../../assets/banner.png';
import { Container, TextContent, Title, TitleHighLight } from './style';

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br />
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, 
                    evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Comecar agora" variant="secondary" onclick={()=> null}/>

            </div>
            <div>
                
            </div>
        </Container>
        <img src={BannerImage} alt="Imagem principal" />
        </>)
}
export { Home }