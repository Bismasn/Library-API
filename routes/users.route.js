import express from "express";
import prisma from "../database.js";

const router = express.Router();

//get user
router.get("/users", async (req, res) => {
  const users = await prisma.users.findMany();
  res.json({
    success: true,
    message: "Users Berhasi dimuat",
    data: users,
  });
});

router.get("/users/:id", async (req, res) => {
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
    return res.json({
      success: false,
      message: `User with ID: ${id} not found`,
    });
  }
  res.json({
    success: true,
    message: `User with ID: ${id} not found`,
  });
});

// POST User
router.post("/users", async (req, res) => {
  const { name, email, role } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      role,
    },
  });

  res.json({
    success: true,
    message: "User Created Successfully",
    data: user,
  });
});

// PUT User
router.put("/users/:id", async (req, res) => {
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
  res.json({
    success: true,
    message: `user with ID: ${id} updated successfully`,
    data: updatedUser,
  });

  if (!userIndex) {
    return res.json({
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

  res.json({
    success: true,
    message: `User with ID: ${id} not found`,
    data: user,
  });
});

// DELETE User
router.delete("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = await prisma.users.findIndex({
    where: {
      id: id,
    },
  });

  if (!userIndex) {
    res.send(`User with ID: ${id} not found`);
    return res.json({
      success: false,
      message: `User with ID: ${id} not found`,
    });
  }

  await prisma.users.delete({
    where: {
      id: id,
    },
  });
  res.json({
    success: true,
    message: "Users deleted successfully",
  });
});

export default router;
