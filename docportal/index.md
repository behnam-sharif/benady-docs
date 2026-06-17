---
title: XLGEN
sidebar_label: Overview
sidebar_position: 1
slug: /
---

Plain-language guides for the **xlgen** monorepo, aimed at health-economics modelers, product owners, and reviewers who do not need to read Python. Each page ends with a short **technical summary** for engineers.

## Start here

| Page | Audience focus |
|------|----------------|
| [Overall approach](./overall-approach) | Tables-first pipeline, enriched knowledge graph, stage map |
| [xl_ingest](./xl-ingest) | COM vs openpyxl, workbook preparation |

## Pipeline stages (in order)

| # | Page | One-line summary |
|---|------|------------------|
| 1 | [xl_table](./xl-table) | Blocking → filtering → framing: **find tables** |
| 2 | [xl_grammar](./xl-grammar) | **Children** (hierarchy) + **core**, titles, headers, row names (annotate) |
| 3 | [xl_dag](./xl-dag) | Formula **dependency graph** on core regions |
| 4 | [xl_ontology](./xl-ontology) | BIM **tags** + QC repair/promote |
| 5 | [xl_summarize](./xl-summarize) | Optional **LLM** overall + input tables |

## Conceptual flow

**Tables** (xl_table) → **core + labels + children** (xl_grammar) → **dependencies** (xl_dag) → **semantics** (xl_ontology) → **enriched KG** → optional **LLM** (xl_summarize / planned xl_structural).
