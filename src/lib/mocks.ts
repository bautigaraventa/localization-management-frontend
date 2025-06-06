import { Project, TranslationKey } from "@/types";

// Endpoint to get existing projects is out of scope. Mocking them instead.
export const mockedProjects: Project[] = [
    {
        id: "1",
        name: "Online Banking",
    },
    {
        id: "2",
        name: "Health Dashboard"
    }
]

export const mockedTranslationKeys: TranslationKey[] = [
  {
    id: "1",
    key: "button.save",
    category: "buttons",
    description: "Save button text",
    translations: {
      en: {
        value: "Save",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
      es: {
        value: "Guardar",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
    },
  },
  {
    id: "2",
    key: "button.cancel",
    category: "buttons",
    description: "Cancel button text",
    translations: {
      en: {
        value: "Cancel",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
      es: {
        value: "Cancelar",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
    },
  },
  {
    id: "3",
    key: "label.welcome",
    category: "labels",
    description: "Welcome label text",
    translations: {
      en: {
        value: "Welcome",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
      es: {
        value: "Bienvenido",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
    },
  },
  {
    id: "4",
    key: "label.signin",
    category: "labels",
    description: "Sign in label text",
    translations: {
      en: {
        value: "Sign in",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
      es: {
        value: "Ingresar",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
      pt: {
        value: "Ingresar",
        updatedAt: "2025-06-01T12:00:00Z",
        updatedBy: "admin",
      },
    },
  },
];