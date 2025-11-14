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
