import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Typography} from "@mui/material";

const About = () => {
  const StyledAboutMe = styled("div")(({}) => ({
    backgroundColor: "#fff",
    padding: "50px",
    textAlign: "center",
  }));

  const Paragraph = styled(Typography)({ 
    marginBottom: "20px", 
    marginTop: "30px",
  });

  return (
    <StyledAboutMe>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" gutterBottom>About Me</Typography>
        <Paragraph variant="body1" color="textPrimary">
          Olá! Meu nome é Letícia Medeiros e sou estudante de Ciência da Computação, atualmente com 21 anos de idade. Estou no 4° período do curso e estou muito entusiasmado com todas as oportunidades e desafios que a área de tecnologia oferece.
        </Paragraph>
        <Paragraph variant="body1" color="textPrimary">
          A motivação por trás do desenvolvimento deste portfólio é minha participação no componente curricular "Tecnologias do Desenvolvimento de Interface Gráfica", ministrado pelo professor Ramon. Este projeto tem como objetivo principal praticar a componentização utilizando React, uma biblioteca JavaScript popular para construção de interfaces de usuário interativas e reativas.
        </Paragraph>
        <Paragraph variant="body1" color="textPrimary">
          Estou dedicando meu tempo e esforço para aprimorar minhas habilidades de desenvolvimento de software, explorando conceitos avançados e aplicando-os em projetos práticos como este. Espero que este portfólio demonstre não apenas meu progresso como desenvolvedor, mas também minha paixão pela criação de soluções inovadoras e funcionais.
        </Paragraph>
        <Paragraph variant="body1" color="textPrimary">
          Obrigado por visitar meu portfólio e ficar à vontade para explorar meus projetos e entrar em contato comigo se tiver alguma dúvida ou oportunidade de colaboração.
        </Paragraph>
      </Container>
    </StyledAboutMe>
  );
};

export default About;
