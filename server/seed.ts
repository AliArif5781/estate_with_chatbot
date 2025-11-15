import { db } from "./db";
import { properties } from "@shared/schema";

const propertyData = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$350,000",
    location: "City Center",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq ft",
    description: "Beautiful modern apartment in the heart of downtown with stunning city views and premium finishes.",
    amenities: ["Swimming Pool", "Gym", "Concierge", "Parking"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    type: "Apartment",
    yearBuilt: 2020
  },
  {
    id: 2,
    title: "Luxury Suburban Villa",
    price: "$750,000",
    location: "Green Valley",
    bedrooms: 4,
    bathrooms: 3,
    area: "2800 sq ft",
    description: "Spacious luxury villa in peaceful suburban neighborhood with large garden and modern amenities.",
    amenities: ["Garden", "Garage", "Swimming Pool", "Security System"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    type: "Villa",
    yearBuilt: 2018
  },
  {
    id: 3,
    title: "Beachfront Condo",
    price: "$550,000",
    location: "Ocean View",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq ft",
    description: "Stunning beachfront condominium with direct ocean access and panoramic sea views.",
    amenities: ["Beach Access", "Balcony", "Pool", "Security"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    type: "Condo",
    yearBuilt: 2019
  },
  {
    id: 4,
    title: "Family Townhouse",
    price: "$420,000",
    location: "Maple Community",
    bedrooms: 3,
    bathrooms: 2,
    area: "1600 sq ft",
    description: "Perfect family home in a friendly community with excellent schools and parks nearby.",
    amenities: ["Playground", "Parking", "Garden", "Community Pool"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    type: "Townhouse",
    yearBuilt: 2017
  },
  {
    id: 5,
    title: "Penthouse Suite",
    price: "$1,200,000",
    location: "Skyline District",
    bedrooms: 3,
    bathrooms: 3,
    area: "3200 sq ft",
    description: "Ultra-luxurious penthouse with rooftop terrace, premium finishes, and breathtaking city panoramas.",
    amenities: ["Rooftop Terrace", "Private Elevator", "Wine Cellar", "Smart Home System"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "Penthouse",
    yearBuilt: 2022
  }
];

async function seed() {
  console.log("Seeding database with properties...");
  
  for (const property of propertyData) {
    await db.insert(properties).values(property).onConflictDoNothing();
  }
  
  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
