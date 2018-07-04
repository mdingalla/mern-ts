import * as shell from "shelljs";

shell.cp("-R", "server/public/js/lib", "dist/server/public/js/");
shell.cp("-R", "server/public/fonts", "dist/server/public/");
shell.cp("-R", "server/public/images", "dist/server/public/");
