# Shot List Template — Build Document
**Current version:** `ShotListTemplate_v2.xlsx`

## Source Material
- **Base template:** `ShotListTemplate_v0.xlsx` — original structure
- **Reference doc:** `shot_list.md` — column categories and dropdown value definitions

---

## Workbook Structure

### Sheet 1 — `Shot List`
The main working sheet. Rows 1–7 are a fixed header block for production info. Row 8 is the column header. Data starts at row 9.

### Sheet 2 — `Reference`
Read-only legend: definitions for every dropdown value, INT/EXT color codes, Google Sheets setup instructions.

---

## Header Block (Rows 1–7)

Row 1 spans all columns and displays the title **"SHOT LIST"** in brand gold on cinema black.

Rows 2–6 are split into two blocks separated by a visual gap at column H:

**Left block — crew (cols A–G)**

| Row | Label (col A) | Value spans |
|-----|--------------|-------------|
| 2 | PROJECT | B–G |
| 3 | DIRECTOR | B–G |
| 4 | 1ST A.D. | B–D + 2ND A.D. label at E, F–G |
| 5 | D.P. | B–G |
| 6 | NOTES | B–O (full span) |

**Right block — logistics (cols I–O)**

| Row | Label (col I) | Value spans |
|-----|--------------|-------------|
| 2 | SHOOT DATE | J–O |
| 3 | CALL TIME | J–O |
| 4 | WRAP TIME | J–L + SHOOT DAY # label at M, N–O |
| 5 | SET LOCATION | J–O |

Col H (Camera Angle data column) acts as the visual separator in the header block — it receives a near-black background and holds no content in rows 2–6.

Row 7 is a thin separator row (8px high) with a faint gold bottom border. Row 8 is the column header row (28px high, gold text on very dark background).

**Freeze panes:** frozen at B9 — locks the entire header block (rows 1–8) and the Scene # column (col A) while scrolling.

---

## Column Layout

| # | Col | Header | Type | Width |
|---|-----|--------|------|-------|
| 1 | A | Scene # | Free text | 10 |
| 2 | B | Shot # | Number | 8 |
| 3 | C | Status | Dropdown | 13 |
| 4 | D | Description | Free text | 36 |
| 5 | E | INT/EXT | Dropdown | 9 |
| 6 | F | Location | Free text | 20 |
| 7 | G | Shot Size | Dropdown | 21 |
| 8 | H | Camera Angle | Dropdown | 17 |
| 9 | I | Framing | Dropdown | 20 |
| 10 | J | Camera Movement | Dropdown | 18 |
| 11 | K | Equipment / Lens | Free text | 25 |
| 12 | L | Setup Time | Free text | 12 |
| 13 | M | Shoot Time | Free text | 12 |
| 14 | N | Final Take # | Number | 12 |
| 15 | O | Done | Dropdown | 7 |

**Scene # (A) comes before Shot # (B)** so rows sort naturally by scene first.

---

## Dropdown Values

### Status (col C)
- To Shoot
- In Progress
- Wrapped

### INT/EXT (col E)
- INT — Interior (inside a building or enclosed space)
- EXT — Exterior (outdoors)
- INT/EXT — Mixed or ambiguous location

### Shot Size (col G)
- Extreme Wide Shot (EWS)
- Wide Shot (WS)
- Full Shot (FS)
- Medium Wide Shot (MWS)
- Medium Shot (MS)
- Medium Close-Up (MCU)
- Close-Up (CU)
- Extreme Close-Up (ECU)

### Camera Angle (col H)
- Eye Level
- Low Angle
- High Angle
- Bird's Eye
- Worm's Eye
- Dutch Angle

### Framing (col I)
- Single
- Two-Shot
- Three-Shot
- Over-the-Shoulder (OTS)
- Point of View (POV)
- Insert Shot

### Camera Movement (col J)
- Static
- Pan
- Tilt
- Dolly
- Tracking Shot
- Crane / Jib
- Handheld
- Steadicam / Gimbal

### Done (col O)
- — (not done)
- Done

---

## New Columns in v2

