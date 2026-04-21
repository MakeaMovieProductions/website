# Shot List Template — Build Document

## Source Material

- **Base template:** `ShotListTemplate_v0.xlsx` — existing workbook with foundational structure
- **Reference doc:** `shot_list.md` — defines all column categories, dropdown values, and field descriptions

---

## Workbook Structure

### Sheet 1 — `Shot List`

The primary working sheet. Every row is one shot. Columns are ordered by on-set workflow priority: you scan left-to-right to get the full picture of a shot before calling it.

| # | Column | Type | Notes |
|---|--------|------|-------|
| A | Shot # | Number | Sequential. Auto-increments from 1. |
| B | Scene # | Text | Corresponds to the script scene number (e.g. `3A`, `12`). |
| C | Status | Dropdown | `To Shoot` / `In Progress` / `Wrapped` |
| D | Description | Text | Free-text. E.g. "CU of protagonist looking at watch". |
| E | Location | Text | Name of the physical location / set. |
| F | Shot Size | Dropdown | See values below. |
| G | Camera Angle | Dropdown | See values below. |
| H | Framing | Dropdown | See values below. |
| I | Camera Movement | Dropdown | See values below. |
| J | Equipment / Lens | Text | Free-text. E.g. "Sony FX3 — G Master 85mm". |
| K | Done ✓ | Checkbox | Quick tick on set. |

---

## Dropdown Values

### Status (Column C)
- To Shoot
- In Progress
- Wrapped

### Shot Size (Column F)
From widest to tightest:
- Extreme Wide Shot (EWS)
- Wide Shot (WS)
- Full Shot (FS)
- Medium Wide Shot (MWS)
- Medium Shot (MS)
- Medium Close-Up (MCU)
- Close-Up (CU)
- Extreme Close-Up (ECU)

### Camera Angle (Column G)
- Eye Level
- Low Angle
- High Angle
- Bird's Eye
- Worm's Eye
- Dutch Angle

### Framing / Relationship (Column H)
- Single
- Two-Shot
- Three-Shot
- Over-the-Shoulder (OTS)
- Point of View (POV)
- Insert Shot

### Camera Movement (Column I)
- Static
- Pan
- Tilt
- Dolly
- Tracking Shot
- Crane / Jib
- Handheld
- Steadicam / Gimbal

---

## Sheet 2 — `Reference`

A read-only legend sheet. Contains:
- Definitions for every dropdown value (from `shot_list.md`)
- Color key for Status column conditional formatting
- Print instructions

---

## Formatting Decisions

### Header Row (Row 1)
- Background: `#111111` (cinema-black)
- Text: `#F0C040` (brand gold)
- Font: Bold, 10pt
- Borders: thin bottom border in gold

### Alternating Row Colors
- Odd rows: `#1A1A1A`
- Even rows: `#141414`
- Text: `#F2EFE6` (warm white)

### Status Conditional Formatting (Column C)
| Value | Fill | Text |
|-------|------|------|
| To Shoot | `#1A1A2E` (deep blue-black) | `#8BA3C8` (muted blue) |
| In Progress | `#2A1A0A` (deep amber-black) | `#F0C040` (gold) |
| Wrapped | `#0A1A0A` (deep green-black) | `#4DB87A` (green) |

### Column Widths
| Column | Width |
|--------|-------|
| Shot # | 8 |
| Scene # | 10 |
| Status | 14 |
| Description | 40 |
| Location | 22 |
| Shot Size | 22 |
| Camera Angle | 18 |
| Framing | 22 |
| Camera Movement | 20 |
| Equipment / Lens | 28 |
| Done ✓ | 8 |

### Frozen Panes
- Row 1 (headers) frozen
- Column A (Shot #) frozen

### Print Setup
- Landscape orientation
- Fit to 1 page wide, N pages tall
- Print area: all data rows
- Repeat row 1 on every printed page

---

## Google Sheets Compatibility

The `.xlsx` file is fully importable into Google Sheets via **File → Import → Upload**. When imported:
- Data validation dropdowns are preserved
- Checkboxes in Column K convert to Google Sheets checkboxes
- Conditional formatting rules carry over with minor color approximation
- Frozen panes are preserved

To use natively in Google Sheets, go to **File → Save as Google Sheets** after import.

---

## Build Method

The template is generated programmatically via **PowerShell Excel COM automation** (`Excel.Application` COM object), which:
1. Opens a new workbook
2. Writes headers and sample rows to Sheet 1
3. Applies data validation (dropdown lists) to the appropriate columns
4. Applies conditional formatting rules to the Status column
5. Inserts checkboxes in Column K
6. Freezes Row 1 and Column A
7. Sets column widths and row heights
8. Formats the header row
9. Builds a Reference sheet with value definitions
10. Saves as `ShotListTemplate_v1.xlsx`
