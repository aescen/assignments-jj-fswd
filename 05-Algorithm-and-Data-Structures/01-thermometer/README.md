Judul:
Konverter Temperatur

Deklarasi:
besarTemperatur, tipeSatuan, temperatur

Deskripsi:
DISPLAY ‘Konverter Temperatur’

besarTemperatur <- INPUT ‘Masukkan besar temperatur:’
tipeSatuan      <- INPUT ‘Masukkan tipe satuan:’

IF tipeSatuan == 'Fahrenheit'
  temperatur <- (besarTemperatur - 32) * (5/9)
ELSE IF tipeSatuan == 'Kelvin'
  temperatur <- (besarTemperatur - 273.15)
ELSE IF tipeSatuan == 'Celcius'
  temperatur <- besarTemperatur

DISPLAY temperatur
