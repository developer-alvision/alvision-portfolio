Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("C:\Alvision Portfolio\public\logo.png")
$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

# Set a threshold for alpha/opacity to ignore faint shadows or artifact pixels at edges
# Alpha is from 0 (fully transparent) to 255 (fully opaque)
$alphaThreshold = 30

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -ge $alphaThreshold) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1
Write-Host "Bounds with threshold $alphaThreshold: minX=$minX, minY=$minY, width=$width, height=$height"

if ($width -gt 0 -and $height -gt 0) {
    $rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $bmp.Dispose()
    $cropped.Save("C:\Alvision Portfolio\public\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Successfully cropped logo.png"
} else {
    $bmp.Dispose()
    Write-Host "No non-transparent pixels found"
}
