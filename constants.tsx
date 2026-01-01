import { ListeningPart, WritingTask, SpeakingPart, ReadingPart } from './types';
import React from 'react';

// --- HÖREN DATA ---
export const LISTENING_DATA: ListeningPart[] = [
  {
    id: 1,
    title: "Teil 1: Ansagen",
    description: "Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Was ist richtig?",
    audioSrc: "Track 66.mp3",
    transcript: `
      <strong>Nummer 1:</strong><br/>
      Guten Tag, hier ist Lenny Schubert von der Spar-Bank. Ich rufe wegen Ihrer neuen EC-Karte an. Sie hatten mir eine Nachricht hinterlassen. Also: Die Karte bekommen Sie diese Woche per Post von uns zugeschickt. Auf der Seite Ihres Online-Bankings müssen Sie dann nur noch eine neue Pin-Nummer festlegen. Sie können Sie selbst auswählen. Die Karte ist schon aktiviert. Bei Fragen können Sie sich gerne auch an uns in der Bank-Filiale wenden. Auf Wiederhören.<br/><br/>
      <strong>Nummer 2:</strong><br/>
      Hallo Frau Araya, Hartwich hier. Wir hatten ja besprochen, dass Sie am Montag direkt um acht Uhr beginnen. Ich bin aber an dem Tag leider nicht da. Und die Schichtleiterin kann sich natürlich nicht gut um Sie kümmern, während sie den Laden öffnet. Es wäre also besser, wenn Sie erst um 12 Uhr kommen und anfangen. Das ist dann auch der erste Stress vorbei und die Kollegin kann Ihnen in Ruhe alles erklären. Wir beide sehen uns dann am Dienstag.<br/><br/>
      <strong>Nummer 3:</strong><br/>
      Liebe Kundinnen und Kunden. Willkommen zu unserem Frühlingsfest mit ganz besonderen Angeboten. Schick ins Frühjahr! Albert Gunter präsentiert die neuesten Trends in der Damenmode-Abteilung im ersten Stockwerk. Sie und Ihre Familie wollen das Frühlingswetter für Sport im Freien nutzen? Dann schauen Sie sich im dritten Stockwerk um: Nur heute gibt es hier in der Sportabteilung 20 Prozent Rabatt auf alle Artikel! Kulinarisch wird es im vierten Stock: Die Küchenabteilung erwartet Sie den ganzen Tag...<br/><br/>
      <strong>Nummer 4:</strong><br/>
      Guten Tag Herr Zimmermann. Hier ist die Zahnarztpraxis Wöhrl. Sie haben ja diesen Donnerstag Ihren Kontrolltermin bei uns. Leider ist Doktor Wöhrl aber krank. Eine Ärztin macht die Vertretung. Sie hat aber nur Zeit für Notfälle. Können wir Ihren Termin auf nächste Woche verschieben? Tag und Uhrzeit bleiben gleich. Rufen Sie bitte zurück, wenn das bei Ihnen nicht geht. Danke.
    `,
    questions: [
      {
        id: 1,
        title: "Frage 1",
        question: "Was müssen Sie machen?",
        options: ["Die neue EC-Karte aktivieren.", "Eine Pin-Nummer wählen.", "Zur Bank kommen."],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! 'Auf der Seite Ihres Online-Bankings müssen Sie dann nur noch eine neue Pin-Nummer festlegen.'"
      },
      {
        id: 2,
        title: "Frage 2",
        question: "Wann beginnt Frau Arayas neue Arbeit?",
        options: ["Am Dienstag.", "Am Montag um 8 Uhr.", "Am Montag um 12 Uhr."],
        type: 'mc',
        correct: 2,
        explanation: "Richtig! 'Es wäre also besser, wenn Sie erst um 12 Uhr kommen'."
      },
      {
        id: 3,
        title: "Frage 3",
        question: "Wo können Sie eine Sporthose für Ihren Sohn kaufen?",
        options: ["Im 1. Stock.", "Im 3. Stock.", "Im 4. Stock."],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! 'Dann schauen Sie sich im dritten Stockwerk um: ... Sportabteilung'."
      },
      {
        id: 4,
        title: "Frage 4",
        question: "Herr Zimmermann",
        options: ["muss zu einem anderen Arzt gehen.", "soll nächsten Donnerstag kommen.", "soll zu einer anderen Uhrzeit kommen."],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! 'Können wir Ihren Termin auf nächste Woche verschieben? Tag und Uhrzeit bleiben gleich.'"
      }
    ]
  },
  {
    id: 2,
    title: "Teil 2: Radioansagen",
    description: "Sie hören fünf Ansagen aus dem Radio. Was ist richtig?",
    audioSrc: "Track 67.mp3",
    transcript: `
      <strong>Nummer 5:</strong><br/>
      Sie haben es gerade im Wetterbericht gehört: Der Frühling ist da, die ersten Bäume und Gräser blühen. Für alle Allergikerinnen und Allergiker keine so gute Nachricht. Wenn Sie das schöne Wetter aber nicht nur durch das geschlossene Fenster genießen wollen, haben wir einen Tipp vom HNO-Arzt Dr. Golenkov: Jeden Abend duschen und vor allem die Haare gut waschen! So vermeiden Sie auch, dass Sie die Pollen mit ins Bett nehmen.<br/><br/>
      <strong>Nummer 6:</strong><br/>
      Ein neuer Anbieter für Elektro-Roller ist in der Stadt! Ab nächstem Wochenende ist die App dazu im App-Store verfügbar und schon eine Woche später, ab dem 29.5., können Sie die Roller leihen – und zwar mit einem unglaublichen Start-Angebot. Bis zum 13. Juni können Sie die neuen Roller zum halben Preis ausleihen! Also zwei Wochen lang günstiger fahren – das ist doch was!<br/><br/>
      <strong>Nummer 7:</strong><br/>
      Feuer in der Konzerthalle: Gestern Nacht brannte die Konzerthalle im Stadtteil West. Laut Polizei hatte die Feuerwehr den Brand nach kurzer Zeit unter Kontrolle. Es gab keine Verletzten. Wie es zu dem Feuer kam, ist noch unklar. Alle geplanten Konzerte und Veranstaltungen fallen diese Woche aus. Sauberkeit in der Stadt: Am Montag haben sich Vertreter*innen der Gemeinden getroffen, um über die Sauberkeit...<br/><br/>
      <strong>Nummer 8:</strong><br/>
      Kommen Sie zum verkaufsoffenen Sonntag ins Möbelhaus „Wohngenuss“! Unsere Angebote an diesem Wochenende: Alle Betten zum Ausprobieren – Sie können Ihr neues Bett bis zu 100 Tage testen und problemlos zurückgeben! Großer Sofa-Ausverkauf: Jedes Sofa aus der letzten Saison bekommen Sie 25 Prozent günstiger! Esstische mit passender Tischdecke: Zu jedem Esstisch bekommen Sie eine passende Tischdecke gratis dazu. Alles nur dieses Wochenende...<br/><br/>
      <strong>Nummer 9:</strong><br/>
      ... und die Veranstaltungstipps fürs Wochenende: Am Samstag geht das Jugendsportfest weiter. Wenn Sie im Stadion zusehen möchten, fahren Sie nicht über den Heinrichplatz. Dort findet eine Klima-Demonstration statt, der Platz ist den ganzen Tag für den Verkehr gesperrt. Sperrungen wird es auch am Sonntag rund um die Altstadt geben. Auf dem Europäischen Fest der Chöre treten über 500 Sängerinnen und Sänger an verschiedenen Orten auf. Alle Auftritte sind kostenlos...
    `,
    questions: [
      {
        id: 5,
        title: "Frage 5",
        question: "Was soll man bei Allergien machen?",
        options: ["Die Fenster schließen.", "Täglich die Haare waschen.", "Zum Arzt gehen."],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! 'Jeden Abend duschen und vor allem die Haare gut waschen!'"
      },
      {
        id: 6,
        title: "Frage 6",
        question: "Ab wann kann man die Elektro-Roller ausleihen?",
        options: ["Ab Ende Mai.", "Ab Mitte Juni.", "Ab nächstem Wochenende."],
        type: 'mc',
        correct: 0,
        explanation: "Richtig! '...ab dem 29.5., können Sie die Roller leihen'. (Ende Mai)"
      },
      {
        id: 7,
        title: "Frage 7",
        question: "Welche Sendung hören Sie?",
        options: ["Die Kulturtipps.", "Die Nachrichten.", "Eine Musiksendung."],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! Themen wie Feuer, Polizei, Gemeindevertreter sind typisch für Nachrichten."
      },
      {
        id: 8,
        title: "Frage 8",
        question: "Auf welche Möbel bekommen Sie Rabatt?",
        options: ["Betten.", "Esstische.", "Sofas."],
        type: 'mc',
        correct: 2,
        explanation: "Richtig! 'Jedes Sofa ... bekommen Sie 25 Prozent günstiger!'"
      },
      {
        id: 9,
        title: "Frage 9",
        question: "Warum ist der Heinrichplatz gesperrt?",
        options: ["Weil eine Demonstration stattfindet.", "Weil ein Musikfest stattfindet.", "Weil ein Sportfest stattfindet."],
        type: 'mc',
        correct: 0,
        explanation: "Richtig! 'Dort findet eine Klima-Demonstration statt'."
      }
    ]
  },
  {
    id: 3,
    title: "Teil 3: Gespräche",
    description: "Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben.",
    audioSrc: "Track 68.mp3",
    transcript: `
      <strong>Beispiel:</strong><br/>
      Hamid: Hallo Julia! Sag mal: Kommst du auch zu Daschas Geburtstag?<br/>
      Julia: Ja klar! Ich glaube, es kommen fast alle aus unserem Englischkurs. Schön, dass wir uns jetzt auch mal privat treffen.<br/>
      Hamid: Stimmt! Und Dascha wird etwas aus ihrer Heimat kochen. Sie erzählt im Kurs ja immer, dass Kochen ihr Hobby ist.<br/>
      Julia: Ja, darauf freue ich mich schon. Hast du vielleicht eine Idee für ein Geschenk?<br/>
      Hamid: Vielleicht was zum Kochen? Obwohl ... da weiß man nie, was sie schon alles hat.<br/>
      Julia: Ja, stimmt. Konstantin aus dem Englischkurs arbeitet doch in diesem Kaufhaus.<br/>
      Hamid: Welches meinst du?<br/>
      Julia: Das in der Parkstraße. Vielleicht könnten wir dort zusammen etwas suchen?<br/>
      Hamid: Ja, das finde ich gut. Ich könnte morgen in die Stadt fahren und dich dort am Kaufhaus treffen.<br/><br/>

      <strong>Gespräch 1:</strong><br/>
      Kundin: Entschuldigung? Könnten Sie mir helfen?<br/>
      Mitarbeiter: Natürlich. Worum geht es?<br/>
      Kundin: Ja, also ich streiche mein Wohnzimmer neu.<br/>
      Mitarbeiter: Ach, schön. Nur das Wohnzimmer?<br/>
      Kundin: Ja, die Wohnung wurde erst vor zwei Jahren komplett renoviert, kurz bevor ich eingezogen bin. Ich möchte nur mal eine neue Farbe im Wohnzimmer. Das Weiß ist mir zu langweilig.<br/>
      Mitarbeiter: Aha. Ich sehe auch, Sie haben ja schon alles: Farbe, Folie, Pinsel ... Machen Sie alles allein?<br/>
      Kundin: Ja! Das ist ja wirklich nicht so schwer. Aber ich brauche noch etwas: Kann man hier vielleicht eine Leiter leihen? Ich habe eine zu Hause, aber die ist zu klein, um an die Decke zu kommen.<br/>
      Mitarbeiter: Ja, wir haben verschiedene Geräte und Leitern zum Ausleihen. Die Kollegen im Erdgeschoss neben der Kasse kümmern sich darum. Soll ich Ihnen zeigen, wo das ist?<br/><br/>
      
      <strong>Gespräch 2:</strong><br/>
      Mann: Hallo! Ich heiße Al-Sayad. Ich hatte angerufen, weil ich den Kurs ... Moment, ich habe die Nummer hier, also ...<br/>
      Frau: Ach ja, ich weiß schon, ich erinnere mich. Es geht um den Kurs W-127: „Die wichtigsten Computerprogramme für’s Büro“, richtig?<br/>
      Mann: Richtig.<br/>
      Frau: Leider ist der Kurs jetzt schon voll. Die Kurse aus dem Bereich Computer und Internet sind immer schnell ausgebucht.<br/>
      Mann: Ach schade. Gibt es den Kurs denn noch einmal?<br/>
      Frau: Ich sehe mal nach. Also, über den Sommer finden leider gar keine Kurse in dem Bereich statt. Aber ab September könnte ich Ihnen einen Kurs anbieten. Ist der dann auch am Abend? Das war mir nämlich wichtig, als ich den Kurs ausgewählt habe.<br/>
      Frau: Ach, jetzt sehe ich ... Nein, tut mir leid, der Kurs ist online. Also an zwei Vormittagen in der Woche. Aber Sie würden von zu Hause aus lernen.<br/>
      Mann: Ah, ja. Das würde dann auch gehen. Wann beginnt denn ...<br/><br/>

      <strong>Gespräch 3:</strong><br/>
      Paula: Friseursalon Buch. Paula Buch. Was kann ich für Sie tun?<br/>
      Denio: Hallo, hier ist Denio Rogic. Ich hatte Ihnen geschrieben, weil ich gern eine Ausbildung bei Ihnen machen würde.<br/>
      Paula: Ah ja, Ihre Bewerbung hat mir sehr gut gefallen, obwohl Sie ja noch keine Erfahrung haben. Vielleicht könnten Sie erst einmal ein Praktikum machen. Das wäre ja auch gut für Sie: Sie lernen uns kennen und wie wir arbeiten.<br/>
      Denio: Ja, vielleicht.<br/>
      Paula: Das können wir ja besprechen. Wann hätten Sie denn Zeit für ein Vorstellungsgespräch?<br/>
      Denio: Also ... im Moment kann ich immer erst ab 14 Uhr. Ich habe ja noch einen Monat Schule, bevor ich den Abschluss mache.<br/>
      Paula: Ach, verstehe. Deshalb haben Sie auch kein Zeugnis mitgeschickt?<br/>
      Denio: Richtig.<br/><br/>

      <strong>Gespräch 4 (Susanna & Timor):</strong><br/>
      Susanna: Morgen Timor! Wie geht’s?<br/>
      Timor: Hi Susanna. Du bist aber spät dran heute. Sonst bist du doch immer vor mir bei der Arbeit.<br/>
      Susanna: Oh ja, ich bin auch echt gestresst. Ich musste heute schon mit meinem Nachbarn diskutieren.<br/>
      Timor: Warum das denn? Habt ihr wieder eine Party gemacht?<br/>
      Susanna: Nicht ganz. Er hat sich über meine Kinder beschwert. Er sagt, die sind zu laut.<br/>
      Timor: Wirklich? Und dafür steht er extra morgens vor der Tür?<br/>
      Susanna: Allerdings! Und ja, es stimmt vielleicht auch, dass es im Moment etwas lauter ist. Aber wenn keine Schule ist, sind die Kinder eben mehr zu Hause und abends auch länger wach.<br/>
      Timor: Ja, das ist doch ganz normal. Wie lange sind denn noch Schulferien?<br/>
      Susanna: Noch zwei Wochen. Aber ab Freitag sind sie dann erstmal bei meinen Eltern.<br/>
    `,
    questions: [
      { id: 10, title: "Frage 10", question: "Die Kundin möchte ihre ganze Wohnung renovieren.", type: 'rf', correct: 'falsch', explanation: "Richtig (Falsch)! 'Ich möchte nur mal eine neue Farbe im Wohnzimmer.'" },
      { id: 11, title: "Frage 11", question: "Was sucht die Kundin?", options: ["Eine große Leiter.", "Eine spezielle Farbe.", "Hilfe bei der Renovierung."], type: 'mc', correct: 0, explanation: "Richtig! 'Kann man hier vielleicht eine Leiter leihen?'" },
      { id: 12, title: "Frage 12", question: "Herr Al-Sayad möchte einen Computerkurs machen.", type: 'rf', correct: 'richtig', explanation: "Richtig! 'Computerprogramme für's Büro'." },
      { id: 13, title: "Frage 13", question: "Herr Al-Sayad kann", options: ["einen Abendkurs machen.", "einen Online-Kurs machen.", "einen Sommerkurs machen."], type: 'mc', correct: 1, explanation: "Richtig! '...der Kurs ist online. Also an zwei Vormittagen... aber Sie würden von zu Hause aus lernen.'" },
      { id: 14, title: "Frage 14", question: "Denio hat sich bei einem Frisörsalon beworben.", type: 'rf', correct: 'richtig', explanation: "Richtig! 'Friseursalon Buch. Paula Buch. Was kann ich für Sie tun?'" },
      { id: 15, title: "Frage 15", question: "Denio", options: ["hat ein Zeugnis geschickt.", "hat schon ein Praktikum gemacht.", "schließt bald die Schule ab."], type: 'mc', correct: 2, explanation: "Richtig! 'Ich habe ja noch einen Monat Schule, bevor ich den Abschluss mache.'" },
      { id: 16, title: "Frage 16", question: "Susanna spricht mit einem Nachbarn.", type: 'rf', correct: 'falsch', explanation: "Richtig (Falsch)! Susanna spricht mit Timor (Kollege) ÜBER den Nachbarn. 'Ich musste heute schon mit meinem Nachbarn diskutieren.'" },
      { id: 17, title: "Frage 17", question: "Die Kinder von Susanna", options: ["haben im Moment Ferien.", "machen am Freitag eine Party.", "sind jetzt bei den Großeltern."], type: 'mc', correct: 0, explanation: "Richtig! 'Aber wenn keine Schule ist... Wie lange sind denn noch Schulferien? Noch zwei Wochen.'" }
    ]
  },
  {
    id: 4,
    title: "Teil 4: Aussagen",
    description: "Welche Aussage passt zu welcher Person? Thema: Öffentliche Verkehrsmittel.",
    audioSrc: "Track 69.mp3",
    transcript: `
      <strong>Nummer 18:</strong><br/>
      Ich komme sehr ungern zu spät und muss auch bei meiner Arbeit sehr auf Pünktlichkeit achten. Hier in der Stadt wird der Verkehr immer schlimmer. Deshalb fahre ich nur noch Bahn. Normalerweise bin ich so deutlich schneller als mit dem Auto. Manchmal trifft man auch interessante Leute in der Bahn und mit einem Job-Ticket ist das auch gar nicht so teuer.<br/><br/>
      <strong>Nummer 19:</strong><br/>
      Ich verstehe schon, dass viele Leute sagen, dass ihnen das Bahnfahren zu teuer ist. Aber wenn man sich das mal genau ansieht und ausrechnet, dann stimmt das meistens nicht. Ich habe zum Beispiel eine Monatskarte im Abonnement, weil ich jeden Tag mit der Bahn fahre. Durch das Abo ist das viel billiger, als wenn man jeden Tag eine Karte kauft. Und günstiger als das Auto ist es auch. Da sieht man die ganzen Kosten nicht so direkt. Aber mit Steuer und Versicherung kommt schon einiges zusammen.<br/><br/>
      <strong>Nummer 20:</strong><br/>
      Ich wohne etwas außerhalb von einer größeren Stadt. Die meisten Leute hier fahren mit dem Auto zur Arbeit. Ich möchte das nicht und fahre jeden Tag die 10 Kilometer mit dem Fahrrad zur S-Bahn. Mir sind der Umweltschutz und unser Klima sehr wichtig. Meiner Meinung nach sollten deshalb mehr Menschen mit den öffentlichen Verkehrsmitteln fahren. Von anderen Fahrgästen höre ich, dass sie nicht oft Bahn fahren, weil das Angebot so schlecht ist: „Die Haltestellen sind zu weit weg und der Bus kommt nur zweimal am Tag.“ Das stimmt und muss sich ändern!
    `,
    statements: [
      { id: 'a', text: "Bahnfahren ist besser für die Umwelt." },
      { id: 'b', text: "Bus und Bahn haben oft Verspätung." },
      { id: 'c', text: "Die anderen Fahrgäste sind das größte Problem." },
      { id: 'd', text: "Die öffentlichen Verkehrsmittel sind zu teuer." },
      { id: 'e', text: "Mit der Bahn ist man meistens schneller." },
      { id: 'f', text: "Mit einem Monatsticket spart man viel Geld." }
    ],
    questions: [
      { id: 18, title: "Frage 18 (Person 18)", question: "Welche Aussage passt?", options: ['a', 'b', 'c', 'd', 'e', 'f'], type: 'mc', correct: 4, explanation: "Richtig (e)! 'Normalerweise bin ich so deutlich schneller als mit dem Auto.'" },
      { id: 19, title: "Frage 19 (Person 19)", question: "Welche Aussage passt?", options: ['a', 'b', 'c', 'd', 'e', 'f'], type: 'mc', correct: 5, explanation: "Richtig (f)! 'Durch das Abo ist das viel billiger'." },
      { id: 20, title: "Frage 20 (Person 20)", question: "Welche Aussage passt?", options: ['a', 'b', 'c', 'd', 'e', 'f'], type: 'mc', correct: 0, explanation: "Richtig (a)! 'Mir sind der Umweltschutz und unser Klima sehr wichtig.'" }
    ]
  }
];

