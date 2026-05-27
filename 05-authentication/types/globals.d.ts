export {};

export type Roles = "admin" | "user" | "moderator";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
