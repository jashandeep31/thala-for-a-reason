import { ThalaReasonResult } from "./types";
import findPatternsForSum from "./utils/getArrayWithSum7";

function isSumOfDigitsSeven(str: string): boolean {
    return str.split("").reduce((a, b) => Number(a) + Number(b), 0) === 7;
}

function thalaReasonTest(input: string): ThalaReasonResult {
    if (input.includes("7")) {
        return {
            status: true,
            reason: "Thala for a reason it includes 7",
        };
    }

    const inputLength = input.length;

    if (inputLength === 7) {
        return {
            status: true,
            reason: "Thala for a reason it has 7 characters",
        };
    }

    if (input === "thala") {
        return {
            status: true,
            reason: 'Thala for a reason it is "Thala" it self',
        };
    }

    if (!isNaN(Number(input))) {
        if (isSumOfDigitsSeven(input)) {
            return {
                status: true,
                reason: "Thala for a reason sum of all number is 7",
            };
        }

        const patterns = findPatternsForSum(input.split("").map(Number), 7);
        if (patterns.length > 0) {
            return {
                status: true,
                reason: `Thala for a reason sum of ${patterns.join(
                    "+"
                )} number is 7`,
            };
        }
    }

    return {
        status: false,
        reason: "Not Thala for a reason",
    };
}

export default thalaReasonTest;
