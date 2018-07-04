import * as shell from "shelljs";

shell.cp("-R", "server/public/js/lib", "serverdist/public/js/");
shell.cp("-R", "server/public/fonts", "serverdist/public/");
shell.cp("-R", "server/public/images", "serverdist/public/");
