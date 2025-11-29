// Example prompts user can quickly select
export const samplePrompts = [
  "Explain this code in simple terms.",
  "Optimize this code for better performance.",
  "Add comments to make this code more readable.",
  "Convert this code to another programming language.",
  "Find bugs and suggest fixes.",
  "Generate a clean and reusable function for this task.",
];

// Example clean sample code
export const sampleCode = `
      async function getUsers() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
      }

      getUsers();
    `;

// Example buggy code for debugging assistant
export const sampleBuggyCode = `
      console.log(add(5)); // Error: missing second parameter
    `;
// Example supported languages for editor
export const languages = [
  "javascript",
  "typescript",
  "python",
  "c",
  "cpp",
  "java",
  "go",
  "php",
  "rust",
  "html",
  "css",
  "sql",
];
