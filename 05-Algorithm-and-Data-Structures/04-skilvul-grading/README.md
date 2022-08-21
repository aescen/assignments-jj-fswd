Judul:
Skilvul Grading

Deklarasi:
nilai, grade

Deskripsi:
DISPLAY ‘Skilvul Grading’

nilai <- INPUT ‘Masukkan nilai:’

IF nilai  < 70
  grade <- nilai
ELSE IF nilai >= 70
  IF (nilai MOD 5) < 3
    grade <- nilai + (nilai MOD 5)
  ELSE
    grade <- nilai
