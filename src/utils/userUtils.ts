export interface DisplayUser {
  id?: string;
  display_name?: string | null;
  name?: string | null;
  email?: string | null;
}

/**
 * Get the best display name for a user
 * Priority: display_name -> name -> email
 */
export const getUserDisplayName = (user: DisplayUser | null): string => {
  if (!user) return "User";

  return user.display_name || user.name || user.email || "User";
};

/**
 * Get the user's first name for more personal greetings
 */
export const getUserFirstName = (user: DisplayUser | null): string => {
  const displayName = getUserDisplayName(user);

  // If it's an email, return "User"
  if (displayName.includes("@")) {
    return "User";
  }

  // Return the first word (first name)
  return displayName.split(" ")[0];
};
