import thalaTestCases from "./thalaTestCases";
import { thalaForAReason } from "./types";

// function is to just convert this to a string
function thalaForAReason(string: string | Number): thalaForAReason {
    return thalaTestCases(String(string));
}

export = thalaForAReason;
