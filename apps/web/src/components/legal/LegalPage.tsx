import { Box, Container, Group, Stack, Text, Title } from "@mantine/core";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { getUserSession } from "@/lib/getUserSession";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

export async function LegalPage({
  eyebrow,
  title,
  updatedAt,
  intro,
  sections,
}: LegalPageProps) {
  const { isLoggedIn, dashboardHref } = await getUserSession();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} dashboardHref={dashboardHref} />

      <Container size="md" pt={88} pb={96}>
        <Stack gap={8} mb={48} maw={680}>
          <Text
            size="xs"
            c="teal.7"
            tt="uppercase"
            ff="var(--font-mono)"
            fw={600}
            style={{ letterSpacing: "0.06em" }}
          >
            {eyebrow}
          </Text>

          <Title
            order={1}
            c="navy"
            style={{
              fontSize: "clamp(30px, 3vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </Title>

          <Text size="sm" c="dimmed">
            Última actualización: {updatedAt}
          </Text>

          <Text c="gray.7" size="md" lh={1.65} mt="sm">
            {intro}
          </Text>
        </Stack>

        <Stack gap={40}>
          {sections.map((section, index) => (
            <Box key={section.heading}>
              <Title order={2} size="h3" c="navy" mb="sm">
                {index + 1}. {section.heading}
              </Title>

              <Stack gap="sm">
                {section.paragraphs?.map((paragraph) => (
                  <Text key={paragraph} c="gray.7" size="sm" lh={1.7}>
                    {paragraph}
                  </Text>
                ))}

                {section.list && (
                  <Stack gap="xs">
                    {section.list.map((item) => (
                      <Group key={item} gap="xs" wrap="nowrap" align="flex-start">
                        <Text c="teal.7" size="sm" lh={1.7}>
                          •
                        </Text>
                        <Text c="gray.7" size="sm" lh={1.7}>
                          {item}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
