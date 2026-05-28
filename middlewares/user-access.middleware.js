export const authorizeSelfOrAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const requestedUserId = Number(req.params.id);
  const currentUserId = Number(req.user.id);
  const userRole = String(req.user.role || "").toUpperCase();

  if (userRole === "ADMIN" || currentUserId === requestedUserId) {
    return next();
  }

  return res.status(403).json({
    success: false,
    message: "Forbidden: You do not have access to this data",
  });
};
