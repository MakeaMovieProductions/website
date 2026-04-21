I want you to create a modern, visually rich vinyl music player inspired by a neon/dark UI aesthetic similar to a futuristic dashboard.

REFERENCE DESIGN (important):
- use the image @vinyl-inspo.png for reference
* Layout: Vinyl disc on the LEFT, track info and controls on the RIGHT
* Follow the existing color palette of our website
* Clean typography, minimal but high-end feel

FEATURE REQUIREMENTS:

1. AUDIO

* Use an HTML5 <audio> element to play a local .wav file
* Do NOT show default controls
* Control playback via custom UI

2. LAYOUT

* Left side:

  * Large circular vinyl record
  * Inner label with album art image
* Right side:

  * Track title (large, bold)
  * Artist name (smaller, accent color)
  * Metadata line (e.g., album/year)
  * Progress bar (current time vs duration)
  * Playback buttons (play/pause, skip, etc.)

3. VINYL DESIGN

* Black disc with subtle radial grooves (use gradients)
* Center label with an image (album art)
* Outer glow using neon accent color
* Add a small highlight/reflection for realism

4. ANIMATION

* Vinyl rotates smoothly ONLY when audio is playing
* Stops when paused
* Use CSS animations (linear infinite rotation)

5. CONTROLS

* Custom buttons styled as neon-outlined squares:

  * Play / Pause (toggle)
  * Skip forward/back (optional, even if non-functional)
* Clicking the vinyl should also toggle play/pause

6. PROGRESS BAR

* Custom styled progress bar:

  * Neon accent fill
  * Shows current time and total duration
* Sync with audio playback using JavaScript

7. VOLUME CONTROL

* Add a horizontal slider with neon fill

8. STYLING

* Use:

  * Dark background (#1a1a1a or similar)
  * Neon accent (hot pink / red)
  * Soft glow effects (box-shadow)
* Font: modern sans-serif (Google Fonts like Poppins or Inter)

9. TECHNICAL CONSTRAINTS

* Everything in ONE HTML file
* Inline CSS and JS
* Clean, well-commented code
* No external libraries

10. FILE PLACEHOLDERS

* Clearly show where to:

  * Replace the .wav file path
  * Replace album art image

11. BONUS (if possible)

* Add a subtle pulsing glow when music is playing
* Add hover effects on buttons
* Slight depth/shadow to mimic a UI card

OUTPUT FORMAT:

* Give a complete, ready-to-run HTML file
* No explanations, just code
* Make sure it looks polished and close to a real product UI
