module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["features", "fix", "refactor"]],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: "A new feature",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "A bug fix",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          refactor: {
            description: "A code change that neither fixes a bug nor adds a feature",
            title: "Code Refactoring",
            emoji: "♻️",
          },
        },
      },
      subject: {
        description: "Write a short, imperative tense description of the change (max 50 chars):\n",
      },
      body: {
        description: "Provide a longer description of the change: (press enter to skip)\n",
      },
    },
  },
};
