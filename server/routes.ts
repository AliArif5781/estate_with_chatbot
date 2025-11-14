import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithGemini } from "./gemini";
import { z } from "zod";

const chatRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  history: z.array(z.object({
    role: z.enum(["user", "model"]),
    parts: z.array(z.object({ text: z.string() }))
  })).optional().default([])
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Properties endpoints
  app.get("/api/properties", async (_req, res) => {
    try {
      const properties = await storage.getAllProperties();
      res.json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ error: "Failed to fetch properties" });
    }
  });

  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ error: "Invalid property ID" });
        return;
      }
      
      const property = await storage.getProperty(id);
      if (!property) {
        res.status(404).json({ error: "Property not found" });
        return;
      }
      
      res.json(property);
    } catch (error) {
      console.error("Error fetching property:", error);
      res.status(500).json({ error: "Failed to fetch property" });
    }
  });

  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = chatRequestSchema.parse(req.body);
      
      const response = await chatWithGemini(message, history);
      
      res.json({ 
        response,
        success: true 
      });
    } catch (error) {
      console.error("Chat error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Invalid request format",
          success: false 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to process chat message",
          success: false 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
