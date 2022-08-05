import { Path } from "../types";
import nodePath from "path";

const validatePath = (path: Path) => path === nodePath.basename(path);

export default validatePath;