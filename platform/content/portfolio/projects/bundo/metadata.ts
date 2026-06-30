export const metadata = {
  slug: "bundo",
  title: "Bundo",
  summary:
    "Production-grade platform for connecting customers with reliable service providers, with modular APIs, role-based access control, and cloud deployment.",
  technologies: [
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Firebase Auth",
    "Docker",
    "Render",
  ],
  liveUrl: "https://bundo.example.com",
  repositoryAccess: "private" as const,
  featured: true,
  order: 1,
  duration: "2024 — Present",
  role: "Backend Software Engineer",
  teamSize: "Small cross-functional team",
  architectureSummary:
    "Service-oriented backend with REST APIs, relational data modeling, background jobs, and environment-specific deployment pipelines.",
  challengesSolved: [
    "Designed scalable API boundaries for evolving marketplace requirements",
    "Implemented RBAC and secure media upload flows for multi-role users",
    "Established migration, deployment, and release practices for production",
  ],
  caseStudyHref: "/projects/bundo",
  imageAlt: "Bundo platform dashboard preview",
  technologyDecisions: [
    {
      name: "PostgreSQL",
      reason:
        "Transactional marketplace workflows required strong consistency, relational integrity, and predictable query patterns.",
    },
    {
      name: "Firebase Authentication",
      reason:
        "Delegated identity management reduced auth risk and accelerated secure session handling while the product validated core workflows.",
    },
    {
      name: "Render",
      reason:
        "Provided a pragmatic first deployment target with managed infrastructure and low operational overhead for an early production release.",
    },
    {
      name: "Docker",
      reason:
        "Standardized local and production environments to reduce configuration drift during iterative backend delivery.",
    },
  ],
  engineeringCallouts: [
    {
      title: "Authentication",
      decision: "Firebase Authentication instead of a custom auth system",
      rationale:
        "Reduced security surface area and delivery time while the team focused on domain workflows, RBAC, and API hardening.",
    },
    {
      title: "Data store",
      decision: "PostgreSQL instead of MongoDB for transactional data",
      rationale:
        "Bookings, orders, and role-scoped records benefited from relational constraints, joins, and migration-backed schema evolution.",
    },
    {
      title: "Authorization",
      decision: "Role-based access control instead of ad hoc permission lists",
      rationale:
        "RBAC aligned with business roles (customer, provider, admin) and kept authorization rules auditable as features expanded.",
    },
    {
      title: "Deployment",
      decision: "Render for the initial production deployment",
      rationale:
        "Balanced speed-to-production with manageable ops overhead while usage patterns and scaling needs were still emerging.",
    },
  ],
  apiEndpoints: [
    {
      method: "POST",
      path: "/auth/login",
      description: "Exchanges verified identity credentials for an application session context.",
    },
    {
      method: "POST",
      path: "/orders",
      description: "Creates an order with validation, role checks, and idempotent business rules.",
    },
    {
      method: "GET",
      path: "/providers",
      description: "Returns paginated provider listings with filterable marketplace criteria.",
    },
    {
      method: "PATCH",
      path: "/bookings/:id",
      description:
        "Updates booking state with authorization checks and audit-friendly transitions.",
    },
  ],
  securityTopics: [
    {
      topic: "Authentication",
      approach:
        "Firebase-managed identity with server-side session validation on protected routes.",
    },
    {
      topic: "Authorization",
      approach: "Role-based access control enforced at the service layer before data mutations.",
    },
    {
      topic: "Validation",
      approach: "Schema validation on all write endpoints with explicit error contracts.",
    },
    {
      topic: "File uploads",
      approach: "Type-restricted uploads, size limits, and server-mediated storage access.",
    },
    {
      topic: "Secrets management",
      approach: "Environment-scoped secrets with no credentials committed to source control.",
    },
  ],
  seo: {
    title: "Bundo — Engineering Case Study",
    description:
      "How Bundo was designed and shipped as a production marketplace platform with PostgreSQL, RBAC, and cloud deployment.",
  },
} as const;
