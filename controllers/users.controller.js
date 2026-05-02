import prisma from "../database.config.js";

export const getUsers = async (req, res) => {
  //menggunakan prisma client untuk mengambil semua data buku dari database
  const users = await prisma.users.findMany();
  res.status(200).json({
    success: true,
    message: "Users Berhasi dimuat",
    data: users,
  });
};

export const getUserById = async (req, res) => {
  //merubah tipe data menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);
  //mencari user dengan Id yang sesuai
  // const user = users.find((user) => user.id === id);
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  //jika id user tidak ditemukan
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User with ID: ${id} not found`,
    });
  }
  res.status(200).json({
    success: true,
    message: `User retrieved successfully`,
    data: user,
  });
};

export const createUser = async (req, res) => {
  const { name, email, role } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      role,
    },
  });

  res.status(200).json({
    success: true,
    message: "User Created Successfully",
    data: newUser,
  });
};

export const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);

  const { name, email, role } = req.body;

  const userIndex = await prisma.users.findIndex({
    where: {
      id: id,
    },
    data: {
      name,
      email,
      role,
    },
  });
  res.status(200).json({
    success: true,
    message: `user with ID: ${id} updated successfully`,
    data: updatedUser,
  });

  if (!userIndex) {
    return res.status(404).json({
      success: false,
      message: `User with ID: ${id} not found`,
    });
  }
  await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      nama,
      email,
      role,
    },
  });

  res.status(200).json({
    success: true,
    message: `User with ID: ${id} not found`,
    data: user,
  });
};

export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);

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