### Setup Time (col L)
Free text. Note the estimated time to physically position camera, set lighting, arrange crew, and rehearse the shot before rolling. Examples: `15 min`, `45 min`, `1 hr`. Used to build the shooting schedule and estimate how many shots can fit in a day.

### Shoot Time (col M)
Free text. Note the estimated total duration of filming all takes for this shot. Does not include setup. Examples: `20 min`, `1 hr 30 min`. Combining Setup Time + Shoot Time gives the total time block required per shot.

### Final Take # (col N)
Number. Filled in after the shoot (during DIT review or editing). Records which take number was selected for the cut. Leave blank during the shoot and fill in when the editor or director locks the take. A value here signals that the shot is editorially confirmed.

---

## Conditional Formatting

### Status (col C)
| Value | Background | Text |
|-------|-----------|------|
| To Shoot | `#1A1A2E` (deep blue-black) | `#8BA3C8` (slate blue) |
| In Progress | `#2A1A0A` (deep amber-black) | `#F0C040` (brand gold) |
| Wrapped | `#0A1A0A` (deep green-black) | `#4DB87A` (leaf green) |

### INT/EXT (col E)
| Value | Background | Text |
|-------|-----------|------|
| INT | `#1E0E06` (deep amber-black) | `#E87820` (amber orange) |
| EXT | `#060E08` (deep green-black) | `#4DB87A` (leaf green) |
| INT/EXT | `#1C1604` (deep gold-black) | `#F0C040` (brand gold) |

### Done (col O)
| Value | Background | Text |
|-------|-----------|------|
| Done | `#0A1A0A` (deep green-black) | `#4DB87A` (leaf green) |

---

## Row & Visual Formatting

### Header block (rows 1–8)
- Row 1: `#080808` background, gold text 18pt bold
- Rows 2–6: `#080808` background; label cells dim-gold 8pt bold right-aligned; value cells have a faint gold bottom underline as a fill indicator
- Col H in rows 2–7: `#0A0A0A` separator
- Row 7: thin 8px separator row with faint gold bottom border
- Row 8: `#0E0C04` background, gold 9pt bold headers

### Data rows (9+)
- Odd data rows: `#1A1A1A`
- Even data rows: `#141414`
- Font: `#F2EFE6` (warm white), 10pt

### Column widths → see table above
### Print layout → landscape, 1 page wide, row 8 repeated on every page

---

## Google Sheets Compatibility

The `.xlsx` file is fully importable via **File → Import → Upload** in Google Sheets.

What transfers automatically:
- All data validation dropdowns
- Conditional formatting (background colors for Status, INT/EXT, Done)
- Freeze panes
- Column widths and row heights
- Merged metadata cells

**To enable colored dropdown chips in Google Sheets (native feature):**
1. Import the `.xlsx` file → File → Save as Google Sheets
2. Select `E9:E500` → **Data → Data validation**
3. Change display style from **Plain text** to **Chip**
4. Google Sheets will auto-assign chip colors; override them:
   - INT → Background `#4A2210`, text `#E87820`
   - EXT → Background `#0A2210`, text `#4DB87A`
   - INT/EXT → Background `#2A2004`, text `#F0C040`
5. Repeat for the Status column (C9:C500) if you want colored chips there too

The full Google Sheets color guide is also reproduced in the **Reference** sheet inside the file.

---

## Build Method

Generated via **PowerShell Excel COM automation** (`Excel.Application` COM object, Excel 16.0). Steps:
1. Creates a new workbook with two sheets
2. Sets column widths for all 15 columns
3. Builds the 7-row header block with merged metadata cells, label/value pairs, and the separator column
4. Writes column headers in row 8
5. Inserts 10 sample data rows with alternating row colors and all field values populated
6. Fills rows 19–500 with alternating background colors
7. Applies data validation (dropdown lists) to cols C, E, G, H, I, J, O
8. Applies conditional formatting rules to Status, INT/EXT, and Done columns
9. Freezes panes at B9 (locks header block + Scene # column)
10. Configures landscape print layout with row 8 as the repeating title row
11. Builds the Reference sheet with section definitions and Google Sheets setup guide
12. Saves as `ShotListTemplate_v2.xlsx` (OpenXML format)
