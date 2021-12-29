const { exec } = require("child_process");

exec("git add .");
exec("git commit -m '.'");
exec("git push origin master");
