import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";


const runCliMode = async () => {

    while (true) {
        const mode = await select({
            message: "Choose CLI sub-mode:",
            options: [
                { value: "agent", label: "Agent Mode" },
                { value: "plan", label: "Plan Mode" },
                { value: "ask", label: "Ask Mode" },
                { value: "back", label: "<- Back to main menu" }
            ]
        })
    }
};

export { runCliMode };