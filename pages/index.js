import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
`;

const MainGrid = styled.div`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;  
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
  
`;

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <Box>
          Imagem
        </Box>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          Bem vindo
        </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <Box>
          Pessoas da comunidade
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}