// --- LESEN DATA ---
export const READING_DATA: ReadingPart[] = [
  {
    id: 1,
    title: "Lesen Teil 1",
    description: "Sie suchen Informationen zu Fernsehsendungen. Lesen Sie die Aufgaben 21 bis 25 und die Tipps aus einer Programmzeitschrift. Welcher Sender (a, b oder c) passt?",
    text: `
      <div class="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-300 font-sans max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2">PLASMA TV empfiehlt: Programm-Tipps am 8.3.</h2>
        
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-20 font-bold text-lg text-blue-900">ARD</div>
            <div class="flex-1">
               <div class="flex justify-between font-bold"><span>11:15 Uhr:</span> <span>Spaß in Entenhausen (Zeichentrick)</span></div>
               <div class="flex justify-between"><span>12:00 Uhr:</span> <span>Mittagsmagazin - Regionale Rezepte zum Wochenende</span></div>
               <div class="flex justify-between"><span>20:15 Uhr:</span> <span>Zimmer aus Beton (Fernsehfilm/Drama)</span></div>
            </div>
          </div>

          <div class="flex gap-4 border-t pt-4 border-gray-200">
            <div class="w-20 font-bold text-lg text-blue-900">ZDF</div>
            <div class="flex-1">
               <div class="flex justify-between"><span>16:30 Uhr:</span> <span>Wohnwelt: Tipps zum Sparen beim Wohnungskauf</span></div>
               <div class="flex justify-between font-bold"><span>16:15 Uhr:</span> <span>Die Rosenheim-Cops (Krimiserie)</span></div>
               <div class="flex justify-between"><span>23:45 Uhr:</span> <span>Und Aktion! - Nachrichten aus dem Showbusiness (Unterhaltungssendung)</span></div>
            </div>
          </div>

          <div class="flex gap-4 border-t pt-4 border-gray-200">
            <div class="w-20 font-bold text-lg text-blue-900">Arte</div>
            <div class="flex-1">
               <div class="flex justify-between font-bold"><span>13:45 Uhr:</span> <span>Wichtige Personen der Vergangenheit: Mozart (1756-1791) (Doku)</span></div>
               <div class="flex justify-between"><span>16:10 Uhr:</span> <span>Wissen ist: Aha! (Kindersendung)</span></div>
               <div class="flex justify-between"><span>22:00 Uhr:</span> <span>Rocky I (Sport-Drama)</span></div>
            </div>
          </div>

          <div class="flex gap-4 border-t pt-4 border-gray-200">
            <div class="w-20 font-bold text-lg text-blue-900">RTL</div>
            <div class="flex-1">
               <div class="flex justify-between font-bold"><span>15:45 Uhr:</span> <span>Die Superhandwerker - Bohren, hämmern, streichen (Info-Sendung)</span></div>
               <div class="flex justify-between"><span>20:15 Uhr:</span> <span>Spaceballs - Kult-Komödie von 1987</span></div>
               <div class="flex justify-between"><span>22:35 Uhr:</span> <span>Tierhaar-Allergie - Hausmittel: Rezeptfrei und gut! (Info-Sendung)</span></div>
            </div>
          </div>

          <div class="flex gap-4 border-t pt-4 border-gray-200">
            <div class="w-20 font-bold text-lg text-blue-900">PRO 7</div>
            <div class="flex-1">
               <div class="flex justify-between"><span>18:15 Uhr:</span> <span>Neue Geschichten für Kinder (Unterhaltung)</span></div>
               <div class="flex justify-between"><span>20:15 Uhr:</span> <span>Dune - Der Wüstenplanet (Science-Fiction)</span></div>
               <div class="flex justify-between font-bold"><span>23:15 Uhr:</span> <span>Verhaftet! Auf den Spuren der Verbrecher (Fernsehfilm)</span></div>
            </div>
          </div>

          <div class="flex gap-4 border-t pt-4 border-gray-200">
            <div class="w-20 font-bold text-lg text-blue-900">Regio TV</div>
            <div class="flex-1">
               <div class="flex justify-between font-bold"><span>14:15 Uhr:</span> <span>Island Pferde - Die Könige der Insel (Natur-Doku)</span></div>
               <div class="flex justify-between"><span>15:15 Uhr:</span> <span>Melvin in der Stadt der Diebe (Komödie)</span></div>
               <div class="flex justify-between"><span>20:15 Uhr:</span> <span>Das große Fressen (Drama/Komödie)</span></div>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        id: 21,
        title: "Aufgabe 21",
        question: "Sie möchten spät am Abend einen spannenden Krimi sehen.",
        options: ["ZDF", "PRO 7", "anderer Sender"],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! Auf PRO 7 läuft um 23:15 Uhr 'Verhaftet! Auf den Spuren der Verbrecher' (Krimi/Fernsehfilm). ZDF hat 'Rosenheim-Cops' aber schon am Nachmittag (16:15)."
      },
      {
        id: 22,
        title: "Aufgabe 22",
        question: "Sie möchten am Nachmittag einen lustigen Film sehen.",
        options: ["ARD", "RTL", "anderer Sender"],
        type: 'mc',
        correct: 2,
        explanation: "Richtig! Regio TV zeigt um 15:15 Uhr (Nachmittag) 'Melvin in der Stadt der Diebe (Komödie)'. RTL zeigt eine Komödie erst am Abend (20:15 Spaceballs)."
      },
      {
        id: 23,
        title: "Aufgabe 23",
        question: "Ihre Kinder lieben Tiersendungen.",
        options: ["Arte", "Regio TV", "anderer Sender"],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! Regio TV zeigt um 14:15 Uhr 'Island Pferde'."
      },
      {
        id: 24,
        title: "Aufgabe 24",
        question: "Ihre Schwester möchte ihre Wohnung renovieren.",
        options: ["ZDF", "RTL", "anderer Sender"],
        type: 'mc',
        correct: 1,
        explanation: "Richtig! RTL zeigt um 15:45 Uhr 'Die Superhandwerker - Bohren, hämmern, streichen'."
      },
      {
        id: 25,
        title: "Aufgabe 25",
        question: "Sie interessieren sich für Geschichte.",
        options: ["Arte", "PRO 7", "anderer Sender"],
        type: 'mc',
        correct: 0,
        explanation: "Richtig! Arte zeigt um 13:45 Uhr eine Doku über Mozart (1756-1791) - Personen der Vergangenheit."
      }
    ]
  },
  {
    id: 2,
    title: "Lesen Teil 2",
    description: "Lesen Sie die Situationen 26-30 und die Anzeigen a-h. Finden Sie für jede Situation die passende Anzeige. Für eine Aufgabe gibt es keine Lösung. Markieren Sie in diesem Fall ein x.",
    items: [
      { id: 'a', text: "Fit und gesund - Neue Gruppe: Unser Training 55 plus garantiert Fitness auch für ältere Menschen. Gezielte Übungen für Rücken und Bauch..." },
      { id: 'b', text: "Musik und Bewegung für Babys und Eltern: Musik fördert die kindliche Entwicklung. Gemeinsames Singen..." },
      { id: 'c', text: "Gesünder leben und steinalt werden! Ungesunde Ernährung, Stress und langes Sitzen sind schlecht... Bestellen Sie heute ein Abo bei www.steingesund-esomedi.de" },
      { id: 'd', text: "Ärzte am Wall: Die Spezialisten! In unserer modernen Orthopädie-Praxis helfen wir Ihnen bei allen Erkrankungen des Bewegungsapparats..." },
      { id: 'e', text: "Praxis-Team Augstein hat noch Termine! Geburtsvorbereitungskurs für Schwangere ab der 30. Woche (mit Partner*in)..." },
      { id: 'f', text: "Ernährungsberatung: Wie wirken Lebensmittel auf unsere Gesundheit? Unser Experte erklärt: Einfache Rezepte für eine gesunde und abwechslungsreiche Ernährung zum Mitmachen und Nachkochen." },
      { id: 'g', text: "Schwimmen wie ein Fisch im Wasser! Wir bieten: Babyschwimmen, Schwimmkurse für Kinder ab 3, Trainingsgruppen für Jugendliche, Wettkampfteam..." },
      { id: 'h', text: "Mit offenen Augen und allen Sinnen: Yoga und gesunde Gerichte in unserem Gästehaus am Schwielowsee. Lernen Sie Meditationstechniken..." }
    ],
    questions: [
      { id: 26, title: "Aufgabe 26", question: "Ihre Tochter möchte Sport mit anderen Jugendlichen machen.", options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'], type: 'select', correct: 6, explanation: "Richtig! Anzeige g bietet 'Trainingsgruppen für Jugendliche'." },
      { id: 27, title: "Aufgabe 27", question: "Sie möchten lernen, wie man gesünder kocht.", options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'], type: 'select', correct: 5, explanation: "Richtig! Anzeige f bietet 'Einfache Rezepte ... zum Mitmachen und Nachkochen'." },
      { id: 28, title: "Aufgabe 28", question: "Ihr Großvater hat oft Rückenschmerzen und möchte deshalb Sport machen.", options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'], type: 'select', correct: 0, explanation: "Richtig! Anzeige a ist 'Training 55 plus' mit 'Übungen für den Rücken'." },
      { id: 29, title: "Aufgabe 29", question: "Sie brauchen eine neue Brille und suchen einen Augenarzt.", options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'], type: 'select', correct: 8, explanation: "Richtig (x)! Es gibt keine Anzeige für einen Augenarzt (Ophthalmologe). Anzeige d ist Orthopädie." },
      { id: 30, title: "Aufgabe 30", question: "Ihre Bekannte bekommt ein Baby und möchte andere Eltern kennenlernen.", options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'], type: 'select', correct: 1, explanation: "Richtig! Anzeige b 'Musik und Bewegung für Babys und Eltern' oder Anzeige e 'Geburtsvorbereitungskurs'. Da das Baby noch 'bekommt' (Zukunft) könnte es e sein, aber 'möchte Eltern kennenlernen' passt oft zu b. Hier ist b die beste Wahl für 'Eltern kennenlernen' mit Baby. Aber Moment: 'bekommt ein Baby' (schwanger). Dann 'e' (Geburtsvorbereitung). Anzeige b ist für Babys (schon geboren). Text: 'Ihre Bekannte bekommt ein Baby' -> Schwanger. Also e." }
    ]
  },
  {
    id: 3,
    title: "Lesen Teil 3",
    description: "Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie bei jedem Text, ob die Aussage richtig oder falsch ist und welche Antwort am besten passt.",
    text: `
      <div class="space-y-8">
        <!-- Text 1 -->
        <div class="border p-4 bg-white shadow-sm">
            <h3 class="font-bold text-lg mb-2">Beratungszentrum für Migranten am May-Ayim-Ufer</h3>
            <p class="text-sm">Gestern eröffnete die Bürgermeisterin die neuen Räume des Beratungszentrums für Migranten und Migrantinnen im Mehrgenerationenhaus am May-Ayim-Ufer.</p>
            <p class="text-sm mt-2">Seit 2006 bietet das Zentrum jugendlichen und erwachsenen Zugewanderten vielfältige Beratung. Aber das Haus in der Waldstraße wurde zu klein, das Zentrum musste umziehen. Nun können die Mitarbeiterinnen und Mitarbeiter ihre wichtige Arbeit in den neuen Räumen fortsetzen und sogar noch mehr anbieten.</p>
            <p class="text-sm mt-2">Zugewanderte bekommen dort weiter Beratung zu Aufenthalt, Asyl und Integrationskursen, aber auch Unterstützung bei der Arbeits-, Ausbildungs- oder Wohnungssuche.</p>
            <p class="text-sm mt-2">Neu ist, dass es jetzt von Mittwoch bis Freitag eine pädagogische Beratung sowie Nachhilfe für Kinder und Jugendliche gibt. Die Öffnungszeiten des Beratungszentrums bleiben unverändert.</p>
        </div>
        
        <!-- Text 2 -->
        <div class="border p-4 bg-white shadow-sm">
            <h3 class="font-bold text-lg mb-2">Liebe Eltern,</h3>
            <p class="text-sm">am kommenden Samstag ab 9 Uhr findet unser Kinder- und Familiensportfest auf dem Sportplatz am Wiesenanger statt. Sie und Ihre Familie sind herzlich dazu eingeladen.</p>
            <p class="text-sm mt-2">Neben vielen sportlichen Wettbewerben für Kinder und Jugendliche warten verschiedene Sportspiele auf die Kleinsten. Das Sportprogramm für Erwachsene beginnt um 10 Uhr.</p>
            <p class="text-sm mt-2">Bitte melden Sie Ihre Kinder bis Freitag 16 Uhr für die Wettbewerbe an. Später ist eine Anmeldung nicht mehr möglich.</p>
            <p class="text-sm mt-2">Für warmes Essen sorgen wir, aber wir freuen uns, wenn Sie etwas für unseren Kuchenverkauf mitbringen.</p>
            <p class="text-sm mt-2">Da die Zahl der Parkplätze begrenzt ist, bitten wir Sie, die öffentlichen Verkehrsmittel zu benutzen oder mit dem Fahrrad zum Sportfest zu fahren.</p>
            <p class="text-sm mt-2 font-italic">Viele Grüße<br>Der Vereinsvorstand</p>
        </div>

        <!-- Text 3 -->
        <div class="border p-4 bg-white shadow-sm">
            <h3 class="font-bold text-lg mb-2">Sehr geehrter Herr Boetel,</h3>
            <p class="text-sm">Sie hatten Schimmel in der Wohnung, deshalb kommen in der Woche vom 12. bis zum 16.4. Mitarbeiter der Firma Mahler zu Renovierungsarbeiten.</p>
            <p class="text-sm mt-2">Wir möchten Sie außerdem daran erinnern: Sie sind verpflichtet, Ihre Wohnung richtig zu heizen und zu lüften! Durch Aktivitäten wie Kochen, Duschen oder Waschen entsteht viel feuchte Luft, was Schimmelpilze in der Wohnung verursachen kann.</p>
            <p class="text-sm mt-2">Besonders in den Wintermonaten ist es deshalb wichtig, mehrmals täglich die Fenster für drei bis fünf Minuten zu öffnen, damit die feuchte Luft aus der Wohnung gelangen kann. Auch richtiges Heizen ist wichtig.</p>
            <p class="text-sm mt-2">Achten Sie darauf, dass die Raumtemperatur in Schlafzimmer und Wohnzimmer tagsüber bei mindestens 20°C und nachts bei mindestens 17°C liegt und heizen Sie entsprechend.</p>
            <p class="text-sm mt-2 font-italic">Mit freundlichen Grüßen<br>Die Hausverwaltung</p>
        </div>
      </div>
    `,
    questions: [
      { id: 31, title: "Aufgabe 31 (Text 1)", question: "Das Beratungszentrum ist umgezogen.", type: 'rf', correct: 'richtig', explanation: "Richtig! '...das Zentrum musste umziehen.'" },
      { id: 32, title: "Aufgabe 32 (Text 1)", question: "Das Beratungszentrum", options: ["bietet täglich Nachhilfe für Kinder an.", "hat Deutschkurse für Erwachsene.", "hilft, wenn man eine Wohnung sucht."], type: 'mc', correct: 2, explanation: "Richtig! '...Unterstützung bei der ... Wohnungssuche.' (Nachhilfe nur Mi-Fr, nicht täglich)." },
      { id: 33, title: "Aufgabe 33 (Text 2)", question: "An dem Sportfest dürfen Kinder und Erwachsene teilnehmen.", type: 'rf', correct: 'richtig', explanation: "Richtig! 'Das Sportprogramm für Erwachsene beginnt um 10 Uhr.'" },
      { id: 34, title: "Aufgabe 34 (Text 2)", question: "Am Samstag sollen die Eltern", options: ["besser nicht mit dem Auto kommen.", "Essen für das Fest kochen.", "ihre Kinder für die Wettbewerbe anmelden."], type: 'mc', correct: 0, explanation: "Richtig! '...bitten wir Sie, die öffentlichen Verkehrsmittel zu benutzen' (Parkplätze begrenzt)." },
      { id: 35, title: "Aufgabe 35 (Text 3)", question: "Die Heizung in der Wohnung wird repariert.", type: 'rf', correct: 'falsch', explanation: "Falsch! Mitarbeiter kommen zu 'Renovierungsarbeiten' wegen Schimmel, nicht um die Heizung zu reparieren." },
      { id: 36, title: "Aufgabe 36 (Text 3)", question: "Herr Boetel soll im Winter", options: ["nicht so oft kochen und waschen.", "nur im Schlafzimmer und Wohnzimmer heizen.", "regelmäßig die Fenster aufmachen."], type: 'mc', correct: 2, explanation: "Richtig! '...mehrmals täglich die Fenster für drei bis fünf Minuten zu öffnen'." }
    ]
  },
  {
    id: 4,
    title: "Lesen Teil 4",
    description: "Lesen Sie den Text. Entscheiden Sie, ob die Aussagen 37 bis 39 richtig oder falsch sind.",
    text: `
      <div class="bg-gray-50 border border-gray-300 p-6 rounded shadow-sm font-sans">
        <h3 class="font-bold text-xl mb-4 text-center">Verkehrsverbund Neustadt - Allgemeine Mitnahmeregelungen</h3>
        
        <h4 class="font-bold mt-4">Gültigkeit</h4>
        <p>Die Fahrgäste erkennen mit dem Betreten der Fahrzeuge die Regelungen, Beförderungsbedingungen und Tarifbestimmungen des Verkehrsverbunds an.</p>
        
        <h4 class="font-bold mt-4">Kinder</h4>
        <p>Kinder unter 6 Jahren dürfen nur mit einer Aufsichtsperson reisen. Sie können von der Mitfahrt ausgeschlossen werden, wenn sie nicht auf der ganzen Fahrstrecke von Personen begleitet werden, die mindestens 6 Jahre alt sind. Kinder unter 6 Jahren können Busse und Bahnen des Regionalverkehrs kostenlos nutzen. Auch die Mitnahme von Kinderwagen ist kostenlos. Kinder und Jugendliche zwischen 6 und 14 Jahren erhalten Einzel- und Tageskarten zum ermäßigten Preis.</p>
        
        <h4 class="font-bold mt-4">Gepäck</h4>
        <p>Sie dürfen kleines Handgepäck immer mitnehmen. Größere Gepäckstücke oder Gegenstände dürfen Sie nur mitnehmen, wenn sie die Sicherheit des Betriebes und der anderen Fahrgäste nicht gefährden. Bitte stellen oder legen Sie Gepäckstücke nicht auf die Sitze.</p>

        <h4 class="font-bold mt-4">Fahrräder</h4>
        <p>Das Mitnehmen von Fahrrädern ist in den Bahnen des Regionalverkehrs erlaubt. Wenn es zu viele Fahrgäste gibt oder der Platz für Kinderwagen oder Hilfsmittel von Personen mit körperlicher Behinderung gebraucht wird, kann das Betriebspersonal den Transport von Fahrrädern verbieten. Für die Mitnahme von Fahrrädern ist eine Fahrkarte erforderlich.</p>
        
        <h4 class="font-bold mt-4">Tiere</h4>
        <p>Katzen und andere kleinere Haustiere dürfen Sie mitnehmen, wenn sie ungefährlich und in einem geschlossenen Transportbehälter (z.B. Tierboxen) sind. Diese Tiere fahren kostenlos. Hunde müssen angeleint sein und einen Maulkorb tragen, außerdem brauchen sie eine Fahrkarte (ermäßigter Preis). Ein Anspruch auf die Beförderung von Tieren besteht nicht.</p>
      </div>
    `,
    questions: [
      { id: 37, title: "Aufgabe 37", question: "Kinder über 6 Jahre dürfen allein mit der Bahn fahren.", type: 'rf', correct: 'richtig', explanation: "Richtig! 'Kinder unter 6 Jahren dürfen nur mit einer Aufsichtsperson reisen.' (Impliziert: Über 6 dürfen allein reisen, bzw. Begleiter müssen mind. 6 Jahre alt sein)." },
      { id: 38, title: "Aufgabe 38", question: "Das Personal kann den Fahrgästen verbieten, ein Fahrrad mitzunehmen.", type: 'rf', correct: 'richtig', explanation: "Richtig! '...kann das Betriebspersonal den Transport von Fahrrädern verbieten.'" },
      { id: 39, title: "Aufgabe 39", question: "Hunde dürfen umsonst mitfahren.", type: 'rf', correct: 'falsch', explanation: "Falsch! '...außerdem brauchen sie eine Fahrkarte (ermäßigter Preis).'" }
    ]
  },
  {
    id: 5,
    title: "Lesen Teil 5",
    description: "Lesen Sie den Text und schließen Sie die Lücken 40 bis 45. Welche Lösung (a, b oder c) passt am besten?",
    text: `
      <div class="border p-6 bg-white shadow-lg max-w-2xl mx-auto font-serif leading-loose relative">
        <div class="absolute top-4 right-4 text-xs text-gray-500">Bernau, den 20.1.20...</div>
        <div class="mb-4 text-sm text-gray-600">
          Modehaus Sonne<br>
          z. Hd. Sonja Keller<br>
          Köpenicker Str. 131<br>
          10853 Bernau
        </div>
        
        <p class="font-bold mb-4">Ihre Anzeige in der Tageszeitung vom 16.1.: Bewerbung als Verkäuferin</p>
        
        <p>Sehr (0) <span class="border-b border-black px-2">geehrte</span> Frau Keller,</p>
        
        <p>ich habe <strong>(40)</strong> __________ Stellenanzeige in der Tageszeitung gelesen. Da ich eine neue Stelle in diesem Bereich suche, möchte ich mich <strong>(41)</strong> __________ Verkäuferin bewerben.</p>
        <p>Ich habe bereits viel Erfahrung mit der Arbeit im Verkauf, <strong>(42)</strong> __________ ich in meinem Heimatland über fünf Jahre in einem Schuhgeschäft gearbeitet habe.</p>
        <p>Ich spreche schon <strong>(43)</strong> __________ Deutsch. Im Moment mache ich aber auch noch einen Berufssprachkurs, <strong>(44)</strong> __________ meine Deutschkenntnisse zu verbessern.</p>
        <p>Gerne möchte ich mich Ihnen persönlich vorstellen und das Geschäft kennenlernen.</p>
        <p>Ich würde mich sehr freuen, <strong>(45)</strong> __________ Sie mich zu einem Vorstellungsgespräch einladen.</p>
        
        <p class="mt-6">Mit freundlichen Grüßen</p>
        <p>Tatjana Machno</p>
      </div>
    `,
    questions: [
      { id: 40, title: "Aufgabe 40", question: "Lücke 40", options: ["deine", "Ihre", "unsere"], type: 'mc', correct: 1, explanation: "Richtig! 'Ihre Stellenanzeige' (Höflichkeitsform)." },
      { id: 41, title: "Aufgabe 41", question: "Lücke 41", options: ["als", "bei", "um"], type: 'mc', correct: 0, explanation: "Richtig! 'mich als Verkäuferin bewerben'." },
      { id: 42, title: "Aufgabe 42", question: "Lücke 42", options: ["da", "denn", "deshalb"], type: 'mc', correct: 0, explanation: "Richtig! 'da ich ... gearbeitet habe' (Nebensatz mit Verb am Ende)." },
      { id: 43, title: "Aufgabe 43", question: "Lücke 43", options: ["besser", "gut", "mehr"], type: 'mc', correct: 1, explanation: "Richtig! 'Ich spreche schon gut Deutsch'." },
      { id: 44, title: "Aufgabe 44", question: "Lücke 44", options: ["damit", "um", "weil"], type: 'mc', correct: 1, explanation: "Richtig! 'um ... zu verbessern' (Infinitiv mit zu)." },
      { id: 45, title: "Aufgabe 45", question: "Lücke 45", options: ["als", "dass", "wenn"], type: 'mc', correct: 2, explanation: "Richtig! 'wenn Sie mich ... einladen' (Konditional)." }
    ]
  }
];

// --- SCHREIBEN DATA ---
export const WRITING_DATA: WritingTask[] = [
  {
    id: 'A',
    title: "Aufgabe A: Lärm im Mietshaus",
    scenario: "Sie wohnen in einem Mietshaus. Ihre Nachbarn sind abends sehr laut. Sie haben schon mit den Nachbarn gesprochen, aber es hat sich nichts geändert. Schreiben Sie an Ihren Vermieter Pawel Sterner.",
    bulletPoints: [
      "Was das Problem ist",
      "Warum Sie das stört",
      "Seit wann es das Problem gibt",
      "Was Ihr Vermieter machen soll"
    ],
    keywords: ["Lärm", "Nachbarn", "laut", "schlafen", "beschweren", "Hilfe"],
    sampleSolution: `Sehr geehrter Herr Sterner,

ich schreibe Ihnen, weil es in unserem Mietshaus leider ein Problem gibt. 

Meine Nachbarn in der Wohnung über mir sind fast jeden Abend sehr laut. Sie hören laute Musik, streiten sich oft oder feiern Partys bis spät in die Nacht. Das Problem besteht nun schon seit etwa drei Wochen.

Der Lärm stört mich sehr, weil ich morgens früh aufstehen und zur Arbeit gehen muss. Ich finde oft keine Ruhe und kann nicht schlafen. Ich habe letzte Woche schon freundlich mit den Nachbarn gesprochen und sie gebeten, leiser zu sein. Leider hat sich die Situation nicht geändert. Es ist immer noch genauso laut wie vorher.

Deshalb bitte ich Sie dringend um Ihre Hilfe. Könnten Sie bitte mit den Mietern sprechen und sie auf die Hausordnung hinweisen? Ich hoffe, dass wir eine schnelle Lösung finden, damit ich wieder ruhig wohnen kann.

Vielen Dank im Voraus.

Mit freundlichen Grüßen
[Ihr Vorname] [Ihr Nachname]`
  },
  {
    id: 'B',
    title: "Aufgabe B: Beschwerde über Buchbestellung",
    scenario: "Sie haben Bücher für Ihren Deutschkurs bestellt. Sie warten seit Tagen auf die Lieferung. Schreiben Sie eine E-Mail an das Büchergeschäft.",
    bulletPoints: [
      "Was und wann Sie bestellt haben",
      "Warum Sie die Bücher dringend brauchen",
      "Was Sie möchten",
      "Was Sie tun, wenn nichts passiert"
    ],
    keywords: ["Bestellung", "Lieferung", "Verspätung", "Deutschkurs", "stornieren"],
    sampleSolution: `Sehr geehrte Damen und Herren,

ich habe vor über einer Woche, am 10. Mai, bei Ihnen im Online-Shop zwei Bücher für meinen Deutschkurs bestellt (Bestellnummer: 12345).

Auf Ihrer Webseite stand, dass die Lieferzeit nur 2-3 Tage beträgt. Bis heute habe ich aber leider kein Paket erhalten. Das ist sehr ärgerlich für mich, weil mein Deutschkurs schon übermorgen beginnt und ich die Bücher dafür dringend brauche. Ohne die Bücher kann ich nicht im Unterricht mitarbeiten.

Könnten Sie bitte sofort prüfen, wo mein Paket ist? Ich möchte Sie bitten, mir die Bücher so schnell wie möglich zuzuschicken.

Wenn die Bücher nicht bis spätestens morgen bei mir sind, möchte ich die Bestellung stornieren und mein Geld zurückhaben. Ich werde die Bücher dann in einem anderen Geschäft kaufen.

Bitte geben Sie mir kurz Bescheid.

Mit freundlichen Grüßen
[Ihr Vorname] [Ihr Nachname]`
  }
];

// --- SPRECHEN DATA ---
export const SPEAKING_DATA: SpeakingPart[] = [
  {
    id: 1,
    title: "Teil 1: Sich vorstellen",
    description: "Stellen Sie sich bitte vor. Sagen Sie etwas zu folgenden Punkten. Die Prüfer werden Ihnen danach noch Fragen stellen.",
    content: (
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Erzählen Sie etwas über sich:</h4>
        <ul className="list-disc pl-5 space-y-3 font-medium text-gray-700">
          <li><strong>Name:</strong> Wie heißen Sie?</li>
          <li><strong>Geburtsort / Herkunft:</strong> Woher kommen Sie?</li>
          <li><strong>Wohnort:</strong> Wo wohnen Sie jetzt?</li>
          <li><strong>Arbeit / Beruf:</strong> Was sind Sie von Beruf?</li>
          <li><strong>Familie:</strong> Haben Sie Familie?</li>
          <li><strong>Sprachen:</strong> Welche Sprachen sprechen Sie?</li>
        </ul>
      </div>
    ),
    examinerQuestions: [
      "Wie lange leben Sie schon hier?",
      "Was machen Sie in Ihrer Freizeit?",
      "Erzählen Sie mir ein bisschen mehr über Ihren Beruf."
    ],
    redemittel: [
      {
        category: "Name & Herkunft",
        phrases: [
          "Mein Name ist... / Ich heiße...",
          "Ich komme aus... / Meine Heimat ist...",
          "Ich bin in ... geboren."
        ]
      },
      {
        category: "Wohnen & Familie",
        phrases: [
          "Ich wohne in... / Seit ... Jahren lebe ich in...",
          "Ich bin verheiratet und habe zwei Kinder.",
          "Meine Familie lebt in..."
        ]
      },
      {
        category: "Beruf & Sprachen",
        phrases: [
          "Ich bin von Beruf... / Ich arbeite als...",
          "Meine Muttersprache ist... / Ich spreche auch...",
          "Im Moment lerne ich Deutsch."
        ]
      }
    ],
    sampleSolution: "Mein Name ist Maria Sanchez. Ursprünglich komme ich aus Spanien, genauer gesagt aus der Nähe von Madrid, aber mittlerweile ist Hamburg mein Zuhause. Seit drei Jahren lebe ich nun schon hier in Deutschland. Von Beruf bin ich eigentlich gelernte Krankenschwester, jedoch besuche ich zurzeit diesen Deutschkurs, um meine Sprachkenntnisse für die Anerkennung meines Abschlusses zu verbessern. Bald möchte ich nämlich wieder in meinem alten Beruf im Krankenhaus arbeiten. Verheiratet bin ich glücklicherweise auch und wir haben zwei wunderbare Kinder, einen Sohn und eine Tochter. Meine Muttersprache ist Spanisch; allerdings spreche ich auch ein bisschen Englisch und arbeite täglich fleißig an meinem Deutsch."
  },
  {
    id: 2,
    title: "Teil 2: Über Erfahrungen sprechen",
    description: "Sie sehen zwei Fotos zum Thema Einkaufen. Ein Foto zeigt Online-Shopping, das andere Einkaufen im Geschäft. Welches Foto wählen Sie? Erzählen Sie, was Sie sehen und was Ihre Meinung ist.",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
             <div className="relative h-64 w-full bg-gray-200 rounded-lg overflow-hidden mb-3 border border-gray-300 shadow-sm group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                  alt="Foto A: Online Shopping" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-blue-900 text-white px-3 py-1 text-sm font-bold opacity-90">Teilnehmer/in A</div>
             </div>
             <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <strong className="text-blue-900 block mb-1">Thema: Online einkaufen</strong>
                <p className="text-sm text-gray-600">Eine Person sitzt am Laptop. Auf dem Tisch liegen Pakete. Sie kauft bequem von zu Hause aus ein.</p>
             </div>
          </div>

          <div className="flex flex-col">
             <div className="relative h-64 w-full bg-gray-200 rounded-lg overflow-hidden mb-3 border border-gray-300 shadow-sm group">
                <img 
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop" 
                  alt="Foto B: Kleidung kaufen" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute bottom-0 left-0 bg-blue-900 text-white px-3 py-1 text-sm font-bold opacity-90">Teilnehmer/in B</div>
             </div>
             <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <strong className="text-blue-900 block mb-1">Thema: Im Geschäft einkaufen</strong>
                <p className="text-sm text-gray-600">Leute stehen in einem Bekleidungsgeschäft. Sie schauen sich Pullover an und können den Stoff fühlen.</p>
             </div>
          </div>

          <div className="col-span-1 md:col-span-2 mt-4 bg-blue-50 p-5 rounded-lg border border-blue-200 text-blue-900 shadow-sm">
             <strong className="block text-lg mb-2 border-b border-blue-200 pb-2">Aufgabe: Vergleichen und Meinung äußern</strong>
             <p className="mb-2 font-medium">Kaufen Sie Kleidung lieber im Geschäft oder lieber im Internet?</p>
             <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Welche Vor- oder Nachteile hat es, im Internet einzukaufen?</li>
                <li>Welche Erfahrungen haben Sie gemacht?</li>
                <li>Wie ist die Situation in Ihrem Heimatland?</li>
             </ul>
          </div>
      </div>
    ),
    examinerQuestions: [
      "Kaufen Sie selbst oft im Internet ein?",
      "Was haben Sie zuletzt gekauft?",
      "Finden Sie es wichtig, die Kleidung vorher anzuprobieren?",
      "Warum kaufen heute so viele Menschen online?"
    ],
    redemittel: [
      {
        category: "Bildbeschreibung",
        phrases: [
          "Auf dem Foto sehe ich...",
          "Das Bild zeigt eine Situation...",
          "Die Person auf dem Bild macht gerade..."
        ]
      },
      {
        category: "Erfahrungen berichten",
        phrases: [
          "Ich persönlich kaufe lieber...",
          "Ich habe gute/schlechte Erfahrungen mit ... gemacht.",
          "Meistens gehe ich ins Geschäft, weil..."
        ]
      },
      {
        category: "Vor- und Nachteile",
        phrases: [
          "Ein Vorteil ist, dass es bequem ist.",
          "Nachteilig ist, dass man die Sachen nicht anprobieren kann.",
          "Im Internet ist die Auswahl größer."
        ]
      }
    ],
    sampleSolution: "Ich habe mich für das Foto B entschieden. Auf dem Bild sieht man zwei Frauen in einem Bekleidungsgeschäft. Sie stehen vor einem Kleiderständer mit vielen bunten Sachen. Eine Frau hält einen blauen Pullover in der Hand und zeigt ihn der anderen. Sie sehen fröhlich aus, als ob ihnen das Einkaufen Spaß macht.\n\nIch persönlich kaufe Kleidung auch lieber im Geschäft. Für mich ist es sehr wichtig, den Stoff zu fühlen und die Sachen direkt anzuprobieren. Oft passen die Größen nicht richtig, und wenn ich im Internet bestelle, muss ich die Pakete dann wieder zurückschicken. Das finde ich anstrengend und schlecht für die Umwelt.\n\nEin Vorteil vom Geschäft ist auch, dass man sofort sieht, ob die Farbe einem steht. Außerdem kann man mit einer Freundin gehen und sich beraten, das macht mehr Spaß als alleine vor dem Computer zu sitzen. Natürlich ist Online-Shopping praktisch, wenn man wenig Zeit hat oder wenn die Geschäfte geschlossen sind, aber ich gehe lieber in die Stadt."
  },
  {
    id: 3,
    title: "Teil 3: Gemeinsam etwas planen",
    description: "Situation: Eine gemeinsame Freundin von Ihnen ist in eine neue Stadt gezogen. Sie möchten die Freundin besuchen und die Stadt besichtigen. Planen Sie die Reise mit Ihrem Partner.",
    content: (
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-sm">
        <strong className="block mb-4 text-yellow-900 text-lg border-b border-yellow-200 pb-2">Aufgabe: Planen Sie die Reise</strong>
        <p className="mb-4 text-yellow-800">Hier haben Sie einige Notizen:</p>
        <ul className="list-disc pl-5 space-y-2 text-yellow-900 font-medium">
          <li><strong>Wie fahren?</strong> (Bahn, Auto ...)</li>
          <li><strong>Wann und wie lange?</strong> (ein Tag, Wochenende ...)</li>
          <li><strong>Wo übernachten?</strong> (Freundin, Hotel ...)</li>
          <li><strong>Was machen?</strong> (Stadt besichtigen, Essen gehen...)</li>
          <li><strong>Geschenk mitbringen?</strong> (was, wo kaufen ...)</li>
        </ul>
      </div>
    ),
    examinerQuestions: [
      "Reisen Sie gern?",
      "Was finden Sie besser: Hotel oder bei Freunden schlafen?",
      "Welche Städte in Deutschland haben Sie schon besucht?"
    ],
    redemittel: [
      {
        category: "Vorschläge",
        phrases: [
          "Ich schlage vor, wir fahren mit dem Zug.",
          "Wollen wir am Samstag fahren?",
          "Wir könnten im Hotel übernachten."
        ]
      },
      {
        category: "Einigung",
        phrases: [
          "Ja, das ist eine tolle Idee.",
          "Das machen wir so.",
          "Gut, dann kaufen wir die Tickets morgen."
        ]
      },
      {
        category: "Zweifel/Ablehnung",
        phrases: [
          "Das finde ich zu teuer.",
          "Vielleicht ist es besser, wenn wir...",
          "Ich glaube, das Auto ist praktischer."
        ]
      }
    ],
    sampleSolution: "A: Hallo! Hast du schon gehört? Maria ist doch nach Berlin umgezogen. Wollen wir sie nicht mal besuchen?\nB: Oh ja, das ist eine super Idee! Ich war noch nie in Berlin. Wann hast du denn Zeit?\nA: Ich habe nächstes Wochenende frei. Also am Samstag und Sonntag. Passt dir das?\nB: Ja, das passt mir gut. Wollen wir dann das ganze Wochenende bleiben? Berlin ist ja sehr groß, für einen Tag lohnt sich das nicht.\nA: Stimmt. Dann fahren wir Samstagmorgen hin und Sonntagabend zurück. Wie wollen wir fahren? Mit dem Auto oder mit der Bahn?\nB: Ich glaube, der Zug ist entspannter. Mit dem Auto gibt es sicher Stau und Parkplätze in Berlin sind teuer. Wenn wir die Tickets heute buchen, ist es bestimmt nicht so teuer.\nA: Okay, einverstanden. Und wo schlafen wir? Können wir bei Maria übernachten?\nB: Ich weiß nicht, ob sie genug Platz hat. Ihre Wohnung ist sicher noch voll mit Kisten. Lass uns lieber ein günstiges Hotel oder eine Jugendherberge suchen. Dann stören wir sie nicht.\nA: Gute Idee. Ich schaue mal im Internet nach Angeboten. Und was wollen wir machen? Natürlich Maria treffen, aber wir können uns auch die Stadt ansehen.\nB: Ja, wir können das Brandenburger Tor anschauen und vielleicht abends alle zusammen essen gehen.\nA: Perfekt. Sollen wir ihr ein Geschenk zum Einzug mitbringen?\nB: Ja, klar. Wie wäre es mit einer schönen Pflanze für die neue Wohnung? Oder Brot und Salz, das ist doch Tradition.\nA: Brot und Salz finde ich lustig. Und vielleicht noch eine Flasche Wein dazu?\nB: Super. Ich besorge den Wein und du das Brot? \nA: Mach ich. Ich freue mich schon!"
  }
];
