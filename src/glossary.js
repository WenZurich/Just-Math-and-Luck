/** Term helper + HTML escape. Glossary help page removed; term() returns plain text. */
import { t } from "./i18n.js";

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Escaped label for chrome; optional glossary id maps via i18n. */
export function term(id, fallback) {
  return escapeHtml(t(id, fallback));
}

/** @deprecated Help/glossary view removed */
export function renderGlossarySection() {
  return "";
}

export function bindGlossaryAccordion() {}

export function bindTermLinks() {}
