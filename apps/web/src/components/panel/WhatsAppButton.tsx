import {
  Button,
  Center,
} from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <Center>
      <Button
        component="a"
        href={buildWhatsAppLink(
          "Hola, tengo una duda sobre mi trámite en Resuelvex."
        )}
        target="_blank"
        rel="noopener noreferrer"
        variant="subtle"
        color="teal"
        radius="xl"
        leftSection={
          <IconBrandWhatsapp
            size={17}
          />
        }
      >
        ¿Tienes dudas? Escríbenos por WhatsApp
      </Button>
    </Center>
  );
}
