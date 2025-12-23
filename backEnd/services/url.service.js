import mongoose from "mongoose";
import URLModel from "../models/url.model.js";
import { nanoid } from "nanoid";

// In-memory fallback store
const memoryStore = {
  urls: [],
};

const isDbConnected = () => mongoose.connection.readyState === 1;

const generateDefaultId = () => nanoid(5);

export const createUrlEntry = async ({ originalUrl, customUrl }) => {
  if (isDbConnected()) {
    const newDoc = new URLModel({ originalUrl });
    newDoc.customUrl =
      customUrl && customUrl.trim() ? customUrl.trim() : newDoc.defaultId;
    const saved = await newDoc.save();
    return saved;
  }

  // In-memory creation
  const defaultId = generateDefaultId();
  const finalCustom =
    customUrl && customUrl.trim() ? customUrl.trim() : defaultId;

  // Ensure uniqueness
  if (
    memoryStore.urls.find(
      (u) => u.customUrl === finalCustom || u.defaultId === finalCustom
    )
  ) {
    const err = new Error("duplicate");
    err.code = 11000;
    throw err;
  }

  const entry = {
    originalUrl,
    customUrl: finalCustom,
    defaultId,
    createdAt: new Date(),
    updatedAt: new Date(),
    _id: generateDefaultId(),
  };
  memoryStore.urls.push(entry);
  return entry;
};

export const getAllEntries = async () => {
  if (isDbConnected()) {
    return await URLModel.find({});
  }
  return memoryStore.urls;
};

export const findByIdentifier = async (identifier) => {
  if (isDbConnected()) {
    return await URLModel.findOne({
      $or: [{ customUrl: identifier }, { defaultId: identifier }],
    });
  }
  return (
    memoryStore.urls.find(
      (u) => u.customUrl === identifier || u.defaultId === identifier
    ) || null
  );
};

export const deleteByIdentifier = async (identifier) => {
  if (isDbConnected()) {
    return await URLModel.findOneAndDelete({
      $or: [{ customUrl: identifier }, { defaultId: identifier }],
    });
  }
  const idx = memoryStore.urls.findIndex(
    (u) => u.customUrl === identifier || u.defaultId === identifier
  );
  if (idx === -1) return null;
  const [deleted] = memoryStore.urls.splice(idx, 1);
  return deleted;
};
