import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page
  route("", "routes/home.tsx", [
  route("user/:id", "routes/user.$id.tsx"),
]),


  // Static pages
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),

  // // Dynamic route
  // route("user/:id", "routes/user.$id.tsx"),

  // Nested routes under /dashboard
  route("dashboard", "routes/dashboard.tsx", [
  route("stats", "routes/dashboard.stats.tsx"),
  route("settings", "routes/dashboard.settings.tsx"),
  route("profile", "routes/dashboard.profile.tsx"),
  route("notifications", "routes/dashboard.notifications.tsx"),
  route("activity", "routes/dashboard.activity.tsx"),
  route("support", "routes/dashboard.support.tsx"),
]),
  // Nested routes under /MainBody
route("main", "routes/main.tsx", [
  route("shop", "routes/main.shop.tsx"),
  route("styles", "routes/main.styles.tsx"),
  route("new", "routes/main.new.tsx"),
  route("sale", "routes/main.sale.tsx"),
]),


  // 404 fallback
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

