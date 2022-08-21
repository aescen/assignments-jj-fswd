Judul:
Palindrome Checker

Deklarasi:
iter
text
arrayText
arrayTextReverse

Deskripsi:
DISPLAY ‘Palindrom Checker’

text             <- INPUT ‘Masukkan kata:’
arrayText        <- STRING text
arrayTextReverse <- REVERSE arrayText

iter             <- 0
WHILE iter < LENGHT arrayText
  IF arrayText[iter] != arrayTextReverse[iter]
    RETURN False
  iter  <- iter + 1
