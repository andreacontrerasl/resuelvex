import {
  Box,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import {
  PLAN_INCLUYE,
  PLAN_LABELS,
  type Plan,
} from "@resuelvex/shared";

export function PlanIncluye({
  plan,
}: {
  plan: Plan;
}) {
  return (
    <Box>
      <Text
        size="xs"
        c="dimmed"
        fw={650}
        tt="uppercase"
        style={{
          letterSpacing: "0.05em",
        }}
      >
        Tu plan
      </Text>

      <Text
        fw={650}
        c="navy.9"
        mt={4}
        mb="md"
      >
        {PLAN_LABELS[plan]}
      </Text>

      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
        }}
        spacing="sm"
      >
        {PLAN_INCLUYE[plan].map(
          (item) => (
            <Group
              key={item}
              gap={8}
              wrap="nowrap"
              align="flex-start"
            >
              <ThemeIcon
                color="teal"
                variant="light"
                size={18}
                radius="xl"
                mt={1}
                style={{
                  flexShrink: 0,
                }}
              >
                <IconCheck
                  size={11}
                  stroke={2.5}
                />
              </ThemeIcon>

              <Text
                size="xs"
                c="dimmed"
                lh={1.45}
              >
                {item}
              </Text>
            </Group>
          )
        )}
      </SimpleGrid>
    </Box>
  );
}
