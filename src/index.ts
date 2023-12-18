import thalaReasonTest from "./thalaReasonTest";
import { thalaForAReason } from "./types";

// function is to just convert this to a string
function thalaForAReason(string: string | Number): thalaForAReason {
    return thalaReasonTest(String(string));
}

export = thalaForAReason;
