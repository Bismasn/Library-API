export const authorizeSelfOrAdmin = (req, res, next) => {
  //Memastikan Akun User terautentikasi

  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  //Sanitasi inputan user
  const requestedUserId = Number(req.params.id);
  const currentUserId = Number(req.user.id);

  if (isNaN(requestedUserId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  //Logika otorisasi
  const isAdmin = req.user.role?.toUpperCase() === "ADMIN";
  const isUserOwner = currentUserId === requestedUserId;

  //cek apakah Admin dan User yang bersangkutan login
  if (isAdmin || isUserOwner) {
    return next();
  }

  //kalau tidak keluarkan output ini
  return res.status(403).json({
    success: false,
    message: "Forbidden: You do not have access to this data",
  });
};
