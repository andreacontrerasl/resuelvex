import {
  Anchor,
  Group,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconFileText } from "@tabler/icons-react";
import type { TramiteDocumento } from "@resuelvex/shared";

export function DocumentoBanner({
  tramiteId,
  documento,
}: {
  tramiteId: string;
  documento: TramiteDocumento;
}) {
  return (
    <Paper
      radius="lg"
      p="md"
      mt="md"
      bg="teal.0"
    >
      <Group
        gap="sm"
        wrap="nowrap"
        align="flex-start"
      >
        <ThemeIcon
          color="teal"
          variant="light"
          radius="xl"
          size={30}
          style={{
            flexShrink: 0,
          }}
        >
          <IconFileText
            size={17}
            stroke={1.8}
          />
        </ThemeIcon>

        <div>
          <Text
            size="xs"
            fw={650}
            c="navy.9"
            mb={3}
          >
            Tu documento constitutivo
          </Text>

          <Text
            size="sm"
            c="navy.9"
            lh={1.55}
            mb={4}
          >
            Ya puedes revisarlo. {documento.nombre}
          </Text>

          <Anchor
            href={`/api/proxy/tramites/${tramiteId}/documento`}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            fw={600}
          >
            Ver y descargar documento
          </Anchor>
        </div>
      </Group>
    </Paper>
  );
}
