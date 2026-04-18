import prisma from "../database.config.js";

export const getAllCategories = async (req, res) => {
  const categories = await prisma.categories.findMany();
  res.json({
    success: true,
    message: "Categorie retrieved successfully",
    data: categories,
  });
};

export const getCategorieById = async (req, res) => {
  //merubah tipe data menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);
  //mencari Categorie dengan Id yang sesuai
  const categorie = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });
  //jika id Categorie tidak ditemukan
  if (!categorie) {
    return res.json({
      success: false,
      message: `Categorie with ID: ${id} not found`,
    });
  }

  res.json({
    success: true,
    message: "Categorie retrieved successfully",
    data: categorie,
  });
};

export const createCategorie = async (req, res) => {
  const { name, createdAt } = req.body;

  const categorie = await prisma.categories.create({
    data: {
      name,
      createdAt,
    },
  });

  res.json({
    success: true,
    message: "Categorie created successfully",
    data: categorie,
  });
};

export const updateCategorie = async (req, res) => {
  const id = parseInt(req.params.id);

  const { name, createdAt } = req.body;

  const categorie = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });
  // Jika Categorie tidak ditemukan, kirimkan pesan error
  if (!categorie) {
    return res.json({
      success: false,
      message: `Categorie with ID: ${id} not found`,
    });
  }

  // Mengupdate Categorie dengan ID yang sesuai
  await prisma.categories.update({
    where: {
      id: id,
    },
    data: {
      name,
      createdAt,
    },
  });

  res.json({
    success: true,
    message: "Categorie updated successfully",
    data: categorie,
  });
};

export const deleteCategorie = async (req, res) => {
  const id = parseInt(req.params.id);

  const Categorie = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });

  if (!Categorie) {
    return res.json({
      success: false,
      message: `Categorie with ID: ${id} not found`,
    });
  }

  await prisma.categories.delete({
    where: {
      id: id,
    },
  });

  res.json({
    success: true,
    message: "Categorie deleted successfully",
  });
};

export const getAllBooksByCategoryId = async (req, res) => {
  // Mendapatkan ID kategori yang akan diupdate dari parameter URL
  // Lalu mengubahnya menjadi tipe data integer menggunakan parseInt
  const id = parseInt(req.params.id);

  // Mengambil kategori dengan ID yang sesuai dari database menggunakan Prisma Client
  const category = await prisma.categories.findUnique({
    where: {
      id: id,
    },
    include: {
      books: true,
    },
  });

  // Jika kategori tidak ditemukan, kirimkan pesan error
  if (!category) {
    return res.json({
      success: false,
      message: `Category with ID: ${id} not found`,
    });
  }

  res.json({
    success: true,
    message: "Category retrieved successfully",
    data: category,
  });
};
