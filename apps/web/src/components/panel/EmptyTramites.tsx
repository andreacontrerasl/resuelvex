import { Paper, Text } from "@mantine/core";

export function EmptyTramites() {
  return (
    <Paper radius="lg" p="xl" withBorder>
      <Text c="gray.7" ta="center">
        Todavía no tienes ningún trámite activo. Si acabas de pagar tu plan, tu trámite
        aparecerá aquí en cuanto lo carguemos de nuestro lado.
      </Text>
    </Paper>
  );
}
