Sziasztok!
Az oldalam témája egy festmény adatbázis, ahol megvalósíthatók a CRUD műveletek.
Szervernek a FireBase online adatbázisát használtam fel. A jelenlegi adatbázisban 63 elem található.

A festmények adatmodelljébe 6 tulajdonságot vettem fel: egyedi azonosító (uniqueId - a FireBase miatt), a festmény címe ( title ),
a festmény alkotója ( painter ), a festmény elkészítésének éve ( year ), és egy boolean érték, ami arra vonatkozik, hogy szeretnénk-e
a falunkon látni az adott festményt ( isOnWishlist ).

Az oldalon két nézet közül választhatunk, a Kártyás nézet ('/gallery'), ahol bootstrap kártyák segítségével jelenítettem meg a festményeket.
A kártyákon szerepelő edit és delete gombok segítségével szerkeszthetjük ('/paintingeditor') illetve törölhetjük a festményeket az adatbázisunkból.
A kártyaoldalon szerepel egy paginátor, ami 20-asával jeleníti meg a festményeket.

A másik nézetben, a lista oldalon ('/list') egy táblázatot készítettem, amelybe az festményadatok kerültek.
Ezen az oldalon van lehetőség a festmények szűrésére is, amelyet egy filter pipe segítségével valósítottam meg, minden billentyűleütésre.

Mind a kártyás és a lista oldalakon elérhető az Add New Painting opció, amellyel új festményt vihetünk fel az adatbázisba.

Az adatok módosításához, illetve új entitás felvételéhez template-driven formot használtam, validációval.

Készítettem egy Kvíz oldalt is, ahol a felhasználó letesztelheti műveltségét. Az adatbázisunkból random generálok egy képet, amelyet megjelenítek,
majd a festmény alatti 'See Solution' gombra kattintva megnézhetem a festmény információit.
Idekerült még egy 'Next Painting' gomb is, ami legenerálja a következő tetszőleges festményt.

Az oldal elkészítéséhez bootstrap keretrendszert használtam.

Szolgálja ez az oldal jelenlegi művészettörténeti ismereteink
bővítését! Jó szórakozást!
