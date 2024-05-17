import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "50px",
    textAlign: "center", // Centralizar conteúdo
  }));

  const ButtonContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  const ProjectButton = styled(Button)(({ theme }) => ({
    margin: "10px",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }));

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary.contrastText" gutterBottom>
          Projects
        </Typography>
        <ButtonContainer>
          <a href="https://github.com/leticiamcmedeiros17" target="_blank" rel="noopener noreferrer">
            <ProjectButton variant="contained" size="large">
              Projeto 1
            </ProjectButton>
          </a>
          <a href="https://github.com/leticiamcmedeiros17" target="_blank" rel="noopener noreferrer">
            <ProjectButton variant="contained" size="large">
              Projeto 2
            </ProjectButton>
          </a>
          <a href="https://github.com/leticiamcmedeiros17" target="_blank" rel="noopener noreferrer">
            <ProjectButton variant="contained" size="large">
              Projeto 3
            </ProjectButton>
          </a>
          <a href="https://github.com/leticiamcmedeiros17" target="_blank" rel="noopener noreferrer">
            <ProjectButton variant="contained" size="large">
              Projeto 4
            </ProjectButton>
          </a>
        </ButtonContainer>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
