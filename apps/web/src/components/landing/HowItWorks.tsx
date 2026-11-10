import {
  Box,
  Container,
  Title,
  Text,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import classes from "./landing.module.css";

const STEPS = [
  {
    num: "01",
    title: "Elige tu plan",
    text: "Escoge el plan que mejor se adapte a lo que necesitas. Ves desde el inicio qué incluye y cuánto cuesta.",
  },
  {
    num: "02",
    title: "Cuéntanos sobre tu empresa",
    text: "Completa la información que necesitamos: socios, nombre, actividad, capital y administración.",
  },
  {
    num: "03",
    title: "Preparamos todo para la firma",
    text: "Preparamos la documentación y coordinamos la recolección de las firmas en la dirección que nos indiques.",
  },
  {
    num: "04",
    title: "Gestionamos la constitución",
    text: "Presentamos el trámite ante el Registro Mercantil y puedes consultar el avance desde tu cuenta.",
  },
  {
    num: "05",
    title: "Recibe tus documentos",
    text: "Una vez constituida tu empresa, recibes la documentación correspondiente en físico.",
  },
];

export function HowItWorks() {
  return (
    <Box
      component="section"
      id="como-funciona"
      className={classes.processSection}
    >
      <Container size="lg">
        <Stack gap={8} maw={620} mb={48}>
          <Title
            order={2}
            c="navy"
            className={classes.sectionTitle}
          >
            Así funciona Resuelvex.
          </Title>

          <Text
            c="gray.7"
            size="md"
            className={classes.sectionDescription}
          >
            Un proceso claro para constituir tu empresa. Tú nos das la
            información que necesitamos y nosotros coordinamos cada etapa
            del trámite.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 5 }}
          spacing="md"
        >
          {STEPS.map((step) => (
            <Box
              key={step.num}
              className={classes.processCard}
            >
              {/* Número decorativo */}
              <Text
                component="span"
                className={classes.processNumber}
                aria-hidden="true"
              >
                {step.num}
              </Text>

              {/* Contenido */}
              <Box className={classes.processCardContent}>
                <Box className={classes.processAccent} />

                <Text
                  fw={650}
                  c="navy"
                  className={classes.processTitle}
                >
                  {step.title}
                </Text>

                <Text
                  c="gray.7"
                  className={classes.processText}
                >
                  {step.text}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
