# Maaling-av-tempratur

Oppgave beskrivelse:
Ubegrenset antall forsøk tillatt
Tilgjengelig: 25. aug. 2022 0.00Tilgjengelig: 25. aug. 2022 0.00til 16. des. 2022 23.59 til 16. des. 2022 23.59
For å løse oppgaven sett deg inn i følgende ting (søk selv etter forklaringer og ta de med i eventuell besvarelse):

temperatur, - hva er det?
internasjonale målesystemer (SI systemet med Volt for spenning og Kelvin for temperatur, for eksempel)
temperatur skalaer, - finnes det mange og hvilke er de mest brukte? 
prefix for størrelser (Bidragsytere til Wikimedia-prosjektene, 2004)
omregningsformelen fra Celsius til Farenheit
omreigningsformelen fra enten Farenheit eller Celsius til Kelvin
datatyper for input og output (return)
avrunding
TMP36 er en temperatursensor som brukes for å måle temperatur. 

TMP36 skal kobles til en krets, slik at det er mulig å avlese en spenning fra "beina" til TMP36.

0° Celsius tilsvarer ikke 0 V (volt) 500 mV (millivolt), slik at det er mulig å avlese negative temperaturer. Vi kan kalle det for en spenningsforsyvning. 

Skaleringsfaktor er 10 mV per hver grad Celsius. For eksempel, +10 grader Celsius tilsvarer en spenning på 600 mV avlest fra kretsen.

Presisjonen for sensoren bestemmes både av mekanismen og materialer i selve sensoren, samt av avlesningsprosessen. Anta at presisjon til avlensingsenheten er 10 bits og at opererer med 5 Volt spenning, dvs. kan avlese verdier mellom 0 og 5 Volt. Med 10-bits kan man lage 1024 forskjellige "tall" eller intervaller, så 5V delt på 1024 vil gi 0.00488 Volt som den minst mulige intervalle og dermed også bestemme presisjon. Ved å bruke skaleringsfaktoren 10 mV per 1 grad Celsius, så blir presisjon 0.488 grader Celsius. Ta hensyn til dette i beregning av de aktuelle verdiene.

Hva kan du levere? Utvikle et program, som tar som input spenning i mV og returnerer temperaturverdier i tre forskjellige skalaer, - Celsius, Farenheit og Kelvin, som output. Reflekter rundt programdesignet.

Oppgaven er ikke obligatorisk, men hvis du leverer, vil vi gi deg en tilbakemelding. Leveres som tekst.

 

Referanser
Bidragsytere til Wikimedia-prosjektene. (2004, November 12). SI-prefiks. Wikipedia.org; Wikimedia Foundation, Inc. https://no.wikipedia.org/wiki/SI-prefiks
