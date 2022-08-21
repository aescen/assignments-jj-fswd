Judul:
FizzyBuzzy

Deklarasi:
n

Deskripsi:
DISPLAY ‘Fizzy Buzzy’

n <- INPUT ‘Masukkan nilai n:’

IF n MOD 3 == 0 AND n MOD 5 == 0
  DISPLAY 'FizzBuzz'
ELSE IF n MOD 3 == 0
  DISPLAY 'Fizz'
ELSE IF n MOD 5 == 0
  DISPLAY 'Buzz'
ELSE
  DISPLAY n
