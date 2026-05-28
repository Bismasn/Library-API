import prisma from "../config/database.config.js";
import logger from "../config/logger.config.js";

export const getUsers = async (req, res) => {
  try {
    //menggunakan prisma client untuk mengambil semua data buku dari database
    const users = await prisma.users.findMany();

    logger.info({ count: users.length }, "Retrieved users from database");
    res.status(200).json({
      success: true,
      message: "Users Berhasi dimuat",
      data: users,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to retrieve users");
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving users",
      error: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    //merubah tipe data menjadi integer menggunakan parseInt
    const id = parseInt(req.params.id);
    logger.debug({ userId: id }, "getUserById: Started");
    //mencari user dengan Id yang sesuai
    // const user = users.find((user) => user.id === id);
    // Mengambil pengguna dengan ID yang sesuai dari database menggunakan Prisma Client

    logger.debug({ userId: id }, "Finding user in database");
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    //jika id user tidak ditemukan
    if (!user) {
      logger.warn({ userId: id }, "User not found");
      return res.status(404).json({
        success: false,
        message: `User with ID: ${id} not found`,
      });
    }

    logger.info({ userId: id }, "User retrieved successfully");
    res.status(200).json({
      success: true,
      message: `User retrieved successfully`,
      data: user,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to retrieve user");
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving user",
      error: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    logger.debug({ body: req.body }, "createUser: Started");
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "validation error",
        errors: validationErrors.array(),
      });
    }

    const { name, email, password, role } = req.body;
    // Menambahkan pengguna baru ke database menggunakan Prisma Client
    logger.debug({ name, email, role }, "Creating user in database");
    const newUser = await prisma.Users.create({
      data: {
        name,
        email,
        password,
        role: role || "USER",
      },
    });

    logger.info({ userId: newUser.id, email }, "User created successfully");
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: newUser,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to create user");
    res.status(500).json({
      success: false,
      message: "An error occurred while creating user",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: validationErrors.array(),
      });
    }

    const id = parseInt(req.params.id);
    logger.debug({ userId: id, body: req.body }, "updateUser: Started");
    const { name, email, password, role } = req.body;
    const loginUser = req.user;

    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "ID user harus berupa angka yang valid",
      });
    }

    // PROTEKSI SAKTI: Jika bukan admin DAN bukan pemilik akun, BLOKIR!
    if (loginUser.role !== "ADMIN" && loginUser.id !== id) {
      return res.status(403).json({
        error: "Forbidden: Kamu tidak berhak mengubah data pengguna lain!",
      });
    }

    // Mencari pengguna dengan ID yang sesuai di database menggunakan Prisma Client
    logger.debug({ userId: id }, "Finding user in database");
    const updatedUser = await prisma.users.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        password,
        role,
      },
    });
    res.status(200).json({
      success: true,
      message: `user with ID: ${id} updated successfully`,
      data: updatedUser,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to update user");
    res.status(500).json({
      success: false,
      message: "An error occurred while updating user",
      error: error.message,
    });
  }

  if (!userIndex) {
    return res.status(404).json({
      success: false,
      message: `User with ID: ${id} not found`,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    logger.debug({ userId: id }, "deleteUser: Started");

    // Mencari pengguna dengan ID yang sesuai di database menggunakan Prisma Client
    logger.debug({ userId: id }, "Finding user in database");
    const userIndex = await prisma.users.findIndex({
      where: {
        id: id,
      },
    });

    if (!userIndex) {
      res.send(`User with ID: ${id} not found`);
      return res.status(404).json({
        success: false,
        message: `User with ID: ${id} not found`,
      });
    }

    await prisma.users.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      success: true,
      message: "Users deleted successfully",
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to delete user");
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting user",
      error: error.message,
    });
  }
};

export const isUserExist = async (id) => {
  // Mencari pengguna dengan ID yang sesuai di database menggunakan Prisma Client
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return !!user;
};
