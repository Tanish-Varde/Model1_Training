#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command();


program
    .name("chaicodeclaw-build")
    .description("A CLI tool for building Chaicodeclaw projects")
    .version("1.0.0");

program
    .command("wakeup")
    .description("Wake up the Chaicodeclaw build system")
    .action(async () => {
        await runWakeup();
    });


await program.parseAsync(process.argv);