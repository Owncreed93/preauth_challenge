import terminal from '../utils/terminal';

/**
 * Makes a question for the user and returns the answer.
 * @param question - Question showed to the user
 * @returns Answer returned to the user
 */
export function askData(question: string): Promise<string> {
  return new Promise((resolve) => {
    terminal.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

export function closeTerminal() {
    terminal.close();
}

