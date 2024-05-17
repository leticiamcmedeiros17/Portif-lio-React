import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "../../../../assets/images/avatar.jpg";
import { Typography, Button } from "@mui/material";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    padding: "50px", // Adicionando algum espaço interno para os elementos
  }));

  const StyleImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  const ButtonContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: "20px", // Adicionando algum espaço acima dos botões
  });

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center"> {/* Alinhando os itens verticalmente ao centro */}
          <Grid item xs={12} md={4}>
            <StyleImg src={Avatar} alt="Foto de Letícia Medeiros" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" gutterBottom>Letícia Medeiros</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center" gutterBottom>I'm a computer science student</Typography>
            <ButtonContainer>
              <a href={window.location.href} target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="secondary" size="large" style={{ marginRight: "10px" }}>Download CV</Button>
              </a>
              <a href="mailto:seuemail@example.com">
                <Button variant="contained" color="secondary" size="large">Contact me</Button>
              </a>
            </ButtonContainer>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
