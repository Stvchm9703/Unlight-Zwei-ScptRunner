% This executable is generated by Deno. Please don't modify it unless you know what it means. %
@IF EXIST "%~dp0deno.exe" (
  "%~dp0deno.exe" "run" "--allow-all" "A:\\Gitrepo\\Unlight-Zwei-ScptRunner\\.dpkg\\runcmd\\index.ts" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.TS;=;%
  "deno" "run" "--allow-all" "A:\\Gitrepo\\Unlight-Zwei-ScptRunner\\.dpkg\\runcmd\\index.ts" %*
)