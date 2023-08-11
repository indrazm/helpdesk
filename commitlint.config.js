module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["features", "fix", "refactor"]],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
  },
};
