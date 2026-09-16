import { Container, Title, Text, SimpleGrid, Card, Badge, Stack, Group, ThemeIcon, Button, Alert } from "@mantine/core";
import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import classes from "./landing.module.css";

interface Plan {
  title: string;
  tagline: string;
  price: string;
  priceNote?: string;
  included: string[];
  featured?: boolean;
  buttonLabel: string;
}

const PLANS: Plan[] = [
  {
    title: "Solo Empresa",
    tagline: "Nace tu compañía.",
    price: "$375",
    included: [
      "Redacción del documento constitutivo-estatutario",
      "Trámite completo ante el Registro Mercantil",
      "Comisario de confianza y todos sus recaudos",
      "Publicación en diario mercantil",
      "Firma a domicilio",
    ],
    buttonLabel: "Elegir Solo Empresa",
  },
  {
    title: "Empresa + RIF",
    tagline: "Con RIF, ya puedes emitir facturas.",
    price: "$450",
    included: [
      "Todo lo del plan Solo Empresa",
      "Inscripción en el Registro de Información Fiscal (RIF)",
    ],
    featured: true,
    buttonLabel: "Elegir Empresa + RIF",
  },
  {
    title: "Empresa Completa",
    tagline: "Con tus libros en regla desde el primer día.",
    price: "$570",
    included: [
      "Todo lo del plan Empresa + RIF",
      "Juego completo de libros mercantiles",
      "Sellado de libros ante el Registro Mercantil",
    ],
    buttonLabel: "Elegir Empresa Completa",
  },
  {
    title: "Empresa 100% Lista",
    tagline: "Nada que tramitar después. Todo resuelto.",
    price: "desde $570",
    priceNote: "Monto final pendiente de confirmar",
    included: [
      "Todo lo del plan Empresa Completa",
      "Inscripción en entes parafiscales: INCES, IVSS, BANAVIH/FAOV",
      "Patente de industria y comercio ante la alcaldía correspondiente",
    ],
    buttonLabel: "Elegir Empresa 100% Lista",
  },
];

function FeatureRow({ label, dimmed }: { label: string; dimmed?: boolean }) {
  return (
    <Group gap="xs" wrap="nowrap" align="flex-start">
      <ThemeIcon color="teal" variant="filled" size={18} radius="xl" mt={2}>
        <IconCheck size={12} />
      </ThemeIcon>
      <Text size="sm" c={dimmed ? "gray.4" : undefined}>
        {label}
      </Text>
    </Group>
  );
}

export function Plans() {
  return (
    <Container size="lg" py={88} id="planes">
      <Stack gap={4} maw={600} mb="xl">
        <Badge variant="light" color="teal" radius="sm" ff="var(--font-mono)" tt="uppercase" w="fit-content">
          Planes
        </Badge>
        <Title order={2} mt="sm">Elige el plan que se ajusta a lo que necesitas</Title>
        <Text c="dimmed">Cada plan detalla exactamente lo que incluye, para que decidas con información completa.</Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {PLANS.map((plan) => (
          <Card
            key={plan.title}
            className={classes.foldCard}
            withBorder
            radius="lg"
            padding="xl"
            style={plan.featured ? { backgroundColor: "var(--mantine-color-navy-9)", color: "white" } : undefined}
          >
            <Title order={3} c={plan.featured ? "white" : "#1F305E"} mb={2} size="h4">
              {plan.title}
            </Title>
            <Text size="sm" c={plan.featured ? "gray.4" : "dimmed"} mb="md" fs="italic">
              {plan.tagline}
            </Text>

            <Group align="baseline" gap={4} mb="lg">
              <Text fw={800} size="28px" c={plan.featured ? "white" : "#1F305E"}>
                {plan.price}
              </Text>
            </Group>
            {plan.priceNote && (
              <Text size="xs" c={plan.featured ? "gray.4" : "orange.7"} mb="md" mt={-12}>
                * {plan.priceNote}
              </Text>
            )}

            <Stack gap="xs" mb="lg">
              {plan.included.map((item) => (
                <FeatureRow key={item} label={item} dimmed={plan.featured} />
              ))}
            </Stack>

            <Button
              fullWidth
              color={plan.featured ? "teal" : "navy"}
              variant={plan.featured ? "filled" : "outline"}
              radius="xl"
              mt="auto"
            >
              {plan.buttonLabel}
            </Button>
          </Card>
        ))}
      </SimpleGrid>

      <Alert variant="light" color="teal" radius="md" mt="xl" icon={<IconInfoCircle />}>
        Ningún plan incluye la Planilla Única Bancaria (tasas oficiales del Registro) ni la
        reserva de denominación comercial — esos montos se pagan directamente en bolívares, y te
        confirmamos la cifra exacta antes de proceder al pago.
      </Alert>
    </Container>
  );
}
