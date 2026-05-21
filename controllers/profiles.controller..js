import prisma from "../database.config.js";

export const getProfiles = async (req, res) => {
  //menggunakan prisma client untuk mengambil semua data buku dari database
  const profiles = await prisma.profiles.findMany();
  res.status(200).json({
    success: true,
    message: "profiles Berhasi dimuat",
    data: profiles,
  });
};

export const getProfileById = async (req, res) => {
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
    message: `Profile  with ID: ${id} not found`,
  });
};

export const createProfile = async (req, res) => {
  const { userId, address, phone } = req.body;
  const newProfile = await prisma.profile.create({
    data: {
      userId,
      address,
      phone,
    },
  });

  res.status(200).json({
    success: true,
    message: "Profile Created Successfully",
    data: profile,
  });
};

export const updateProfile = async (req, res) => {
  const id = parseInt(req.params.id);
  const { userId, address, phone } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "ID Profile Harus Berupa Angka yang Valid",
    });
  }
  const updatedProfile = await prisma.profile.findIndex({
    where: {
      id: id,
    },
    data: {
      userId,
      address,
      phone,
    },
  });
  if (!updateProfile) {
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
};

export const deleteProfile = async (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = await prisma.profiles.findIndex({
    where: {
      id: id,
    },
  });

  if (!profileIndex) {
    res.send(`Profile with ID: ${id} not found`);
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
  res.status(200).json({
    success: true,
    message: "profiles deleted successfully",
  });
};
