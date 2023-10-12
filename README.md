# JobAnalizerr
JobAnalizer jest to WebApi pobierające darmowe Api z https://arbeitnow.com/api/job-board-api(ogłoszenia z ofertami pracy). Aplikacja składa się z dwóch projektów jeden pobiera i parsuje dane przy pomocy frameworka Newtonsoft, drugi to aplikacja webowa wykorzystująca technologie backendową .Net oraz na froncie Angulara.
W aplikacji stworzyłem  dwa modele bazodanowe Processing(encja pobrania danych) oraz JobOffer(model ogłoszenia), do mapowania relacji wykorzystuje framework EntityFrameworkCore. Dane są przechowywane w Lokalnej bazie danych sql.
Na frontendzie jest możliwość pobrania danych z API, wyświetlenia historii pobrań, wyświetlenia pojedyńczego rekordu pobrania(składającego się między innymi z ofert znajdujących się w pobranym API) oraz usunięcia pobrania. 
