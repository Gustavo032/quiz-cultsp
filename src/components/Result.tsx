import { Typography, Button, Paper, Box } from "@mui/material";

interface ResultProps {
  course: string;
  onRestart: () => void;
}
const courseDescriptions: Record<string, string> = {
  artes: "🎭 A Escola de Artes oferece oficinas de performance, cenografia e produção musical — ideal para quem busca se expressar artisticamente no palco e nos bastidores.",
  patrimônios: "🏛️ A Escola de Patrimônios e Equipamentos é para quem se interessa por cultura, museus, memória e preservação da história local e nacional.",
  audiovisual: "🎬 A Escola do Audiovisual, Games e Tecnologias é voltada a quem ama cinema, vídeos, jogos e tecnologia criativa.",
  design: "🎨 A Escola de Conteúdo, Design e Artes Visuais é ideal para mentes visuais que amam criar, ilustrar, fotografar e comunicar com imagens.",
  tradições: "🌿 A Escola de Tradições e Expressões Criativas é perfeita para quem valoriza gastronomia, moda sustentável, arte popular e saberes tradicionais.",
  inovação: "🚀 A Escola de Inovação e Sustentabilidade forma empreendedores culturais que querem transformar a sociedade com arte, gestão e impacto social."
};

export default function Result({ course, onRestart }: ResultProps) {
  const description = courseDescriptions[course] || "Curso não encontrado.";

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 10 }}>
      <Paper
        elevation={8}
        sx={{
          p: 5,
          borderRadius: 4,
          background: "linear-gradient(to right, #e0f7fa, #f8fafc)",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#00796b">
          Resultado:
        </Typography>

        <Typography
          variant="h5"
          mb={4}
          sx={{ textTransform: "capitalize", fontWeight: 600 }}
        >
          Seu curso ideal é: <strong>{course.replace("_", " ")}</strong>
        </Typography>

        <Typography variant="body1" mb={5} fontSize="1.2rem" color="#004d40">
          {description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#00796b",
            "&:hover": {
              backgroundColor: "#004d40",
              boxShadow: "0 6px 15px rgba(0,121,107,0.6)"
            },
            fontWeight: "bold",
            px: 5,
            py: 1.5
          }}
          onClick={onRestart}
        >
          Refazer Quiz
        </Button>
      </Paper>
    </Box>
  );
}
