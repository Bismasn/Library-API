import prisma from "../database.config.js";

export const getAllCategories = async (req, res) => {
  const categories = await prisma.categories.findMany();
  res.status(200).json({
    success: true,
    message: "Categorie retrieved successfully",
    data: categories,
  });
};

export const getCategoryById = async (req, res) => {
  //merubah tipe data menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);
  //mencari Categorie dengan Id yang sesuai
  const category = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });
  //jika id Categorie tidak ditemukan
  if (!category) {
    return res.status(404).json({
      success: false,
      message: `Category with ID: ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Category retrieved successfully",
    data: category,
  });
};

export const createCategory = async (req, res) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: validationErrors.array(),
    });
  }

  const { name } = req.body;

  const category = await prisma.categories.create({
    data: {
      name,
    },
  });

  res.status(200).json({
    success: true,
    message: "Category created successfully",
    data: category,
  });
};

export const updateCategory = async (req, res) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: validationErrors.array(),
    });
  }

  const id = parseInt(req.params.id);
  const { name } = req.body;
  const updateCategory = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });
  // Mengupdate Categorie dengan ID yang sesuai
  await prisma.categories.update({
    where: {
      id: id,
    },
    data: {
      name,
    },
  });

  // Jika Categorie tidak ditemukan, kirimkan pesan error
  if (!category) {
    return res.status(404).json({
      success: false,
      message: `Category with ID: ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Category updated successfully",
    data: updateCategory,
  });
};

export const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id);

  const category = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });

  if (!category) {
    return res.status(404).json({
      success: false,
      message: `Category with ID: ${id} not found`,
    });
  }

  await prisma.categories.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    success: true,
    message: "Categories deleted successfully",
  });
};

export const getAllBooksByCategoryId = async (req, res) => {
  // Mendapatkan ID kategori yang akan diupdate dari parameter URL
  // Lalu mengubahnya menjadi tipe data integer menggunakan parseInt
  const id = parseInt(req.params.id);
  // Mengambil kategori dengan ID yang sesuai dari database menggunakan Prisma Client
  const categoryWithBooks = await prisma.categories.findUnique({
    where: {
      id: id,
    },
    include: {
      books: true,
    },
  });

  // Jika kategori tidak ditemukan, kirimkan pesan error
  if (!categoryWithBooks) {
    return res.status(404).json({
      success: false,
      message: `Category with ID: ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    message: "Category retrieved successfully",
    data: categoryWithBooks,
  });
};
