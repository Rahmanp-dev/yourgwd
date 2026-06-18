while ($true) {
    # Check if there are other node processes running 'build'
    # Exclude our own wait_build.ps1 process or this powershell instance from blocking
    $builds = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" | Where-Object { 
        $_.CommandLine -like "*build*" -and $_.ProcessId -ne $PID
    }
    if ($builds) {
        Write-Host "Another build is running. Waiting 10 seconds..."
        Start-Sleep -Seconds 10
    } else {
        Write-Host "No other builds running. Starting npm run build..."
        break
    }
}
npm run build
