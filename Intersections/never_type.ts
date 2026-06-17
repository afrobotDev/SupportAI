type slashCommands = "greet" | "info" | "help";

const greetMessage = "Hello! How can I assist you?";
const infoMessage = "Sure! Here's a list of things I can do...";
const helpMessage = "I can help you with that!";

export function handleSlashCommand(command: slashCommands) {
  if (command === "greet") {
    return greetMessage;
  }
  if (command === "info") {
    return infoMessage;
  }
  if (command === "help") {
    return helpMessage;
  }
  const err: never = command;
  return err;
}
