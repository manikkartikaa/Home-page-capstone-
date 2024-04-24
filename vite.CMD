@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\vite@5.2.9_sass@1.75.0\node_modules\vite\bin\node_modules;C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\vite@5.2.9_sass@1.75.0\node_modules\vite\node_modules;C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\vite@5.2.9_sass@1.75.0\node_modules;C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\vite@5.2.9_sass@1.75.0\node_modules\vite\bin\node_modules;C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\vite@5.2.9_sass@1.75.0\node_modules\vite\node_modules;C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\vite@5.2.9_sass@1.75.0\node_modules;C:\Users\Manik Kartika\react\landing page astungkara berhasil ya\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\vite\bin\vite.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\vite\bin\vite.js" %*
)
