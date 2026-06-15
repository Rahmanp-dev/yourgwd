$startTime = Get-Date
Write-Host "Checking for other build processes..."
while ($true) {
    # Check if time exceeded 2 minutes
    if (((Get-Date) - $startTime).TotalSeconds -gt 120) {
        Write-Host "Timeout waiting for other builds to finish. Proceeding anyway..."
        break
    }
    
    # Get all node processes running next build or next dev
    $nodeProcs = Get-CimInstance Win32_Process -Filter "name = 'node.exe'" | Where-Object { 
        $_.CommandLine -like "*next*build*" -or $_.CommandLine -like "*next*dev*"
    }
    
    # We count node processes. If only 0 or 1 is running, we can proceed.
    # Note: our own process won't be in node unless we are launched via node.
    if ($nodeProcs.Count -le 1) {
        Write-Host "No other next processes running. Starting build."
        break
    }
    
    Write-Host "Found $($nodeProcs.Count) next processes. Waiting 10 seconds..."
    Start-Sleep -Seconds 10
}

# Clean and Build
Write-Host "Cleaning .next directory..."
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

Write-Host "Running next build..."
npm run build
