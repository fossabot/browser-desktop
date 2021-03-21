import chalk from "chalk";
import execa from "execa";
import { ensureDirSync, statSync } from "fs-extra";
import { resolve } from "path";
import { log } from "..";
import { PATCHES_DIR, PATCH_ARGS, SRC_DIR } from "../constants";
import { copyManual } from "../utils";

class Patch {
    public name: string;
    public action: string;
    public src: string | string[];
    public type: "file" | "manual";
    private _done: boolean = false;

    private error: Error | unknown;

    private async applyAsManual() {
        return new Promise(async (res, rej) => {
            try {
                switch (this.action) {
                    case "copy":
                        if (typeof this.src == "string") {
                            copyManual(this.src);
                        }

                        if (Array.isArray(this.src)) {
                            this.src.forEach((i) => {
                                if (
                                    statSync(
                                        i
                                    ).isDirectory()
                                ) {
                                    ensureDirSync(i);
                                }

                                copyManual(i);
                            });
                        }
                }

                res(true);
            } catch (e) {
                rej(e);
            }
        });
    }

    private async applyAsPatch() {
        return new Promise(async (res, rej) => {
            try {
                await execa("git", ["apply", "-R", ...PATCH_ARGS, (this.src as any)], { cwd: SRC_DIR });

                const { stdout, exitCode } = await execa("git", ["apply", ...PATCH_ARGS, (this.src as any)], { cwd: SRC_DIR });

                if (exitCode == 0) res(true);
                else throw stdout;

            } catch (e) {
                rej(e);
            }
        });
    }

    public async apply() {
        log.info(`Applying ${this.name}...`);

        try {
            if (this.type == "manual") await this.applyAsManual()
            if (this.type == "file") await this.applyAsPatch()

            this.done = true;
        } catch (e) {
            this.error = e;
            this.done = false;
        }
    }

    public get done() {
        return this._done;
    }

    public set done(_: any) {
        this._done = _;

        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(1);

        log.info(
            `Applying ${this.name}... ${chalk[
                this._done ? "green" : "red"
            ].bold(this._done ? "Done ✔" : "Error ❗")}`
        );

        if (this.error) {
            throw this.error;
        }
    }

    constructor({
        name,
        action,
        src,
        type
    }: {
        name: string;
        action?: string;
        src?: string | string[];
        type: "file" | "manual";
    }) {
        this.name = name;
        this.action = action || "";
        this.src = src || resolve(PATCHES_DIR, name);
        this.type = type;
    }
}

export default Patch;
