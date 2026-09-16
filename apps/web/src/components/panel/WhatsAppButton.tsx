import { Button } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsAppButton() {
  return (
    <Button
      component="a"
      href="https://wa.me/58XXXXXXXXXX"
      target="_blank"
      variant="light"
      color="teal"
      radius="xl"
      leftSection={<IconBrandWhatsapp size={16} />}
      fullWidth
      mt={10}
    >
      ¿Dudas sobre tu trámite? Escríbenos
    </Button>
  );
}
