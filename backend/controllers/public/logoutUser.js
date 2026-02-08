const logoutUser = (req, res) => {

    // clear the cookie
    res.clearCookie('token');
    return res.status(200).json({ message: "Logged out" });
}

module.exports = logoutUser;