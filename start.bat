@echo off
title C1 Cambridge Master PWA
echo ========================================================
echo   Spoustim lokalni server pro C1 Cambridge Master...
echo ========================================================
echo.
echo Oteviram aplikaci v prohlizeci...
start http://localhost:8080

python -m http.server 8080
pause
