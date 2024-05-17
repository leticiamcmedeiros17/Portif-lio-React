import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";

const Contacts = () => {
  const StyledContacts = styled("div")(() => ({
    backgroundColor: "#fff", // Fundo branco para a seção de contatos
    padding: "50px",
    textAlign: "center",
  }));

  const ButtonContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  });

  const ContactButton = styled(Button)(({ theme }) => ({
    margin: "0 10px",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }));

  return (
    <StyledContacts>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" gutterBottom>Contact Me</Typography>
        <ButtonContainer>
          <a href="https://www.instagram.com/accounts/onetap/?next=%2F" target="_blank" rel="noopener noreferrer">
            <ContactButton variant="contained" size="large">
              Instagram
            </ContactButton>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
            <ContactButton variant="contained" size="large">
              Email
            </ContactButton>
          </a>
          <a href="https://github.com/leticiamcmedeiros17" target="_blank" rel="noopener noreferrer">
            <ContactButton variant="contained" size="large">
              GitHub
            </ContactButton>
          </a>
        </ButtonContainer>
      </Container>
    </StyledContacts>
  );
};

export default Contacts;
