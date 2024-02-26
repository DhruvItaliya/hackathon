export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
        expiresIn: process.env.COOKIE_EXPIRE,
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
};