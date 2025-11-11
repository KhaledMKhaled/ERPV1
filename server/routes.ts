import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // todo: remove mock functionality - Get current user
  app.get("/api/user/current", async (_req, res) => {
    const user = await storage.getUser("1");
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  });

  const httpServer = createServer(app);

  return httpServer;
}
