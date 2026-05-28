import prisma from "../config/database.config.js";
import logger from "../config/logger.config.js";

export const getProfiles = async (req, res) => {
  try {
    logger.debug("getAllProfiles: Started");
    //menggunakan prisma client untuk mengambil semua data buku dari database
    const profiles = await prisma.profiles.findMany();
    res.status(200).json({
      success: true,
      message: "Profiles retrieved Successfully",
      data: profiles,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to retrieve profiles");
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving profiles",
      error: error.message,
    });
  }
};

// Get Profile By Id
export const getProfileById = async (req, res) => {
  try {
    //merubah tipe data menjadi integer menggunakan parseInt
    const id = parseInt(req.params.id);
    //mencari profile dengan Id yang sesuai
    // const profile = profiles.find((profile) => profile.id === id);
    const profile = await prisma.profiles.findUnique({
      where: {
        id: id,
      },
    });
    //jika id profile tidak ditemukan
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: `Profile with ID: ${id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Profile  with ID: ${id} found found`,
      data: profile,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to retrieve profile");
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving profile",
      error: error.message,
    });
  }
};

export const createProfile = async (req, res) => {
  try {
    const { userId, address, phone } = req.body;
    const newProfile = await prisma.profiles.create({
      data: {
        userId,
        address,
        phone,
      },
    });

    res.status(201).json({
      success: true,
      message: "Profile Created Successfully",
      data: newProfile,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to create profile");
    res.status(500).json({
      success: false,
      message: "An error occurred while creating profile",
      error: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { userId, address, phone } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID Profile Harus Berupa Angka yang Valid",
      });
    }
    const updatedProfile = await prisma.profiles.update({
      where: {
        id: id,
      },
      data: {
        // userId: parseInt(userId),
        address,
        phone,
      },
    });
    if (!updatedProfile) {
      return res.status(404).json({
        success: false,
        message: `Profile with ID: ${id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: `profile with ID: ${id} updated successfully`,
      data: updatedProfile,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to create profile");
    res.status(500).json({
      success: false,
      message: "An error occurred while updating profile",
      error: error.message,
    });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const profileExists = await prisma.profiles.findUnique({
      where: {
        id: id,
      },
    });

    if (!profileExists) {
      logger.warn({ id }, "Delete failed: Profile not found");
      return res.status(404).json({
        success: false,
        message: `Profile with ID: ${id} not found`,
      });
    }

    await prisma.profiles.delete({
      where: {
        id: id,
      },
    });

    logger.info({ id }, "Profile deleted successfully");
    res.status(200).json({
      success: true,
      message: "profiles deleted successfully",
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to delete profile");
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting profile",
      error: error.message,
    });
  }
};
