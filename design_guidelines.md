# Real Estate Website Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from Zillow's information architecture, Airbnb's property showcasing, and Redfin's clean professionalism. Focus on creating an aspirational, trust-building experience that showcases properties as premium offerings.

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts) - clean, modern, professional
**Display Font**: Playfair Display or Crimson Pro for premium headings

**Hierarchy**:
- Hero Headlines: 4xl-6xl, semi-bold to bold
- Section Headings: 3xl-4xl, semi-bold
- Property Titles: xl-2xl, medium
- Body Text: base-lg, regular (16-18px)
- Property Details/Stats: sm-base, medium
- Micro Copy: xs-sm, regular

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, and 20 (e.g., p-4, gap-6, my-12)

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl
- Content areas: max-w-6xl
- Property grids: max-w-7xl
- Forms/text content: max-w-2xl

**Grid Systems**:
- Property listings: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Featured properties: grid-cols-1 lg:grid-cols-2 (larger cards)
- Property details: 2-column split (images/details)

## Component Library

### Navigation
**Header**: Sticky navigation with logo, search bar (prominent), main menu (Buy, Sell, Rent, Agents, About), CTA button ("List Your Property"), user account icon
- Height: 16-20 units
- Background: Solid with subtle shadow on scroll
- Search: Integrated search bar with location autocomplete

**Footer**: Multi-column layout (4 columns desktop, stack mobile)
- Quick Links, Property Types, Resources, Contact Info
- Newsletter signup with large input field
- Trust indicators (licenses, certifications)
- Social media links

### Homepage Components

**Hero Section**: 
- Full-width, 85vh height
- Large background image (luxury property exterior/interior)
- Centered search widget overlay (location, property type, price range, beds/baths dropdowns + search button)
- Headline: "Find Your Dream Home" style messaging
- Subtle gradient overlay on image for text readability
- Buttons with blurred backgrounds

**Featured Properties Section**: 
- 6-8 properties in grid (2-3 columns)
- Large property image (16:10 ratio), hover zoom effect
- Property card: Image, price (prominent, bold), address, key stats row (beds/baths/sqft with icons), quick "View Details" link
- "Featured" or "New Listing" badges on relevant properties

**Search & Filter Bar**:
- Advanced filters: Location dropdown with autocomplete, Price range slider, Property type (checkboxes), Bedrooms/bathrooms dropdowns, Additional filters (pool, garage, year built)
- Sticky when scrolling on listing pages
- Results count display

**Neighborhood Highlights**:
- 3-4 column grid
- Each area: Background image, overlay text, property count, average price

**Agent Showcase**:
- 3-4 column grid of top agents
- Professional headshots (circular), name, specialization, contact button
- Star ratings and number of properties sold

**Why Choose Us Section**:
- 3-column feature grid
- Icons (Heroicons - home, chart, shield, etc.)
- Trust-building points (experience, local expertise, support)

### Property Listing Page

**Filter Sidebar** (desktop) / **Collapsible Panel** (mobile):
- All search filters organized by category
- Applied filters shown as removable tags
- "Clear All" option

**Results Grid**:
- Property cards with consistent layout
- Sort options (Price, Date, Size)
- Pagination or infinite scroll
- Map view toggle option

**Property Card Design**:
- Large image with heart icon (save favorite)
- Price badge (top-left or prominent placement)
- Address, beds/baths/sqft in clean row
- Brief highlights (2-3 key features)
- Agent thumbnail and name
- "Virtual Tour Available" badge where applicable

### Property Detail Page

**Image Gallery**:
- Hero image (full-width, ~60vh)
- Thumbnail navigation below (scrollable)
- Full-screen gallery modal on click
- Virtual tour badge/button if available

**Property Information Layout**:
- Two-column desktop layout (70% details / 30% inquiry form)
- Price prominently displayed
- Address with map link
- Key stats in icon grid (beds, baths, sqft, lot size, year built, property type)
- Detailed description (expandable if long)
- Feature lists with checkmarks (appliances, amenities, parking, etc.)
- School information nearby
- Neighborhood statistics

**Inquiry Form** (sticky sidebar):
- Agent photo and contact info
- "Schedule a Tour" / "Request Info" form
- Name, email, phone, preferred contact method
- Message textarea
- Prominent submit button
- Response time indicator ("Typically responds in 24 hours")

**Related Properties**: 
- 3-4 similar listings below main content
- Carousel on mobile

### General Design Patterns

**Buttons**:
- Primary CTA: Large, rounded, medium-bold text
- Secondary: Outlined or subtle fill
- Icon buttons for actions (favorite, share, print)

**Cards**: 
- Subtle shadows (shadow-sm to shadow-md)
- Rounded corners (rounded-lg to rounded-xl)
- Hover elevation effect on property cards
- Clean internal padding (p-4 to p-6)

**Forms**:
- Large, comfortable input fields (h-12 to h-14)
- Clear labels above inputs
- Helpful placeholder text
- Error states with inline validation
- Multi-step for complex forms (mortgage calculator, listing submission)

**Maps Integration**:
- Interactive map on listing pages (Mapbox/Google Maps)
- Property markers with price popups
- Draw search area feature

## Images

**Required Images**:
1. **Hero Image**: Luxury residential property exterior at golden hour - modern architecture, well-landscaped, aspirational
2. **Property Listings**: 6-8 varied residential properties (different styles: modern, traditional, luxury condo, suburban homes)
3. **Neighborhood Images**: 3-4 location shots showing different areas
4. **Agent Photos**: Professional headshots for 3-4 featured agents
5. **About/Why Us**: Office space or team collaboration image

**Image Treatment**:
- High-quality, professionally shot real estate photography
- Consistent aspect ratios (16:10 for main images, 1:1 for profiles)
- Subtle overlays on hero/background images for text readability
- Lazy loading for performance

## Accessibility & Performance

- Keyboard navigation for all interactive elements
- ARIA labels on icon buttons
- Form inputs with proper labels and error states
- Image alt text describing property features
- Responsive images with srcset
- Smooth transitions (200-300ms) on hover states only

This design creates a premium, trustworthy real estate platform that balances visual appeal with functionality, encouraging property exploration and agent contact.