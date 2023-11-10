1. jak spojrzysz na pliki js w folderze src to zobaczysz ze wyeksporotwalem tylko 1 var do main.js ale console.log z app.js sie i tak pokazuje. Czy to jest ok?

2. W tasku do produkcji dodalem kod ktory eliminuje wszystkie developerskie pliki. Nwm czy to potrzebne czy zbedne. Dodalem tez 'clean' ktore eliminuje wszystkie pliki w folderze dist

3. Dodalem kod kopiujacy wszystkie pliki z folderu files znajdujacego sie w folderze src. Zrobilem to z mysla ze jesli uzywam jakichkolwiek (zdjec, etc.) to musze je tez skopiowac do folderu dist zeby byly obecne w finalnym produkcie. Twoj boilerplate nie mial niczego w tym stylu ale pomyslalem ze to jest przydatne. 

4. Patrzac na twoj folder watch w tasks miales oddzielne pliki do kazdego typu pliku i potem polaczyles je razem w watch.task.js. Probowalem to zrobic i cos mi nie dzialalo wiec wrzucilem to wszystko do jednego pliku watch.js w folderze task i zrobilem task 'watch-all'. Czy to jest ok?

5. Czy w trybie produkcji powinien byc ustawiony server i opcja watch cyz to jest tylko finalna wersja ktora tworzy pliki do gotowego projektu?

6. Dla mozliwosci sprawdzenia zostawilem pliki w folderze src zeby mozna bylo na szybko sprawdzic czy wszystko dziala. Usune to gdy projekt bedzie gotowy

7. w plikach w folderze task uzywam require i moj vscode highlightuje to : 'File is a CommonJS module; it may be converted to an ES module.ts(80001)' i proponuje zamiane na import. Ignorowac to czy zamienic?

8. W zadaniu ktore mi zadales jest napisane zeby uzyc autoprefixera ale nie wiem co to jest?
