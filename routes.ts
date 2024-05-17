/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 *@type{String[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged user to /settings
 *@type{String[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix or API authentication routs
 * Routes that start with this prefix are used for API authentication purposes
 *@type{String}
 */
export const apiAuthPrefix = "/api/auth";
/**
 * 'The default redirect path after logging in
 * @type{String}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
