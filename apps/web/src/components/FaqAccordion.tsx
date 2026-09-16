"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Debo firmar en persona en alguna oficina?",
    answer: "No. Coordinamos la recolección de tu firma en el domicilio que nos indiques.",
  },
  {
    question: "¿Cuánto tiempo toma el trámite?",
    answer:
      "En condiciones normales, alrededor de un mes desde que el expediente se radica en el Registro. Es un tiempo estimado: el plazo final depende de los tiempos internos del Registro Mercantil, no de nosotros.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Zelle, transferencia bancaria y pago móvil, entre otros medios habituales en Venezuela.",
  },
  {
    question: "¿El precio del plan cubre todo el trámite?",
    answer:
      "Cubre nuestros honorarios, el traslado y la gestión. La planilla del Registro se paga de forma independiente; te confirmamos el monto correspondiente a tu caso antes de que debas pagarla.",
  },
  {
    question: "¿Resuelvex es un despacho de abogados?",
    answer:
      "No. Somos un servicio de gestión y trámite: preparamos tu documentación con base en modelos ya utilizados en la práctica y coordinamos el proceso ante el Registro Mercantil. Si tu caso requiere asesoría legal específica, te lo indicamos antes de continuar.",
  },
  {
    question: "¿Qué pasa si el nombre que elegí no está disponible?",
    answer: "Buscamos nuevas opciones sin costo adicional, hasta encontrar un nombre disponible.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`faq-item ${isOpen ? "open" : ""}`}>
            <div
              className="faq-q"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setOpenIndex(isOpen ? null : index);
              }}
            >
              <span>{item.question}</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">{item.answer}</div>
          </div>
        );
      })}
    </div>
  );
}
