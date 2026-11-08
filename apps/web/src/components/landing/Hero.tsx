import {
  Container,
  SimpleGrid,
  Title,
  Text,
  Group,
  Button,
  Box,
  Paper,
  Stack,
} from "@mantine/core";
import {
  IconCheck,
  IconBuildingBank,
} from "@tabler/icons-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import classes from "./landing.module.css";

export function Hero() {
  return (
    <Box
      component="section"
      pos="relative"
      pt={88}
      pb={60}
      style={{ overflow: "hidden" }}
    >
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing={56}
          verticalSpacing={56}
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Title
              order={1}
              mb="md"
              c="navy.9"
              style={{
                fontSize: "clamp(38px, 4.2vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Constituye tu empresa en Venezuela,{" "}
              <Text component="span" c="teal.6" inherit>
                sin complicarte.
              </Text>
            </Title>

            <Text
              c="dimmed"
              size="md"
              mb="xl"
              maw={520}
              style={{
                lineHeight: 1.65,
              }}
            >
              Nos encargamos de coordinar todo el proceso de constitución por
              ti: documentos, firma y gestión ante el Registro Mercantil. Con
              un precio claro y seguimiento de tu trámite de principio a fin.
            </Text>

            <Group mb="lg">
              <Button
                component="a"
                href="#planes"
                color="navy"
                radius="xl"
                size="md"
              >
                Ver planes y precios
              </Button>

              <Button
                component="a"
                href={buildWhatsAppLink(
                  "Hola, quiero más información sobre cómo constituir mi empresa."
                )}
                target="_blank"
                variant="outline"
                color="navy"
                radius="xl"
                size="md"
              >
                Hablar por WhatsApp
              </Button>
            </Group>

            <Group gap="lg">
              <Group gap={5} wrap="nowrap">
                <IconCheck
                  size={15}
                  stroke={2.2}
                  color="var(--mantine-color-teal-7)"
                />

                <Text size="sm" c="dimmed">
                  Precio claro
                </Text>
              </Group>

              <Group gap={5} wrap="nowrap">
                <IconCheck
                  size={15}
                  stroke={2.2}
                  color="var(--mantine-color-teal-7)"
                />

                <Text size="sm" c="dimmed">
                  Firma a domicilio
                </Text>
              </Group>

              <Group gap={5} wrap="nowrap">
                <IconCheck
                  size={15}
                  stroke={2.2}
                  color="var(--mantine-color-teal-7)"
                />

                <Text size="sm" c="dimmed">
                  Seguimiento online
                </Text>
              </Group>
            </Group>
          </Box>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <Box
            pos="relative"
            className={classes.darkStage}
            h={{ base: 500, md: 510 }}
          >
            {/* Background */}

            <Box className={classes.heroDocumentGlow} />

            <Text
              className={classes.heroBackgroundCode}
              ff="var(--font-mono)"
              aria-hidden="true"
            >
              C.A.
            </Text>

            {/* ===================================================
                DOCUMENT COMPOSITION
            =================================================== */}

            <Box className={classes.heroDocumentComposition}>
              {/* =================================================
                  BACK DOCUMENT
              ================================================= */}

              <Paper
                radius="sm"
                className={classes.heroBackDocument}
                aria-hidden="true"
              >
                <Box className={classes.heroBackDocumentHeader}>
                  <Text
                    size="8px"
                    fw={700}
                    ff="var(--font-mono)"
                    tt="uppercase"
                  >
                    Informe de inventario
                  </Text>
                </Box>

                <Stack gap={7} mt={16}>
                  <Box
                    className={classes.heroDocumentLine}
                    w="84%"
                  />

                  <Box
                    className={classes.heroDocumentLine}
                    w="100%"
                  />

                  <Box
                    className={classes.heroDocumentLine}
                    w="92%"
                  />

                  <Box
                    className={classes.heroDocumentLine}
                    w="76%"
                  />
                </Stack>
              </Paper>

              {/* =================================================
                  MIDDLE DOCUMENT
              ================================================= */}

              <Paper
                radius="sm"
                className={classes.heroMiddleDocument}
                aria-hidden="true"
              />

              {/* =================================================
                  MAIN DOCUMENT
              ================================================= */}

              <Paper
                radius="sm"
                className={classes.heroMainDocument}
              >
                {/* DOCUMENT HEADER */}

                <Box className={classes.heroDocumentTop}>
                  <Box className={classes.heroDocumentMark}>
                    R
                  </Box>

                  <Box>
                    <Text
                      size="8px"
                      fw={700}
                      c="navy"
                      ff="var(--font-mono)"
                      tt="uppercase"
                      style={{
                        letterSpacing: "0.08em",
                      }}
                    >
                      Resuelvex
                    </Text>

                    <Text
                      size="7px"
                      c="dimmed"
                      ff="var(--font-mono)"
                      mt={1}
                    >
                      Constitución de compañía
                    </Text>
                  </Box>
                </Box>

                {/* DOCUMENT TITLE */}

                <Box
                  ta="center"
                  mt={20}
                  mb={20}
                >
                  <Text
                    size="9px"
                    c="dimmed"
                    ff="var(--font-mono)"
                    tt="uppercase"
                    style={{
                      letterSpacing: "0.12em",
                    }}
                  >
                    Documento constitutivo
                  </Text>

                  <Text
                    fw={700}
                    c="navy"
                    size="md"
                    mt={5}
                    style={{
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Inversiones JR, C.A.
                  </Text>

                  <Box
                    className={classes.heroDocumentTitleLine}
                  />
                </Box>

                {/* INTRO */}

                <Box mb={16}>
                  <Text
                    size="7px"
                    c="gray.7"
                    lh={1.55}
                    mb={7}
                  >
                    Nosotros, los abajo firmantes, declaramos nuestra voluntad
                    de constituir una compañía anónima conforme a las
                    disposiciones establecidas en el presente documento.
                  </Text>

                  <Stack gap={5}>
                    <Box
                      className={classes.heroDocumentLine}
                      w="100%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="94%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="72%"
                    />
                  </Stack>
                </Box>

                {/* CLAUSE 01 */}

                <Box className={classes.heroDocumentClause}>
                  <Group gap={7} mb={7}>
                    <Text
                      size="7px"
                      fw={700}
                      c="teal.7"
                      ff="var(--font-mono)"
                    >
                      01
                    </Text>

                    <Text
                      size="7px"
                      fw={700}
                      c="navy"
                      tt="uppercase"
                      style={{
                        letterSpacing: "0.05em",
                      }}
                    >
                      Denominación y domicilio
                    </Text>
                  </Group>

                  <Stack gap={5}>
                    <Box
                      className={classes.heroDocumentLine}
                      w="100%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="92%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="68%"
                    />
                  </Stack>
                </Box>

                {/* CLAUSE 02 */}

                <Box className={classes.heroDocumentClause}>
                  <Group gap={7} mb={7}>
                    <Text
                      size="7px"
                      fw={700}
                      c="teal.7"
                      ff="var(--font-mono)"
                    >
                      02
                    </Text>

                    <Text
                      size="7px"
                      fw={700}
                      c="navy"
                      tt="uppercase"
                      style={{
                        letterSpacing: "0.05em",
                      }}
                    >
                      Objeto de la compañía
                    </Text>
                  </Group>

                  <Stack gap={5}>
                    <Box
                      className={classes.heroDocumentLine}
                      w="96%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="100%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="82%"
                    />
                  </Stack>
                </Box>

                {/* CLAUSE 03 */}

                <Box className={classes.heroDocumentClause}>
                  <Group gap={7} mb={7}>
                    <Text
                      size="7px"
                      fw={700}
                      c="teal.7"
                      ff="var(--font-mono)"
                    >
                      03
                    </Text>

                    <Text
                      size="7px"
                      fw={700}
                      c="navy"
                      tt="uppercase"
                      style={{
                        letterSpacing: "0.05em",
                      }}
                    >
                      Capital y administración
                    </Text>
                  </Group>

                  <Stack gap={5}>
                    <Box
                      className={classes.heroDocumentLine}
                      w="100%"
                    />

                    <Box
                      className={classes.heroDocumentLine}
                      w="88%"
                    />
                  </Stack>
                </Box>

                {/* SIGNATURES */}

                <Group
                  justify="space-between"
                  gap={28}
                  mt={24}
                  wrap="nowrap"
                >
                  <Box flex={1}>
                    <Box
                      className={classes.heroSignatureLine}
                    />

                    <Text
                      size="6px"
                      c="dimmed"
                      ta="center"
                      mt={4}
                    >
                      Firma del socio
                    </Text>
                  </Box>

                  <Box flex={1}>
                    <Box
                      className={classes.heroSignatureLine}
                    />

                    <Text
                      size="6px"
                      c="dimmed"
                      ta="center"
                      mt={4}
                    >
                      Firma del socio
                    </Text>
                  </Box>
                </Group>

                <Text
                  size="6px"
                  c="gray.5"
                  ff="var(--font-mono)"
                  ta="center"
                  mt={16}
                >
                  — 01 —
                </Text>

                {/* FOLDED CORNER */}

                <Box
                  className={classes.heroDocumentFold}
                />
              </Paper>


              {/* =================================================
                  FLOATING CARD — DOCUMENTS
              ================================================= */}

              <Paper
                radius="lg"
                className={classes.heroStatusCardDocuments}
              >
                <Box className={classes.heroStatusCheck}>
                  <IconCheck
                    size={13}
                    stroke={3}
                  />
                </Box>

                <Box>
                  <Text
                    size="10px"
                    fw={700}
                    c="navy"
                    lh={1.3}
                  >
                    Documentos preparados
                  </Text>

                  <Text
                    size="8px"
                    c="dimmed"
                    mt={2}
                  >
                    Listos para la firma
                  </Text>
                </Box>
              </Paper>

              {/* =================================================
                  FLOATING CARD — REGISTRY
              ================================================= */}

              <Paper
                radius="lg"
                className={classes.heroStatusCardRegistry}
              >
                <Box className={classes.heroRegistryIcon}>
                  <IconBuildingBank
                    size={14}
                    stroke={1.8}
                  />
                </Box>

                <Box>
                  <Group
                    gap={5}
                    wrap="nowrap"
                  >
                    <Box
                      className={classes.heroLiveDot}
                    />

                    <Text
                      size="8px"
                      fw={700}
                      c="teal.7"
                      ff="var(--font-mono)"
                      tt="uppercase"
                      style={{
                        letterSpacing: "0.04em",
                      }}
                    >
                      En proceso
                    </Text>
                  </Group>

                  <Text
                    size="10px"
                    fw={650}
                    c="navy"
                    mt={3}
                    lh={1.3}
                  >
                    Registro Mercantil
                  </Text>
                </Box>
              </Paper>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
