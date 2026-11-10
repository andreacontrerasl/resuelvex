"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Group, Stack, Text, Anchor, Alert } from "@mantine/core";
import { IconFileCheck, IconUpload } from "@tabler/icons-react";

const TAMANO_MAXIMO = 3 * 1024 * 1024; // 3MB — margen cómodo bajo el límite de 4.5MB de Vercel

function leerComoBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function DocumentoUpload({
  tramiteId,
  documento,
}: {
  tramiteId: string;
  documento?: { nombre: string; subidoEn?: string };
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setError(null);

    if (file.type !== "application/pdf") {
      setError("El documento debe ser un PDF.");
      return;
    }

    if (file.size > TAMANO_MAXIMO) {
      setError("El archivo pesa demasiado. El tamaño máximo es 3MB.");
      return;
    }

    setLoading(true);
    try {
      const data = await leerComoBase64(file);
      const res = await fetch(`/api/proxy/tramites/${tramiteId}/documento`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: file.name, tipo: file.type, data }),
      });

      if (!res.ok) {
        setError("No se pudo subir el documento. Intenta de nuevo.");
        return;
      }

      router.refresh();
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <Stack gap="sm">
      {documento && (
        <Alert color="teal" radius="md" icon={<IconFileCheck size={18} />}>
          <Text size="sm">
            Documento actual: <strong>{documento.nombre}</strong>
          </Text>
          <Anchor
            href={`/api/proxy/tramites/${tramiteId}/documento`}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Ver documento
          </Anchor>
        </Alert>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      <Group>
        <Button
          leftSection={<IconUpload size={16} />}
          color="navy"
          radius="xl"
          variant={documento ? "outline" : "filled"}
          loading={loading}
          onClick={() => inputRef.current?.click()}
        >
          {documento ? "Reemplazar documento" : "Subir y pasar a revisión"}
        </Button>
      </Group>

      {!documento && (
        <Text size="xs" c="gray.7">
          Al subir el documento, el trámite pasa automáticamente a &quot;Revisión del documento&quot; y se le notifica al cliente por correo.
        </Text>
      )}

      {error && (
        <Text size="xs" c="red.7">
          {error}
        </Text>
      )}
    </Stack>
  );
}
