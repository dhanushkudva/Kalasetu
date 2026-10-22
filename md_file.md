# Prototype Specification: KalaSetu (Artisan Digital Showcase)

## 1. Goal
Build a high-fidelity frontend prototype for a digital marketplace empowering local artisans (Kasuti embroidery, Beedu craft, coastal Karnataka arts) with a Pinterest masonry layout and Instagram-style storytelling.

## 2. Key Components to Generate:
1. `Navbar.jsx`:
   - App Logo & Search input.
   - Filter chips: All, Kasuti Embroidery, Beedu Art, Coastal Woodwork.
   - Role Switcher Button: [Buyer Mode / Artisan Mode].

2. `StoryBar.jsx` (Instagram style):
   - Horizontal scroll of circular story avatars with colored borders.
   - Shows artisan portraits with labels: "Savita's Loom", "Beedu Carving", "Natural Dyes".
   - Clicking opens a short story overlay showing how the craft is made.

3. `MasonryGrid.jsx` (Pinterest style):
   - CSS column masonry layout (`columns-2 md:columns-3 lg:columns-4 gap-4`).
   - Cards with variable height images, artisan avatar badge, craft title, and price in INR.
   - Quick "Save/Heart" and "Buy" overlay on hover.

4. `ProductDetailDrawer.jsx` (Storytelling & Mock Checkout):
   - Opens when any card is clicked.
   - Left: High-res image carousel.
   - Right: 
     - Artisan profile & village origin.
     - "Craft Provenance": Time spent (e.g., "18 hours of hand-stitch work"), materials used.
     - Price & Mock Order Button (triggers a success modal: "Order Placed / WhatsApp Inquiry Sent").

5. `ArtisanListingModal.jsx` (Minimal-training seller flow):
   - 3-field simple form: Photo upload dropzone, Product Name, Price, Craft Category dropdown.
   - Submitting prepends a new card dynamically to the grid with instant state update.

## 3. Mock Data
Include 6-8 mock items representing Karnataka crafts:
- Kasuti embroidered Ilkal Saree (Hubli/Dharwad origin)
- Beedu craft woven coir/bamboo decor
- Coastal coconut shell carved lamps
- Handloom Kasuti border dupatta