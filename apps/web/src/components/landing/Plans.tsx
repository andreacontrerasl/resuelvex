import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  Group,
  ThemeIcon,
  Button,
  Alert,
  Box,
} from "@mantine/core";
import {
  IconCheck,
  IconX,
  IconInfoCircle,
} from "@tabler/icons-react";
import classes from "./landing.module.css";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface Plan {
  title: string;
  description: string;
  price: string;
  included: string[];
  featured?: boolean;
  pending?: boolean;
  buttonLabel: string;
}

const PLANS: Plan[] = [
  {
    title: "Solo Empresa",
    description: "Lo esencial para constituir tu compañía.",
    price: "$375",
    included: [
      "Documento constitutivo-estatutario",
      "Trámite ante el Registro Mercantil",
      "Comisario y sus recaudos",
      "Publicación en diario mercantil",
      "Firma a domicilio",
    ],
    buttonLabel: "Elegir este plan",
  },
  {
    title: "Empresa + RIF",
    description: "Tu empresa constituida y con RIF.",
    price: "$450",
    included: [
      "Todo lo del plan Solo Empresa",
      "Registro de Información Fiscal (RIF)",
    ],
    featured: true,
    buttonLabel: "Elegir este plan",
  },
  {
    title: "Empresa Completa",
    description: "Empresa, RIF y libros mercantiles.",
    price: "$570",
    included: [
      "Todo lo del plan Empresa + RIF",
      "Juego completo de libros mercantiles",
      "Sellado de libros ante el Registro Mercantil",
    ],
    buttonLabel: "Elegir este plan",
  },
  {
    title: "Empresa 100% Lista",
    description: "Incluye trámites adicionales para comenzar a operar.",
    price: "Precio por confirmar",
    included: [
      "Todo lo del plan Empresa Completa",
      "Inscripción en INCES, IVSS y BANAVIH/FAOV",
      "Patente de industria y comercio",
    ],
    pending: true,
    buttonLabel: "Quiero más información",
  },
];

function FeatureRow({
  label,
  featured,
}: {
  label: string;
  featured?: boolean;
}) {
  return (
    <Group gap={9} wrap="nowrap" align="flex-start">
      <ThemeIcon
        color={featured ? "teal.8" : "teal"}
        variant={featured ? "filled" : "light"}
        size={20}
        radius="xl"
        mt={1}
      >
        <IconCheck size={12} stroke={2.5} />
      </ThemeIcon>

      <Text
        size="sm"
        c={featured ? "gray.3" : "gray.7"}
        lh={1.45}
      >
        {label}
      </Text>
    </Group>
  );
}

function ExcludedRow({
  label,
  featured,
}: {
  label: string;
  featured?: boolean;
}) {
  return (
    <Group gap={9} wrap="nowrap" align="flex-start">
      <ThemeIcon
        color={featured ? "gray.5" : "gray.4"}
        variant="light"
        size={20}
        radius="xl"
        mt={1}
      >
        <IconX size={12} stroke={2.5} />
      </ThemeIcon>

      <Text
        size="sm"
        c={featured ? "gray.5" : "gray.5"}
        lh={1.45}
      >
        {label}
      </Text>
    </Group>
  );
}

export function Plans() {
  return (
    <Container size="lg" py={96} id="planes">
      {/* Header */}

      <Stack gap={8} maw={650} mb={32}>
        <Title
          order={2}
          c="navy"
          className={classes.sectionTitle}
        >
          Un precio fijo. Tú decides hasta dónde llegar.
        </Title>

        <Text c="gray.7" size="md" lh={1.65}>
          Todos los planes constituyen tu empresa. La diferencia está en cuántos trámites quieres dejar resueltos desde el principio. Sin sorpresas y sin gastos escondidos: el precio que ves es el que pagas.       
        </Text>
      </Stack>

      {/* Plans */}

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing="lg"
      >
        {PLANS.map((plan) => (
          <Card
            key={plan.title}
            className={`${classes.planCard} ${
              plan.featured ? classes.planCardFeatured : ""
            }`}
            radius="lg"
            padding="xl"
          >
            <Stack h="100%" gap={0}>
              {/* Plan name */}

              <Text
                size="xs"
                fw={700}
                c={plan.featured ? "teal.3" : "teal.9"}
                tt="uppercase"
                ff="var(--font-mono)"
                mb={10}
                style={{ letterSpacing: "0.04em" }}
              >
                {plan.title}
              </Text>

              {/* Price */}

              <Box mb={14}>
                <Text
                  fw={800}
                  c={plan.featured ? "white" : "navy"}
                  className={
                    plan.pending
                      ? classes.planPendingPrice
                      : classes.planPrice
                  }
                >
                  {plan.price}
                </Text>
              </Box>

              {/* Description */}

              <Text
                size="sm"
                c={plan.featured ? "gray.4" : "gray.7"}
                lh={1.5}
                mb={24}
                className={classes.planDescription}
              >
                {plan.description}
              </Text>

              {/* Divider */}

              <Box
                className={
                  plan.featured
                    ? classes.planDividerFeatured
                    : classes.planDivider
                }
                mb={20}
              />

              {/* Features */}

              <Stack gap={12} mb={28}>
                {plan.included.map((item) => (
                  <FeatureRow
                    key={item}
                    label={item}
                    featured={plan.featured}
                  />
                ))}
                <ExcludedRow
                  label="No incluye tasas oficiales"
                  featured={plan.featured}
                />
              </Stack>

              {/* Button */}

              <Button
                component="a"
                href={buildWhatsAppLink(
                  plan.pending
                    ? `Hola, quiero más información sobre el plan ${plan.title}.`
                    : `Hola, estoy interesado en el plan ${plan.title} (${plan.price}). ¿Me pueden dar más información?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                color={plan.featured ? "teal" : "navy"}
                variant={plan.featured ? "filled" : "outline"}
                radius="xl"
                mt="auto"
              >
                {plan.buttonLabel}
              </Button>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      {/* Registry fees */}

      <Alert
        variant="light"
        color="teal"
        radius="md"
        mt={28}
        icon={<IconInfoCircle size={20} />}
        className={classes.planFeesAlert}
      >
        <Text size="sm" lh={1.55}>
          <strong>Los pagos oficiales del Registro se realizan por separado.</strong>{" "}
          Las tasas de la Planilla Única Bancaria y la reserva de la
          denominación comercial no están incluidas en el precio del plan.
          Te indicaremos el monto exacto antes de realizar cada pago.
        </Text>
      </Alert>
    </Container>
  );
}
