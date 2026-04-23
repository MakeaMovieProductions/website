# Game Design Document: Drunk Bowling

1. Game Overview
Game Title: Drunk Bowling
Genre: Physics Puzzle / Casual Arcade
Target Platform: Web Browser (Desktop & Mobile optimized)
Visual Style: Minimalist, 2D Top-Down. Clean vector art or high-contrast flat graphics.
Core Premise: The player must knock down a cluster of beer bottles using a slingshot mechanic to fire a wobbly, green coconut across a messy bar table. The coconut’s irregular shape and offset center of gravity make its path unpredictable, turning a simple physics game into a hilarious, drunken puzzle.

2. Core Gameplay Mechanics
The Slingshot Pull
Action: The player clicks/taps on the green coconut and drags backward to build tension.
Visual Feedback: A dotted trajectory line extends forward from the coconut. The further the player drags back, the longer the line and the faster the launch speed.
The Catch: The trajectory line only shows a perfectly straight, frictionless path. It intentionally does not account for the coconut's inherent wobble, forcing the player to rely on intuition and trial-and-error.
The "Drunk" Physics
Irregular Hitbox: The coconut is not a perfect circle. It is modeled as an oval or an asymmetrical polygon in the physics engine.
Offset Center of Mass: The center of gravity is slightly off-center. As the coconut rolls, this causes it to hook, curve, and bounce unpredictably, mimicking the behavior of a lopsided object.
Win/Loss Conditions
Win: Knock down all beer bottles on the table (a "Strike"). The player immediately advances to the next level.
Loss: If the coconut comes to a complete stop and bottles are still standing, or if the coconut falls off the edge of the table, the level resets for another attempt.

3. Level Design & Obstacles
Instead of standard bowling frames, the game features progressing puzzle levels, similar to mini-golf. The tabletop setting allows for thematic, interactive obstacles:
Chicken Wing Bumpers: Scattered, rigid bone debris—perhaps leftovers from the West Lafayette King of Wings contest—that act as hard bumpers. Players must bank the coconut off these bones to hook around corners.
The Sticky Spills: Dark, transparent puddles of spilled stout beer or BBQ sauce. If the coconut rolls through these, its momentum is drastically reduced.
Napkin Ramps / Speed Boosts: Folded bar napkins that can launch the coconut over a spill or give it a sudden burst of speed to break through a heavy cluster of bottles.

4. Art & Audio Direction
Color Palette: High contrast and flat. A warm, dark wood-grain background for the table. Bright, saturated green for the coconut to make it pop. Amber and brown for the beer bottles.
Animations: Keep it simple. Bottles don't shatter; they just pop into minimalist white action lines and disappear with a satisfying clink.
Audio: * Launch: A rubber-band snapping sound.
Rolling: A hollow, rhythmic thud-thud-thud that speeds up or slows down based on the coconut's velocity.
Collisions: A sharp glass clink for the bottles, and a dull thwack when bouncing off table debris.

5. Technical Implementation & Architecture
Engine: Pure HTML5 Canvas paired with Matter.js. Matter.js is a lightweight 2D physics engine perfectly suited for this, as it natively handles custom polygon shapes and offset centers of gravity needed for the wobbly coconut.
Serverless Architecture: The game is built strictly for the front-end to ensure lightning-fast load times for the production house website.
Data Storage: Progress is saved entirely via the browser's localStorage. By keeping level unlocks and high scores local (which is great for sparking some friendly, pass-the-phone competition between you, Vikas, Nandu, and Arjun), the game remains totally self-contained and explicitly avoids the need for a Supabase backend or user login systems.

6. Website Integration
Placement: The game can sit on a dedicated /drunk-bowling page or be embedded directly into the footer of the site as a hidden easter egg.
The Reward: Completing all levels (e.g., a 10-level circuit) triggers a congratulatory pop-up modal, unlocking a discount code for MakeaMovieProductions merch, or a private link to an unlisted short film.

