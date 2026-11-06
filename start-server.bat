@echo off
title BifrostPad Server
cd /d "%~dp0"
cls

echo ======================================================================
echo                  BIFROSTPAD - LOCAL SERVER (PORT 3000)
echo ======================================================================
echo.
echo  Server berjalan di:
echo  --^> http://localhost:3000
echo.
echo  Halaman yang tersedia:
echo  --^> Home:       http://localhost:3000/
echo  --^> Launch:     http://localhost:3000/launch
echo  --^> Board:      http://localhost:3000/launches
echo  --^> Launchpad:  http://localhost:3000/launchpad
echo.
echo  [OK] Link http://localhost:3000 SUDAH OTOMATIS DISALIN ke Clipboard!
echo.
echo ======================================================================
echo  Catatan: Jangan tutup jendela terminal ini selama web digunakan.
echo ======================================================================
echo.

:: Salin otomatis link ke clipboard Windows
echo|set /p="http://localhost:3000" | clip

:: Buka Chrome default
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
) else if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:3000"
) else (
    start "" "http://localhost:3000"
)

:: Jalankan server Node
node server.js
pause
