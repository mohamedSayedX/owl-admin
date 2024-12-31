export const getUserToken = () => {
  try {
    const token = localStorage.getItem("owl_token");
    return token || null;
  } catch (error) {
    console.error("Error getting userToken from localStorage:", error);
    return null;
  }
};

export const deleteToken = () => {
  localStorage.removeItem("owl_token");
};

export const saveToken = (newToken) => {
  localStorage.setItem("owl_token", newToken);
};
