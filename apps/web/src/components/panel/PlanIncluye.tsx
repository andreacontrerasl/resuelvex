import { Stack, Text, Group, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { PLAN_INCLUYE, PLAN_LABELS, type Plan } from "@resuelvex/shared";

export function PlanIncluye({ plan }: { plan: Plan }) {
  return (
    <Stack gap={6} mt="md">
      <Text size="xs" c="dimmed" fw={600} tt="uppercase">Tu plan incluye</Text>
      {PLAN_INCLUYE[plan].map((item) => (
        <Group key={item} gap={8} wrap="nowrap">
          <ThemeIcon color="teal" size={16} radius="xl"><IconCheck size={10} /></ThemeIcon>
          <Text size="xs" c="dimmed">{item}</Text>
        </Group>
      ))}
    </Stack>
  );
}
